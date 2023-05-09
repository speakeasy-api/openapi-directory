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
        AccessToken: sdk.String("vitae"),
        AdvertiserID: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        CustomListID: "molestiae",
        Fields: sdk.String("nam"),
        Key: sdk.String("aperiam"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("at"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quam"),
        AdvertiserID: sdk.String("deleniti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("eos"),
        Filter: sdk.String("labore"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("blanditiis"),
        OrderBy: sdk.String("iste"),
        PageSize: sdk.Int64(879418),
        PageToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("blanditiis"),
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
