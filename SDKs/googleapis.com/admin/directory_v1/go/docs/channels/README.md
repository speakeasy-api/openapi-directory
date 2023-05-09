# Channels

### Available Operations

* [AdminChannelsStop](#adminchannelsstop) - Stops watching resources through this channel.

## AdminChannelsStop

Stops watching resources through this channel.

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
    res, err := s.Channels.AdminChannelsStop(ctx, operations.AdminChannelsStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Channel: &shared.Channel{
            Address: sdk.String("76515 Rosenbaum Manors"),
            Expiration: sdk.String("beatae"),
            ID: sdk.String("6742cb73-9205-4929-b96f-ea7596eb10fa"),
            Kind: sdk.String("mollitia"),
            Params: map[string]string{
                "dolores": "dolorem",
                "corporis": "explicabo",
                "nobis": "enim",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("omnis"),
            ResourceURI: sdk.String("nemo"),
            Token: sdk.String("minima"),
            Type: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.AdminChannelsStopSecurity{
        Option1: &operations.AdminChannelsStopSecurityOption1{
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
