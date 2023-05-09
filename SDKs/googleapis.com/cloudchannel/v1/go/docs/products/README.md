# Products

### Available Operations

* [CloudchannelProductsList](#cloudchannelproductslist) - Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [CloudchannelProductsSkusList](#cloudchannelproductsskuslist) - Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

## CloudchannelProductsList

Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

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
    res, err := s.Products.CloudchannelProductsList(ctx, operations.CloudchannelProductsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Account: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("sed"),
        Key: sdk.String("sit"),
        LanguageCode: sdk.String("vel"),
        OauthToken: sdk.String("nostrum"),
        PageSize: sdk.Int64(906172),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.CloudchannelProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListProductsResponse != nil {
        // handle response
    }
}
```

## CloudchannelProductsSkusList

Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

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
    res, err := s.Products.CloudchannelProductsSkusList(ctx, operations.CloudchannelProductsSkusListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("harum"),
        Account: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("labore"),
        Key: sdk.String("quidem"),
        LanguageCode: sdk.String("atque"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(724148),
        PageToken: sdk.String("tenetur"),
        Parent: "laboriosam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.CloudchannelProductsSkusListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudChannelV1ListSkusResponse != nil {
        // handle response
    }
}
```
