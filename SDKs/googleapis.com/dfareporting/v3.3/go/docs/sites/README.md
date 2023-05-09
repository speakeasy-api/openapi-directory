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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("maiores"),
        ID: "a7e55f8c-d959-406f-8681-6b65f2b1ebbf",
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsum",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("animi"),
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
            AccountID: sdk.String("autem"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("corporis"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aperiam"),
                Etag: sdk.String("veniam"),
                ID: sdk.String("6009ff62-9ef4-4912-af73-6235763f28ac"),
                Kind: sdk.String("est"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("velit"),
            },
            ID: sdk.String("ex"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ab"),
                Etag: sdk.String("illo"),
                ID: sdk.String("e1afad65-6d9e-40ea-ac2e-cc07cb9bb688"),
                Kind: sdk.String("perspiciatis"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("accusantium"),
            },
            KeyName: sdk.String("rerum"),
            Kind: sdk.String("voluptatem"),
            Name: sdk.String("Chelsea Kunde"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("705 Braun Crest"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Gerard.Bernhard22@yahoo.com"),
                    FirstName: sdk.String("Arvid"),
                    ID: sdk.String("autem"),
                    LastName: sdk.String("Steuber"),
                    Phone: sdk.String("1-240-296-9945 x1568"),
                    Title: sdk.String("Mr."),
                },
                shared.SiteContact{
                    Address: sdk.String("318 Annabell Square"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Jeffry.Sporer@hotmail.com"),
                    FirstName: sdk.String("Rhett"),
                    ID: sdk.String("iure"),
                    LastName: sdk.String("Koelpin"),
                    Phone: sdk.String("276.287.1603 x6320"),
                    Title: sdk.String("Mr."),
                },
                shared.SiteContact{
                    Address: sdk.String("3384 Quitzon Haven"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Jaycee_Champlin24@gmail.com"),
                    FirstName: sdk.String("Santino"),
                    ID: sdk.String("pariatur"),
                    LastName: sdk.String("Weber"),
                    Phone: sdk.String("1-619-246-0529 x08653"),
                    Title: sdk.String("Mr."),
                },
                shared.SiteContact{
                    Address: sdk.String("09453 Welch Fields"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Don.Powlowski@yahoo.com"),
                    FirstName: sdk.String("Armand"),
                    ID: sdk.String("explicabo"),
                    LastName: sdk.String("Friesen"),
                    Phone: sdk.String("416-412-6512"),
                    Title: sdk.String("Dr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("sunt"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumFlash.ToPointer(),
            },
            SubaccountID: sdk.String("occaecati"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(187271),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("distinctio"),
                            Kind: sdk.String("cum"),
                            Width: sdk.Int(478008),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("consectetur"),
                },
                Kind: sdk.String("nulla"),
                Orientation: shared.SiteVideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("delectus"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(778955),
                        OffsetSeconds: sdk.Int(903578),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(939396),
                        OffsetSeconds: sdk.Int(635433),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        257226,
                        364945,
                        620907,
                        510652,
                    },
                    Kind: sdk.String("aliquam"),
                },
            },
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "minima",
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("tempore"),
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
        AccessToken: sdk.String("at"),
        AdWordsSite: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("sint"),
        CampaignIds: []string{
            "corrupti",
            "illum",
        },
        DirectorySiteIds: []string{
            "impedit",
            "nobis",
        },
        Fields: sdk.String("vitae"),
        Ids: []string{
            "quas",
            "possimus",
        },
        Key: sdk.String("reiciendis"),
        MaxResults: sdk.Int64(450008),
        OauthToken: sdk.String("assumenda"),
        PageToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "at",
        QuotaUser: sdk.String("occaecati"),
        SearchString: sdk.String("eius"),
        SortField: operations.DfareportingSitesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingSitesListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("minus"),
        UnmappedSite: sdk.Bool(false),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("suscipit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Site: &shared.Site{
            AccountID: sdk.String("amet"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("architecto"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("fuga"),
                ID: sdk.String("ba848afe-8902-4b48-934f-a3fc83c1fc5b"),
                Kind: sdk.String("aperiam"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("eligendi"),
            },
            ID: sdk.String("at"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("tempore"),
                Etag: sdk.String("alias"),
                ID: sdk.String("4c48b427-d7de-4963-bf03-e497d897002d"),
                Kind: sdk.String("eveniet"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("repellendus"),
            },
            KeyName: sdk.String("accusamus"),
            Kind: sdk.String("maiores"),
            Name: sdk.String("Mrs. Miguel Wehner"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("02621 Catherine Mountain"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Dulce24@yahoo.com"),
                    FirstName: sdk.String("Lenora"),
                    ID: sdk.String("eius"),
                    LastName: sdk.String("Langosh"),
                    Phone: sdk.String("1-796-786-0158 x3371"),
                    Title: sdk.String("Mrs."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("sit"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumIgnore.ToPointer(),
                },
                VideoActiveViewOptOutTemplate: sdk.Bool(false),
                VpaidAdapterChoiceTemplate: shared.SiteSettingsVpaidAdapterChoiceTemplateEnumDefault.ToPointer(),
            },
            SubaccountID: sdk.String("tempora"),
            VideoSettings: &shared.SiteVideoSettings{
                CompanionSettings: &shared.SiteCompanionSetting{
                    CompanionsDisabled: sdk.Bool(false),
                    EnabledSizes: []shared.Size{
                        shared.Size{
                            Height: sdk.Int(234671),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("numquam"),
                            Kind: sdk.String("minima"),
                            Width: sdk.Int(289582),
                        },
                        shared.Size{
                            Height: sdk.Int(63575),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("unde"),
                            Kind: sdk.String("soluta"),
                            Width: sdk.Int(715435),
                        },
                        shared.Size{
                            Height: sdk.Int(881310),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("maiores"),
                            Kind: sdk.String("perferendis"),
                            Width: sdk.Int(807497),
                        },
                        shared.Size{
                            Height: sdk.Int(652443),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("iste"),
                            Kind: sdk.String("molestias"),
                            Width: sdk.Int(67247),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("saepe"),
                },
                Kind: sdk.String("consectetur"),
                Orientation: shared.SiteVideoSettingsOrientationEnumPortrait.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("dignissimos"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(418585),
                        OffsetSeconds: sdk.Int(331830),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(578196),
                        OffsetSeconds: sdk.Int(367938),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        54106,
                    },
                    Kind: sdk.String("consequuntur"),
                },
            },
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("iusto"),
        ID: "d4e1689b-618b-430b-b7f8-741b4a2d8c2e",
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "autem",
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("ab"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Site: &shared.Site{
            AccountID: sdk.String("recusandae"),
            Approved: sdk.Bool(false),
            DirectorySiteID: sdk.String("perspiciatis"),
            DirectorySiteIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("veritatis"),
                Etag: sdk.String("sunt"),
                ID: sdk.String("84c4418d-a1a7-4e4b-b230-a9c96e52bd49"),
                Kind: sdk.String("at"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("dolore"),
            },
            ID: sdk.String("ratione"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eaque"),
                Etag: sdk.String("culpa"),
                ID: sdk.String("794a7644-f0f2-494e-b55c-0c95bb716363"),
                Kind: sdk.String("distinctio"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("consectetur"),
            },
            KeyName: sdk.String("nesciunt"),
            Kind: sdk.String("autem"),
            Name: sdk.String("Andrea Goldner"),
            SiteContacts: []shared.SiteContact{
                shared.SiteContact{
                    Address: sdk.String("486 Stuart Lock"),
                    ContactType: shared.SiteContactContactTypeEnumTrafficker.ToPointer(),
                    Email: sdk.String("Lola.Koelpin@yahoo.com"),
                    FirstName: sdk.String("Cecelia"),
                    ID: sdk.String("tempora"),
                    LastName: sdk.String("Torphy"),
                    Phone: sdk.String("1-887-741-2403"),
                    Title: sdk.String("Mrs."),
                },
                shared.SiteContact{
                    Address: sdk.String("27943 Reggie Dam"),
                    ContactType: shared.SiteContactContactTypeEnumSalesPerson.ToPointer(),
                    Email: sdk.String("Will50@yahoo.com"),
                    FirstName: sdk.String("Ernestina"),
                    ID: sdk.String("non"),
                    LastName: sdk.String("Lehner"),
                    Phone: sdk.String("640-638-0223 x160"),
                    Title: sdk.String("Dr."),
                },
            },
            SiteSettings: &shared.SiteSettings{
                ActiveViewOptOut: sdk.Bool(false),
                AdBlockingOptOut: sdk.Bool(false),
                DisableNewCookie: sdk.Bool(false),
                TagSetting: &shared.TagSetting{
                    AdditionalKeyValues: sdk.String("eligendi"),
                    IncludeClickThroughUrls: sdk.Bool(false),
                    IncludeClickTracking: sdk.Bool(false),
                    KeywordOption: shared.TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords.ToPointer(),
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
                            Height: sdk.Int(820306),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("possimus"),
                            Kind: sdk.String("quod"),
                            Width: sdk.Int(830184),
                        },
                        shared.Size{
                            Height: sdk.Int(329012),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("expedita"),
                            Kind: sdk.String("aut"),
                            Width: sdk.Int(30686),
                        },
                        shared.Size{
                            Height: sdk.Int(429518),
                            Iab: sdk.Bool(false),
                            ID: sdk.String("molestias"),
                            Kind: sdk.String("atque"),
                            Width: sdk.Int(757896),
                        },
                    },
                    ImageOnly: sdk.Bool(false),
                    Kind: sdk.String("optio"),
                },
                Kind: sdk.String("iste"),
                Orientation: shared.SiteVideoSettingsOrientationEnumLandscape.ToPointer(),
                SkippableSettings: &shared.SiteSkippableSetting{
                    Kind: sdk.String("corporis"),
                    ProgressOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(672127),
                        OffsetSeconds: sdk.Int(182294),
                    },
                    SkipOffset: &shared.VideoOffset{
                        OffsetPercentage: sdk.Int(803381),
                        OffsetSeconds: sdk.Int(886764),
                    },
                    Skippable: sdk.Bool(false),
                },
                TranscodeSettings: &shared.SiteTranscodeSetting{
                    EnabledVideoFormats: []int{
                        402648,
                        473254,
                        223426,
                        104812,
                    },
                    Kind: sdk.String("itaque"),
                },
            },
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quisquam",
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("ratione"),
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
