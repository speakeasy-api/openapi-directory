# SuperChatEvents

### Available Operations

* [YoutubeSuperChatEventsList](#youtubesuperchateventslist) - Retrieves a list of resources, possibly filtered.

## YoutubeSuperChatEventsList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.SuperChatEvents.YoutubeSuperChatEventsList(ctx, operations.YoutubeSuperChatEventsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("ea"),
        Hl: sdk.String("eos"),
        Key: sdk.String("aliquam"),
        MaxResults: sdk.Int64(501768),
        OauthToken: sdk.String("hic"),
        PageToken: sdk.String("maiores"),
        Part: []string{
            "autem",
            "nesciunt",
            "cupiditate",
            "animi",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.YoutubeSuperChatEventsListSecurity{
        Option1: &operations.YoutubeSuperChatEventsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuperChatEventListResponse != nil {
        // handle response
    }
}
```
