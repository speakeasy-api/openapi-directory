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
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("amet"),
        ID: "688cca36-3272-4760-a966-e97e05410334",
        Key: sdk.String("esse"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "molestiae",
        ProjectID: "corrupti",
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("magnam"),
        Ids: []string{
            "asperiores",
            "animi",
        },
        Key: sdk.String("soluta"),
        MaxResults: sdk.Int64(569850),
        OauthToken: sdk.String("voluptates"),
        PageToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perspiciatis",
        ProjectID: "laborum",
        QuotaUser: sdk.String("incidunt"),
        SearchString: sdk.String("fuga"),
        SiteID: []string{
            "ipsum",
            "amet",
            "nisi",
            "aliquid",
        },
        SortField: operations.DfareportingOrdersListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingOrdersListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("deserunt"),
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
