# LiveChatMessages

### Available Operations

* [YoutubeLiveChatMessagesDelete](#youtubelivechatmessagesdelete) - Deletes a chat message.
* [YoutubeLiveChatMessagesInsert](#youtubelivechatmessagesinsert) - Inserts a new resource into this collection.
* [YoutubeLiveChatMessagesList](#youtubelivechatmessageslist) - Retrieves a list of resources, possibly filtered.

## YoutubeLiveChatMessagesDelete

Deletes a chat message.

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
    res, err := s.LiveChatMessages.YoutubeLiveChatMessagesDelete(ctx, operations.YoutubeLiveChatMessagesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("dignissimos"),
        ID: "e23f2257-411f-4af4-b754-4e472e802857",
        Key: sdk.String("similique"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("sit"),
    }, operations.YoutubeLiveChatMessagesDeleteSecurity{
        Option1: &operations.YoutubeLiveChatMessagesDeleteSecurityOption1{
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

## YoutubeLiveChatMessagesInsert

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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LiveChatMessages.YoutubeLiveChatMessagesInsert(ctx, operations.YoutubeLiveChatMessagesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LiveChatMessage: &shared.LiveChatMessage{
            AuthorDetails: &shared.LiveChatMessageAuthorDetails{
                ChannelID: sdk.String("eum"),
                ChannelURL: sdk.String("nesciunt"),
                DisplayName: sdk.String("mollitia"),
                IsChatModerator: sdk.Bool(false),
                IsChatOwner: sdk.Bool(false),
                IsChatSponsor: sdk.Bool(false),
                IsVerified: sdk.Bool(false),
                ProfileImageURL: sdk.String("dignissimos"),
            },
            Etag: sdk.String("fugiat"),
            ID: sdk.String("575f1400-e764-4ad7-b34e-c1b781b36a08"),
            Kind: sdk.String("aut"),
            Snippet: &shared.LiveChatMessageSnippet{
                AuthorChannelID: sdk.String("quos"),
                DisplayMessage: sdk.String("laudantium"),
                FanFundingEventDetails: &shared.LiveChatFanFundingEventDetails{
                    AmountDisplayString: sdk.String("repellendus"),
                    AmountMicros: sdk.String("veritatis"),
                    Currency: sdk.String("quae"),
                    UserComment: sdk.String("eaque"),
                },
                GiftMembershipReceivedDetails: &shared.LiveChatGiftMembershipReceivedDetails{
                    AssociatedMembershipGiftingMessageID: sdk.String("saepe"),
                    GifterChannelID: sdk.String("delectus"),
                    MemberLevelName: sdk.String("mollitia"),
                },
                HasDisplayContent: sdk.Bool(false),
                LiveChatID: sdk.String("nulla"),
                MemberMilestoneChatDetails: &shared.LiveChatMemberMilestoneChatDetails{
                    MemberLevelName: sdk.String("officia"),
                    MemberMonth: sdk.Int64(152027),
                    UserComment: sdk.String("voluptatem"),
                },
                MembershipGiftingDetails: &shared.LiveChatMembershipGiftingDetails{
                    GiftMembershipsCount: sdk.Int(664),
                    GiftMembershipsLevelName: sdk.String("eveniet"),
                },
                MessageDeletedDetails: &shared.LiveChatMessageDeletedDetails{
                    DeletedMessageID: sdk.String("hic"),
                },
                MessageRetractedDetails: &shared.LiveChatMessageRetractedDetails{
                    RetractedMessageID: sdk.String("voluptatem"),
                },
                NewSponsorDetails: &shared.LiveChatNewSponsorDetails{
                    IsUpgrade: sdk.Bool(false),
                    MemberLevelName: sdk.String("incidunt"),
                },
                PublishedAt: types.MustTimeFromString("2022-10-25T03:32:12.534Z"),
                SuperChatDetails: &shared.LiveChatSuperChatDetails{
                    AmountDisplayString: sdk.String("necessitatibus"),
                    AmountMicros: sdk.String("harum"),
                    Currency: sdk.String("explicabo"),
                    Tier: sdk.Int64(108903),
                    UserComment: sdk.String("aliquid"),
                },
                SuperStickerDetails: &shared.LiveChatSuperStickerDetails{
                    AmountDisplayString: sdk.String("modi"),
                    AmountMicros: sdk.String("optio"),
                    Currency: sdk.String("voluptatibus"),
                    SuperStickerMetadata: &shared.SuperStickerMetadata{
                        AltText: sdk.String("molestias"),
                        AltTextLanguage: sdk.String("officia"),
                        StickerID: sdk.String("libero"),
                    },
                    Tier: sdk.Int64(520678),
                },
                TextMessageDetails: &shared.LiveChatTextMessageDetails{
                    MessageText: sdk.String("sequi"),
                },
                Type: shared.LiveChatMessageSnippetTypeEnumSponsorOnlyModeEndedEvent.ToPointer(),
                UserBannedDetails: &shared.LiveChatUserBannedMessageDetails{
                    BanDurationSeconds: sdk.String("ea"),
                    BanType: shared.LiveChatUserBannedMessageDetailsBanTypeEnumTemporary.ToPointer(),
                    BannedUserDetails: &shared.ChannelProfileDetails{
                        ChannelID: sdk.String("ducimus"),
                        ChannelURL: sdk.String("odit"),
                        DisplayName: sdk.String("velit"),
                        ProfileImageURL: sdk.String("reiciendis"),
                    },
                },
            },
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("natus"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("doloremque"),
        Part: []string{
            "rerum",
            "recusandae",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("rem"),
    }, operations.YoutubeLiveChatMessagesInsertSecurity{
        Option1: &operations.YoutubeLiveChatMessagesInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveChatMessage != nil {
        // handle response
    }
}
```

## YoutubeLiveChatMessagesList

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
    res, err := s.LiveChatMessages.YoutubeLiveChatMessagesList(ctx, operations.YoutubeLiveChatMessagesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("voluptatibus"),
        Hl: sdk.String("eligendi"),
        Key: sdk.String("quae"),
        LiveChatID: "officiis",
        MaxResults: sdk.Int64(100002),
        OauthToken: sdk.String("architecto"),
        PageToken: sdk.String("enim"),
        Part: []string{
            "rem",
            "perferendis",
            "facilis",
            "reiciendis",
        },
        PrettyPrint: sdk.Bool(false),
        ProfileImageSize: sdk.Int64(955551),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("quos"),
    }, operations.YoutubeLiveChatMessagesListSecurity{
        Option1: &operations.YoutubeLiveChatMessagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LiveChatMessageListResponse != nil {
        // handle response
    }
}
```
