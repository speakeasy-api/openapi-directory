# Channels

### Available Operations

* [AdminChannelsStop](#adminchannelsstop) - Stop watching resources through this channel.

## AdminChannelsStop

Stop watching resources through this channel.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Channel: &shared.Channel{
            Address: sdk.String("4426 Eugene Corner"),
            Expiration: sdk.String("laborum"),
            ID: sdk.String("a52c3f5a-d019-4da1-bfe7-8f097b0074f1"),
            Kind: sdk.String("corporis"),
            Params: map[string]string{
                "iusto": "dicta",
                "harum": "enim",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("accusamus"),
            ResourceURI: sdk.String("commodi"),
            Token: sdk.String("repudiandae"),
            Type: sdk.String("quae"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.AdminChannelsStopSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
