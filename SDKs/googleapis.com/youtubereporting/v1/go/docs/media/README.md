# Media

### Available Operations

* [YoutubereportingMediaDownload](#youtubereportingmediadownload) - Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

## YoutubereportingMediaDownload

Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

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
    res, err := s.Media.YoutubereportingMediaDownload(ctx, operations.YoutubereportingMediaDownloadRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        ResourceName: "repudiandae",
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.YoutubereportingMediaDownloadSecurity{
        Option1: &operations.YoutubereportingMediaDownloadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GdataMedia != nil {
        // handle response
    }
}
```
