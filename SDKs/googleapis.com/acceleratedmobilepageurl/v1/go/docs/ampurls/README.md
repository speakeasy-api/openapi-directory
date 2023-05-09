# AmpUrls

### Available Operations

* [AcceleratedmobilepageurlAmpUrlsBatchGet](#acceleratedmobilepageurlampurlsbatchget) - Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

## AcceleratedmobilepageurlAmpUrlsBatchGet

Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

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
    res, err := s.AmpUrls.AcceleratedmobilepageurlAmpUrlsBatchGet(ctx, operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchGetAmpUrlsRequest: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: shared.BatchGetAmpUrlsRequestLookupStrategyEnumInIndexDoc.ToPointer(),
            Urls: []string{
                "suscipit",
                "molestiae",
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("iusto"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAmpUrlsResponse != nil {
        // handle response
    }
}
```
