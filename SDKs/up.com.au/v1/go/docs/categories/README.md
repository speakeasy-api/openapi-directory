# Categories

## Overview

Categories enable understanding where your money goes by driving
powerful insights in Up. All categories in Up are pre-defined
and are automatically assigned to new purchases in most cases. A
parent-child relationship is used to represent categories,
however parent categories cannot be directly assigned to
transactions.


### Available Operations

* [GetCategories](#getcategories) - List categories
* [GetCategoriesID](#getcategoriesid) - Retrieve category
* [PatchTransactionsTransactionIDRelationshipsCategory](#patchtransactionstransactionidrelationshipscategory) - Categorize transaction

## GetCategories

Retrieve a list of all categories and their ancestry. The returned list
is not paginated.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.GetCategories(ctx, operations.GetCategoriesRequest{
        FilterParent: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCategoriesResponse != nil {
        // handle response
    }
}
```

## GetCategoriesID

Retrieve a specific category by providing its unique identifier.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.GetCategoriesID(ctx, operations.GetCategoriesIDRequest{
        ID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoryResponse != nil {
        // handle response
    }
}
```

## PatchTransactionsTransactionIDRelationshipsCategory

Updates the category associated with a transaction. Only transactions
for which `isCategorizable` is set to true support this operation. The
`id` is taken from the list exposed on `/categories` and cannot be one of
the top-level (parent) categories. To de-categorize a transaction, set
the entire `data` key to `null`. An HTTP `204` is returned on success.
The associated category, along with its request URL is also exposed via
the `category` relationship on the transaction resource returned from
`/transactions/{id}`.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.PatchTransactionsTransactionIDRelationshipsCategory(ctx, operations.PatchTransactionsTransactionIDRelationshipsCategoryRequest{
        UpdateTransactionCategoryRequest: &shared.UpdateTransactionCategoryRequest{
            Data: shared.UpdateTransactionCategoryRequestData{
                ID: "5929396f-ea75-496e-b10f-aaa2352c5955",
                Type: "excepturi",
            },
        },
        TransactionID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
