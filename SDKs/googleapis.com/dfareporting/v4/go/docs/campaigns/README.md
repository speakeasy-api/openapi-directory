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
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("ducimus"),
        ID: "f94874c2-d5cc-4497-a233-e66bd8fe5d00",
        Key: sdk.String("libero"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "odio",
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("delectus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Campaign: &shared.Campaign{
            AccountID: sdk.String("sit"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                Enabled: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("voluptatum"),
                    Name: sdk.String("Mrs. Gladys Collins"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("impedit"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("quod"),
                                Etag: sdk.String("quo"),
                                ID: sdk.String("10964003-13b3-4e50-84f6-5fe72dc4077d"),
                                Kind: sdk.String("consequatur"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("placeat"),
                            },
                            Weight: sdk.Int(238566),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumVideoCompletion.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("non"),
            AdvertiserID: sdk.String("accusantium"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corrupti"),
                Etag: sdk.String("itaque"),
                ID: sdk.String("fc15ceb4-d6e1-4eae-8f75-aedf2acab58b"),
                Kind: sdk.String("cupiditate"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("et"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(153513),
                            ID: sdk.String("suscipit"),
                            Name: sdk.String("Dewey Reilly"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(576595),
                            ID: sdk.String("eius"),
                            Name: sdk.String("Joyce Terry"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(144621),
                            ID: sdk.String("inventore"),
                            Name: sdk.String("Robin Walsh"),
                        },
                    },
                    ID: sdk.String("provident"),
                    Name: sdk.String("Betty Corkery PhD"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(623868),
                            ID: sdk.String("ratione"),
                            Name: sdk.String("Verna Hodkiewicz"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(470017),
                            ID: sdk.String("fuga"),
                            Name: sdk.String("Carlos Wunsch DVM"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(550519),
                            ID: sdk.String("deleniti"),
                            Name: sdk.String("Karen Barrows I"),
                        },
                    },
                    ID: sdk.String("occaecati"),
                    Name: sdk.String("Ms. Carolyn Jacobson"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(459865),
                            ID: sdk.String("quas"),
                            Name: sdk.String("Dwayne Volkman"),
                        },
                    },
                    ID: sdk.String("vel"),
                    Name: sdk.String("Olga Feeney"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(595152),
                            ID: sdk.String("suscipit"),
                            Name: sdk.String("Lindsey Trantow"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(43270),
                            ID: sdk.String("accusamus"),
                            Name: sdk.String("Willie Hodkiewicz"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(937687),
                            ID: sdk.String("nihil"),
                            Name: sdk.String("Olivia Auer"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(191571),
                            ID: sdk.String("eos"),
                            Name: sdk.String("Edwin Stark"),
                        },
                    },
                    ID: sdk.String("reprehenderit"),
                    Name: sdk.String("Jonathon Nader"),
                },
            },
            BillingInvoiceCode: sdk.String("magnam"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("eius"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("ad"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quia"),
            },
            CreativeGroupIds: []string{
                "quaerat",
                "voluptatum",
                "numquam",
                "explicabo",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("eligendi"),
                Name: sdk.String("Garry Conn"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("explicabo"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("nulla"),
                            Etag: sdk.String("est"),
                            ID: sdk.String("fe81a88f-4444-4573-becd-47353f63c820"),
                            Kind: sdk.String("natus"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("nihil"),
                        },
                        Weight: sdk.Int(604027),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClickAndImpression.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("id"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("ex"),
            EndDate: types.MustDateFromString("2021-06-25"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("ad"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("asperiores"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("nam"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("cumque"),
                },
            },
            ExternalID: sdk.String("sapiente"),
            ID: sdk.String("quam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("occaecati"),
                Etag: sdk.String("repellendus"),
                ID: sdk.String("a18a7822-bf95-4894-a686-1adb55f9e5d7"),
                Kind: sdk.String("ullam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("eligendi"),
            },
            Kind: sdk.String("occaecati"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("doloribus"),
            },
            MeasurementPartnerLink: &shared.MeasurementPartnerCampaignLink{
                LinkStatus: shared.MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerModeChangePending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                PartnerCampaignID: sdk.String("a"),
            },
            Name: sdk.String("Regina Ankunding"),
            StartDate: types.MustDateFromString("2020-06-04"),
            SubaccountID: sdk.String("quod"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("alias"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illo",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("molestiae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        AdvertiserGroupIds: []string{
            "nostrum",
            "ex",
        },
        AdvertiserIds: []string{
            "voluptate",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Archived: sdk.Bool(false),
        AtLeastOneOptimizationActivity: sdk.Bool(false),
        Callback: sdk.String("voluptatibus"),
        ExcludedIds: []string{
            "hic",
        },
        Fields: sdk.String("quidem"),
        Ids: []string{
            "molestiae",
        },
        Key: sdk.String("accusamus"),
        MaxResults: sdk.Int64(159009),
        OauthToken: sdk.String("inventore"),
        OverriddenEventTagID: sdk.String("doloribus"),
        PageToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquid",
        QuotaUser: sdk.String("consequuntur"),
        SearchString: sdk.String("laboriosam"),
        SortField: operations.DfareportingCampaignsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingCampaignsListSortOrderEnumAscending.ToPointer(),
        SubaccountID: sdk.String("soluta"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("vel"),
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
            AccountID: sdk.String("maxime"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                Enabled: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("distinctio"),
                    Name: sdk.String("Moses Hayes"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("saepe"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("ad"),
                                Etag: sdk.String("magni"),
                                ID: sdk.String("5c67641a-8312-4e50-87b4-c21ccb423abc"),
                                Kind: sdk.String("vero"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("omnis"),
                            },
                            Weight: sdk.Int(92279),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("earum"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("fuga"),
                                Etag: sdk.String("est"),
                                ID: sdk.String("bdd88e71-f6c4-4825-ad77-71e7fd074009"),
                                Kind: sdk.String("accusamus"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("voluptatum"),
                            },
                            Weight: sdk.Int(817249),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("consequuntur"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("natus"),
                                Etag: sdk.String("repellendus"),
                                ID: sdk.String("e1dd7097-b5da-408c-97fa-6c78a216e19b"),
                                Kind: sdk.String("laborum"),
                                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                                Value: sdk.String("repudiandae"),
                            },
                            Weight: sdk.Int(795253),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("officia"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("laboriosam"),
                                Etag: sdk.String("illo"),
                                ID: sdk.String("91498140-b64f-4f8a-a170-ef03b5f37e4a"),
                                Kind: sdk.String("mollitia"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("suscipit"),
                            },
                            Weight: sdk.Int(557651),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostClick.ToPointer(),
                },
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("enim"),
                    Name: sdk.String("Cora Jenkins"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("magni"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("animi"),
                                Etag: sdk.String("dolorum"),
                                ID: sdk.String("5dcb6682-cb70-4f8c-bd5f-b6e91b9a9f74"),
                                Kind: sdk.String("laudantium"),
                                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                                Value: sdk.String("aliquid"),
                            },
                            Weight: sdk.Int(918005),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumClick.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("quod"),
            AdvertiserID: sdk.String("dolorem"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("neque"),
                Etag: sdk.String("ipsa"),
                ID: sdk.String("9db0536d-9e75-4ca0-86f5-392c11a25a8b"),
                Kind: sdk.String("maiores"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("sunt"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(499461),
                            ID: sdk.String("dolore"),
                            Name: sdk.String("Leona Pfannerstill"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(673400),
                            ID: sdk.String("provident"),
                            Name: sdk.String("Johnnie Roberts"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(129156),
                            ID: sdk.String("odit"),
                            Name: sdk.String("Julie Cremin"),
                        },
                    },
                    ID: sdk.String("ullam"),
                    Name: sdk.String("Rufus Moore"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(489225),
                            ID: sdk.String("repellat"),
                            Name: sdk.String("Molly Kling"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(828267),
                            ID: sdk.String("nihil"),
                            Name: sdk.String("Marianne Stoltenberg"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(531967),
                            ID: sdk.String("dolore"),
                            Name: sdk.String("Ms. Lorenzo Daugherty"),
                        },
                    },
                    ID: sdk.String("omnis"),
                    Name: sdk.String("Clarence Murazik"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(899747),
                            ID: sdk.String("tenetur"),
                            Name: sdk.String("Jackie Crist"),
                        },
                    },
                    ID: sdk.String("dicta"),
                    Name: sdk.String("Agnes Marvin"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(931393),
                            ID: sdk.String("aliquam"),
                            Name: sdk.String("Paulette Legros"),
                        },
                    },
                    ID: sdk.String("neque"),
                    Name: sdk.String("Carlos Doyle"),
                },
            },
            BillingInvoiceCode: sdk.String("labore"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("repellat"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("eos"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quibusdam"),
            },
            CreativeGroupIds: []string{
                "mollitia",
                "quaerat",
                "officia",
                "sunt",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("perspiciatis"),
                Name: sdk.String("Elsa Kerluke"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("aspernatur"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("aspernatur"),
                            Etag: sdk.String("et"),
                            ID: sdk.String("51fe1712-0998-453e-9f54-3d854439ee22"),
                            Kind: sdk.String("ut"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("laboriosam"),
                        },
                        Weight: sdk.Int(37044),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("tempora"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("aliquam"),
                            Etag: sdk.String("dolorem"),
                            ID: sdk.String("bc154188-c2f5-46e8-9da7-832eabd617c3"),
                            Kind: sdk.String("harum"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("pariatur"),
                        },
                        Weight: sdk.Int(323290),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("architecto"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("culpa"),
                            Etag: sdk.String("aliquam"),
                            ID: sdk.String("4bf01bad-8706-4d46-882b-fbdc41ff5d4e"),
                            Kind: sdk.String("sed"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("saepe"),
                        },
                        Weight: sdk.Int(289373),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumVideoCompletion.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("facilis"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("minima"),
            EndDate: types.MustDateFromString("2020-11-21"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("quis"),
                },
            },
            ExternalID: sdk.String("fugiat"),
            ID: sdk.String("beatae"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dignissimos"),
                Etag: sdk.String("nisi"),
                ID: sdk.String("38f1edb7-8359-4ecc-9cb8-60f8cd580ba7"),
                Kind: sdk.String("nesciunt"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("sunt"),
            },
            Kind: sdk.String("aperiam"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("itaque"),
            },
            MeasurementPartnerLink: &shared.MeasurementPartnerCampaignLink{
                LinkStatus: shared.MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnumDoubleVerify.ToPointer(),
                PartnerCampaignID: sdk.String("necessitatibus"),
            },
            Name: sdk.String("Gail Gutkowski"),
            StartDate: types.MustDateFromString("2022-01-31"),
            SubaccountID: sdk.String("cumque"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("illo"),
        ID: "dd3bbce2-47b7-4684-aff5-0126d71cffbd",
        Key: sdk.String("aut"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rerum",
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("distinctio"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Campaign: &shared.Campaign{
            AccountID: sdk.String("quaerat"),
            AdBlockingConfiguration: &shared.AdBlockingConfiguration{
                Enabled: sdk.Bool(false),
            },
            AdditionalCreativeOptimizationConfigurations: []shared.CreativeOptimizationConfiguration{
                shared.CreativeOptimizationConfiguration{
                    ID: sdk.String("ab"),
                    Name: sdk.String("Herman Effertz"),
                    OptimizationActivitys: []shared.OptimizationActivity{
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("quidem"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("nulla"),
                                Etag: sdk.String("nesciunt"),
                                ID: sdk.String("c43159d3-3e59-453c-8011-39863aa41e6c"),
                                Kind: sdk.String("adipisci"),
                                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                                Value: sdk.String("maxime"),
                            },
                            Weight: sdk.Int(783906),
                        },
                        shared.OptimizationActivity{
                            FloodlightActivityID: sdk.String("explicabo"),
                            FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                                DimensionName: sdk.String("reiciendis"),
                                Etag: sdk.String("dicta"),
                                ID: sdk.String("fcb51c9a-41ff-4be9-8bd7-95ee65e076cc"),
                                Kind: sdk.String("molestiae"),
                                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                                Value: sdk.String("quidem"),
                            },
                            Weight: sdk.Int(962171),
                        },
                    },
                    OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostImpression.ToPointer(),
                },
            },
            AdvertiserGroupID: sdk.String("beatae"),
            AdvertiserID: sdk.String("suscipit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eveniet"),
                Etag: sdk.String("mollitia"),
                ID: sdk.String("5c716419-34b9-40f2-a09d-19d2fc2f9e2e"),
                Kind: sdk.String("vitae"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("nemo"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentGroups: []shared.AudienceSegmentGroup{
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(256632),
                            ID: sdk.String("tempore"),
                            Name: sdk.String("Allen Hamill"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(240555),
                            ID: sdk.String("reprehenderit"),
                            Name: sdk.String("Kelly Daniel"),
                        },
                    },
                    ID: sdk.String("doloremque"),
                    Name: sdk.String("Oscar Marquardt"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(930306),
                            ID: sdk.String("assumenda"),
                            Name: sdk.String("Amelia Upton"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(492922),
                            ID: sdk.String("nemo"),
                            Name: sdk.String("Joy Schroeder"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(180470),
                            ID: sdk.String("odit"),
                            Name: sdk.String("Kendra Mante"),
                        },
                    },
                    ID: sdk.String("exercitationem"),
                    Name: sdk.String("Miss Joanne Morar"),
                },
                shared.AudienceSegmentGroup{
                    AudienceSegments: []shared.AudienceSegment{
                        shared.AudienceSegment{
                            Allocation: sdk.Int(958962),
                            ID: sdk.String("laborum"),
                            Name: sdk.String("Eula Kuhic DVM"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(34109),
                            ID: sdk.String("quo"),
                            Name: sdk.String("Troy Stroman"),
                        },
                        shared.AudienceSegment{
                            Allocation: sdk.Int(398578),
                            ID: sdk.String("vero"),
                            Name: sdk.String("Keith Bailey PhD"),
                        },
                    },
                    ID: sdk.String("iure"),
                    Name: sdk.String("Freddie Mohr DDS"),
                },
            },
            BillingInvoiceCode: sdk.String("explicabo"),
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("accusantium"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comment: sdk.String("ipsa"),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("quasi"),
            },
            CreativeGroupIds: []string{
                "quia",
                "aspernatur",
                "minus",
                "illum",
            },
            CreativeOptimizationConfiguration: &shared.CreativeOptimizationConfiguration{
                ID: sdk.String("veniam"),
                Name: sdk.String("Mrs. Bernadette Schmidt"),
                OptimizationActivitys: []shared.OptimizationActivity{
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("similique"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("quasi"),
                            Etag: sdk.String("laudantium"),
                            ID: sdk.String("4d76d971-fc82-40c6-9b03-7bb8e0cc8851"),
                            Kind: sdk.String("quas"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("officiis"),
                        },
                        Weight: sdk.Int(287293),
                    },
                    shared.OptimizationActivity{
                        FloodlightActivityID: sdk.String("nulla"),
                        FloodlightActivityIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("accusamus"),
                            Etag: sdk.String("consequatur"),
                            ID: sdk.String("4af28c5d-ddb4-46aa-9cfd-6d828da01319"),
                            Kind: sdk.String("inventore"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("qui"),
                        },
                        Weight: sdk.Int(603348),
                    },
                },
                OptimizationModel: shared.CreativeOptimizationConfigurationOptimizationModelEnumPostImpression.ToPointer(),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("quaerat"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DefaultLandingPageID: sdk.String("aliquid"),
            EndDate: types.MustDateFromString("2022-09-09"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("cumque"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("ab"),
                },
            },
            ExternalID: sdk.String("quibusdam"),
            ID: sdk.String("blanditiis"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("et"),
                Etag: sdk.String("delectus"),
                ID: sdk.String("29042f56-9b7a-4ff0-aa22-16cbe071bc16"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("sed"),
            },
            Kind: sdk.String("quam"),
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("unde"),
            },
            MeasurementPartnerLink: &shared.MeasurementPartnerCampaignLink{
                LinkStatus: shared.MeasurementPartnerCampaignLinkLinkStatusEnumMeasurementPartnerLinkOptOutPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnumNone.ToPointer(),
                PartnerCampaignID: sdk.String("libero"),
            },
            Name: sdk.String("Mattie Gutkowski"),
            StartDate: types.MustDateFromString("2021-11-05"),
            SubaccountID: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eius",
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("incidunt"),
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
