# LiveChatBans

### Available Operations

* [YoutubeLiveChatBansDelete](#youtubelivechatbansdelete) - Deletes a chat ban.
* [YoutubeLiveChatBansInsert](#youtubelivechatbansinsert) - Inserts a new resource into this collection.

## YoutubeLiveChatBansDelete

Deletes a chat ban.

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
    res, err := s.LiveChatBans.YoutubeLiveChatBansDelete(ctx, operations.YoutubeLiveChatBansDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("quisquam"),
        ID: "98e0c2bb-89eb-475d-ad63-6c600503d8bb",
        Key: sdk.String("amet"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.YoutubeLiveChatBansDeleteSecurity{
        Option1: &operations.YoutubeLiveChatBansDeleteSecurityOption1{
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

## YoutubeLiveChatBansInsert

Inserts a new resource into this collection.

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
    res, err := s.LiveChatBans.YoutubeLiveChatBansInsert(ctx, operations.YoutubeLiveChatBansInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LiveChatBan: &shared.LiveChatBan{
            Etag: sdk.String("iusto"),
            ID: sdk.String("39ae9e05-7eb8-409e-a810-331f3981d4c7"),
            Kind: sdk.String("voluptatem"),
            Snippet: &shared.LiveChatBanSnippet{
                BanDurationSeconds: sdk.String("perferendis"),
                BannedUserDetails: &shared.ChannelProfileDetails{
                    ChannelID: sdk.String("rerum"),
                    ChannelURL: sdk.String("ea"),
                    DisplayName: sdk.String("aperiam"),
                    ProfileImageURL: sdk.String("dignissimos"),
                },
                LiveChatID: sdk.String("repellat"),
                Type: shared.LiveChatBanSnippetTypeEnumLiveChatBanTypeUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("consectetur"),
        Part: []string{
            "natus",
            "temporibus",
            "officia",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.YoutubeLiveChatBansInsertSecurity{
        Option1: &operations.YoutubeLiveChatBansInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveChatBan != nil {
        // handle response
    }
}
```
