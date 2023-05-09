# Channels

### Available Operations

* [CalendarChannelsStop](#calendarchannelsstop) - Stop watching resources through this channel

## CalendarChannelsStop

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
    res, err := s.Channels.CalendarChannelsStop(ctx, operations.CalendarChannelsStopRequest{
        Channel: &shared.Channel{
            Address: sdk.String("22150 Elisha Lock"),
            Expiration: sdk.String("eius"),
            ID: sdk.String("778a7bd4-66d2-48c1-8ab3-cdca4251904e"),
            Kind: sdk.String("ipsam"),
            Params: map[string]string{
                "sequi": "quo",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("esse"),
            ResourceURI: sdk.String("recusandae"),
            Token: sdk.String("aperiam"),
            Type: sdk.String("distinctio"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quod"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UserIP: sdk.String("totam"),
    }, operations.CalendarChannelsStopSecurity{
        Option1: &operations.CalendarChannelsStopSecurityOption1{
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
