# Orders

### Available Operations

* [DfareportingOrdersGet](#dfareportingordersget) - Gets one order by ID.
* [DfareportingOrdersList](#dfareportingorderslist) - Retrieves a list of orders, possibly filtered. This method supports paging.

## DfareportingOrdersGet

Gets one order by ID.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.DfareportingOrdersGet(ctx, operations.DfareportingOrdersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("facere"),
        ID: "f9d0fc28-2c66-46af-bc3f-5589bea5d264",
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "beatae",
        ProjectID: "necessitatibus",
        QuotaUser: sdk.String("ratione"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.DfareportingOrdersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## DfareportingOrdersList

Retrieves a list of orders, possibly filtered. This method supports paging.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.DfareportingOrdersList(ctx, operations.DfareportingOrdersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("consequuntur"),
        Ids: []string{
            "veniam",
            "ab",
            "neque",
            "asperiores",
        },
        Key: sdk.String("autem"),
        MaxResults: sdk.Int64(862590),
        OauthToken: sdk.String("excepturi"),
        PageToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        ProjectID: "similique",
        QuotaUser: sdk.String("possimus"),
        SearchString: sdk.String("dolor"),
        SiteID: []string{
            "quod",
            "dolorem",
        },
        SortField: operations.DfareportingOrdersListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingOrdersListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.DfareportingOrdersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrdersListResponse != nil {
        // handle response
    }
}
```
