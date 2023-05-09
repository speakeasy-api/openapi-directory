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
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("distinctio"),
        ID: "d9443de0-e312-420f-98f0-e5aa32c0e5a5",
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "minus",
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("libero"),
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
            AccountID: sdk.String("debitis"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("rem"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("impedit"),
                Etag: sdk.String("recusandae"),
                ID: sdk.String("cf7d2588-d1e3-41d4-8c9a-960b2391850e"),
                Kind: sdk.String("laudantium"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("perferendis"),
            },
            ID: sdk.String("maxime"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("labore"),
                Etag: sdk.String("reiciendis"),
                ID: sdk.String("3e16a360-3a4a-4ee8-b418-d65e23728ea3"),
                Kind: sdk.String("adipisci"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("voluptatum"),
            },
            KeyName: sdk.String("ducimus"),
            Kind: sdk.String("maxime"),
            Name: sdk.String("Francis Daugherty"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("286 Littel Fork"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Fernando51@yahoo.com"),
                    FirstName: sdk.String("Riley"),
                    ID: sdk.String("assumenda"),
                    LastName: sdk.String("Aufderhar"),
                    Phone: sdk.String("681.553.7120 x736"),
                    Title: sdk.String("Dr."),
                },
                shared.SiteContact{
                    Address: sdk.String("348 Maryam Alley"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Ally.Lemke56@hotmail.com"),
                    FirstName: sdk.String("Michel"),
                    ID: sdk.String("quam"),
                    LastName: sdk.String("Baumbach"),
                    Phone: sdk.String("773.483.2631 x35054"),
                    Title: sdk.String("Miss"),
                },
                shared.SiteContact{
                    Address: sdk.String("8969 O'Keefe Brook"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Janiya_Bartell@yahoo.com"),
                    FirstName: sdk.String("Elenor"),
                    ID: sdk.String("explicabo"),
                    LastName: sdk.String("Beatty"),
                    Phone: sdk.String("718.755.0047 x050"),
                    Title: sdk.String("Ms."),
                },
                shared.SiteContact{
                    Address: sdk.String("857 Savanah Mills"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Jennyfer_Rempel@hotmail.com"),
                    FirstName: sdk.String("Emily"),
                    ID: sdk.String("nam"),
                    LastName: sdk.String("Gutkowski"),
                    Phone: sdk.String("1-446-657-0231 x371"),
                    Title: sdk.String("Mrs."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("quas"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumHtml5.ToPointer(),
            },
            SubaccountID: sdk.String("dolor"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(67736),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("velit"),
                            Kind: sdk.String("minus"),
                            Width: sdk.Int(487626),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("veniam"),
                },
                Kind: sdk.String("dolores"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("soluta"),
                    IconClickTrackingURL: sdk.String("officiis"),
                    IconViewTrackingURL: sdk.String("nam"),
                    Program: sdk.String("magnam"),
                    ResourceURL: sdk.String("dignissimos"),
                    Size: &shared.Size{
                        Height: sdk.Int(758236),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("molestiae"),
                        Kind: sdk.String("totam"),
                        Width: sdk.Int(760154),
                    },
                    XPosition: sdk.String("unde"),
                    YPosition: sdk.String("commodi"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumPortrait.ToPointer(),
                PublisherSpecificationID: sdk.String("quidem"),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("eos"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(539971),
                        OffsetSeconds: sdk.Int(531572),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(838381),
                        OffsetSeconds: sdk.Int(252839),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        109123,
                        752518,
                        849338,
                        204263,
                    },
                    Kind: sdk.String("veniam"),
                },
            },
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("nam"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("laudantium"),
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
        AccessToken: sdk.String("ex"),
        AdWordsSite: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("sit"),
        CampaignIds: []string{
            "perspiciatis",
            "neque",
            "corrupti",
        },
        DirectorySiteIds: []string{
            "nam",
        },
        Fields: sdk.String("fugit"),
        Ids: []string{
            "iste",
        },
        Key: sdk.String("esse"),
        MaxResults: sdk.Int64(21818),
        OauthToken: sdk.String("libero"),
        PageToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illum",
        QuotaUser: sdk.String("iste"),
        SearchString: sdk.String("rem"),
        SortField: operations.DfareportingSitesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingSitesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("ipsam"),
        UnmappedSite: sdk.Bool(false),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("eum"),
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
            AccountID: sdk.String("cupiditate"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("ducimus"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("autem"),
                Etag: sdk.String("fugit"),
                ID: sdk.String("a1325d57-f1ef-4622-9584-3d2fed104e8a"),
                Kind: sdk.String("rerum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("labore"),
            },
            ID: sdk.String("repudiandae"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusantium"),
                Etag: sdk.String("error"),
                ID: sdk.String("988c0d8e-57c4-45b8-b87f-797a6692f70b"),
                Kind: sdk.String("ad"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("vel"),
            },
            KeyName: sdk.String("omnis"),
            Kind: sdk.String("vel"),
            Name: sdk.String("Ms. Wm Adams"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("9289 Hauck Glens"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Sylvia_Nikolaus64@yahoo.com"),
                    FirstName: sdk.String("Zakary"),
                    ID: sdk.String("itaque"),
                    LastName: sdk.String("Schiller"),
                    Phone: sdk.String("(669) 585-5352 x32307"),
                    Title: sdk.String("Miss"),
                },
                shared.SiteContact{
                    Address: sdk.String("24163 Hessel Ports"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Cyrus23@gmail.com"),
                    FirstName: sdk.String("Kellie"),
                    ID: sdk.String("esse"),
                    LastName: sdk.String("Koch"),
                    Phone: sdk.String("647-266-6808"),
                    Title: sdk.String("Miss"),
                },
                shared.SiteContact{
                    Address: sdk.String("792 Kayden Underpass"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Alice.Schroeder@yahoo.com"),
                    FirstName: sdk.String("Margarett"),
                    ID: sdk.String("vitae"),
                    LastName: sdk.String("Powlowski"),
                    Phone: sdk.String("555-511-3050 x1130"),
                    Title: sdk.String("Mr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("harum"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumGenerateSeparateTagForEachKeyword.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumBoth.ToPointer(),
            },
            SubaccountID: sdk.String("repellendus"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(200796),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("vero"),
                            Kind: sdk.String("debitis"),
                            Width: sdk.Int(524269),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("atque"),
                },
                Kind: sdk.String("illo"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("architecto"),
                    IconClickTrackingURL: sdk.String("at"),
                    IconViewTrackingURL: sdk.String("quod"),
                    Program: sdk.String("nihil"),
                    ResourceURL: sdk.String("iste"),
                    Size: &shared.Size{
                        Height: sdk.Int(959575),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("quas"),
                        Kind: sdk.String("consequatur"),
                        Width: sdk.Int(840018),
                    },
                    XPosition: sdk.String("quis"),
                    YPosition: sdk.String("quae"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumAny.ToPointer(),
                PublisherSpecificationID: sdk.String("quod"),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("perferendis"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(140828),
                        OffsetSeconds: sdk.Int(337867),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(181079),
                        OffsetSeconds: sdk.Int(496702),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        523527,
                        877738,
                        779613,
                    },
                    Kind: sdk.String("ut"),
                },
            },
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("commodi"),
        ID: "a6e19d38-4552-4d8d-a132-8bdade97594d",
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "error",
        QuotaUser: sdk.String("soluta"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("velit"),
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
            AccountID: sdk.String("illo"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("minima"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("in"),
                Etag: sdk.String("consequuntur"),
                ID: sdk.String("0fbd30eb-0266-469f-968b-20788613a74e"),
                Kind: sdk.String("suscipit"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("sit"),
            },
            ID: sdk.String("laborum"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eligendi"),
                Etag: sdk.String("ullam"),
                ID: sdk.String("8c4c0e4e-d4a8-4792-b2f4-bbc870d7d116"),
                Kind: sdk.String("quibusdam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("illum"),
            },
            KeyName: sdk.String("ipsum"),
            Kind: sdk.String("assumenda"),
            Name: sdk.String("Brent Rempel"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("7198 Jeanne Shores"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Louvenia59@yahoo.com"),
                    FirstName: sdk.String("Riley"),
                    ID: sdk.String("neque"),
                    LastName: sdk.String("Frami"),
                    Phone: sdk.String("(707) 268-5627 x93074"),
                    Title: sdk.String("Mrs."),
                },
                shared.SiteContact{
                    Address: sdk.String("711 Timmothy Summit"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Abbey_Funk@yahoo.com"),
                    FirstName: sdk.String("Dorothy"),
                    ID: sdk.String("ipsum"),
                    LastName: sdk.String("Sanford"),
                    Phone: sdk.String("392.907.2011 x968"),
                    Title: sdk.String("Ms."),
                },
                shared.SiteContact{
                    Address: sdk.String("526 Arely Mountains"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Stephon_Watsica@yahoo.com"),
                    FirstName: sdk.String("Kaylin"),
                    ID: sdk.String("velit"),
                    LastName: sdk.String("Murray"),
                    Phone: sdk.String("435.253.9594 x712"),
                    Title: sdk.String("Mrs."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("quaerat"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumGenerateSeparateTagForEachKeyword.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumFlash.ToPointer(),
            },
            SubaccountID: sdk.String("ratione"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(528655),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("quae"),
                            Kind: sdk.String("reiciendis"),
                            Width: sdk.Int(471580),
                        },
                        shared.Size{
                            Height: sdk.Int(760811),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("praesentium"),
                            Kind: sdk.String("nobis"),
                            Width: sdk.Int(9600),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("libero"),
                },
                Kind: sdk.String("culpa"),
                ObaEnabled: sdk.Bool(false),
                ObaSettings: &shared.ObaIcon{
                    IconClickThroughURL: sdk.String("a"),
                    IconClickTrackingURL: sdk.String("dicta"),
                    IconViewTrackingURL: sdk.String("voluptates"),
                    Program: sdk.String("vitae"),
                    ResourceURL: sdk.String("reprehenderit"),
                    Size: &shared.Size{
                        Height: sdk.Int(144768),
                        Iab: sdk.Bool(false),
                        ID: sdk.String("qui"),
                        Kind: sdk.String("qui"),
                        Width: sdk.Int(221032),
                    },
                    XPosition: sdk.String("suscipit"),
                    YPosition: sdk.String("recusandae"),
                },
                Orientation: shared.SiteVideoSettingsOrientationEnumAny.ToPointer(),
                PublisherSpecificationID: sdk.String("asperiores"),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("consectetur"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(985746),
                        OffsetSeconds: sdk.Int(172507),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(296786),
                        OffsetSeconds: sdk.Int(88013),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        301548,
                    },
                    Kind: sdk.String("provident"),
                },
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("nam"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("aut"),
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
