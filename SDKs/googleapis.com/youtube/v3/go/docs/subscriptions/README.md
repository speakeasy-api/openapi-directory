# Subscriptions

### Available Operations

* [YoutubeSubscriptionsDelete](#youtubesubscriptionsdelete) - Deletes a resource.
* [YoutubeSubscriptionsInsert](#youtubesubscriptionsinsert) - Inserts a new resource into this collection.
* [YoutubeSubscriptionsList](#youtubesubscriptionslist) - Retrieves a list of resources, possibly filtered.

## YoutubeSubscriptionsDelete

Deletes a resource.

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
    res, err := s.Subscriptions.YoutubeSubscriptionsDelete(ctx, operations.YoutubeSubscriptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("tempora"),
        ID: "ee2c8c6c-e611-4fee-b1c7-cbdb6eec7437",
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("ad"),
    }, operations.YoutubeSubscriptionsDeleteSecurity{
        Option1: &operations.YoutubeSubscriptionsDeleteSecurityOption1{
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

## YoutubeSubscriptionsInsert

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
    res, err := s.Subscriptions.YoutubeSubscriptionsInsert(ctx, operations.YoutubeSubscriptionsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Subscription: &shared.Subscription{
            ContentDetails: &shared.SubscriptionContentDetails{
                ActivityType: shared.SubscriptionContentDetailsActivityTypeEnumSubscriptionActivityTypeUnspecified.ToPointer(),
                NewItemCount: sdk.Int64(481042),
                TotalItemCount: sdk.Int64(456865),
            },
            Etag: sdk.String("magnam"),
            ID: sdk.String("7dc915ad-2caf-45dd-a723-dc0f5ae2f3a6"),
            Kind: sdk.String("harum"),
            Snippet: &shared.SubscriptionSnippet{
                ChannelID: sdk.String("ducimus"),
                ChannelTitle: sdk.String("doloremque"),
                Description: sdk.String("perferendis"),
                PublishedAt: types.MustTimeFromString("2022-01-14T08:32:33.785Z"),
                ResourceID: &shared.ResourceID{
                    ChannelID: sdk.String("corrupti"),
                    Kind: sdk.String("molestiae"),
                    PlaylistID: sdk.String("quis"),
                    VideoID: sdk.String("iure"),
                },
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(68596),
                        URL: sdk.String("quaerat"),
                        Width: sdk.Int64(228907),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(956942),
                        URL: sdk.String("corporis"),
                        Width: sdk.Int64(666005),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(435142),
                        URL: sdk.String("quisquam"),
                        Width: sdk.Int64(590927),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(515595),
                        URL: sdk.String("nam"),
                        Width: sdk.Int64(366147),
                    },
                },
                Title: sdk.String("Mrs."),
            },
            SubscriberSnippet: &shared.SubscriptionSubscriberSnippet{
                ChannelID: sdk.String("ipsam"),
                Description: sdk.String("minima"),
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(273383),
                        URL: sdk.String("perferendis"),
                        Width: sdk.Int64(546963),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(40874),
                        URL: sdk.String("fugiat"),
                        Width: sdk.Int64(257821),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(39202),
                        URL: sdk.String("cum"),
                        Width: sdk.Int64(751298),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(628314),
                        URL: sdk.String("porro"),
                        Width: sdk.Int64(769789),
                    },
                },
                Title: sdk.String("Mrs."),
            },
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("enim"),
        Part: []string{
            "consectetur",
            "necessitatibus",
            "maxime",
            "cupiditate",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.YoutubeSubscriptionsInsertSecurity{
        Option1: &operations.YoutubeSubscriptionsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscription != nil {
        // handle response
    }
}
```

## YoutubeSubscriptionsList

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
    res, err := s.Subscriptions.YoutubeSubscriptionsList(ctx, operations.YoutubeSubscriptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        ChannelID: sdk.String("explicabo"),
        Fields: sdk.String("vel"),
        ForChannelID: sdk.String("cum"),
        ID: []string{
            "possimus",
            "fugit",
            "ipsam",
        },
        Key: sdk.String("nostrum"),
        MaxResults: sdk.Int64(196852),
        Mine: sdk.Bool(false),
        MyRecentSubscribers: sdk.Bool(false),
        MySubscribers: sdk.Bool(false),
        OauthToken: sdk.String("voluptatum"),
        OnBehalfOfContentOwner: sdk.String("quasi"),
        OnBehalfOfContentOwnerChannel: sdk.String("error"),
        Order: operations.YoutubeSubscriptionsListOrderEnumUnread.ToPointer(),
        PageToken: sdk.String("tempora"),
        Part: []string{
            "eius",
            "expedita",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.YoutubeSubscriptionsListSecurity{
        Option1: &operations.YoutubeSubscriptionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionListResponse != nil {
        // handle response
    }
}
```
