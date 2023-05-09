# Adclients

### Available Operations

* [AdsenseAdclientsList](#adsenseadclientslist) - List all ad clients in this AdSense account.

## AdsenseAdclientsList

List all ad clients in this AdSense account.

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
    res, err := s.Adclients.AdsenseAdclientsList(ctx, operations.AdsenseAdclientsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("eum"),
        Key: sdk.String("non"),
        MaxResults: sdk.Int64(756107),
        OauthToken: sdk.String("sint"),
        PageToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UserIP: sdk.String("necessitatibus"),
    }, operations.AdsenseAdclientsListSecurity{
        Option1: &operations.AdsenseAdclientsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdClients != nil {
        // handle response
    }
}
```
