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
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("illum"),
        ID: "a7fcb99f-284c-4d6f-b445-4883aa02030c",
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cupiditate",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("quibusdam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Site: &shared.Site{
            AccountID: sdk.String("in"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("molestias"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sit"),
                Etag: sdk.String("magnam"),
                ID: sdk.String("2e4d6809-f9e3-4425-af63-ebb4b82ee2c8"),
                Kind: sdk.String("ipsa"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("necessitatibus"),
            },
            ID: sdk.String("accusantium"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corrupti"),
                Etag: sdk.String("porro"),
                ID: sdk.String("bdd8375c-c958-4a7d-8c99-1ea4064c2c2a"),
                Kind: sdk.String("ducimus"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("qui"),
            },
            KeyName: sdk.String("occaecati"),
            Kind: sdk.String("cupiditate"),
            Name: sdk.String("Jack Gislason V"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("6404 Parisian Trail"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Hadley.OConnell@hotmail.com"),
                    FirstName: sdk.String("Gabriella"),
                    ID: sdk.String("molestias"),
                    LastName: sdk.String("Stiedemann"),
                    Phone: sdk.String("(508) 281-7515"),
                    Title: sdk.String("Mr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("quo"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumBoth.ToPointer(),
            },
            SubaccountID: sdk.String("blanditiis"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(698658),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("reprehenderit"),
                            Kind: sdk.String("in"),
                            Width: sdk.Int(508565),
                        },
                        shared.Size{
                            Height: sdk.Int(866156),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("alias"),
                            Kind: sdk.String("corporis"),
                            Width: sdk.Int(877291),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("sequi"),
                },
                Kind: sdk.String("ducimus"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("accusantium"),
                    IconClickTrackingURL: sdk.String("occaecati"),
                    IconViewTrackingURL: sdk.String("distinctio"),
                    Program: sdk.String("consectetur"),
                    ResourceURL: sdk.String("totam"),
                    Size: &shared.Size{
                        Height: sdk.Int(776039),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("harum"),
                        Kind: sdk.String("corporis"),
                        Width: sdk.Int(495847),
                    },
                    XPosition: sdk.String("fuga"),
                    YPosition: sdk.String("amet"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumLandscape.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("expedita"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(844289),
                        OffsetSeconds: sdk.Int(241749),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(531678),
                        OffsetSeconds: sdk.Int(494212),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        823218,
                        329778,
                        870003,
                        350086,
                    },
                    Kind: sdk.String("ea"),
                },
            },
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quaerat",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("aliquid"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AcceptsInStreamVideoPlacements: sdk.Bool(false),
        AcceptsInterstitialPlacements: sdk.Bool(false),
        AcceptsPublisherPaidPlacements: sdk.Bool(false),
        AccessToken: sdk.String("eum"),
        AdWordsSite: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("illo"),
        CampaignIds: []string{
            "placeat",
            "ipsam",
            "cupiditate",
            "in",
        },
        DirectorySiteIds: []string{
            "illo",
            "distinctio",
            "ipsam",
        },
        Fields: sdk.String("fugiat"),
        Ids: []string{
            "alias",
            "nemo",
        },
        Key: sdk.String("architecto"),
        MaxResults: sdk.Int64(118529),
        OauthToken: sdk.String("excepturi"),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laboriosam",
        QuotaUser: sdk.String("inventore"),
        SearchString: sdk.String("eos"),
        SortField: operations.DfareportingSitesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingSitesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("consectetur"),
        UnmappedSite: sdk.Bool(false),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("quidem"),
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
            AccountID: sdk.String("in"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("fugiat"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sapiente"),
                Etag: sdk.String("adipisci"),
                ID: sdk.String("6fdff90b-9b4a-43a8-8f90-bffc4ec034f1"),
                Kind: sdk.String("autem"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("cum"),
            },
            ID: sdk.String("dolores"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dolor"),
                Etag: sdk.String("ab"),
                ID: sdk.String("9ac8ceb2-5569-4218-a6f0-83d17110688d"),
                Kind: sdk.String("tempore"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("aspernatur"),
            },
            KeyName: sdk.String("doloremque"),
            Kind: sdk.String("reprehenderit"),
            Name: sdk.String("Yvette Bruen"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("31061 Corene Canyon"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Jewel.Schumm77@yahoo.com"),
                    FirstName: sdk.String("Geovanni"),
                    ID: sdk.String("ducimus"),
                    LastName: sdk.String("Bayer"),
                    Phone: sdk.String("218-904-5606 x971"),
                    Title: sdk.String("Dr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("beatae"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumBoth.ToPointer(),
            },
            SubaccountID: sdk.String("eum"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(752909),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("laboriosam"),
                            Kind: sdk.String("corporis"),
                            Width: sdk.Int(811164),
                        },
                        shared.Size{
                            Height: sdk.Int(54587),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("laudantium"),
                            Kind: sdk.String("facere"),
                            Width: sdk.Int(463383),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("mollitia"),
                },
                Kind: sdk.String("tempore"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("esse"),
                    IconClickTrackingURL: sdk.String("quisquam"),
                    IconViewTrackingURL: sdk.String("maiores"),
                    Program: sdk.String("dolor"),
                    ResourceURL: sdk.String("dolorum"),
                    Size: &shared.Size{
                        Height: sdk.Int(679391),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("aspernatur"),
                        Kind: sdk.String("delectus"),
                        Width: sdk.Int(350774),
                    },
                    XPosition: sdk.String("eveniet"),
                    YPosition: sdk.String("deleniti"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumLandscape.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("minus"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(112450),
                        OffsetSeconds: sdk.Int(852353),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(468188),
                        OffsetSeconds: sdk.Int(591309),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        77284,
                        275943,
                        374960,
                    },
                    Kind: sdk.String("et"),
                },
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("sed"),
        ID: "2148067e-25f4-46be-93e9-dbeccabf1b69",
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "mollitia",
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("explicabo"),
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
            AccountID: sdk.String("cumque"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("voluptates"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sed"),
                Etag: sdk.String("tempora"),
                ID: sdk.String("214cb79e-5fca-41f4-bdf5-05180e5f518f"),
                Kind: sdk.String("delectus"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("harum"),
            },
            ID: sdk.String("exercitationem"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eum"),
                Etag: sdk.String("perferendis"),
                ID: sdk.String("851cc1a3-5190-4ed4-9fe3-19a998d67047"),
                Kind: sdk.String("praesentium"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("molestiae"),
            },
            KeyName: sdk.String("odit"),
            Kind: sdk.String("fuga"),
            Name: sdk.String("Irvin Hyatt"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("325 Tara Roads"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Tony.Hyatt72@hotmail.com"),
                    FirstName: sdk.String("Duncan"),
                    ID: sdk.String("maxime"),
                    LastName: sdk.String("Hansen"),
                    Phone: sdk.String("324-912-7215 x7430"),
                    Title: sdk.String("Mrs."),
                },
                shared.SiteContact{
                    Address: sdk.String("3389 Skylar Burgs"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Mervin_Stamm@yahoo.com"),
                    FirstName: sdk.String("Dariana"),
                    ID: sdk.String("ullam"),
                    LastName: sdk.String("Roob"),
                    Phone: sdk.String("1-493-683-3300"),
                    Title: sdk.String("Mr."),
                },
                shared.SiteContact{
                    Address: sdk.String("70029 Zack Expressway"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Delilah.Morar73@yahoo.com"),
                    FirstName: sdk.String("Trevion"),
                    ID: sdk.String("hic"),
                    LastName: sdk.String("Volkman"),
                    Phone: sdk.String("697.605.4662"),
                    Title: sdk.String("Dr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("ipsam"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumBoth.ToPointer(),
            },
            SubaccountID: sdk.String("sed"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(875225),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("pariatur"),
                            Kind: sdk.String("asperiores"),
                            Width: sdk.Int(286973),
                        },
                        shared.Size{
                            Height: sdk.Int(386674),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("illo"),
                            Kind: sdk.String("repellendus"),
                            Width: sdk.Int(135156),
                        },
                        shared.Size{
                            Height: sdk.Int(936881),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("eius"),
                            Kind: sdk.String("placeat"),
                            Width: sdk.Int(494252),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("praesentium"),
                },
                Kind: sdk.String("ratione"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("officiis"),
                    IconClickTrackingURL: sdk.String("dolorum"),
                    IconViewTrackingURL: sdk.String("in"),
                    Program: sdk.String("quo"),
                    ResourceURL: sdk.String("officia"),
                    Size: &shared.Size{
                        Height: sdk.Int(713075),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("aperiam"),
                        Kind: sdk.String("libero"),
                        Width: sdk.Int(689542),
                    },
                    XPosition: sdk.String("excepturi"),
                    YPosition: sdk.String("totam"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("nihil"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(884779),
                        OffsetSeconds: sdk.Int(995665),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(639041),
                        OffsetSeconds: sdk.Int(910258),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        466428,
                        559947,
                        902155,
                        667476,
                    },
                    Kind: sdk.String("culpa"),
                },
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repellat",
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("fugit"),
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
