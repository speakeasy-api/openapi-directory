# Media

### Available Operations

* [ChatMediaDownload](#chatmediadownload) - Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.

## ChatMediaDownload

Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.

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
    res, err := s.Media.ChatMediaDownload(ctx, operations.ChatMediaDownloadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        ResourceName: "molestiae",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ChatMediaDownloadSecurity{
        Option1: &operations.ChatMediaDownloadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```
