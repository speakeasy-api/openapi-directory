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
            Address: sdk.String("1663 Orlando Drives"),
            Expiration: sdk.String("tenetur"),
            ID: sdk.String("5ad019da-1ffe-478f-897b-0074f15471b5"),
            Kind: sdk.String("accusamus"),
            Params: map[string]string{
                "repudiandae": "quae",
                "ipsum": "quidem",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("molestias"),
            ResourceURI: sdk.String("excepturi"),
            Token: sdk.String("pariatur"),
            Type: sdk.String("modi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UserIP: sdk.String("repudiandae"),
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
