# Watermarks

### Available Operations

* [YoutubeWatermarksSet](#youtubewatermarksset) - Allows upload of watermark image and setting it for a channel.
* [YoutubeWatermarksUnset](#youtubewatermarksunset) - Allows removal of channel watermark.

## YoutubeWatermarksSet

Allows upload of watermark image and setting it for a channel.

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
    res, err := s.Watermarks.YoutubeWatermarksSet(ctx, operations.YoutubeWatermarksSetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("et"),
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        ChannelID: "maiores",
        Fields: sdk.String("quidem"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("culpa"),
        OnBehalfOfContentOwner: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.YoutubeWatermarksSetSecurity{
        Option1: &operations.YoutubeWatermarksSetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## YoutubeWatermarksUnset

Allows removal of channel watermark.

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
    res, err := s.Watermarks.YoutubeWatermarksUnset(ctx, operations.YoutubeWatermarksUnsetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        ChannelID: "fugit",
        Fields: sdk.String("ratione"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("quaerat"),
        OnBehalfOfContentOwner: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.YoutubeWatermarksUnsetSecurity{
        Option1: &operations.YoutubeWatermarksUnsetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
