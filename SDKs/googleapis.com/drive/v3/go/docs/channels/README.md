# Channels

### Available Operations

* [DriveChannelsStop](#drivechannelsstop) - Stop watching resources through this channel

## DriveChannelsStop

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
    res, err := s.Channels.DriveChannelsStop(ctx, operations.DriveChannelsStopRequest{
        Channel: &shared.Channel{
            Address: sdk.String("1736 Era Mountains"),
            Expiration: sdk.String("accusantium"),
            ID: sdk.String("7aff1a3a-2fa9-4467-b392-51aa52c3f5ad"),
            Kind: sdk.String("aut"),
            Params: map[string]string{
                "error": "temporibus",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("laborum"),
            ResourceURI: sdk.String("quasi"),
            Token: sdk.String("reiciendis"),
            Type: sdk.String("voluptatibus"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UserIP: sdk.String("ipsa"),
    }, operations.DriveChannelsStopSecurity{
        Option1: &operations.DriveChannelsStopSecurityOption1{
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
