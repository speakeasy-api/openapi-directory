# Campaigns

### Available Operations

* [DfareportingCampaignsGet](#dfareportingcampaignsget) - Gets one campaign by ID.
* [DfareportingCampaignsInsert](#dfareportingcampaignsinsert) - Inserts a new campaign.
* [DfareportingCampaignsList](#dfareportingcampaignslist) - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* [DfareportingCampaignsPatch](#dfareportingcampaignspatch) - Updates an existing campaign. This method supports patch semantics.
* [DfareportingCampaignsUpdate](#dfareportingcampaignsupdate) - Updates an existing campaign.

## DfareportingCampaignsGet

Gets one campaign by ID.

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
    res, err := s.Campaigns.DfareportingCampaignsGet(ctx, operations.DfareportingCampaignsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("voluptatum"),
        ID: "38fbb8c2-0cb6-47fc-8b42-5e99e6234c9f",
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "in",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DfareportingCampaignsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## DfareportingCampaignsInsert

Inserts a new campaign.

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
    res, err := s.Campaigns.DfareportingCampaignsInsert(ctx, operations.DfareportingCampaignsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Campaign: &shared.Campaign{
            AccountID: sdk.String("expedita"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                Enabled: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("esse"),
                    Name: sdk.String("Tommy Schmidt"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("dolore"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("nam"),
                                Etag: sdk.String("officia"),
                                ID: sdk.String("f91e506e-f890-4a54-b475-f16f56d385a3"),
                                Kind: sdk.String("maxime"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("laborum"),
                            },
                            Weight: sdk.Int(757596),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("autem"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("adipisci"),
                                Etag: sdk.String("sunt"),
                                ID: sdk.String("b99e26ce-d8f9-4fdb-9410-f63bbf817837"),
                                Kind: sdk.String("nam"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("vitae"),
                            },
                            Weight: sdk.Int(650678),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("asperiores"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("at"),
                                Etag: sdk.String("quibusdam"),
                                ID: sdk.String("78862418-9eb4-4487-bf50-33f19dbf125c"),
                                Kind: sdk.String("debitis"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("veritatis"),
                            },
                            Weight: sdk.Int(328744),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("magni"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("itaque"),
                                Etag: sdk.String("error"),
                                ID: sdk.String("b9cd7e52-24a6-4a0e-923b-7847ec59e1f6"),
                                Kind: sdk.String("in"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("amet"),
                            },
                            Weight: sdk.Int(767555),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("optio"),
                    Name: sdk.String("Lamar Goodwin"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("iusto"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("aliquid"),
                                Etag: sdk.String("sint"),
                                ID: sdk.String("6ff3c574-7501-4357-a44f-51f8b084c319"),
                                Kind: sdk.String("quam"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("dicta"),
                            },
                            Weight: sdk.Int(566444),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("consectetur"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("deserunt"),
                                Etag: sdk.String("odit"),
                                ID: sdk.String("45467f94-874c-42d5-8c49-72233e66bd8f"),
                                Kind: sdk.String("officiis"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("repellendus"),
                            },
                            Weight: sdk.Int(12917),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("voluptatem"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("libero"),
                                Etag: sdk.String("excepturi"),
                                ID: sdk.String("79ef2038-7320-4590-8cc1-096400313b3e"),
                                Kind: sdk.String("quis"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("incidunt"),
                            },
                            Weight: sdk.Int(281436),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("delectus"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("aliquid"),
                                Etag: sdk.String("ullam"),
                                ID: sdk.String("fe72dc40-77d0-4cc3-b408-efc15ceb4d6e"),
                                Kind: sdk.String("quasi"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("animi"),
                            },
                            Weight: sdk.Int(900916),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumClick.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("maiores"),
            AdvertiserID: sdk.String("odio"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("veniam"),
                Etag: sdk.String("fuga"),
                ID: sdk.String("edf2acab-58b9-491c-926d-db589461e742"),
                Kind: sdk.String("inventore"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("nobis"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(820322),
                            ID: sdk.String("provident"),
                            Name: sdk.String("Betty Corkery PhD"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(663658),
                            ID: sdk.String("error"),
                            Name: sdk.String("Margaret Rau"),
                        },
                    },
                    ID: sdk.String("maiores"),
                    Name: sdk.String("Lee Runte"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(128594),
                            ID: sdk.String("delectus"),
                            Name: sdk.String("Mr. Casey Haley"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(29346),
                            ID: sdk.String("tempora"),
                            Name: sdk.String("Roger Boehm V"),
                        },
                    },
                    ID: sdk.String("dolores"),
                    Name: sdk.String("Joy Macejkovic"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(793909),
                            ID: sdk.String("autem"),
                            Name: sdk.String("Teresa Lueilwitz"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(945409),
                            ID: sdk.String("necessitatibus"),
                            Name: sdk.String("Ricardo Hermiston"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(694611),
                            ID: sdk.String("magnam"),
                            Name: sdk.String("Mrs. Sophia Schmidt"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(670239),
                            ID: sdk.String("earum"),
                            Name: sdk.String("Miss Audrey Prosacco"),
                        },
                    },
                    ID: sdk.String("ratione"),
                    Name: sdk.String("Alberta Gleason"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(443098),
                            ID: sdk.String("eligendi"),
                            Name: sdk.String("Shannon Nienow"),
                        },
                    },
                    ID: sdk.String("eius"),
                    Name: sdk.String("Lori Schmeler"),
                },
            },
            BillingInvoiceCode: sdk.String("numquam"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("explicabo"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("eligendi"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("cupiditate"),
            },
            CreativeGroupIds: []string{
                "odit",
                "est",
                "at",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("ipsum"),
                Name: sdk.String("Christie Ortiz"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("quasi"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("mollitia"),
                            Etag: sdk.String("voluptatum"),
                            ID: sdk.String("8f444457-3fec-4d47-b53f-63c8209379aa"),
                            Kind: sdk.String("ex"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("optio"),
                        },
                        Weight: sdk.Int(869602),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("ad"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("asperiores"),
                            Etag: sdk.String("nam"),
                            ID: sdk.String("cf79da18-a782-42bf-9589-4e6861adb55f"),
                            Kind: sdk.String("iste"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ipsam"),
                        },
                        Weight: sdk.Int(853450),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("odio"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("ullam"),
                            Etag: sdk.String("inventore"),
                            ID: sdk.String("c9fe8f75-02bf-4dc3-8508-41f176445637"),
                            Kind: sdk.String("molestias"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("ipsum"),
                        },
                        Weight: sdk.Int(944260),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("odit"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("molestiae"),
            EndDate: types.MustDateFromString("2022-07-10"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("doloribus"),
                },
            },
            ExternalID: sdk.String("praesentium"),
            ID: sdk.String("aliquid"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("consequuntur"),
                Etag: sdk.String("laboriosam"),
                ID: sdk.String("57b36fc6-b9f5-487c-a525-c67641a8312e"),
                Kind: sdk.String("veniam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("dolore"),
            },
            Kind: sdk.String("in"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("libero"),
            },
            MeasurementPartnerLink: &shared.MeasurementPartnerCampaignLink{
                LinkStatus: shared.MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnumDoubleVerify.ToPointer(),
                PartnerCampaignID: sdk.String("quia"),
            },
            Name: sdk.String("Robyn Runte"),
            NielsenOcrEnabled: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-10-10"),
            SubaccountID: sdk.String("culpa"),
            TraffickerEmails: []string{
                "minus",
                "vero",
                "impedit",
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugiat",
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DfareportingCampaignsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## DfareportingCampaignsList

Retrieves a list of campaigns, possibly filtered. This method supports paging.

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
    res, err := s.Campaigns.DfareportingCampaignsList(ctx, operations.DfareportingCampaignsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        AdvertiserGroupIds: []string{
            "delectus",
        },
        AdvertiserIds: []string{
            "minus",
            "labore",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        AtLeastOneOptimizationActivity: sdk.Bool(false),
        Callback: sdk.String("sed"),
        ExcludedIds: []string{
            "sed",
            "quibusdam",
        },
        Fields: sdk.String("reprehenderit"),
        Ids: []string{
            "reprehenderit",
            "et",
        },
        Key: sdk.String("eveniet"),
        MaxResults: sdk.Int64(454904),
        OauthToken: sdk.String("hic"),
        OverriddenEventTagID: sdk.String("at"),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "in",
        QuotaUser: sdk.String("eius"),
        SearchString: sdk.String("aut"),
        SortField: operations.DfareportingCampaignsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCampaignsListSortOrderEnumDescending.ToPointer(),
        SubaccountID: sdk.String("accusamus"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.DfareportingCampaignsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignsListResponse != nil {
        // handle response
    }
}
```

## DfareportingCampaignsPatch

Updates an existing campaign. This method supports patch semantics.

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
    res, err := s.Campaigns.DfareportingCampaignsPatch(ctx, operations.DfareportingCampaignsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Campaign: &shared.Campaign{
            AccountID: sdk.String("consequuntur"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                Enabled: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("repellendus"),
                    Name: sdk.String("Raymond Schulist"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("provident"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("voluptate"),
                                Etag: sdk.String("tempore"),
                                ID: sdk.String("5da08c57-fa6c-478a-a16e-19bafeca6191"),
                                Kind: sdk.String("aliquam"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("atque"),
                            },
                            Weight: sdk.Int(116665),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("doloremque"),
                    Name: sdk.String("Sam Gerlach"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("id"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("officiis"),
                                Etag: sdk.String("ab"),
                                ID: sdk.String("70ef03b5-f37e-44aa-8685-55966732aa5d"),
                                Kind: sdk.String("porro"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("commodi"),
                            },
                            Weight: sdk.Int(419585),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("praesentium"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("magni"),
                                Etag: sdk.String("quisquam"),
                                ID: sdk.String("b70f8cfd-5fb6-4e91-b9a9-f74846e2c330"),
                                Kind: sdk.String("excepturi"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("soluta"),
                            },
                            Weight: sdk.Int(15205),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("ullam"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("amet"),
                                Etag: sdk.String("iure"),
                                ID: sdk.String("d9e75ca0-06f5-4392-811a-25a8bf92f974"),
                                Kind: sdk.String("aspernatur"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("fuga"),
                            },
                            Weight: sdk.Int(869718),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("laborum"),
                    Name: sdk.String("Terrell Lockman"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("explicabo"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("odit"),
                                Etag: sdk.String("illo"),
                                ID: sdk.String("125359d9-8387-4f7a-b9cd-72cd2484da21"),
                                Kind: sdk.String("quam"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("omnis"),
                            },
                            Weight: sdk.Int(970108),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("qui"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("similique"),
                                Etag: sdk.String("eligendi"),
                                ID: sdk.String("41ef5725-f116-49ac-9e41-d8a23c23e34f"),
                                Kind: sdk.String("eos"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("repellat"),
                            },
                            Weight: sdk.Int(650538),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("quaerat"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("officia"),
                                Etag: sdk.String("sunt"),
                                ID: sdk.String("97f6de92-2151-4fe1-b120-99853e9f543d"),
                                Kind: sdk.String("praesentium"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("dolore"),
                            },
                            Weight: sdk.Int(253607),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("perspiciatis"),
            AdvertiserID: sdk.String("accusamus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptates"),
                Etag: sdk.String("quia"),
                ID: sdk.String("24460443-bc15-4418-8c2f-56e85da7832e"),
                Kind: sdk.String("mollitia"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("fugiat"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(487625),
                            ID: sdk.String("eligendi"),
                            Name: sdk.String("Opal Bayer"),
                        },
                    },
                    ID: sdk.String("architecto"),
                    Name: sdk.String("Jim Grady"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(101318),
                            ID: sdk.String("tempore"),
                            Name: sdk.String("Ismael Lockman III"),
                        },
                    },
                    ID: sdk.String("temporibus"),
                    Name: sdk.String("Rosemary Abshire"),
                },
            },
            BillingInvoiceCode: sdk.String("libero"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("maiores"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("nam"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("pariatur"),
            },
            CreativeGroupIds: []string{
                "modi",
                "vitae",
                "delectus",
                "delectus",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("nemo"),
                Name: sdk.String("Clifford Torp"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("labore"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("doloribus"),
                            Etag: sdk.String("facilis"),
                            ID: sdk.String("5cb35d17-638f-41ed-b783-59ecc5cb860f"),
                            Kind: sdk.String("quas"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("illum"),
                        },
                        Weight: sdk.Int(356351),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("praesentium"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("perferendis"),
                            Etag: sdk.String("soluta"),
                            ID: sdk.String("a73810e4-fe44-4472-97cd-3b1dd3bbce24"),
                            Kind: sdk.String("nihil"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("voluptate"),
                        },
                        Weight: sdk.Int(400657),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("blanditiis"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("labore"),
                            Etag: sdk.String("repudiandae"),
                            ID: sdk.String("ff50126d-71cf-4fbd-8eb7-4b8421953b44"),
                            Kind: sdk.String("quidem"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("nesciunt"),
                        },
                        Weight: sdk.Int(790773),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("labore"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("sequi"),
                            Etag: sdk.String("veritatis"),
                            ID: sdk.String("59d33e59-53c0-4011-b986-3aa41e6c31cc"),
                            Kind: sdk.String("explicabo"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("dicta"),
                        },
                        Weight: sdk.Int(942436),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("tempore"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("ullam"),
            EndDate: types.MustDateFromString("2022-03-19"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("id"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("ut"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("et"),
                },
            },
            ExternalID: sdk.String("reiciendis"),
            ID: sdk.String("reiciendis"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("distinctio"),
                Etag: sdk.String("itaque"),
                ID: sdk.String("9cbd795e-e65e-4076-8c7a-bf616ea5c716"),
                Kind: sdk.String("modi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("provident"),
            },
            Kind: sdk.String("non"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("dolore"),
            },
            MeasurementPartnerLink: &shared.MeasurementPartnerCampaignLink{
                LinkStatus: shared.MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkOptOutPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                PartnerCampaignID: sdk.String("sit"),
            },
            Name: sdk.String("Ms. Bruce Torp"),
            NielsenOcrEnabled: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-05-20"),
            SubaccountID: sdk.String("possimus"),
            TraffickerEmails: []string{
                "a",
            },
        },
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("natus"),
        ID: "e2e10594-4b93-45d2-b7a7-2f90849d6aed",
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eveniet",
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.DfareportingCampaignsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## DfareportingCampaignsUpdate

Updates an existing campaign.

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
    res, err := s.Campaigns.DfareportingCampaignsUpdate(ctx, operations.DfareportingCampaignsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Campaign: &shared.Campaign{
            AccountID: sdk.String("neque"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                Enabled: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("placeat"),
                    Name: sdk.String("Andy Davis"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("excepturi"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("sapiente"),
                                Etag: sdk.String("maiores"),
                                ID: sdk.String("57491aab-fa2e-4761-b0ca-4d456ef1031e"),
                                Kind: sdk.String("iure"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("perspiciatis"),
                            },
                            Weight: sdk.Int(608192),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("hic"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("accusantium"),
                                Etag: sdk.String("minus"),
                                ID: sdk.String("2001e22c-d55c-4c05-84a1-84d76d971fc8"),
                                Kind: sdk.String("explicabo"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("eligendi"),
                            },
                            Weight: sdk.Int(415367),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("enim"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("harum"),
                                Etag: sdk.String("aut"),
                                ID: sdk.String("37bb8e0c-c885-4187-a4de-04af28c5dddb"),
                                Kind: sdk.String("labore"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("mollitia"),
                            },
                            Weight: sdk.Int(629618),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("quasi"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("quo"),
                                Etag: sdk.String("voluptatibus"),
                                ID: sdk.String("d6d828da-0131-4911-a964-6645c1d81f29"),
                                Kind: sdk.String("perferendis"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("aspernatur"),
                            },
                            Weight: sdk.Int(956150),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("laboriosam"),
                    Name: sdk.String("Rickey Kris"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("consequatur"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("voluptates"),
                                Etag: sdk.String("dolorum"),
                                ID: sdk.String("2216cbe0-71bc-4163-a279-a3b084da9925"),
                                Kind: sdk.String("quam"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("eaque"),
                            },
                            Weight: sdk.Int(276269),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("asperiores"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("eius"),
                                Etag: sdk.String("ipsa"),
                                ID: sdk.String("847a742d-8449-46cb-9eec-f6b99bc63562"),
                                Kind: sdk.String("eveniet"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("asperiores"),
                            },
                            Weight: sdk.Int(838509),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("delectus"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("enim"),
                                Etag: sdk.String("ipsam"),
                                ID: sdk.String("c294c060-b06a-4128-b764-eef6d0c6d6ed"),
                                Kind: sdk.String("excepturi"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("in"),
                            },
                            Weight: sdk.Int(199966),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("temporibus"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("temporibus"),
                                Etag: sdk.String("eum"),
                                ID: sdk.String("34571509-a8e8-470d-bc5a-1f9c242c7b66"),
                                Kind: sdk.String("culpa"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("reiciendis"),
                            },
                            Weight: sdk.Int(214359),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumClick.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("quod"),
            AdvertiserID: sdk.String("dignissimos"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("non"),
                Etag: sdk.String("facere"),
                ID: sdk.String("f5b67198-90f4-42a4-bb43-8d85b260591d"),
                Kind: sdk.String("reprehenderit"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("ad"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(757735),
                            ID: sdk.String("consequuntur"),
                            Name: sdk.String("Lorraine Marquardt"),
                        },
                    },
                    ID: sdk.String("porro"),
                    Name: sdk.String("Shawna Harvey"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(48077),
                            ID: sdk.String("itaque"),
                            Name: sdk.String("Renee Cruickshank"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(339503),
                            ID: sdk.String("nobis"),
                            Name: sdk.String("Kari Jacobson"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(751906),
                            ID: sdk.String("possimus"),
                            Name: sdk.String("Dr. Lucas Toy Sr."),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(139967),
                            ID: sdk.String("inventore"),
                            Name: sdk.String("Bernadette Waelchi"),
                        },
                    },
                    ID: sdk.String("sequi"),
                    Name: sdk.String("Sheldon Leuschke"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(792676),
                            ID: sdk.String("quibusdam"),
                            Name: sdk.String("Betsy Block"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(566089),
                            ID: sdk.String("nostrum"),
                            Name: sdk.String("Domingo Gutkowski"),
                        },
                    },
                    ID: sdk.String("necessitatibus"),
                    Name: sdk.String("Becky Daugherty"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(705781),
                            ID: sdk.String("temporibus"),
                            Name: sdk.String("Jon Wintheiser"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(675677),
                            ID: sdk.String("odit"),
                            Name: sdk.String("Mr. Carlos Gutkowski"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(391105),
                            ID: sdk.String("perspiciatis"),
                            Name: sdk.String("Lora Borer"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(400044),
                            ID: sdk.String("excepturi"),
                            Name: sdk.String("Jerald Schowalter"),
                        },
                    },
                    ID: sdk.String("veniam"),
                    Name: sdk.String("Ms. Leslie Daniel"),
                },
            },
            BillingInvoiceCode: sdk.String("dolores"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("molestias"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("quam"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("molestiae"),
            },
            CreativeGroupIds: []string{
                "voluptate",
                "eum",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("consectetur"),
                Name: sdk.String("Rhonda Collins"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("adipisci"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("atque"),
                            Etag: sdk.String("tempore"),
                            ID: sdk.String("fb5971e9-8190-4557-b89c-edbac7fda395"),
                            Kind: sdk.String("unde"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("pariatur"),
                        },
                        Weight: sdk.Int(426942),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("soluta"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("minus"),
            EndDate: types.MustDateFromString("2022-05-07"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("aliquam"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("quas"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("aut"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("autem"),
                },
            },
            ExternalID: sdk.String("dolorem"),
            ID: sdk.String("explicabo"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rerum"),
                Etag: sdk.String("iste"),
                ID: sdk.String("954b6fa2-2063-4698-a855-3cb10006bef4"),
                Kind: sdk.String("provident"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("illo"),
            },
            Kind: sdk.String("recusandae"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quod"),
            },
            MeasurementPartnerLink: &shared.MeasurementPartnerCampaignLink{
                LinkStatus: shared.MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinked.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnumNone.ToPointer(),
                PartnerCampaignID: sdk.String("voluptas"),
            },
            Name: sdk.String("Pam Krajcik"),
            NielsenOcrEnabled: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-08-07"),
            SubaccountID: sdk.String("aliquid"),
            TraffickerEmails: []string{
                "quisquam",
                "rem",
                "eveniet",
            },
        },
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("magni"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "veritatis",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DfareportingCampaignsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```
