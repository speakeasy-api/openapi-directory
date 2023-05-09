# Tags

## Overview

Tags are custom labels that can be associated with transactions
on Up. Within the Up application, tags provide additional insight
into spending. For example, you could have a "Take Away" tag that
you apply to purchases from food delivery services. The Up API
allows you to manage the tags associated with transactions. Each
transaction may have up to 6 tags.

Tags are identified by their labels, which are unique strings,
so the tag "Holiday" has also the `id` `"Holiday"`.


### Available Operations

* [DeleteTransactionsTransactionIDRelationshipsTags](#deletetransactionstransactionidrelationshipstags) - Remove tags from transaction
* [GetTags](#gettags) - List tags
* [PostTransactionsTransactionIDRelationshipsTags](#posttransactionstransactionidrelationshipstags) - Add tags to transaction

## DeleteTransactionsTransactionIDRelationshipsTags

Disassociates one or more tags from a specific transaction. Tags that are
not associated are silently ignored. An HTTP `204` is returned on
success. The associated tags, along with this request URL, are also
exposed via the `tags` relationship on the transaction resource returned
from `/transactions/{id}`.


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
    res, err := s.Tags.DeleteTransactionsTransactionIDRelationshipsTags(ctx, operations.DeleteTransactionsTransactionIDRelationshipsTagsRequest{
        UpdateTransactionTagsRequest: &shared.UpdateTransactionTagsRequest{
            Data: []shared.TagInputResourceIdentifier{
                shared.TagInputResourceIdentifier{
                    ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
                    Type: "quasi",
                },
                shared.TagInputResourceIdentifier{
                    ID: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
                    Type: "quidem",
                },
            },
        },
        TransactionID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTags

Retrieve a list of all tags currently in use. The returned list is
[paginated](#pagination) and can be scrolled by following the `next`
and `prev` links where present. Results are ordered lexicographically.
The `transactions` relationship for each tag exposes a link
to get the transactions with the given tag.


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
    res, err := s.Tags.GetTags(ctx, operations.GetTagsRequest{
        PageSize: sdk.Int64(566602),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponse != nil {
        // handle response
    }
}
```

## PostTransactionsTransactionIDRelationshipsTags

Associates one or more tags with a specific transaction. No more than 6
tags may be present on any single transaction. Duplicate tags are
silently ignored. An HTTP `204` is returned on success. The associated
tags, along with this request URL, are also exposed via the `tags`
relationship on the transaction resource returned from
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
    res, err := s.Tags.PostTransactionsTransactionIDRelationshipsTags(ctx, operations.PostTransactionsTransactionIDRelationshipsTagsRequest{
        UpdateTransactionTagsRequest: &shared.UpdateTransactionTagsRequest{
            Data: []shared.TagInputResourceIdentifier{
                shared.TagInputResourceIdentifier{
                    ID: "488e1e91-e450-4ad2-abd4-4269802d502a",
                    Type: "excepturi",
                },
                shared.TagInputResourceIdentifier{
                    ID: "4bb4f63c-969e-49a3-afa7-7dfb14cd66ae",
                    Type: "non",
                },
                shared.TagInputResourceIdentifier{
                    ID: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
                    Type: "architecto",
                },
                shared.TagInputResourceIdentifier{
                    ID: "41959890-afa5-463e-a516-fe4c8b711e5b",
                    Type: "nihil",
                },
            },
        },
        TransactionID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
