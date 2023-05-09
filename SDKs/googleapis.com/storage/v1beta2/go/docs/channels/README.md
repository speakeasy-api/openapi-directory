# Channels

### Available Operations

* [StorageChannelsStop](#storagechannelsstop) - Stop watching resources through this channel

## StorageChannelsStop

Stop watching resources through this channel

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
    res, err := s.Channels.StorageChannelsStop(ctx, operations.StorageChannelsStopRequest{
        Channel: &shared.Channel{
            Address: sdk.String("8990 Predovic Knoll"),
            Expiration: sdk.String("facere"),
            ID: sdk.String("a8a50ce1-87f8-46bc-973d-689eee9526f8"),
            Kind: sdk.String("at"),
            Params: map[string]string{
                "blanditiis": "suscipit",
                "repudiandae": "atque",
                "atque": "sunt",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("recusandae"),
            ResourceURI: sdk.String("dolorum"),
            Token: sdk.String("repellendus"),
            Type: sdk.String("labore"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UserIP: sdk.String("accusantium"),
    }, operations.StorageChannelsStopSecurity{
        Option1: &operations.StorageChannelsStopSecurityOption1{
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
