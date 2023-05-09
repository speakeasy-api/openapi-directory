# ChannelBanners

### Available Operations

* [YoutubeChannelBannersInsert](#youtubechannelbannersinsert) - Inserts a new resource into this collection.

## YoutubeChannelBannersInsert

Inserts a new resource into this collection.

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
    res, err := s.ChannelBanners.YoutubeChannelBannersInsert(ctx, operations.YoutubeChannelBannersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: []byte("quo"),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eos"),
        ChannelID: sdk.String("voluptas"),
        Fields: sdk.String("ab"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("consequatur"),
        OnBehalfOfContentOwner: sdk.String("tempora"),
        OnBehalfOfContentOwnerChannel: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.YoutubeChannelBannersInsertSecurity{
        Option1: &operations.YoutubeChannelBannersInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelBannerResource != nil {
        // handle response
    }
}
```
