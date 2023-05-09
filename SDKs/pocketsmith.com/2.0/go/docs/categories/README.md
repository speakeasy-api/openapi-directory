# Categories

### Available Operations

* [DeleteCategoriesID](#deletecategoriesid) - Delete category
* [GetCategoriesID](#getcategoriesid) - Get category
* [GetUsersIDCategories](#getusersidcategories) - List categories in user
* [PostUsersIDCategories](#postusersidcategories) - Create category in user
* [PutCategoriesID](#putcategoriesid) - Update category

## DeleteCategoriesID

Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.DeleteCategoriesID(ctx, operations.DeleteCategoriesIDRequest{
        ID: 616934,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCategoriesID

Gets a particular category by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.GetCategoriesID(ctx, operations.GetCategoriesIDRequest{
        ID: 386489,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```

## GetUsersIDCategories

Lists all categories belonging to a user by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.GetUsersIDCategories(ctx, operations.GetUsersIDCategoriesRequest{
        ID: 943749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Categories != nil {
        // handle response
    }
}
```

## PostUsersIDCategories

Creates a category belonging to the user by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.PostUsersIDCategories(ctx, operations.PostUsersIDCategoriesRequest{
        RequestBody: &operations.PostUsersIDCategoriesRequestBody{
            Colour: sdk.String("#e0e7ff"),
            IsBill: sdk.Bool(true),
            IsTransfer: sdk.Bool(false),
            ParentID: sdk.Int64(42),
            RefundBehaviour: operations.PostUsersIDCategoriesRequestBodyRefundBehaviourEnumCreditsAreRefunds.ToPointer(),
            RollUp: sdk.Bool(false),
            Title: "Food",
        },
        ID: 902599,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```

## PutCategoriesID

Updates a category by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Categories.PutCategoriesID(ctx, operations.PutCategoriesIDRequest{
        RequestBody: &operations.PutCategoriesIDRequestBody{
            Colour: sdk.String("#e0e7ff"),
            IsBill: sdk.Bool(true),
            IsTransfer: sdk.Bool(false),
            ParentID: sdk.Int64(42),
            RefundBehaviour: operations.PutCategoriesIDRequestBodyRefundBehaviourEnumCreditsAreRefunds.ToPointer(),
            RollUp: sdk.Bool(false),
            Title: sdk.String("Food"),
        },
        ID: 681820,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Category != nil {
        // handle response
    }
}
```
