# ChannelSections

### Available Operations

* [YoutubeChannelSectionsDelete](#youtubechannelsectionsdelete) - Deletes a resource.
* [YoutubeChannelSectionsInsert](#youtubechannelsectionsinsert) - Inserts a new resource into this collection.
* [YoutubeChannelSectionsList](#youtubechannelsectionslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeChannelSectionsUpdate](#youtubechannelsectionsupdate) - Updates an existing resource.

## YoutubeChannelSectionsDelete

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
    res, err := s.ChannelSections.YoutubeChannelSectionsDelete(ctx, operations.YoutubeChannelSectionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("distinctio"),
        ID: "c7178e47-96f2-4a70-8688-282aa482562f",
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("ratione"),
        OnBehalfOfContentOwner: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("atque"),
    }, operations.YoutubeChannelSectionsDeleteSecurity{
        Option1: &operations.YoutubeChannelSectionsDeleteSecurityOption1{
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

## YoutubeChannelSectionsInsert

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
    res, err := s.ChannelSections.YoutubeChannelSectionsInsert(ctx, operations.YoutubeChannelSectionsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChannelSection: &shared.ChannelSection{
            ContentDetails: &shared.ChannelSectionContentDetails{
                Channels: []string{
                    "eveniet",
                    "accusamus",
                },
                Playlists: []string{
                    "esse",
                },
            },
            Etag: sdk.String("quod"),
            ID: sdk.String("be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87"),
            Kind: sdk.String("quasi"),
            Localizations: map[string]shared.ChannelSectionLocalization{
                "error": shared.ChannelSectionLocalization{
                    Title: sdk.String("Ms."),
                },
                "pariatur": shared.ChannelSectionLocalization{
                    Title: sdk.String("Dr."),
                },
                "quia": shared.ChannelSectionLocalization{
                    Title: sdk.String("Dr."),
                },
                "asperiores": shared.ChannelSectionLocalization{
                    Title: sdk.String("Dr."),
                },
            },
            Snippet: &shared.ChannelSectionSnippet{
                ChannelID: sdk.String("veritatis"),
                DefaultLanguage: sdk.String("consequuntur"),
                Localized: &shared.ChannelSectionLocalization{
                    Title: sdk.String("Mr."),
                },
                Position: sdk.Int64(628899),
                Style: shared.ChannelSectionSnippetStyleEnumHorizontalRow.ToPointer(),
                Title: sdk.String("Mrs."),
                Type: shared.ChannelSectionSnippetTypeEnumSubscriptions.ToPointer(),
            },
            Targeting: &shared.ChannelSectionTargeting{
                Countries: []string{
                    "earum",
                },
                Languages: []string{
                    "in",
                    "eius",
                },
                Regions: []string{
                    "illum",
                    "soluta",
                    "accusantium",
                },
            },
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("ullam"),
        OnBehalfOfContentOwner: sdk.String("nisi"),
        OnBehalfOfContentOwnerChannel: sdk.String("aut"),
        Part: []string{
            "qui",
            "quibusdam",
            "ex",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.YoutubeChannelSectionsInsertSecurity{
        Option1: &operations.YoutubeChannelSectionsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelSection != nil {
        // handle response
    }
}
```

## YoutubeChannelSectionsList

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
    res, err := s.ChannelSections.YoutubeChannelSectionsList(ctx, operations.YoutubeChannelSectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        ChannelID: sdk.String("at"),
        Fields: sdk.String("et"),
        Hl: sdk.String("voluptate"),
        ID: []string{
            "minima",
        },
        Key: sdk.String("veritatis"),
        Mine: sdk.Bool(false),
        OauthToken: sdk.String("consectetur"),
        OnBehalfOfContentOwner: sdk.String("adipisci"),
        Part: []string{
            "temporibus",
            "accusantium",
            "rem",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("eum"),
    }, operations.YoutubeChannelSectionsListSecurity{
        Option1: &operations.YoutubeChannelSectionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelSectionListResponse != nil {
        // handle response
    }
}
```

## YoutubeChannelSectionsUpdate

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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ChannelSections.YoutubeChannelSectionsUpdate(ctx, operations.YoutubeChannelSectionsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelSection: &shared.ChannelSection{
            ContentDetails: &shared.ChannelSectionContentDetails{
                Channels: []string{
                    "corrupti",
                },
                Playlists: []string{
                    "voluptatem",
                    "dolor",
                },
            },
            Etag: sdk.String("occaecati"),
            ID: sdk.String("4c26071f-93f5-4f06-82da-c7af515cc413"),
            Kind: sdk.String("fuga"),
            Localizations: map[string]shared.ChannelSectionLocalization{
                "suscipit": shared.ChannelSectionLocalization{
                    Title: sdk.String("Mrs."),
                },
                "culpa": shared.ChannelSectionLocalization{
                    Title: sdk.String("Miss"),
                },
                "recusandae": shared.ChannelSectionLocalization{
                    Title: sdk.String("Ms."),
                },
            },
            Snippet: &shared.ChannelSectionSnippet{
                ChannelID: sdk.String("fugiat"),
                DefaultLanguage: sdk.String("vel"),
                Localized: &shared.ChannelSectionLocalization{
                    Title: sdk.String("Ms."),
                },
                Position: sdk.Int64(554688),
                Style: shared.ChannelSectionSnippetStyleEnumHorizontalRow.ToPointer(),
                Title: sdk.String("Mrs."),
                Type: shared.ChannelSectionSnippetTypeEnumMultipleChannels.ToPointer(),
            },
            Targeting: &shared.ChannelSectionTargeting{
                Countries: []string{
                    "cum",
                    "commodi",
                    "in",
                },
                Languages: []string{
                    "reiciendis",
                    "assumenda",
                },
                Regions: []string{
                    "recusandae",
                    "aliquid",
                },
            },
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("in"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("earum"),
        OnBehalfOfContentOwner: sdk.String("facere"),
        Part: []string{
            "doloribus",
            "suscipit",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.YoutubeChannelSectionsUpdateSecurity{
        Option1: &operations.YoutubeChannelSectionsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelSection != nil {
        // handle response
    }
}
```
