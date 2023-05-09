# CustomLists

### Available Operations

* [DisplayvideoCustomListsGet](#displayvideocustomlistsget) - Gets a custom list.
* [DisplayvideoCustomListsList](#displayvideocustomlistslist) - Lists custom lists. The order is defined by the order_by parameter.

## DisplayvideoCustomListsGet

Gets a custom list.

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
    res, err := s.CustomLists.DisplayvideoCustomListsGet(ctx, operations.DisplayvideoCustomListsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        AdvertiserID: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        CustomListID: "odio",
        Fields: sdk.String("commodi"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.DisplayvideoCustomListsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomList != nil {
        // handle response
    }
}
```

## DisplayvideoCustomListsList

Lists custom lists. The order is defined by the order_by parameter.

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
    res, err := s.CustomLists.DisplayvideoCustomListsList(ctx, operations.DisplayvideoCustomListsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nulla"),
        AdvertiserID: sdk.String("magni"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("a"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("ut"),
        OrderBy: sdk.String("facere"),
        PageSize: sdk.Int64(377269),
        PageToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("facere"),
    }, operations.DisplayvideoCustomListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomListsResponse != nil {
        // handle response
    }
}
```
