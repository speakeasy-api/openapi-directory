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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("numquam"),
        ID: "a4317692-ea48-4673-9522-b828a9030660",
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugit",
        ProjectID: "quaerat",
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("dignissimos"),
        UploadProtocol: sdk.String("sint"),
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
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("ex"),
        Ids: []string{
            "eligendi",
            "magni",
        },
        Key: sdk.String("libero"),
        MaxResults: sdk.Int64(194114),
        OauthToken: sdk.String("culpa"),
        PageToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "odit",
        ProjectID: "optio",
        QuotaUser: sdk.String("labore"),
        SearchString: sdk.String("voluptatum"),
        SiteID: []string{
            "mollitia",
            "facere",
            "debitis",
        },
        SortField: operations.DfareportingOrdersListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingOrdersListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("autem"),
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
