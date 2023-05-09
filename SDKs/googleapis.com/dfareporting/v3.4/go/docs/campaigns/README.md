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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("suscipit"),
        ID: "bf5c838f-bb8c-420c-b67f-c4b425e99e62",
        Key: sdk.String("amet"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "porro",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptate"),
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
            AccountID: sdk.String("in"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                ClickThroughURL: sdk.String("omnis"),
                CreativeBundleID: sdk.String("possimus"),
                Enabled: sdk.Bool(false),
                OverrideClickThroughURL: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("recusandae"),
                    Name: sdk.String("Mathew Klocko"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("ratione"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("totam"),
                                Etag: sdk.String("vero"),
                                ID: sdk.String("4baf91e5-06ef-4890-a54b-475f16f56d38"),
                                Kind: sdk.String("nostrum"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("sequi"),
                            },
                            Weight: sdk.Int(805703),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("numquam"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("laborum"),
                                Etag: sdk.String("eligendi"),
                                ID: sdk.String("631b99e2-6ced-48f9-bdb9-410f63bbf817"),
                                Kind: sdk.String("atque"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("molestiae"),
                            },
                            Weight: sdk.Int(722151),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("aperiam"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("vitae"),
                                Etag: sdk.String("mollitia"),
                                ID: sdk.String("fdd78862-4189-4eb4-8873-f5033f19dbf1"),
                                Kind: sdk.String("consequuntur"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("nobis"),
                            },
                            Weight: sdk.Int(892640),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("labore"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("veritatis"),
                                Etag: sdk.String("minima"),
                                ID: sdk.String("2eab9cd7-e522-44a6-a0e1-23b7847ec59e"),
                                Kind: sdk.String("architecto"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("autem"),
                            },
                            Weight: sdk.Int(449861),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumVideoCompletion.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("amet"),
                    Name: sdk.String("Marcus Ruecker"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("libero"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("suscipit"),
                                Etag: sdk.String("illum"),
                                ID: sdk.String("7696ff3c-5747-4501-b57e-44f51f8b084c"),
                                Kind: sdk.String("dolor"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("omnis"),
                            },
                            Weight: sdk.Int(464490),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("officiis"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("dicta"),
                                Etag: sdk.String("excepturi"),
                                ID: sdk.String("3a245467-f948-474c-ad5c-c4972233e66b"),
                                Kind: sdk.String("fugiat"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("voluptatibus"),
                            },
                            Weight: sdk.Int(886684),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("repellendus"),
                    Name: sdk.String("Sandra Rempel"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("officiis"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("delectus"),
                                Etag: sdk.String("magni"),
                                ID: sdk.String("03873205-90cc-4c10-9640-0313b3e5044f"),
                                Kind: sdk.String("aliquid"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("maiores"),
                            },
                            Weight: sdk.Int(894173),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("reprehenderit"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("eos"),
                                Etag: sdk.String("assumenda"),
                                ID: sdk.String("c4077d0c-c3f4-408e-bc15-ceb4d6e1eae0"),
                                Kind: sdk.String("maiores"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("veniam"),
                            },
                            Weight: sdk.Int(683192),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("itaque"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("possimus"),
                                Etag: sdk.String("tenetur"),
                                ID: sdk.String("2acab58b-991c-4926-9db5-89461e7421cb"),
                                Kind: sdk.String("recusandae"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("possimus"),
                            },
                            Weight: sdk.Int(589098),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("sit"),
                    Name: sdk.String("Elsa Adams"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("ratione"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("perferendis"),
                                Etag: sdk.String("distinctio"),
                                ID: sdk.String("69f7ac2f-72f8-4850-8904-911608207888"),
                                Kind: sdk.String("voluptates"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("autem"),
                            },
                            Weight: sdk.Int(423550),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("beatae"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("quos"),
                                Etag: sdk.String("consectetur"),
                                ID: sdk.String("bfe9659e-b40e-4c16-baf7-5b0b532a4da3"),
                                Kind: sdk.String("reprehenderit"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("cum"),
                            },
                            Weight: sdk.Int(633825),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("culpa"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("a"),
                                Etag: sdk.String("magnam"),
                                ID: sdk.String("452c4842-c9b2-4ad3-adaf-e81a88f44445"),
                                Kind: sdk.String("nihil"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("tenetur"),
                            },
                            Weight: sdk.Int(901924),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumVideoCompletion.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("nulla"),
            AdvertiserID: sdk.String("tempora"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quam"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("53f63c82-0937-49aa-a9cd-5fbcf79da18a"),
                Kind: sdk.String("odio"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("magni"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(972934),
                            ID: sdk.String("omnis"),
                            Name: sdk.String("Olga Morissette"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(394491),
                            ID: sdk.String("praesentium"),
                            Name: sdk.String("Jean O'Kon"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(353214),
                            ID: sdk.String("quaerat"),
                            Name: sdk.String("Nick Torp"),
                        },
                    },
                    ID: sdk.String("odio"),
                    Name: sdk.String("Stephanie Rosenbaum"),
                },
            },
            BillingInvoiceCode: sdk.String("necessitatibus"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("rem"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("a"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("nihil"),
            },
            CreativeGroupIds: []string{
                "aut",
                "magni",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("rerum"),
                Name: sdk.String("Orville Schinner"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("alias"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("blanditiis"),
                            Etag: sdk.String("modi"),
                            ID: sdk.String("1f176445-6379-4f3f-b27e-21f862657b36"),
                            Kind: sdk.String("delectus"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("vel"),
                        },
                        Weight: sdk.Int(718816),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("cupiditate"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("hic"),
                            Etag: sdk.String("quis"),
                            ID: sdk.String("87ce525c-6764-41a8-b12e-5047b4c21ccb"),
                            Kind: sdk.String("numquam"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("amet"),
                        },
                        Weight: sdk.Int(632766),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("minus"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("vero"),
            EndDate: types.MustDateFromString("2021-03-07"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("earum"),
                },
            },
            ExternalID: sdk.String("fuga"),
            ID: sdk.String("est"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("distinctio"),
                Etag: sdk.String("fugiat"),
                ID: sdk.String("d88e71f6-c482-452d-b771-e7fd074009ef"),
                Kind: sdk.String("voluptatum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("consequuntur"),
            },
            Kind: sdk.String("natus"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("repellendus"),
            },
            Name: sdk.String("Raymond Schulist"),
            NielsenOcrEnabled: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-05-30"),
            SubaccountID: sdk.String("voluptate"),
            TraffickerEmails: []string{
                "ullam",
                "illum",
                "mollitia",
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "id",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("odio"),
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
        AccessToken: sdk.String("similique"),
        AdvertiserGroupIds: []string{
            "architecto",
        },
        AdvertiserIds: []string{
            "accusamus",
            "illo",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        AtLeastOneOptimizationActivity: sdk.Bool(false),
        Callback: sdk.String("harum"),
        ExcludedIds: []string{
            "a",
            "repudiandae",
            "minus",
        },
        Fields: sdk.String("officia"),
        Ids: []string{
            "illo",
            "cupiditate",
        },
        Key: sdk.String("veritatis"),
        MaxResults: sdk.Int64(304200),
        OauthToken: sdk.String("excepturi"),
        OverriddenEventTagID: sdk.String("atque"),
        PageToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magnam",
        QuotaUser: sdk.String("doloremque"),
        SearchString: sdk.String("cum"),
        SortField: operations.DfareportingCampaignsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCampaignsListSortOrderEnumAscending.ToPointer(),
        SubaccountID: sdk.String("maiores"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("quos"),
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
            AccountID: sdk.String("officiis"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                ClickThroughURL: sdk.String("ab"),
                CreativeBundleID: sdk.String("voluptate"),
                Enabled: sdk.Bool(false),
                OverrideClickThroughURL: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("itaque"),
                    Name: sdk.String("Donald Ernser"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("neque"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("nihil"),
                                Etag: sdk.String("recusandae"),
                                ID: sdk.String("4aa86855-5966-4732-aa5d-cb6682cb70f8"),
                                Kind: sdk.String("minus"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("assumenda"),
                            },
                            Weight: sdk.Int(351495),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("a"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("tempore"),
                                Etag: sdk.String("laboriosam"),
                                ID: sdk.String("e91b9a9f-7484-46e2-8330-9db0536d9e75"),
                                Kind: sdk.String("eligendi"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("consequatur"),
                            },
                            Weight: sdk.Int(26493),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("iure"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("earum"),
                                Etag: sdk.String("quis"),
                                ID: sdk.String("392c11a2-5a8b-4f92-b974-28ad9a9f8bf8"),
                                Kind: sdk.String("explicabo"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("illo"),
                            },
                            Weight: sdk.Int(103760),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("quia"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("ad"),
                                Etag: sdk.String("velit"),
                                ID: sdk.String("59d98387-f7a7-49cd-b2cd-2484da21729f"),
                                Kind: sdk.String("qui"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("eligendi"),
                            },
                            Weight: sdk.Int(253972),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumClick.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("necessitatibus"),
            AdvertiserID: sdk.String("tenetur"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("exercitationem"),
                Etag: sdk.String("nihil"),
                ID: sdk.String("25f1169a-c1e4-41d8-a23c-23e34f2dfa4a"),
                Kind: sdk.String("sunt"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("quam"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(858750),
                            ID: sdk.String("recusandae"),
                            Name: sdk.String("Mrs. Brandon Collins DVM"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(904288),
                            ID: sdk.String("sunt"),
                            Name: sdk.String("Ms. Diane Corwin"),
                        },
                    },
                    ID: sdk.String("deleniti"),
                    Name: sdk.String("Robin Turcotte"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(264656),
                            ID: sdk.String("adipisci"),
                            Name: sdk.String("Dwayne Hickle"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(222140),
                            ID: sdk.String("perspiciatis"),
                            Name: sdk.String("Pat Crist"),
                        },
                    },
                    ID: sdk.String("non"),
                    Name: sdk.String("Ruth Goodwin"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(771146),
                            ID: sdk.String("architecto"),
                            Name: sdk.String("Danielle Bruen"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(791129),
                            ID: sdk.String("sunt"),
                            Name: sdk.String("Dan Kautzer"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(369161),
                            ID: sdk.String("at"),
                            Name: sdk.String("Jessie Larkin"),
                        },
                    },
                    ID: sdk.String("officiis"),
                    Name: sdk.String("Pete Steuber IV"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(201838),
                            ID: sdk.String("harum"),
                            Name: sdk.String("Miss Meredith Hand"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(282720),
                            ID: sdk.String("quidem"),
                            Name: sdk.String("Daniel Bradtke"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(857979),
                            ID: sdk.String("corrupti"),
                            Name: sdk.String("Patricia Kerluke"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(407468),
                            ID: sdk.String("alias"),
                            Name: sdk.String("Sean Reinger"),
                        },
                    },
                    ID: sdk.String("pariatur"),
                    Name: sdk.String("Edwin Buckridge"),
                },
            },
            BillingInvoiceCode: sdk.String("nemo"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("at"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("magnam"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("officiis"),
            },
            CreativeGroupIds: []string{
                "mollitia",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("saepe"),
                Name: sdk.String("Ora Purdy"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("amet"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("quis"),
                            Etag: sdk.String("fugiat"),
                            ID: sdk.String("17638f1e-db78-4359-acc5-cb860f8cd580"),
                            Kind: sdk.String("soluta"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("molestiae"),
                        },
                        Weight: sdk.Int(197872),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("quas"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("sunt"),
                            Etag: sdk.String("aperiam"),
                            ID: sdk.String("e4fe4447-297c-4d3b-9dd3-bbce247b7684"),
                            Kind: sdk.String("repudiandae"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("asperiores"),
                        },
                        Weight: sdk.Int(348633),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("voluptatem"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("beatae"),
                            Etag: sdk.String("qui"),
                            ID: sdk.String("6d71cffb-d0eb-474b-8421-953b44bd3c43"),
                            Kind: sdk.String("veritatis"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("unde"),
                        },
                        Weight: sdk.Int(825303),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("velit"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("accusamus"),
            EndDate: types.MustDateFromString("2022-05-30"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("dolor"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("quod"),
                },
            },
            ExternalID: sdk.String("consequatur"),
            ID: sdk.String("accusantium"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dicta"),
                Etag: sdk.String("illo"),
                ID: sdk.String("39863aa4-1e6c-431c-82f1-fcb51c9a41ff"),
                Kind: sdk.String("distinctio"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("iste"),
            },
            Kind: sdk.String("quod"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quidem"),
            },
            Name: sdk.String("Brad Mraz"),
            NielsenOcrEnabled: sdk.Bool(false),
            StartDate: types.MustDateFromString("2021-10-02"),
            SubaccountID: sdk.String("veniam"),
            TraffickerEmails: []string{
                "doloremque",
                "esse",
                "aliquid",
                "porro",
            },
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("quidem"),
        ID: "f616ea5c-7164-4193-8b90-f2e09d19d2fc",
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "natus",
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("repudiandae"),
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
            AccountID: sdk.String("consequatur"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                ClickThroughURL: sdk.String("nemo"),
                CreativeBundleID: sdk.String("provident"),
                Enabled: sdk.Bool(false),
                OverrideClickThroughURL: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("numquam"),
                    Name: sdk.String("Virgil Fahey"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("adipisci"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("reprehenderit"),
                                Etag: sdk.String("id"),
                                ID: sdk.String("72f90849-d6ae-4d4a-acb7-537cd9222c9f"),
                                Kind: sdk.String("maiores"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("ducimus"),
                            },
                            Weight: sdk.Int(293512),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("inventore"),
                    Name: sdk.String("Rex Pollich"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("vero"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("odio"),
                                Etag: sdk.String("eum"),
                                ID: sdk.String("1f0ca4d4-56ef-4103-9e68-99f0c2001e22"),
                                Kind: sdk.String("minus"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("veniam"),
                            },
                            Weight: sdk.Int(351035),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("quod"),
            AdvertiserID: sdk.String("alias"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nemo"),
                Etag: sdk.String("molestias"),
                ID: sdk.String("4a184d76-d971-4fc8-a0c6-5b037bb8e0cc"),
                Kind: sdk.String("corrupti"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ullam"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(475214),
                            ID: sdk.String("officiis"),
                            Name: sdk.String("Mrs. Freda Thompson"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(941688),
                            ID: sdk.String("sed"),
                            Name: sdk.String("Wilbert Hane"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(863508),
                            ID: sdk.String("quidem"),
                            Name: sdk.String("Gertrude O'Conner DDS"),
                        },
                    },
                    ID: sdk.String("voluptatibus"),
                    Name: sdk.String("Angel Schumm"),
                },
            },
            BillingInvoiceCode: sdk.String("blanditiis"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("assumenda"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("culpa"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("ipsa"),
            },
            CreativeGroupIds: []string{
                "nesciunt",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("et"),
                Name: sdk.String("Jerry Buckridge"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("quaerat"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("aliquid"),
                            Etag: sdk.String("eum"),
                            ID: sdk.String("45c1d81f-2904-42f5-a9b7-aff0ea2216cb"),
                            Kind: sdk.String("saepe"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("dignissimos"),
                        },
                        Weight: sdk.Int(82503),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("harum"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("cumque"),
                            Etag: sdk.String("ab"),
                            ID: sdk.String("63e279a3-b084-4da9-9257-d04f40847a74"),
                            Kind: sdk.String("quia"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("blanditiis"),
                        },
                        Weight: sdk.Int(284832),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("cupiditate"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("nisi"),
            EndDate: types.MustDateFromString("2020-10-19"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("earum"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("debitis"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("impedit"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("reiciendis"),
                },
            },
            ExternalID: sdk.String("ex"),
            ID: sdk.String("tempore"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("provident"),
                Etag: sdk.String("provident"),
                ID: sdk.String("bc63562e-bfdf-455c-a94c-060b06a12877"),
                Kind: sdk.String("autem"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("voluptates"),
            },
            Kind: sdk.String("debitis"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("earum"),
            },
            Name: sdk.String("Angelina Batz"),
            NielsenOcrEnabled: sdk.Bool(false),
            StartDate: types.MustDateFromString("2021-09-23"),
            SubaccountID: sdk.String("itaque"),
            TraffickerEmails: []string{
                "excepturi",
                "quod",
                "in",
                "nesciunt",
            },
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("non"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dignissimos",
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("ipsa"),
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
