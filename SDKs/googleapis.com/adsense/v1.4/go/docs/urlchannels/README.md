# Urlchannels

### Available Operations

* [AdsenseUrlchannelsList](#adsenseurlchannelslist) - List all URL channels in the specified ad client for this AdSense account.

## AdsenseUrlchannelsList

List all URL channels in the specified ad client for this AdSense account.

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
    res, err := s.Urlchannels.AdsenseUrlchannelsList(ctx, operations.AdsenseUrlchannelsListRequest{
        AdClientID: "iste",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("pariatur"),
        MaxResults: sdk.Int64(589910),
        OauthToken: sdk.String("nobis"),
        PageToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UserIP: sdk.String("quaerat"),
    }, operations.AdsenseUrlchannelsListSecurity{
        Option1: &operations.AdsenseUrlchannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.URLChannels != nil {
        // handle response
    }
}
```
