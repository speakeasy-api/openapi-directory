# PlaylistItems

### Available Operations

* [YoutubePlaylistItemsDelete](#youtubeplaylistitemsdelete) - Deletes a resource.
* [YoutubePlaylistItemsInsert](#youtubeplaylistitemsinsert) - Inserts a new resource into this collection.
* [YoutubePlaylistItemsList](#youtubeplaylistitemslist) - Retrieves a list of resources, possibly filtered.
* [YoutubePlaylistItemsUpdate](#youtubeplaylistitemsupdate) - Updates an existing resource.

## YoutubePlaylistItemsDelete

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
    res, err := s.PlaylistItems.YoutubePlaylistItemsDelete(ctx, operations.YoutubePlaylistItemsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quos"),
        ID: "8373a40e-1942-4f32-a550-55756f5d56d0",
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("repellendus"),
        OnBehalfOfContentOwner: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("sed"),
    }, operations.YoutubePlaylistItemsDeleteSecurity{
        Option1: &operations.YoutubePlaylistItemsDeleteSecurityOption1{
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

## YoutubePlaylistItemsInsert

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
    res, err := s.PlaylistItems.YoutubePlaylistItemsInsert(ctx, operations.YoutubePlaylistItemsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlaylistItem: &shared.PlaylistItem{
            ContentDetails: &shared.PlaylistItemContentDetails{
                EndAt: sdk.String("repellat"),
                Note: sdk.String("repudiandae"),
                StartAt: sdk.String("architecto"),
                VideoID: sdk.String("adipisci"),
                VideoPublishedAt: types.MustTimeFromString("2020-12-08T03:11:38.650Z"),
            },
            Etag: sdk.String("dolore"),
            ID: sdk.String("f62cba3f-8941-4aeb-80b8-0a6924d3b2ec"),
            Kind: sdk.String("delectus"),
            Snippet: &shared.PlaylistItemSnippet{
                ChannelID: sdk.String("minus"),
                ChannelTitle: sdk.String("quo"),
                Description: sdk.String("quos"),
                PlaylistID: sdk.String("asperiores"),
                Position: sdk.Int64(532326),
                PublishedAt: types.MustTimeFromString("2022-04-12T09:24:51.322Z"),
                ResourceID: &shared.ResourceID{
                    ChannelID: sdk.String("accusantium"),
                    Kind: sdk.String("illo"),
                    PlaylistID: sdk.String("aut"),
                    VideoID: sdk.String("doloribus"),
                },
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(342104),
                        URL: sdk.String("at"),
                        Width: sdk.Int64(823472),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(205499),
                        URL: sdk.String("pariatur"),
                        Width: sdk.Int64(424853),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(960813),
                        URL: sdk.String("mollitia"),
                        Width: sdk.Int64(65121),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(552646),
                        URL: sdk.String("aperiam"),
                        Width: sdk.Int64(251200),
                    },
                },
                Title: sdk.String("Dr."),
                VideoOwnerChannelID: sdk.String("ad"),
                VideoOwnerChannelTitle: sdk.String("aliquam"),
            },
            Status: &shared.PlaylistItemStatus{
                PrivacyStatus: shared.PlaylistItemStatusPrivacyStatusEnumPrivate.ToPointer(),
            },
        },
        AccessToken: sdk.String("quas"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("laudantium"),
        OnBehalfOfContentOwner: sdk.String("est"),
        Part: []string{
            "aliquid",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("rem"),
    }, operations.YoutubePlaylistItemsInsertSecurity{
        Option1: &operations.YoutubePlaylistItemsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistItem != nil {
        // handle response
    }
}
```

## YoutubePlaylistItemsList

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
    res, err := s.PlaylistItems.YoutubePlaylistItemsList(ctx, operations.YoutubePlaylistItemsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("tempora"),
        ID: []string{
            "numquam",
            "sequi",
            "voluptatum",
        },
        Key: sdk.String("sit"),
        MaxResults: sdk.Int64(703189),
        OauthToken: sdk.String("veritatis"),
        OnBehalfOfContentOwner: sdk.String("tenetur"),
        PageToken: sdk.String("autem"),
        Part: []string{
            "totam",
            "porro",
            "deserunt",
        },
        PlaylistID: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("animi"),
        VideoID: sdk.String("commodi"),
    }, operations.YoutubePlaylistItemsListSecurity{
        Option1: &operations.YoutubePlaylistItemsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistItemListResponse != nil {
        // handle response
    }
}
```

## YoutubePlaylistItemsUpdate

Updates an existing resource.

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
    res, err := s.PlaylistItems.YoutubePlaylistItemsUpdate(ctx, operations.YoutubePlaylistItemsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlaylistItem: &shared.PlaylistItem{
            ContentDetails: &shared.PlaylistItemContentDetails{
                EndAt: sdk.String("fuga"),
                Note: sdk.String("aut"),
                StartAt: sdk.String("dolore"),
                VideoID: sdk.String("maxime"),
                VideoPublishedAt: types.MustTimeFromString("2022-05-21T23:58:09.358Z"),
            },
            Etag: sdk.String("ullam"),
            ID: sdk.String("cc699171-b51c-41bd-b1cf-4b888ebdfc4c"),
            Kind: sdk.String("minus"),
            Snippet: &shared.PlaylistItemSnippet{
                ChannelID: sdk.String("porro"),
                ChannelTitle: sdk.String("id"),
                Description: sdk.String("excepturi"),
                PlaylistID: sdk.String("occaecati"),
                Position: sdk.Int64(726851),
                PublishedAt: types.MustTimeFromString("2021-08-18T10:06:28.236Z"),
                ResourceID: &shared.ResourceID{
                    ChannelID: sdk.String("hic"),
                    Kind: sdk.String("maxime"),
                    PlaylistID: sdk.String("accusantium"),
                    VideoID: sdk.String("soluta"),
                },
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(147400),
                        URL: sdk.String("pariatur"),
                        Width: sdk.Int64(756287),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(927490),
                        URL: sdk.String("veritatis"),
                        Width: sdk.Int64(13637),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(516124),
                        URL: sdk.String("iusto"),
                        Width: sdk.Int64(219860),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(917152),
                        URL: sdk.String("tempora"),
                        Width: sdk.Int64(169935),
                    },
                },
                Title: sdk.String("Miss"),
                VideoOwnerChannelID: sdk.String("doloremque"),
                VideoOwnerChannelTitle: sdk.String("voluptatem"),
            },
            Status: &shared.PlaylistItemStatus{
                PrivacyStatus: shared.PlaylistItemStatusPrivacyStatusEnumUnlisted.ToPointer(),
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("nihil"),
        OnBehalfOfContentOwner: sdk.String("atque"),
        Part: []string{
            "deserunt",
            "atque",
            "nostrum",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("est"),
    }, operations.YoutubePlaylistItemsUpdateSecurity{
        Option1: &operations.YoutubePlaylistItemsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistItem != nil {
        // handle response
    }
}
```
