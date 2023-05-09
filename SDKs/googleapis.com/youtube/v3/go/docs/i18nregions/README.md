# I18nRegions

### Available Operations

* [YoutubeI18nRegionsList](#youtubei18nregionslist) - Retrieves a list of resources, possibly filtered.

## YoutubeI18nRegionsList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.I18nRegions.YoutubeI18nRegionsList(ctx, operations.YoutubeI18nRegionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("nulla"),
        Hl: sdk.String("deserunt"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("nemo"),
        Part: []string{
            "est",
            "quis",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.YoutubeI18nRegionsListSecurity{
        Option1: &operations.YoutubeI18nRegionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.I18nRegionListResponse != nil {
        // handle response
    }
}
```
