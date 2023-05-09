# Playlists

### Available Operations

* [YoutubePlaylistsDelete](#youtubeplaylistsdelete) - Deletes a resource.
* [YoutubePlaylistsInsert](#youtubeplaylistsinsert) - Inserts a new resource into this collection.
* [YoutubePlaylistsList](#youtubeplaylistslist) - Retrieves a list of resources, possibly filtered.
* [YoutubePlaylistsUpdate](#youtubeplaylistsupdate) - Updates an existing resource.

## YoutubePlaylistsDelete

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
    res, err := s.Playlists.YoutubePlaylistsDelete(ctx, operations.YoutubePlaylistsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("quas"),
        ID: "c54fefa9-c95f-42ea-8556-5d307cfee812",
        Key: sdk.String("sit"),
        OauthToken: sdk.String("aliquid"),
        OnBehalfOfContentOwner: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.YoutubePlaylistsDeleteSecurity{
        Option1: &operations.YoutubePlaylistsDeleteSecurityOption1{
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

## YoutubePlaylistsInsert

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
    res, err := s.Playlists.YoutubePlaylistsInsert(ctx, operations.YoutubePlaylistsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Playlist: &shared.Playlist{
            ContentDetails: &shared.PlaylistContentDetails{
                ItemCount: sdk.Int64(963913),
            },
            Etag: sdk.String("laborum"),
            ID: sdk.String("4a41c480-d3f2-4132-af03-102d514f4cc6"),
            Kind: sdk.String("repellat"),
            Localizations: map[string]shared.PlaylistLocalization{
                "deleniti": shared.PlaylistLocalization{
                    Description: sdk.String("expedita"),
                    Title: sdk.String("Dr."),
                },
            },
            Player: &shared.PlaylistPlayer{
                EmbedHTML: sdk.String("excepturi"),
            },
            Snippet: &shared.PlaylistSnippet{
                ChannelID: sdk.String("aliquid"),
                ChannelTitle: sdk.String("sed"),
                DefaultLanguage: sdk.String("beatae"),
                Description: sdk.String("similique"),
                Localized: &shared.PlaylistLocalization{
                    Description: sdk.String("ea"),
                    Title: sdk.String("Miss"),
                },
                PublishedAt: types.MustTimeFromString("2022-01-20T22:07:47.918Z"),
                Tags: []string{
                    "esse",
                    "animi",
                },
                ThumbnailVideoID: sdk.String("laudantium"),
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(461050),
                        URL: sdk.String("eveniet"),
                        Width: sdk.Int64(935161),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(246402),
                        URL: sdk.String("officiis"),
                        Width: sdk.Int64(263346),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(701978),
                        URL: sdk.String("itaque"),
                        Width: sdk.Int64(489685),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(373449),
                        URL: sdk.String("explicabo"),
                        Width: sdk.Int64(771632),
                    },
                },
                Title: sdk.String("Mrs."),
            },
            Status: &shared.PlaylistStatus{
                PrivacyStatus: shared.PlaylistStatusPrivacyStatusEnumUnlisted.ToPointer(),
            },
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("praesentium"),
        OnBehalfOfContentOwner: sdk.String("eveniet"),
        OnBehalfOfContentOwnerChannel: sdk.String("dolor"),
        Part: []string{
            "libero",
            "iste",
            "illo",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.YoutubePlaylistsInsertSecurity{
        Option1: &operations.YoutubePlaylistsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Playlist != nil {
        // handle response
    }
}
```

## YoutubePlaylistsList

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
    res, err := s.Playlists.YoutubePlaylistsList(ctx, operations.YoutubePlaylistsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        ChannelID: sdk.String("aperiam"),
        Fields: sdk.String("voluptates"),
        Hl: sdk.String("laudantium"),
        ID: []string{
            "quae",
            "omnis",
        },
        Key: sdk.String("illum"),
        MaxResults: sdk.Int64(526584),
        Mine: sdk.Bool(false),
        OauthToken: sdk.String("tenetur"),
        OnBehalfOfContentOwner: sdk.String("deleniti"),
        OnBehalfOfContentOwnerChannel: sdk.String("modi"),
        PageToken: sdk.String("earum"),
        Part: []string{
            "aliquam",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.YoutubePlaylistsListSecurity{
        Option1: &operations.YoutubePlaylistsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaylistListResponse != nil {
        // handle response
    }
}
```

## YoutubePlaylistsUpdate

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
    res, err := s.Playlists.YoutubePlaylistsUpdate(ctx, operations.YoutubePlaylistsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Playlist: &shared.Playlist{
            ContentDetails: &shared.PlaylistContentDetails{
                ItemCount: sdk.Int64(8904),
            },
            Etag: sdk.String("esse"),
            ID: sdk.String("edcc4aa5-f3ca-4bd9-85a9-72e056728227"),
            Kind: sdk.String("expedita"),
            Localizations: map[string]shared.PlaylistLocalization{
                "repellendus": shared.PlaylistLocalization{
                    Description: sdk.String("nesciunt"),
                    Title: sdk.String("Mr."),
                },
            },
            Player: &shared.PlaylistPlayer{
                EmbedHTML: sdk.String("sint"),
            },
            Snippet: &shared.PlaylistSnippet{
                ChannelID: sdk.String("dolore"),
                ChannelTitle: sdk.String("esse"),
                DefaultLanguage: sdk.String("accusantium"),
                Description: sdk.String("distinctio"),
                Localized: &shared.PlaylistLocalization{
                    Description: sdk.String("sapiente"),
                    Title: sdk.String("Ms."),
                },
                PublishedAt: types.MustTimeFromString("2022-05-21T15:59:19.662Z"),
                Tags: []string{
                    "culpa",
                    "voluptatum",
                    "iusto",
                    "quod",
                },
                ThumbnailVideoID: sdk.String("voluptatibus"),
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(374414),
                        URL: sdk.String("non"),
                        Width: sdk.Int64(353819),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(675058),
                        URL: sdk.String("voluptas"),
                        Width: sdk.Int64(987371),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(657862),
                        URL: sdk.String("recusandae"),
                        Width: sdk.Int64(359453),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(252567),
                        URL: sdk.String("necessitatibus"),
                        Width: sdk.Int64(719469),
                    },
                },
                Title: sdk.String("Dr."),
            },
            Status: &shared.PlaylistStatus{
                PrivacyStatus: shared.PlaylistStatusPrivacyStatusEnumUnlisted.ToPointer(),
            },
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("voluptatibus"),
        OnBehalfOfContentOwner: sdk.String("doloremque"),
        Part: []string{
            "amet",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.YoutubePlaylistsUpdateSecurity{
        Option1: &operations.YoutubePlaylistsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Playlist != nil {
        // handle response
    }
}
```
