# Channels

### Available Operations

* [YoutubeChannelsList](#youtubechannelslist) - Retrieves a list of resources, possibly filtered.
* [YoutubeChannelsUpdate](#youtubechannelsupdate) - Updates an existing resource.

## YoutubeChannelsList

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
    res, err := s.Channels.YoutubeChannelsList(ctx, operations.YoutubeChannelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        CategoryID: sdk.String("adipisci"),
        Fields: sdk.String("non"),
        ForUsername: sdk.String("amet"),
        Hl: sdk.String("beatae"),
        ID: []string{
            "a",
            "debitis",
        },
        Key: sdk.String("consectetur"),
        ManagedByMe: sdk.Bool(false),
        MaxResults: sdk.Int64(358107),
        Mine: sdk.Bool(false),
        MySubscribers: sdk.Bool(false),
        OauthToken: sdk.String("harum"),
        OnBehalfOfContentOwner: sdk.String("laboriosam"),
        PageToken: sdk.String("ipsa"),
        Part: []string{
            "libero",
            "vitae",
            "accusamus",
            "similique",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.YoutubeChannelsListSecurity{
        Option1: &operations.YoutubeChannelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChannelListResponse != nil {
        // handle response
    }
}
```

## YoutubeChannelsUpdate

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
    res, err := s.Channels.YoutubeChannelsUpdate(ctx, operations.YoutubeChannelsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Channel: &shared.Channel{
            AuditDetails: &shared.ChannelAuditDetails{
                CommunityGuidelinesGoodStanding: sdk.Bool(false),
                ContentIDClaimsGoodStanding: sdk.Bool(false),
                CopyrightStrikesGoodStanding: sdk.Bool(false),
            },
            BrandingSettings: &shared.ChannelBrandingSettings{
                Channel: &shared.ChannelSettings{
                    Country: sdk.String("Haiti"),
                    DefaultLanguage: sdk.String("minima"),
                    DefaultTab: sdk.String("nobis"),
                    Description: sdk.String("dolorum"),
                    FeaturedChannelsTitle: sdk.String("adipisci"),
                    FeaturedChannelsUrls: []string{
                        "dolores",
                        "blanditiis",
                        "in",
                        "dolore",
                    },
                    Keywords: sdk.String("aliquam"),
                    ModerateComments: sdk.Bool(false),
                    ProfileColor: sdk.String("officiis"),
                    ShowBrowseView: sdk.Bool(false),
                    ShowRelatedChannels: sdk.Bool(false),
                    Title: sdk.String("Dr."),
                    TrackingAnalyticsAccountID: sdk.String("ullam"),
                    UnsubscribedTrailer: sdk.String("adipisci"),
                },
                Hints: []shared.PropertyValue{
                    shared.PropertyValue{
                        Property: sdk.String("blanditiis"),
                        Value: sdk.String("quas"),
                    },
                    shared.PropertyValue{
                        Property: sdk.String("hic"),
                        Value: sdk.String("nesciunt"),
                    },
                    shared.PropertyValue{
                        Property: sdk.String("culpa"),
                        Value: sdk.String("corrupti"),
                    },
                },
                Image: &shared.ImageSettings{
                    BackgroundImageURL: &shared.LocalizedProperty{
                        DefaultLanguage: &shared.LanguageTag{
                            Value: sdk.String("pariatur"),
                        },
                        Localized: []shared.LocalizedString{
                            shared.LocalizedString{
                                Language: sdk.String("hic"),
                                Value: sdk.String("exercitationem"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("nobis"),
                                Value: sdk.String("sit"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("rerum"),
                                Value: sdk.String("sed"),
                            },
                        },
                    },
                    BannerExternalURL: sdk.String("reiciendis"),
                    BannerImageURL: sdk.String("explicabo"),
                    BannerMobileExtraHdImageURL: sdk.String("asperiores"),
                    BannerMobileHdImageURL: sdk.String("facilis"),
                    BannerMobileImageURL: sdk.String("voluptate"),
                    BannerMobileLowImageURL: sdk.String("expedita"),
                    BannerMobileMediumHdImageURL: sdk.String("ab"),
                    BannerTabletExtraHdImageURL: sdk.String("iste"),
                    BannerTabletHdImageURL: sdk.String("dolore"),
                    BannerTabletImageURL: sdk.String("laborum"),
                    BannerTabletLowImageURL: sdk.String("sed"),
                    BannerTvHighImageURL: sdk.String("in"),
                    BannerTvImageURL: sdk.String("commodi"),
                    BannerTvLowImageURL: sdk.String("quidem"),
                    BannerTvMediumImageURL: sdk.String("explicabo"),
                    LargeBrandedBannerImageImapScript: &shared.LocalizedProperty{
                        DefaultLanguage: &shared.LanguageTag{
                            Value: sdk.String("voluptas"),
                        },
                        Localized: []shared.LocalizedString{
                            shared.LocalizedString{
                                Language: sdk.String("architecto"),
                                Value: sdk.String("suscipit"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("sapiente"),
                                Value: sdk.String("debitis"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("illo"),
                                Value: sdk.String("reiciendis"),
                            },
                        },
                    },
                    LargeBrandedBannerImageURL: &shared.LocalizedProperty{
                        DefaultLanguage: &shared.LanguageTag{
                            Value: sdk.String("perferendis"),
                        },
                        Localized: []shared.LocalizedString{
                            shared.LocalizedString{
                                Language: sdk.String("maiores"),
                                Value: sdk.String("incidunt"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("sed"),
                                Value: sdk.String("provident"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("eius"),
                                Value: sdk.String("necessitatibus"),
                            },
                        },
                    },
                    SmallBrandedBannerImageImapScript: &shared.LocalizedProperty{
                        DefaultLanguage: &shared.LanguageTag{
                            Value: sdk.String("ipsum"),
                        },
                        Localized: []shared.LocalizedString{
                            shared.LocalizedString{
                                Language: sdk.String("occaecati"),
                                Value: sdk.String("quos"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("voluptatibus"),
                                Value: sdk.String("tempora"),
                            },
                        },
                    },
                    SmallBrandedBannerImageURL: &shared.LocalizedProperty{
                        DefaultLanguage: &shared.LanguageTag{
                            Value: sdk.String("tempora"),
                        },
                        Localized: []shared.LocalizedString{
                            shared.LocalizedString{
                                Language: sdk.String("reiciendis"),
                                Value: sdk.String("ex"),
                            },
                            shared.LocalizedString{
                                Language: sdk.String("sit"),
                                Value: sdk.String("non"),
                            },
                        },
                    },
                    TrackingImageURL: sdk.String("officiis"),
                    WatchIconImageURL: sdk.String("praesentium"),
                },
                Watch: &shared.WatchSettings{
                    BackgroundColor: sdk.String("facilis"),
                    FeaturedPlaylistID: sdk.String("quaerat"),
                    TextColor: sdk.String("incidunt"),
                },
            },
            ContentDetails: &shared.ChannelContentDetails{
                RelatedPlaylists: &shared.ChannelContentDetailsRelatedPlaylists{
                    Favorites: sdk.String("ipsam"),
                    Likes: sdk.String("debitis"),
                    Uploads: sdk.String("rem"),
                    WatchHistory: sdk.String("sit"),
                    WatchLater: sdk.String("nobis"),
                },
            },
            ContentOwnerDetails: &shared.ChannelContentOwnerDetails{
                ContentOwner: sdk.String("error"),
                TimeLinked: types.MustTimeFromString("2022-09-02T17:12:20.523Z"),
            },
            ConversionPings: &shared.ChannelConversionPings{
                Pings: []shared.ChannelConversionPing{
                    shared.ChannelConversionPing{
                        Context: shared.ChannelConversionPingContextEnumCview.ToPointer(),
                        ConversionURL: sdk.String("nulla"),
                    },
                    shared.ChannelConversionPing{
                        Context: shared.ChannelConversionPingContextEnumSubscribe.ToPointer(),
                        ConversionURL: sdk.String("aperiam"),
                    },
                    shared.ChannelConversionPing{
                        Context: shared.ChannelConversionPingContextEnumCview.ToPointer(),
                        ConversionURL: sdk.String("numquam"),
                    },
                    shared.ChannelConversionPing{
                        Context: shared.ChannelConversionPingContextEnumSubscribe.ToPointer(),
                        ConversionURL: sdk.String("in"),
                    },
                },
            },
            Etag: sdk.String("officiis"),
            ID: sdk.String("1858b6a8-9fbe-43a5-aa8e-4824d0ab4075"),
            Kind: sdk.String("sit"),
            Localizations: map[string]shared.ChannelLocalization{
                "quas": shared.ChannelLocalization{
                    Description: sdk.String("repudiandae"),
                    Title: sdk.String("Mrs."),
                },
                "et": shared.ChannelLocalization{
                    Description: sdk.String("blanditiis"),
                    Title: sdk.String("Ms."),
                },
                "sed": shared.ChannelLocalization{
                    Description: sdk.String("sit"),
                    Title: sdk.String("Ms."),
                },
            },
            Snippet: &shared.ChannelSnippet{
                Country: sdk.String("Grenada"),
                CustomURL: sdk.String("saepe"),
                DefaultLanguage: sdk.String("error"),
                Description: sdk.String("consequatur"),
                Localized: &shared.ChannelLocalization{
                    Description: sdk.String("incidunt"),
                    Title: sdk.String("Dr."),
                },
                PublishedAt: types.MustTimeFromString("2022-04-23T19:46:15.105Z"),
                Thumbnails: &shared.ThumbnailDetails{
                    High: &shared.Thumbnail{
                        Height: sdk.Int64(115703),
                        URL: sdk.String("architecto"),
                        Width: sdk.Int64(577140),
                    },
                    Maxres: &shared.Thumbnail{
                        Height: sdk.Int64(289776),
                        URL: sdk.String("quidem"),
                        Width: sdk.Int64(539074),
                    },
                    Medium: &shared.Thumbnail{
                        Height: sdk.Int64(671957),
                        URL: sdk.String("nam"),
                        Width: sdk.Int64(948861),
                    },
                    Standard: &shared.Thumbnail{
                        Height: sdk.Int64(388867),
                        URL: sdk.String("alias"),
                        Width: sdk.Int64(227084),
                    },
                },
                Title: sdk.String("Miss"),
            },
            Statistics: &shared.ChannelStatistics{
                CommentCount: sdk.String("voluptate"),
                HiddenSubscriberCount: sdk.Bool(false),
                SubscriberCount: sdk.String("unde"),
                VideoCount: sdk.String("reiciendis"),
                ViewCount: sdk.String("provident"),
            },
            Status: &shared.ChannelStatus{
                IsLinked: sdk.Bool(false),
                LongUploadsStatus: shared.ChannelStatusLongUploadsStatusEnumDisallowed.ToPointer(),
                MadeForKids: sdk.Bool(false),
                PrivacyStatus: shared.ChannelStatusPrivacyStatusEnumPrivate.ToPointer(),
                SelfDeclaredMadeForKids: sdk.Bool(false),
            },
            TopicDetails: &shared.ChannelTopicDetails{
                TopicCategories: []string{
                    "perferendis",
                    "est",
                    "quidem",
                    "reprehenderit",
                },
                TopicIds: []string{
                    "fuga",
                    "praesentium",
                    "mollitia",
                    "veniam",
                },
            },
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("reprehenderit"),
        OnBehalfOfContentOwner: sdk.String("asperiores"),
        Part: []string{
            "suscipit",
            "quidem",
            "maxime",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("amet"),
    }, operations.YoutubeChannelsUpdateSecurity{
        Option1: &operations.YoutubeChannelsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
