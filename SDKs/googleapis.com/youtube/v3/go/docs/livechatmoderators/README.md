# LiveChatModerators

### Available Operations

* [YoutubeLiveChatModeratorsDelete](#youtubelivechatmoderatorsdelete) - Deletes a chat moderator.
* [YoutubeLiveChatModeratorsInsert](#youtubelivechatmoderatorsinsert) - Inserts a new resource into this collection.
* [YoutubeLiveChatModeratorsList](#youtubelivechatmoderatorslist) - Retrieves a list of resources, possibly filtered.

## YoutubeLiveChatModeratorsDelete

Deletes a chat moderator.

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
    res, err := s.LiveChatModerators.YoutubeLiveChatModeratorsDelete(ctx, operations.YoutubeLiveChatModeratorsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Fields: sdk.String("maxime"),
        ID: "42defcce-8f19-4777-b3e6-3562a7b408f0",
        Key: sdk.String("veniam"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.YoutubeLiveChatModeratorsDeleteSecurity{
        Option1: &operations.YoutubeLiveChatModeratorsDeleteSecurityOption1{
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

## YoutubeLiveChatModeratorsInsert

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
    res, err := s.LiveChatModerators.YoutubeLiveChatModeratorsInsert(ctx, operations.YoutubeLiveChatModeratorsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LiveChatModerator: &shared.LiveChatModerator{
            Etag: sdk.String("doloribus"),
            ID: sdk.String("daf313a1-f5fd-4942-99c0-b36f25ea944f"),
            Kind: sdk.String("adipisci"),
            Snippet: &shared.LiveChatModeratorSnippet{
                LiveChatID: sdk.String("libero"),
                ModeratorDetails: &shared.ChannelProfileDetails{
                    ChannelID: sdk.String("in"),
                    ChannelURL: sdk.String("minima"),
                    DisplayName: sdk.String("ex"),
                    ProfileImageURL: sdk.String("minus"),
                },
            },
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("dolor"),
        Part: []string{
            "fuga",
            "minima",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.YoutubeLiveChatModeratorsInsertSecurity{
        Option1: &operations.YoutubeLiveChatModeratorsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveChatModerator != nil {
        // handle response
    }
}
```

## YoutubeLiveChatModeratorsList

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
    res, err := s.LiveChatModerators.YoutubeLiveChatModeratorsList(ctx, operations.YoutubeLiveChatModeratorsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("exercitationem"),
        LiveChatID: "expedita",
        MaxResults: sdk.Int64(706411),
        OauthToken: sdk.String("impedit"),
        PageToken: sdk.String("sit"),
        Part: []string{
            "culpa",
            "consequuntur",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("modi"),
    }, operations.YoutubeLiveChatModeratorsListSecurity{
        Option1: &operations.YoutubeLiveChatModeratorsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveChatModeratorListResponse != nil {
        // handle response
    }
}
```
