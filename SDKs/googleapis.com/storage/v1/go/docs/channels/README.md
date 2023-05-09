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
            Address: sdk.String("436 O'Keefe Shoal"),
            Expiration: sdk.String("ipsam"),
            ID: sdk.String("5a9741d3-1135-4296-9bb8-a7202611435e"),
            Kind: sdk.String("et"),
            Params: map[string]string{
                "unde": "nulla",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("distinctio"),
            ResourceURI: sdk.String("maxime"),
            Token: sdk.String("quia"),
            Type: sdk.String("quia"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("id"),
        UserIP: sdk.String("libero"),
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
