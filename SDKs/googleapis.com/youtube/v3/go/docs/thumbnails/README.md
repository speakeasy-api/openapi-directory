# Thumbnails

### Available Operations

* [YoutubeThumbnailsSet](#youtubethumbnailsset) - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

## YoutubeThumbnailsSet

As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

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
    res, err := s.Thumbnails.YoutubeThumbnailsSet(ctx, operations.YoutubeThumbnailsSetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("ut"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("voluptas"),
        OnBehalfOfContentOwner: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("facere"),
        VideoID: "dignissimos",
    }, operations.YoutubeThumbnailsSetSecurity{
        Option1: &operations.YoutubeThumbnailsSetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThumbnailSetResponse != nil {
        // handle response
    }
}
```
