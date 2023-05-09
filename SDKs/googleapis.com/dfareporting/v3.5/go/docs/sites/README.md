# Sites

### Available Operations

* [DfareportingSitesGet](#dfareportingsitesget) - Gets one site by ID.
* [DfareportingSitesInsert](#dfareportingsitesinsert) - Inserts a new site.
* [DfareportingSitesList](#dfareportingsiteslist) - Retrieves a list of sites, possibly filtered. This method supports paging.
* [DfareportingSitesPatch](#dfareportingsitespatch) - Updates an existing site. This method supports patch semantics.
* [DfareportingSitesUpdate](#dfareportingsitesupdate) - Updates an existing site.

## DfareportingSitesGet

Gets one site by ID.

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
    res, err := s.Sites.DfareportingSitesGet(ctx, operations.DfareportingSitesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("iste"),
        ID: "d4560001-b003-4f1f-b6a3-9c6bffe38fc9",
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.DfareportingSitesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## DfareportingSitesInsert

Inserts a new site.

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
    res, err := s.Sites.DfareportingSitesInsert(ctx, operations.DfareportingSitesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Site: &shared.Site{
            AccountID: sdk.String("ipsam"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("doloremque"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusamus"),
                Etag: sdk.String("sed"),
                ID: sdk.String("aedf461d-2e4c-4783-aa7c-ab0bb98b7efa"),
                Kind: sdk.String("eveniet"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quam"),
            },
            ID: sdk.String("quas"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("saepe"),
                Etag: sdk.String("est"),
                ID: sdk.String("a7e84caf-7028-4c64-a028-d32fceebb9f3"),
                Kind: sdk.String("unde"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ut"),
            },
            KeyName: sdk.String("minima"),
            Kind: sdk.String("pariatur"),
            Name: sdk.String("Gayle Russel IV"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("817 Kuhic Fall"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Torrance92@hotmail.com"),
                    FirstName: sdk.String("Ignatius"),
                    ID: sdk.String("a"),
                    LastName: sdk.String("Lang"),
                    Phone: sdk.String("1-759-330-1665 x54415"),
                    Title: sdk.String("Dr."),
                },
                shared.SiteContact{
                    Address: sdk.String("7783 Lucas Pass"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Carlotta.Wyman@yahoo.com"),
                    FirstName: sdk.String("Noemy"),
                    ID: sdk.String("facere"),
                    LastName: sdk.String("Hayes"),
                    Phone: sdk.String("(431) 563-9756 x3157"),
                    Title: sdk.String("Mr."),
                },
                shared.SiteContact{
                    Address: sdk.String("6333 Breana Plain"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Chad_Blanda@yahoo.com"),
                    FirstName: sdk.String("Julio"),
                    ID: sdk.String("exercitationem"),
                    LastName: sdk.String("Zboncak"),
                    Phone: sdk.String("(895) 236-1037 x5218"),
                    Title: sdk.String("Dr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("velit"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumFlash.ToPointer(),
            },
            SubaccountID: sdk.String("ex"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(794256),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("veritatis"),
                            Kind: sdk.String("aspernatur"),
                            Width: sdk.Int(278168),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("temporibus"),
                },
                Kind: sdk.String("cum"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("perferendis"),
                    IconClickTrackingURL: sdk.String("cum"),
                    IconViewTrackingURL: sdk.String("nisi"),
                    Program: sdk.String("in"),
                    ResourceURL: sdk.String("quas"),
                    Size: &shared.Size{
                        Height: sdk.Int(912676),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("magni"),
                        Kind: sdk.String("perspiciatis"),
                        Width: sdk.Int(669815),
                    },
                    XPosition: sdk.String("esse"),
                    YPosition: sdk.String("sapiente"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("inventore"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(104186),
                        OffsetSeconds: sdk.Int(9235),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(97295),
                        OffsetSeconds: sdk.Int(708262),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        793356,
                    },
                    Kind: sdk.String("ducimus"),
                },
            },
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "temporibus",
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DfareportingSitesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## DfareportingSitesList

Retrieves a list of sites, possibly filtered. This method supports paging.

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
    res, err := s.Sites.DfareportingSitesList(ctx, operations.DfareportingSitesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AcceptsInStreamVideoPlacements: sdk.Bool(false),
        AcceptsInterstitialPlacements: sdk.Bool(false),
        AcceptsPublisherPaidPlacements: sdk.Bool(false),
        AccessToken: sdk.String("aliquam"),
        AdWordsSite: sdk.Bool(false),
        Alt: shared.AltEnumJSON.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("error"),
        CampaignIds: []string{
            "ut",
            "atque",
            "atque",
            "temporibus",
        },
        DirectorySiteIds: []string{
            "fugit",
            "nostrum",
        },
        Fields: sdk.String("fugit"),
        Ids: []string{
            "ipsum",
            "eos",
            "totam",
            "ratione",
        },
        Key: sdk.String("reprehenderit"),
        MaxResults: sdk.Int64(16263),
        OauthToken: sdk.String("eius"),
        PageToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "incidunt",
        QuotaUser: sdk.String("quia"),
        SearchString: sdk.String("cumque"),
        SortField: operations.DfareportingSitesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingSitesListSortOrderEnumAscending.ToPointer(),
        SubaccountID: sdk.String("amet"),
        UnmappedSite: sdk.Bool(false),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.DfareportingSitesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SitesListResponse != nil {
        // handle response
    }
}
```

## DfareportingSitesPatch

Updates an existing site. This method supports patch semantics.

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
    res, err := s.Sites.DfareportingSitesPatch(ctx, operations.DfareportingSitesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Site: &shared.Site{
            AccountID: sdk.String("fuga"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("eligendi"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("architecto"),
                Etag: sdk.String("quia"),
                ID: sdk.String("bc74c09c-690a-409c-b055-02e77c2009c1"),
                Kind: sdk.String("nostrum"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ut"),
            },
            ID: sdk.String("assumenda"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatum"),
                Etag: sdk.String("velit"),
                ID: sdk.String("7399065d-f230-45a1-b826-b6d6cb279447"),
                Kind: sdk.String("et"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("tempora"),
            },
            KeyName: sdk.String("nihil"),
            Kind: sdk.String("reprehenderit"),
            Name: sdk.String("Gladys Senger"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("2078 Era Pines"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Ova.Lubowitz@yahoo.com"),
                    FirstName: sdk.String("Elaina"),
                    ID: sdk.String("consequuntur"),
                    LastName: sdk.String("Stiedemann"),
                    Phone: sdk.String("987.205.0051 x711"),
                    Title: sdk.String("Ms."),
                },
                shared.SiteContact{
                    Address: sdk.String("995 White Place"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Darlene_Bosco@yahoo.com"),
                    FirstName: sdk.String("Frederique"),
                    ID: sdk.String("ut"),
                    LastName: sdk.String("Weissnat"),
                    Phone: sdk.String("1-899-649-0802"),
                    Title: sdk.String("Mrs."),
                },
                shared.SiteContact{
                    Address: sdk.String("3603 Littel Roads"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Aniya76@yahoo.com"),
                    FirstName: sdk.String("Karlie"),
                    ID: sdk.String("quod"),
                    LastName: sdk.String("Baumbach"),
                    Phone: sdk.String("(863) 802-8108 x157"),
                    Title: sdk.String("Miss"),
                },
                shared.SiteContact{
                    Address: sdk.String("309 Lori Loaf"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Cristobal.Windler@yahoo.com"),
                    FirstName: sdk.String("Catalina"),
                    ID: sdk.String("expedita"),
                    LastName: sdk.String("Collier"),
                    Phone: sdk.String("(712) 774-5588 x335"),
                    Title: sdk.String("Ms."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("cupiditate"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumDefault.ToPointer(),
            },
            SubaccountID: sdk.String("ab"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(687513),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quidem"),
                            Kind: sdk.String("reprehenderit"),
                            Width: sdk.Int(823457),
                        },
                        shared.Size{
                            Height: sdk.Int(599164),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quos"),
                            Kind: sdk.String("officiis"),
                            Width: sdk.Int(473256),
                        },
                        shared.Size{
                            Height: sdk.Int(262232),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("enim"),
                            Kind: sdk.String("laborum"),
                            Width: sdk.Int(429915),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("quas"),
                },
                Kind: sdk.String("provident"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("atque"),
                    IconClickTrackingURL: sdk.String("ut"),
                    IconViewTrackingURL: sdk.String("earum"),
                    Program: sdk.String("praesentium"),
                    ResourceURL: sdk.String("corporis"),
                    Size: &shared.Size{
                        Height: sdk.Int(730077),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("ab"),
                        Kind: sdk.String("iure"),
                        Width: sdk.Int(342279),
                    },
                    XPosition: sdk.String("dolor"),
                    YPosition: sdk.String("consequatur"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumLandscape.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("possimus"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(853266),
                        OffsetSeconds: sdk.Int(988935),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(566993),
                        OffsetSeconds: sdk.Int(812791),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        793813,
                        197917,
                        645225,
                    },
                    Kind: sdk.String("fugit"),
                },
            },
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("facilis"),
        ID: "6e2fae0d-3c0f-4705-b6b9-71f4a37e8be2",
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "unde",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DfareportingSitesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```

## DfareportingSitesUpdate

Updates an existing site.

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
    res, err := s.Sites.DfareportingSitesUpdate(ctx, operations.DfareportingSitesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Site: &shared.Site{
            AccountID: sdk.String("tempore"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("repudiandae"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corporis"),
                Etag: sdk.String("incidunt"),
                ID: sdk.String("9691e419-db62-4214-b271-74670baf2351"),
                Kind: sdk.String("quibusdam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("itaque"),
            },
            ID: sdk.String("cum"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dicta"),
                Etag: sdk.String("assumenda"),
                ID: sdk.String("33e54115-e568-41b2-bc08-bb3aa9e36804"),
                Kind: sdk.String("itaque"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("dolore"),
            },
            KeyName: sdk.String("atque"),
            Kind: sdk.String("libero"),
            Name: sdk.String("Bernice Yost"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("23101 Orion Circles"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Buster.Moen@hotmail.com"),
                    FirstName: sdk.String("Brandon"),
                    ID: sdk.String("voluptas"),
                    LastName: sdk.String("Becker"),
                    Phone: sdk.String("362-448-6870 x60580"),
                    Title: sdk.String("Mrs."),
                },
                shared.SiteContact{
                    Address: sdk.String("0108 Greenholt Spurs"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Andre.Hilll@hotmail.com"),
                    FirstName: sdk.String("Lukas"),
                    ID: sdk.String("vero"),
                    LastName: sdk.String("Kuphal"),
                    Phone: sdk.String("1-843-994-8375"),
                    Title: sdk.String("Mr."),
                },
                shared.SiteContact{
                    Address: sdk.String("243 Davis Hollow"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Alden_Schoen@yahoo.com"),
                    FirstName: sdk.String("Alice"),
                    ID: sdk.String("ducimus"),
                    LastName: sdk.String("Daniel"),
                    Phone: sdk.String("974.314.8311 x468"),
                    Title: sdk.String("Miss"),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("doloribus"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumDefault.ToPointer(),
            },
            SubaccountID: sdk.String("recusandae"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(591322),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("inventore"),
                            Kind: sdk.String("ut"),
                            Width: sdk.Int(580681),
                        },
                        shared.Size{
                            Height: sdk.Int(20539),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("impedit"),
                            Kind: sdk.String("atque"),
                            Width: sdk.Int(337519),
                        },
                        shared.Size{
                            Height: sdk.Int(332663),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("omnis"),
                            Kind: sdk.String("maiores"),
                            Width: sdk.Int(323544),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("delectus"),
                },
                Kind: sdk.String("quaerat"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("iusto"),
                    IconClickTrackingURL: sdk.String("veniam"),
                    IconViewTrackingURL: sdk.String("fuga"),
                    Program: sdk.String("mollitia"),
                    ResourceURL: sdk.String("occaecati"),
                    Size: &shared.Size{
                        Height: sdk.Int(617923),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("architecto"),
                        Kind: sdk.String("voluptates"),
                        Width: sdk.Int(274317),
                    },
                    XPosition: sdk.String("possimus"),
                    YPosition: sdk.String("dolores"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumLandscape.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("ad"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(616077),
                        OffsetSeconds: sdk.Int(269097),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(552550),
                        OffsetSeconds: sdk.Int(239067),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        754606,
                        424479,
                        849471,
                    },
                    Kind: sdk.String("delectus"),
                },
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("sed"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "maxime",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("provident"),
    }, operations.DfareportingSitesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```
