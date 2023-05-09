# Ads

### Available Operations

* [DfareportingAdsGet](#dfareportingadsget) - Gets one ad by ID.
* [DfareportingAdsInsert](#dfareportingadsinsert) - Inserts a new ad.
* [DfareportingAdsList](#dfareportingadslist) - Retrieves a list of ads, possibly filtered. This method supports paging.
* [DfareportingAdsPatch](#dfareportingadspatch) - Updates an existing ad. This method supports patch semantics.
* [DfareportingAdsUpdate](#dfareportingadsupdate) - Updates an existing ad.

## DfareportingAdsGet

Gets one ad by ID.

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
    res, err := s.Ads.DfareportingAdsGet(ctx, operations.DfareportingAdsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("facilis"),
        ID: "d74dd39c-0f5d-42cf-b7c7-0a45626d4368",
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "maiores",
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.DfareportingAdsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ad != nil {
        // handle response
    }
}
```

## DfareportingAdsInsert

Inserts a new ad.

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
    res, err := s.Ads.DfareportingAdsInsert(ctx, operations.DfareportingAdsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Ad: &shared.Ad{
            AccountID: sdk.String("voluptatibus"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("nostrum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sapiente"),
                Etag: sdk.String("quisquam"),
                ID: sdk.String("e6c55614-6c3e-4250-bb00-8c42e141aac3"),
                Kind: sdk.String("eum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nobis"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentID: sdk.String("quas"),
            CampaignID: sdk.String("assumenda"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nulla"),
                Etag: sdk.String("voluptas"),
                ID: sdk.String("b1442907-4747-478a-bbd4-66d28c10ab3c"),
                Kind: sdk.String("illum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("fuga"),
            },
            ClickThroughURL: &shared.ClickThroughURL{
                ComputedClickThroughURL: sdk.String("eius"),
                CustomClickThroughURL: sdk.String("eos"),
                DefaultLandingPage: sdk.Bool(false),
                LandingPageID: sdk.String("voluptas"),
            },
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("ab"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comments: sdk.String("cupiditate"),
            Compatibility: shared.AdCompatibilityEnumDisplay.ToPointer(),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("tempora"),
            },
            CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("ipsam"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                },
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("sequi"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                },
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("esse"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                },
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("aperiam"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                },
            },
            CreativeRotation: &shared.CreativeRotation{
                CreativeAssignments: []shared.CreativeAssignment{
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("dignissimos"),
                            CustomClickThroughURL: sdk.String("inventore"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("nihil"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("accusamus"),
                                    CustomClickThroughURL: sdk.String("aliquam"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("odio"),
                                },
                                CreativeID: sdk.String("occaecati"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("commodi"),
                                    CustomClickThroughURL: sdk.String("sapiente"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("dolores"),
                                },
                                CreativeID: sdk.String("deserunt"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("molestiae"),
                                    CustomClickThroughURL: sdk.String("accusantium"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("porro"),
                                },
                                CreativeID: sdk.String("eum"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("praesentium"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("deleniti"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("fuga"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("incidunt"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("atque"),
                            Etag: sdk.String("explicabo"),
                            ID: sdk.String("562f222e-9817-4ee1-bcbe-61e6b7b95bc0"),
                            Kind: sdk.String("culpa"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("adipisci"),
                        },
                        EndTime: types.MustTimeFromString("2022-07-09T05:02:22.250Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("minus"),
                                    CustomClickThroughURL: sdk.String("quaerat"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("sapiente"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("consectetur"),
                            },
                        },
                        Sequence: sdk.Int(458139),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2021-10-26T13:57:26.455Z"),
                        Weight: sdk.Int(953722),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("nulla"),
                            CustomClickThroughURL: sdk.String("quas"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("esse"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("a"),
                                    CustomClickThroughURL: sdk.String("error"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("sint"),
                                },
                                CreativeID: sdk.String("pariatur"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("quia"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("asperiores"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("veritatis"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("quasi"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("culpa"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("aliquid"),
                            Etag: sdk.String("tenetur"),
                            ID: sdk.String("1e674bdb-04f1-4575-a082-d68ea19f1d17"),
                            Kind: sdk.String("ipsa"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("veritatis"),
                        },
                        EndTime: types.MustTimeFromString("2022-10-06T10:21:42.350Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("temporibus"),
                                    CustomClickThroughURL: sdk.String("accusantium"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("rem"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("aut"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("laudantium"),
                                    CustomClickThroughURL: sdk.String("eum"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("mollitia"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("ab"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("corrupti"),
                                    CustomClickThroughURL: sdk.String("non"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("voluptatem"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("dolor"),
                            },
                        },
                        Sequence: sdk.Int(580152),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-03-25T13:15:35.424Z"),
                        Weight: sdk.Int(131055),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("voluptas"),
                            CustomClickThroughURL: sdk.String("aut"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("dignissimos"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("maiores"),
                                    CustomClickThroughURL: sdk.String("natus"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("velit"),
                                },
                                CreativeID: sdk.String("voluptatibus"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("asperiores"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("ea"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("consequuntur"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("repellendus"),
                            Etag: sdk.String("officia"),
                            ID: sdk.String("c7af515c-c413-4aa6-baae-8d67864dbb67"),
                            Kind: sdk.String("corporis"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("assumenda"),
                        },
                        EndTime: types.MustTimeFromString("2022-01-28T09:17:23.255Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("aperiam"),
                                    CustomClickThroughURL: sdk.String("cum"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("consectetur"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("in"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("exercitationem"),
                                    CustomClickThroughURL: sdk.String("earum"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("facere"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("numquam"),
                            },
                        },
                        Sequence: sdk.Int(985492),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-01-12T07:48:28.322Z"),
                        Weight: sdk.Int(697142),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("saepe"),
                            CustomClickThroughURL: sdk.String("necessitatibus"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("dolore"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("asperiores"),
                                    CustomClickThroughURL: sdk.String("adipisci"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("non"),
                                },
                                CreativeID: sdk.String("amet"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("dignissimos"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("debitis"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("consectetur"),
                            Etag: sdk.String("corporis"),
                            ID: sdk.String("b60eb1ea-4265-455b-a3c2-8744ed53b88f"),
                            Kind: sdk.String("nesciunt"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("corrupti"),
                        },
                        EndTime: types.MustTimeFromString("2021-06-10T23:47:11.065Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("exercitationem"),
                                    CustomClickThroughURL: sdk.String("nobis"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("sit"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("rerum"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("sed"),
                                    CustomClickThroughURL: sdk.String("reiciendis"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("explicabo"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("asperiores"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("facilis"),
                                    CustomClickThroughURL: sdk.String("voluptate"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("expedita"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("ab"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("iste"),
                                    CustomClickThroughURL: sdk.String("dolore"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("laborum"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("sed"),
                            },
                        },
                        Sequence: sdk.Int(447516),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-04-21T22:21:50.112Z"),
                        Weight: sdk.Int(131289),
                    },
                },
                CreativeOptimizationConfigurationID: sdk.String("voluptas"),
                Type: shared.CreativeRotationTypeEnumCreativeRotationTypeRandom.ToPointer(),
                WeightCalculationStrategy: shared.CreativeRotationWeightCalculationStrategyEnumWeightStrategyEqual.ToPointer(),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumSunday,
                    shared.DayPartTargetingDaysOfWeekEnumSunday,
                },
                HoursOfDay: []int{
                    967795,
                },
                UserLocalTime: sdk.Bool(false),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("perferendis"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DeliverySchedule: &shared.DeliverySchedule{
                FrequencyCap: &shared.FrequencyCap{
                    Duration: sdk.String("corrupti"),
                    Impressions: sdk.String("maiores"),
                },
                HardCutoff: sdk.Bool(false),
                ImpressionRatio: sdk.String("incidunt"),
                Priority: shared.DeliverySchedulePriorityEnumAdPriority03.ToPointer(),
            },
            DynamicClickTracker: sdk.Bool(false),
            EndTime: types.MustTimeFromString("2022-06-26T03:32:06.720Z"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("ipsum"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("ea"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("occaecati"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("quos"),
                },
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("ES"),
                        CountryDartID: sdk.String("tempora"),
                        DartID: sdk.String("voluptate"),
                        Kind: sdk.String("reiciendis"),
                        MetroCode: sdk.String("ex"),
                        MetroDmaID: sdk.String("sit"),
                        Name: sdk.String("Cecelia Lakin"),
                        RegionCode: sdk.String("incidunt"),
                        RegionDartID: sdk.String("ipsam"),
                    },
                    shared.City{
                        CountryCode: sdk.String("TN"),
                        CountryDartID: sdk.String("rem"),
                        DartID: sdk.String("sit"),
                        Kind: sdk.String("nobis"),
                        MetroCode: sdk.String("error"),
                        MetroDmaID: sdk.String("veniam"),
                        Name: sdk.String("Sophie Wisoky"),
                        RegionCode: sdk.String("aperiam"),
                        RegionDartID: sdk.String("saepe"),
                    },
                    shared.City{
                        CountryCode: sdk.String("EE"),
                        CountryDartID: sdk.String("veniam"),
                        DartID: sdk.String("in"),
                        Kind: sdk.String("officiis"),
                        MetroCode: sdk.String("beatae"),
                        MetroDmaID: sdk.String("laudantium"),
                        Name: sdk.String("Mabel Robel"),
                        RegionCode: sdk.String("voluptatum"),
                        RegionDartID: sdk.String("error"),
                    },
                    shared.City{
                        CountryCode: sdk.String("VA"),
                        CountryDartID: sdk.String("expedita"),
                        DartID: sdk.String("debitis"),
                        Kind: sdk.String("neque"),
                        MetroCode: sdk.String("dolorum"),
                        MetroDmaID: sdk.String("nostrum"),
                        Name: sdk.String("Lorenzo Lowe"),
                        RegionCode: sdk.String("atque"),
                        RegionDartID: sdk.String("fugit"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("TC"),
                        DartID: sdk.String("voluptatem"),
                        Kind: sdk.String("culpa"),
                        Name: sdk.String("Miguel Adams"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("AM"),
                        DartID: sdk.String("voluptatum"),
                        Kind: sdk.String("quas"),
                        Name: sdk.String("Zachary Borer"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("AM"),
                        CountryDartID: sdk.String("vel"),
                        DartID: sdk.String("nostrum"),
                        DmaID: sdk.String("saepe"),
                        Kind: sdk.String("error"),
                        MetroCode: sdk.String("consequatur"),
                        Name: sdk.String("Lela Ebert Sr."),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("labore"),
                        CountryCode: sdk.String("PE"),
                        CountryDartID: sdk.String("atque"),
                        ID: sdk.String("abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8"),
                        Kind: sdk.String("suscipit"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("quidem"),
                        CountryCode: sdk.String("SJ"),
                        CountryDartID: sdk.String("et"),
                        ID: sdk.String("73d689ee-e952-46f8-9986-e881ead4f0e1"),
                        Kind: sdk.String("accusantium"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("beatae"),
                        CountryCode: sdk.String("CI"),
                        CountryDartID: sdk.String("enim"),
                        ID: sdk.String("63f94e29-e973-4e92-aa57-a15be3e06080"),
                        Kind: sdk.String("molestiae"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("CL"),
                        CountryDartID: sdk.String("cum"),
                        DartID: sdk.String("iure"),
                        Kind: sdk.String("necessitatibus"),
                        Name: sdk.String("Maggie Rau"),
                        RegionCode: sdk.String("aliquam"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("GF"),
                        CountryDartID: sdk.String("repellat"),
                        DartID: sdk.String("alias"),
                        Kind: sdk.String("corporis"),
                        Name: sdk.String("Christian O'Conner DVM"),
                        RegionCode: sdk.String("reiciendis"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("CI"),
                        CountryDartID: sdk.String("id"),
                        DartID: sdk.String("minima"),
                        Kind: sdk.String("dolore"),
                        Name: sdk.String("Danny Berge"),
                        RegionCode: sdk.String("quaerat"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("KM"),
                        CountryDartID: sdk.String("ex"),
                        DartID: sdk.String("ut"),
                        Kind: sdk.String("culpa"),
                        Name: sdk.String("Raquel Larkin"),
                        RegionCode: sdk.String("recusandae"),
                    },
                },
            },
            ID: sdk.String("esse"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("provident"),
                Etag: sdk.String("quis"),
                ID: sdk.String("6f9251a5-a9da-4660-bf57-bfaad4f9efc1"),
                Kind: sdk.String("rerum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("quis"),
            },
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("inventore"),
            },
            Kind: sdk.String("fugit"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("quae"),
                        Kind: sdk.String("perferendis"),
                        LanguageCode: sdk.String("velit"),
                        Name: sdk.String("Agnes Gibson"),
                    },
                    shared.Language{
                        ID: sdk.String("impedit"),
                        Kind: sdk.String("eos"),
                        LanguageCode: sdk.String("sapiente"),
                        Name: sdk.String("Ms. Cheryl Hane"),
                    },
                    shared.Language{
                        ID: sdk.String("earum"),
                        Kind: sdk.String("soluta"),
                        LanguageCode: sdk.String("hic"),
                        Name: sdk.String("Timothy Weber"),
                    },
                    shared.Language{
                        ID: sdk.String("debitis"),
                        Kind: sdk.String("aliquid"),
                        LanguageCode: sdk.String("porro"),
                        Name: sdk.String("Connie Corkery"),
                    },
                },
            },
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("ratione"),
            },
            Name: sdk.String("Mr. Santiago Stoltenberg IV"),
            PlacementAssignments: []shared.PlacementAssignment{
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("occaecati"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("suscipit"),
                        Etag: sdk.String("adipisci"),
                        ID: sdk.String("12fde047-7177-48ff-a1d0-17476360a15d"),
                        Kind: sdk.String("expedita"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("officia"),
                    },
                    SslRequired: sdk.Bool(false),
                },
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("suscipit"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("aliquid"),
                        Etag: sdk.String("perferendis"),
                        ID: sdk.String("659a1ade-aab5-4851-96c6-45b08b61891b"),
                        Kind: sdk.String("est"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("voluptatem"),
                    },
                    SslRequired: sdk.Bool(false),
                },
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("sapiente"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("officiis"),
                        Etag: sdk.String("architecto"),
                        ID: sdk.String("ade008e6-f8c5-4f35-8d8c-db5a34181430"),
                        Kind: sdk.String("architecto"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("modi"),
                    },
                    SslRequired: sdk.Bool(false),
                },
            },
            RemarketingListExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("fugit"),
            },
            Size: &shared.Size{
                Height: sdk.Int(66149),
                Iab: sdk.Bool(false),
                ID: sdk.String("laudantium"),
                Kind: sdk.String("quae"),
                Width: sdk.Int(222658),
            },
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            StartTime: types.MustTimeFromString("2021-11-22T09:48:38.420Z"),
            SubaccountID: sdk.String("consequuntur"),
            TargetingTemplateID: sdk.String("ipsa"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("eveniet"),
                        DartID: sdk.String("impedit"),
                        Kind: sdk.String("officiis"),
                        MajorVersion: sdk.String("esse"),
                        MinorVersion: sdk.String("necessitatibus"),
                        Name: sdk.String("Sally Dooley"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("vel"),
                        DartID: sdk.String("voluptatum"),
                        Kind: sdk.String("magnam"),
                        MajorVersion: sdk.String("exercitationem"),
                        MinorVersion: sdk.String("ab"),
                        Name: sdk.String("Raul Rolfson"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("consequuntur"),
                        DartID: sdk.String("voluptatem"),
                        Kind: sdk.String("exercitationem"),
                        MajorVersion: sdk.String("necessitatibus"),
                        MinorVersion: sdk.String("quasi"),
                        Name: sdk.String("Teri Thiel"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("doloribus"),
                        Kind: sdk.String("repudiandae"),
                        Name: sdk.String("Marion Hickle"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GY"),
                        CountryDartID: sdk.String("numquam"),
                        ID: sdk.String("nemo"),
                        Kind: sdk.String("quos"),
                        Name: sdk.String("Janice Kunze"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("LC"),
                        CountryDartID: sdk.String("incidunt"),
                        ID: sdk.String("quasi"),
                        Kind: sdk.String("rem"),
                        Name: sdk.String("Keith Hyatt"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("AT"),
                        CountryDartID: sdk.String("cupiditate"),
                        ID: sdk.String("reiciendis"),
                        Kind: sdk.String("soluta"),
                        Name: sdk.String("Belinda Daugherty"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("inventore"),
                        Kind: sdk.String("fuga"),
                        MajorVersion: sdk.String("accusamus"),
                        MinorVersion: sdk.String("voluptatibus"),
                        Name: sdk.String("Alejandro Wisoky"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("maxime"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("magnam"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Byron Johns"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("earum"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("modi"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Ignacio Bartoletti"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("alias"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("quasi"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Shawna Hamill"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("deserunt"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("esse"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Melinda Orn"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("impedit"),
                        Kind: sdk.String("hic"),
                        Name: sdk.String("Emmett Jakubowski"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("delectus"),
                        Kind: sdk.String("quae"),
                        Name: sdk.String("Grant Padberg"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("atque"),
                        Kind: sdk.String("ipsum"),
                        Name: sdk.String("Victor Rogahn"),
                    },
                    shared.PlatformType{
                        ID: sdk.String("dolore"),
                        Kind: sdk.String("iusto"),
                        Name: sdk.String("Lillian Kunde"),
                    },
                },
            },
            Type: shared.AdTypeEnumAdServingClickTracker.ToPointer(),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quibusdam",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("libero"),
    }, operations.DfareportingAdsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ad != nil {
        // handle response
    }
}
```

## DfareportingAdsList

Retrieves a list of ads, possibly filtered. This method supports paging.

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
    res, err := s.Ads.DfareportingAdsList(ctx, operations.DfareportingAdsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatibus"),
        Active: sdk.Bool(false),
        AdvertiserID: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Archived: sdk.Bool(false),
        AudienceSegmentIds: []string{
            "velit",
            "illo",
        },
        Callback: sdk.String("accusantium"),
        CampaignIds: []string{
            "ea",
            "beatae",
        },
        Compatibility: operations.DfareportingAdsListCompatibilityEnumInStreamAudio.ToPointer(),
        CreativeIds: []string{
            "eum",
            "velit",
            "ut",
        },
        CreativeOptimizationConfigurationIds: []string{
            "earum",
            "dicta",
            "impedit",
        },
        DynamicClickTracker: sdk.Bool(false),
        Fields: sdk.String("voluptatibus"),
        Ids: []string{
            "itaque",
            "alias",
            "nisi",
        },
        Key: sdk.String("itaque"),
        LandingPageIds: []string{
            "laborum",
        },
        MaxResults: sdk.Int64(250398),
        OauthToken: sdk.String("dolor"),
        OverriddenEventTagID: sdk.String("iusto"),
        PageToken: sdk.String("sit"),
        PlacementIds: []string{
            "consequatur",
        },
        PrettyPrint: sdk.Bool(false),
        ProfileID: "officia",
        QuotaUser: sdk.String("recusandae"),
        RemarketingListIds: []string{
            "quidem",
            "voluptas",
        },
        SearchString: sdk.String("facilis"),
        SizeIds: []string{
            "perspiciatis",
            "expedita",
            "deleniti",
            "a",
        },
        SortField: operations.DfareportingAdsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingAdsListSortOrderEnumAscending.ToPointer(),
        SslCompliant: sdk.Bool(false),
        SslRequired: sdk.Bool(false),
        Type: []DfareportingAdsListTypeEnum{
            operations.DfareportingAdsListTypeEnumAdServingBrandSafeAd,
            operations.DfareportingAdsListTypeEnumAdServingTracking,
            operations.DfareportingAdsListTypeEnumAdServingTracking,
        },
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DfareportingAdsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdsListResponse != nil {
        // handle response
    }
}
```

## DfareportingAdsPatch

Updates an existing ad. This method supports patch semantics.

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
    res, err := s.Ads.DfareportingAdsPatch(ctx, operations.DfareportingAdsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Ad: &shared.Ad{
            AccountID: sdk.String("error"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("esse"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("labore"),
                Etag: sdk.String("veritatis"),
                ID: sdk.String("d3113529-65bb-48a7-a026-11435e139dbc"),
                Kind: sdk.String("quia"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("nostrum"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentID: sdk.String("omnis"),
            CampaignID: sdk.String("libero"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dicta"),
                Etag: sdk.String("id"),
                ID: sdk.String("bda8c070-e108-44cb-8672-d1ad879eeb96"),
                Kind: sdk.String("autem"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("rerum"),
            },
            ClickThroughURL: &shared.ClickThroughURL{
                ComputedClickThroughURL: sdk.String("laudantium"),
                CustomClickThroughURL: sdk.String("corporis"),
                DefaultLandingPage: sdk.Bool(false),
                LandingPageID: sdk.String("officiis"),
            },
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("voluptatibus"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comments: sdk.String("cum"),
            Compatibility: shared.AdCompatibilityEnumInStreamAudio.ToPointer(),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("alias"),
            },
            CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("quidem"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                },
            },
            CreativeRotation: &shared.CreativeRotation{
                CreativeAssignments: []shared.CreativeAssignment{
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("accusantium"),
                            CustomClickThroughURL: sdk.String("expedita"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("officiis"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("quibusdam"),
                                    CustomClickThroughURL: sdk.String("odio"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("praesentium"),
                                },
                                CreativeID: sdk.String("odit"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("corporis"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("earum"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("adipisci"),
                            Etag: sdk.String("recusandae"),
                            ID: sdk.String("a4b5197f-9244-43da-bce5-2b895c537c64"),
                            Kind: sdk.String("corporis"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("voluptates"),
                        },
                        EndTime: types.MustTimeFromString("2020-10-21T17:45:45.582Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("libero"),
                                    CustomClickThroughURL: sdk.String("ratione"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("labore"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("totam"),
                            },
                        },
                        Sequence: sdk.Int(577709),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-03-22T14:23:17.198Z"),
                        Weight: sdk.Int(242099),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("minus"),
                            CustomClickThroughURL: sdk.String("fuga"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("nostrum"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("impedit"),
                                    CustomClickThroughURL: sdk.String("delectus"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("tempore"),
                                },
                                CreativeID: sdk.String("vero"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("odit"),
                                    CustomClickThroughURL: sdk.String("repellat"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("pariatur"),
                                },
                                CreativeID: sdk.String("nemo"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("reprehenderit"),
                                    CustomClickThroughURL: sdk.String("aperiam"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("odio"),
                                },
                                CreativeID: sdk.String("minima"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("ducimus"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("dolores"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("veritatis"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("ducimus"),
                            Etag: sdk.String("voluptate"),
                            ID: sdk.String("deac646e-cb57-4340-9e3e-b1e5a2b12eb0"),
                            Kind: sdk.String("ducimus"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("veritatis"),
                        },
                        EndTime: types.MustTimeFromString("2022-08-12T22:43:14.075Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("libero"),
                                    CustomClickThroughURL: sdk.String("excepturi"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("occaecati"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("nemo"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("aliquam"),
                                    CustomClickThroughURL: sdk.String("nostrum"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("doloribus"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("eligendi"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("sint"),
                                    CustomClickThroughURL: sdk.String("enim"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("hic"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("animi"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("quas"),
                                    CustomClickThroughURL: sdk.String("totam"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("molestias"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("odio"),
                            },
                        },
                        Sequence: sdk.Int(51170),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-09-09T00:48:35.479Z"),
                        Weight: sdk.Int(554645),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("iste"),
                            CustomClickThroughURL: sdk.String("assumenda"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("tempore"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("velit"),
                                    CustomClickThroughURL: sdk.String("doloremque"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("delectus"),
                                },
                                CreativeID: sdk.String("impedit"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("cum"),
                                    CustomClickThroughURL: sdk.String("ipsum"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("adipisci"),
                                },
                                CreativeID: sdk.String("saepe"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("deserunt"),
                                    CustomClickThroughURL: sdk.String("doloremque"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("quis"),
                                },
                                CreativeID: sdk.String("veniam"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("architecto"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("molestiae"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("possimus"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("magnam"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("itaque"),
                            Etag: sdk.String("sed"),
                            ID: sdk.String("f52d82d3-513b-4b6f-88b6-56bcdb35ff2e"),
                            Kind: sdk.String("labore"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("eos"),
                        },
                        EndTime: types.MustTimeFromString("2022-08-27T21:22:12.876Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("iusto"),
                                    CustomClickThroughURL: sdk.String("est"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("rem"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("eligendi"),
                            },
                        },
                        Sequence: sdk.Int(853606),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2021-03-22T16:52:21.456Z"),
                        Weight: sdk.Int(495617),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("dolor"),
                            CustomClickThroughURL: sdk.String("dicta"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("error"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("vitae"),
                                    CustomClickThroughURL: sdk.String("dignissimos"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("esse"),
                                },
                                CreativeID: sdk.String("fugiat"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("ad"),
                                    CustomClickThroughURL: sdk.String("aspernatur"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("enim"),
                                },
                                CreativeID: sdk.String("delectus"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("iusto"),
                                    CustomClickThroughURL: sdk.String("dignissimos"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("libero"),
                                },
                                CreativeID: sdk.String("illo"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("ab"),
                                    CustomClickThroughURL: sdk.String("incidunt"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("accusamus"),
                                },
                                CreativeID: sdk.String("saepe"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("veniam"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("reiciendis"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("reprehenderit"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("nemo"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("repellat"),
                            Etag: sdk.String("quisquam"),
                            ID: sdk.String("37814d4c-98e0-4c2b-b89e-b75dad636c60"),
                            Kind: sdk.String("voluptatem"),
                            MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                            Value: sdk.String("quae"),
                        },
                        EndTime: types.MustTimeFromString("2022-02-24T23:57:50.783Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("quidem"),
                                    CustomClickThroughURL: sdk.String("cum"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("amet"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("quasi"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("dicta"),
                                    CustomClickThroughURL: sdk.String("laudantium"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("doloremque"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("earum"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("iusto"),
                                    CustomClickThroughURL: sdk.String("amet"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("provident"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("dolorum"),
                            },
                        },
                        Sequence: sdk.Int(897956),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2021-02-28T04:50:19.409Z"),
                        Weight: sdk.Int(10063),
                    },
                },
                CreativeOptimizationConfigurationID: sdk.String("nemo"),
                Type: shared.CreativeRotationTypeEnumCreativeRotationTypeSequential.ToPointer(),
                WeightCalculationStrategy: shared.CreativeRotationWeightCalculationStrategyEnumWeightStrategyOptimized.ToPointer(),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumThursday,
                    shared.DayPartTargetingDaysOfWeekEnumMonday,
                    shared.DayPartTargetingDaysOfWeekEnumFriday,
                },
                HoursOfDay: []int{
                    178635,
                    520081,
                    115861,
                    30661,
                },
                UserLocalTime: sdk.Bool(false),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("velit"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DeliverySchedule: &shared.DeliverySchedule{
                FrequencyCap: &shared.FrequencyCap{
                    Duration: sdk.String("dolor"),
                    Impressions: sdk.String("sunt"),
                },
                HardCutoff: sdk.Bool(false),
                ImpressionRatio: sdk.String("a"),
                Priority: shared.DeliverySchedulePriorityEnumAdPriority04.ToPointer(),
            },
            DynamicClickTracker: sdk.Bool(false),
            EndTime: types.MustTimeFromString("2021-12-02T22:28:09.993Z"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("at"),
                },
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("SG"),
                        CountryDartID: sdk.String("esse"),
                        DartID: sdk.String("voluptatem"),
                        Kind: sdk.String("perferendis"),
                        MetroCode: sdk.String("rerum"),
                        MetroDmaID: sdk.String("ea"),
                        Name: sdk.String("Courtney Zulauf"),
                        RegionCode: sdk.String("provident"),
                        RegionDartID: sdk.String("consectetur"),
                    },
                    shared.City{
                        CountryCode: sdk.String("RE"),
                        CountryDartID: sdk.String("dignissimos"),
                        DartID: sdk.String("consectetur"),
                        Kind: sdk.String("soluta"),
                        MetroCode: sdk.String("natus"),
                        MetroDmaID: sdk.String("temporibus"),
                        Name: sdk.String("Marvin White"),
                        RegionCode: sdk.String("itaque"),
                        RegionDartID: sdk.String("illum"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("KW"),
                        DartID: sdk.String("vero"),
                        Kind: sdk.String("qui"),
                        Name: sdk.String("Jaime Champlin"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("KI"),
                        DartID: sdk.String("non"),
                        Kind: sdk.String("ab"),
                        Name: sdk.String("May Nolan"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("PM"),
                        DartID: sdk.String("in"),
                        Kind: sdk.String("exercitationem"),
                        Name: sdk.String("Marjorie Waelchi"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("TK"),
                        CountryDartID: sdk.String("rem"),
                        DartID: sdk.String("aperiam"),
                        DmaID: sdk.String("odit"),
                        Kind: sdk.String("deleniti"),
                        MetroCode: sdk.String("enim"),
                        Name: sdk.String("Marguerite Hansen"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("modi"),
                        CountryCode: sdk.String("IR"),
                        CountryDartID: sdk.String("nesciunt"),
                        ID: sdk.String("a7d575f1-400e-4764-ad73-34ec1b781b36"),
                        Kind: sdk.String("fuga"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("LS"),
                        CountryDartID: sdk.String("aut"),
                        DartID: sdk.String("quos"),
                        Kind: sdk.String("laudantium"),
                        Name: sdk.String("Dr. Patrick Beier"),
                        RegionCode: sdk.String("mollitia"),
                    },
                },
            },
            ID: sdk.String("nulla"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("officia"),
                Etag: sdk.String("sed"),
                ID: sdk.String("00ef0422-eb21-464c-b9ab-8366c723ffda"),
                Kind: sdk.String("natus"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("doloremque"),
            },
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("nisi"),
            },
            Kind: sdk.String("rerum"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("voluptates"),
                        Kind: sdk.String("non"),
                        LanguageCode: sdk.String("rem"),
                        Name: sdk.String("Dr. Marion Schaefer"),
                    },
                    shared.Language{
                        ID: sdk.String("quae"),
                        Kind: sdk.String("officiis"),
                        LanguageCode: sdk.String("architecto"),
                        Name: sdk.String("Jill Rosenbaum MD"),
                    },
                    shared.Language{
                        ID: sdk.String("reiciendis"),
                        Kind: sdk.String("a"),
                        LanguageCode: sdk.String("iste"),
                        Name: sdk.String("Olga Hermiston"),
                    },
                    shared.Language{
                        ID: sdk.String("itaque"),
                        Kind: sdk.String("maxime"),
                        LanguageCode: sdk.String("modi"),
                        Name: sdk.String("Nadine Terry"),
                    },
                },
            },
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("porro"),
            },
            Name: sdk.String("Ms. Jimmie Wisozk"),
            PlacementAssignments: []shared.PlacementAssignment{
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("iure"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("odio"),
                        Etag: sdk.String("nesciunt"),
                        ID: sdk.String("e63562a7-b408-4f05-a3d4-8fdaf313a1f5"),
                        Kind: sdk.String("doloribus"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("unde"),
                    },
                    SslRequired: sdk.Bool(false),
                },
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("incidunt"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("explicabo"),
                        Etag: sdk.String("ipsam"),
                        ID: sdk.String("9c0b36f2-5ea9-444f-bb75-6c11f6c37a51"),
                        Kind: sdk.String("qui"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("magni"),
                    },
                    SslRequired: sdk.Bool(false),
                },
            },
            RemarketingListExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("incidunt"),
            },
            Size: &shared.Size{
                Height: sdk.Int(240490),
                Iab: sdk.Bool(false),
                ID: sdk.String("praesentium"),
                Kind: sdk.String("dolor"),
                Width: sdk.Int(349898),
            },
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            StartTime: types.MustTimeFromString("2021-08-03T07:41:11.908Z"),
            SubaccountID: sdk.String("impedit"),
            TargetingTemplateID: sdk.String("sit"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("culpa"),
                        DartID: sdk.String("consequuntur"),
                        Kind: sdk.String("amet"),
                        MajorVersion: sdk.String("deserunt"),
                        MinorVersion: sdk.String("modi"),
                        Name: sdk.String("Traci Waters"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("enim"),
                        DartID: sdk.String("doloribus"),
                        Kind: sdk.String("assumenda"),
                        MajorVersion: sdk.String("officiis"),
                        MinorVersion: sdk.String("architecto"),
                        Name: sdk.String("Molly Beier"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("dicta"),
                        Kind: sdk.String("vel"),
                        Name: sdk.String("Mr. Darrel Hermann Jr."),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("RU"),
                        CountryDartID: sdk.String("iure"),
                        ID: sdk.String("quibusdam"),
                        Kind: sdk.String("quod"),
                        Name: sdk.String("Delia Franecki"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("HN"),
                        CountryDartID: sdk.String("sed"),
                        ID: sdk.String("odio"),
                        Kind: sdk.String("natus"),
                        Name: sdk.String("Felipe Wyman"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("US"),
                        CountryDartID: sdk.String("laboriosam"),
                        ID: sdk.String("unde"),
                        Kind: sdk.String("modi"),
                        Name: sdk.String("Irvin Rippin"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("incidunt"),
                        Kind: sdk.String("recusandae"),
                        MajorVersion: sdk.String("quod"),
                        MinorVersion: sdk.String("id"),
                        Name: sdk.String("Ben Satterfield"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("nemo"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("illum"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Melvin O'Conner"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("distinctio"),
                        Kind: sdk.String("pariatur"),
                        MajorVersion: sdk.String("ad"),
                        MinorVersion: sdk.String("facere"),
                        Name: sdk.String("Conrad Pacocha"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("ipsam"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("alias"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Joanna MacGyver"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("occaecati"),
                        Kind: sdk.String("labore"),
                        MajorVersion: sdk.String("quo"),
                        MinorVersion: sdk.String("perferendis"),
                        Name: sdk.String("Jeanne Gutkowski"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("hic"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("nostrum"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Stuart Stokes"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("nostrum"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("esse"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Grant Schultz MD"),
                    },
                    shared.OperatingSystem{
                        DartID: sdk.String("quod"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("laboriosam"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Sandra Schumm"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("eaque"),
                        Kind: sdk.String("architecto"),
                        Name: sdk.String("Mr. Gregg Kuvalis"),
                    },
                },
            },
            Type: shared.AdTypeEnumAdServingStandardAd.ToPointer(),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("excepturi"),
        ID: "ff8f0f81-6ff3-4477-813e-902c14125b09",
        Key: sdk.String("vel"),
        OauthToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "id",
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("quas"),
    }, operations.DfareportingAdsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ad != nil {
        // handle response
    }
}
```

## DfareportingAdsUpdate

Updates an existing ad.

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
    res, err := s.Ads.DfareportingAdsUpdate(ctx, operations.DfareportingAdsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Ad: &shared.Ad{
            AccountID: sdk.String("ullam"),
            Active: sdk.Bool(false),
            AdvertiserID: sdk.String("quae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("similique"),
                Etag: sdk.String("incidunt"),
                ID: sdk.String("72af923c-5949-4f83-b350-cf876ffb901c"),
                Kind: sdk.String("commodi"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("porro"),
            },
            Archived: sdk.Bool(false),
            AudienceSegmentID: sdk.String("tempore"),
            CampaignID: sdk.String("quidem"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("voluptates"),
                ID: sdk.String("243cf789-ffaf-4eda-93e5-ae6e0ac184c2"),
                Kind: sdk.String("nobis"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("minus"),
            },
            ClickThroughURL: &shared.ClickThroughURL{
                ComputedClickThroughURL: sdk.String("quia"),
                CustomClickThroughURL: sdk.String("magnam"),
                DefaultLandingPage: sdk.Bool(false),
                LandingPageID: sdk.String("reprehenderit"),
            },
            ClickThroughURLSuffixProperties: &shared.ClickThroughURLSuffixProperties{
                ClickThroughURLSuffix: sdk.String("quod"),
                OverrideInheritedSuffix: sdk.Bool(false),
            },
            Comments: sdk.String("quos"),
            Compatibility: shared.AdCompatibilityEnumAppInterstitial.ToPointer(),
            CreateInfo: &shared.LastModifiedInfo{
                Time: sdk.String("amet"),
            },
            CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("amet"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                },
                shared.CreativeGroupAssignment{
                    CreativeGroupID: sdk.String("modi"),
                    CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                },
            },
            CreativeRotation: &shared.CreativeRotation{
                CreativeAssignments: []shared.CreativeAssignment{
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("architecto"),
                            CustomClickThroughURL: sdk.String("molestias"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("dolore"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("maiores"),
                                    CustomClickThroughURL: sdk.String("neque"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("odit"),
                                },
                                CreativeID: sdk.String("earum"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("ipsam"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("exercitationem"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("nihil"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("ad"),
                            Etag: sdk.String("nisi"),
                            ID: sdk.String("f5d56d0b-d0af-42df-a13d-b4f62cba3f89"),
                            Kind: sdk.String("non"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("mollitia"),
                        },
                        EndTime: types.MustTimeFromString("2020-12-09T02:09:11.734Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("doloremque"),
                                    CustomClickThroughURL: sdk.String("expedita"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("corrupti"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("eaque"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("deserunt"),
                                    CustomClickThroughURL: sdk.String("aliquid"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("excepturi"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("magni"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("tempora"),
                                    CustomClickThroughURL: sdk.String("possimus"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("dolor"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("rerum"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("sed"),
                                    CustomClickThroughURL: sdk.String("accusamus"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("optio"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("delectus"),
                            },
                        },
                        Sequence: sdk.Int(792719),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2021-05-08T09:07:28.099Z"),
                        Weight: sdk.Int(994234),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("voluptatum"),
                            CustomClickThroughURL: sdk.String("iste"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("corporis"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("illo"),
                                    CustomClickThroughURL: sdk.String("aut"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("doloribus"),
                                },
                                CreativeID: sdk.String("nostrum"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("possimus"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("pariatur"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("sapiente"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("quae"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("aperiam"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("non"),
                            Etag: sdk.String("voluptates"),
                            ID: sdk.String("54c82f16-8a36-43c8-873e-484380b1f6b8"),
                            Kind: sdk.String("porro"),
                            MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                            Value: sdk.String("magni"),
                        },
                        EndTime: types.MustTimeFromString("2022-08-17T11:12:40.432Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("commodi"),
                                    CustomClickThroughURL: sdk.String("alias"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("fuga"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("aut"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("dolore"),
                                    CustomClickThroughURL: sdk.String("maxime"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("aliquam"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("iste"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("ullam"),
                                    CustomClickThroughURL: sdk.String("eligendi"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("placeat"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("voluptas"),
                            },
                        },
                        Sequence: sdk.Int(577590),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-11-07T01:08:30.512Z"),
                        Weight: sdk.Int(469170),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("inventore"),
                            CustomClickThroughURL: sdk.String("libero"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("ipsam"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("cumque"),
                                    CustomClickThroughURL: sdk.String("dicta"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("harum"),
                                },
                                CreativeID: sdk.String("facere"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("beatae"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("delectus"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupOne.ToPointer(),
                            },
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("expedita"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("rem"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("atque"),
                            Etag: sdk.String("officiis"),
                            ID: sdk.String("bdfc4ccc-a99b-4c7f-80b2-dce10873e42b"),
                            Kind: sdk.String("doloremque"),
                            MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                            Value: sdk.String("eum"),
                        },
                        EndTime: types.MustTimeFromString("2021-09-15T18:39:45.172Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("voluptatum"),
                                    CustomClickThroughURL: sdk.String("blanditiis"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("nihil"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("atque"),
                            },
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("rerum"),
                                    CustomClickThroughURL: sdk.String("deserunt"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("atque"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("nostrum"),
                            },
                        },
                        Sequence: sdk.Int(542340),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-05-02T11:12:42.558Z"),
                        Weight: sdk.Int(318379),
                    },
                    shared.CreativeAssignment{
                        Active: sdk.Bool(false),
                        ApplyEventTags: sdk.Bool(false),
                        ClickThroughURL: &shared.ClickThroughURL{
                            ComputedClickThroughURL: sdk.String("rem"),
                            CustomClickThroughURL: sdk.String("magni"),
                            DefaultLandingPage: sdk.Bool(false),
                            LandingPageID: sdk.String("quae"),
                        },
                        CompanionCreativeOverrides: []shared.CompanionClickThroughOverride{
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("placeat"),
                                    CustomClickThroughURL: sdk.String("enim"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("labore"),
                                },
                                CreativeID: sdk.String("sapiente"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("saepe"),
                                    CustomClickThroughURL: sdk.String("delectus"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("officia"),
                                },
                                CreativeID: sdk.String("natus"),
                            },
                            shared.CompanionClickThroughOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("cumque"),
                                    CustomClickThroughURL: sdk.String("natus"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("quaerat"),
                                },
                                CreativeID: sdk.String("doloribus"),
                            },
                        },
                        CreativeGroupAssignments: []shared.CreativeGroupAssignment{
                            shared.CreativeGroupAssignment{
                                CreativeGroupID: sdk.String("officiis"),
                                CreativeGroupNumber: shared.CreativeGroupAssignmentCreativeGroupNumberEnumCreativeGroupTwo.ToPointer(),
                            },
                        },
                        CreativeID: sdk.String("cumque"),
                        CreativeIDDimensionValue: &shared.DimensionValue{
                            DimensionName: sdk.String("quis"),
                            Etag: sdk.String("enim"),
                            ID: sdk.String("65d307cf-ee81-4206-a281-3fa4a41c480d"),
                            Kind: sdk.String("dolorem"),
                            MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                            Value: sdk.String("aspernatur"),
                        },
                        EndTime: types.MustTimeFromString("2022-10-22T11:14:59.383Z"),
                        RichMediaExitOverrides: []shared.RichMediaExitOverride{
                            shared.RichMediaExitOverride{
                                ClickThroughURL: &shared.ClickThroughURL{
                                    ComputedClickThroughURL: sdk.String("fuga"),
                                    CustomClickThroughURL: sdk.String("hic"),
                                    DefaultLandingPage: sdk.Bool(false),
                                    LandingPageID: sdk.String("eaque"),
                                },
                                Enabled: sdk.Bool(false),
                                ExitID: sdk.String("dolorem"),
                            },
                        },
                        Sequence: sdk.Int(101854),
                        SslCompliant: sdk.Bool(false),
                        StartTime: types.MustTimeFromString("2022-11-13T00:38:19.332Z"),
                        Weight: sdk.Int(860362),
                    },
                },
                CreativeOptimizationConfigurationID: sdk.String("enim"),
                Type: shared.CreativeRotationTypeEnumCreativeRotationTypeSequential.ToPointer(),
                WeightCalculationStrategy: shared.CreativeRotationWeightCalculationStrategyEnumWeightStrategyCustom.ToPointer(),
            },
            DayPartTargeting: &shared.DayPartTargeting{
                DaysOfWeek: []shared.DayPartTargetingDaysOfWeekEnum{
                    shared.DayPartTargetingDaysOfWeekEnumTuesday,
                    shared.DayPartTargetingDaysOfWeekEnumSaturday,
                    shared.DayPartTargetingDaysOfWeekEnumSaturday,
                    shared.DayPartTargetingDaysOfWeekEnumWednesday,
                },
                HoursOfDay: []int{
                    65118,
                    533978,
                    711615,
                    944203,
                },
                UserLocalTime: sdk.Bool(false),
            },
            DefaultClickThroughEventTagProperties: &shared.DefaultClickThroughEventTagProperties{
                DefaultClickThroughEventTagID: sdk.String("excepturi"),
                OverrideInheritedEventTag: sdk.Bool(false),
            },
            DeliverySchedule: &shared.DeliverySchedule{
                FrequencyCap: &shared.FrequencyCap{
                    Duration: sdk.String("aliquid"),
                    Impressions: sdk.String("sed"),
                },
                HardCutoff: sdk.Bool(false),
                ImpressionRatio: sdk.String("beatae"),
                Priority: shared.DeliverySchedulePriorityEnumAdPriority11.ToPointer(),
            },
            DynamicClickTracker: sdk.Bool(false),
            EndTime: types.MustTimeFromString("2022-05-06T02:02:34.966Z"),
            EventTagOverrides: []shared.EventTagOverride{
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("tenetur"),
                },
                shared.EventTagOverride{
                    Enabled: sdk.Bool(false),
                    ID: sdk.String("dignissimos"),
                },
            },
            GeoTargeting: &shared.GeoTargeting{
                Cities: []shared.City{
                    shared.City{
                        CountryCode: sdk.String("NG"),
                        CountryDartID: sdk.String("laudantium"),
                        DartID: sdk.String("esse"),
                        Kind: sdk.String("eveniet"),
                        MetroCode: sdk.String("earum"),
                        MetroDmaID: sdk.String("velit"),
                        Name: sdk.String("Ray Prosacco"),
                        RegionCode: sdk.String("ipsam"),
                        RegionDartID: sdk.String("explicabo"),
                    },
                    shared.City{
                        CountryCode: sdk.String("SA"),
                        CountryDartID: sdk.String("aliquid"),
                        DartID: sdk.String("quis"),
                        Kind: sdk.String("facilis"),
                        MetroCode: sdk.String("ipsum"),
                        MetroDmaID: sdk.String("ut"),
                        Name: sdk.String("Julie Lakin"),
                        RegionCode: sdk.String("expedita"),
                        RegionDartID: sdk.String("libero"),
                    },
                },
                Countries: []shared.Country{
                    shared.Country{
                        CountryCode: sdk.String("BD"),
                        DartID: sdk.String("minus"),
                        Kind: sdk.String("quos"),
                        Name: sdk.String("Sergio Kub"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("AT"),
                        DartID: sdk.String("voluptates"),
                        Kind: sdk.String("laudantium"),
                        Name: sdk.String("Amy Mohr"),
                        SslEnabled: sdk.Bool(false),
                    },
                    shared.Country{
                        CountryCode: sdk.String("VC"),
                        DartID: sdk.String("deleniti"),
                        Kind: sdk.String("modi"),
                        Name: sdk.String("Joe Haag"),
                        SslEnabled: sdk.Bool(false),
                    },
                },
                ExcludeCountries: sdk.Bool(false),
                Metros: []shared.Metro{
                    shared.Metro{
                        CountryCode: sdk.String("TR"),
                        CountryDartID: sdk.String("consequatur"),
                        DartID: sdk.String("esse"),
                        DmaID: sdk.String("debitis"),
                        Kind: sdk.String("facere"),
                        MetroCode: sdk.String("quisquam"),
                        Name: sdk.String("Jay Pagac"),
                    },
                },
                PostalCodes: []shared.PostalCode{
                    shared.PostalCode{
                        Code: sdk.String("sequi"),
                        CountryCode: sdk.String("SD"),
                        CountryDartID: sdk.String("laborum"),
                        ID: sdk.String("bd905a97-2e05-4672-8227-b2d309470bf7"),
                        Kind: sdk.String("est"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("aliquam"),
                        CountryCode: sdk.String("VN"),
                        CountryDartID: sdk.String("culpa"),
                        ID: sdk.String("87cf535a-6fae-454e-bf60-c321f023b75d"),
                        Kind: sdk.String("ratione"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("dolor"),
                        CountryCode: sdk.String("HR"),
                        CountryDartID: sdk.String("dignissimos"),
                        ID: sdk.String("fe1a0cc8-df79-4f0a-b96d-90c364b7c15d"),
                        Kind: sdk.String("maiores"),
                    },
                    shared.PostalCode{
                        Code: sdk.String("distinctio"),
                        CountryCode: sdk.String("NE"),
                        CountryDartID: sdk.String("impedit"),
                        ID: sdk.String("e188b1c4-ee2c-48c6-8e61-1feeb1c7cbdb"),
                        Kind: sdk.String("suscipit"),
                    },
                },
                Regions: []shared.Region{
                    shared.Region{
                        CountryCode: sdk.String("US"),
                        CountryDartID: sdk.String("quod"),
                        DartID: sdk.String("nihil"),
                        Kind: sdk.String("quaerat"),
                        Name: sdk.String("Jo Larkin"),
                        RegionCode: sdk.String("odit"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("GF"),
                        CountryDartID: sdk.String("sequi"),
                        DartID: sdk.String("beatae"),
                        Kind: sdk.String("iusto"),
                        Name: sdk.String("Danielle Kuhlman"),
                        RegionCode: sdk.String("cupiditate"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("BD"),
                        CountryDartID: sdk.String("exercitationem"),
                        DartID: sdk.String("laborum"),
                        Kind: sdk.String("illum"),
                        Name: sdk.String("Kendra Parker"),
                        RegionCode: sdk.String("illum"),
                    },
                    shared.Region{
                        CountryCode: sdk.String("SX"),
                        CountryDartID: sdk.String("commodi"),
                        DartID: sdk.String("esse"),
                        Kind: sdk.String("explicabo"),
                        Name: sdk.String("Dr. Mona Ruecker"),
                        RegionCode: sdk.String("culpa"),
                    },
                },
            },
            ID: sdk.String("repudiandae"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aspernatur"),
                Etag: sdk.String("sapiente"),
                ID: sdk.String("3a6b7008-7875-4614-bf5a-6c98b5555408"),
                Kind: sdk.String("doloremque"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("numquam"),
            },
            KeyValueTargetingExpression: &shared.KeyValueTargetingExpression{
                Expression: sdk.String("doloremque"),
            },
            Kind: sdk.String("cum"),
            LanguageTargeting: &shared.LanguageTargeting{
                Languages: []shared.Language{
                    shared.Language{
                        ID: sdk.String("similique"),
                        Kind: sdk.String("porro"),
                        LanguageCode: sdk.String("impedit"),
                        Name: sdk.String("Myra Roberts"),
                    },
                    shared.Language{
                        ID: sdk.String("nam"),
                        Kind: sdk.String("enim"),
                        LanguageCode: sdk.String("maiores"),
                        Name: sdk.String("Kelley Schneider V"),
                    },
                    shared.Language{
                        ID: sdk.String("adipisci"),
                        Kind: sdk.String("accusantium"),
                        LanguageCode: sdk.String("magnam"),
                        Name: sdk.String("Arturo Cole"),
                    },
                    shared.Language{
                        ID: sdk.String("id"),
                        Kind: sdk.String("possimus"),
                        LanguageCode: sdk.String("fugit"),
                        Name: sdk.String("Bernice Donnelly V"),
                    },
                },
            },
            LastModifiedInfo: &shared.LastModifiedInfo{
                Time: sdk.String("nobis"),
            },
            Name: sdk.String("Colleen Gibson DVM"),
            PlacementAssignments: []shared.PlacementAssignment{
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("fugit"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("voluptatem"),
                        Etag: sdk.String("repudiandae"),
                        ID: sdk.String("56248fff-639a-4910-abdc-ab62676696e1"),
                        Kind: sdk.String("itaque"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("eaque"),
                    },
                    SslRequired: sdk.Bool(false),
                },
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("alias"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("qui"),
                        Etag: sdk.String("consequuntur"),
                        ID: sdk.String("1b335d89-acb3-4ecf-9a8d-0c549ef03004"),
                        Kind: sdk.String("perspiciatis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("atque"),
                    },
                    SslRequired: sdk.Bool(false),
                },
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("officia"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("ex"),
                        Etag: sdk.String("architecto"),
                        ID: sdk.String("fa1cf206-88f7-47c1-bfc7-1dca163f2a3c"),
                        Kind: sdk.String("voluptatum"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("laborum"),
                    },
                    SslRequired: sdk.Bool(false),
                },
                shared.PlacementAssignment{
                    Active: sdk.Bool(false),
                    PlacementID: sdk.String("omnis"),
                    PlacementIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("nihil"),
                        Etag: sdk.String("tenetur"),
                        ID: sdk.String("f334cddf-857a-49e6-9876-c6ab21d29dfc"),
                        Kind: sdk.String("unde"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("facere"),
                    },
                    SslRequired: sdk.Bool(false),
                },
            },
            RemarketingListExpression: &shared.ListTargetingExpression{
                Expression: sdk.String("voluptas"),
            },
            Size: &shared.Size{
                Height: sdk.Int(987384),
                Iab: sdk.Bool(false),
                ID: sdk.String("recusandae"),
                Kind: sdk.String("quisquam"),
                Width: sdk.Int(818078),
            },
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            StartTime: types.MustTimeFromString("2022-05-21T18:19:34.792Z"),
            SubaccountID: sdk.String("provident"),
            TargetingTemplateID: sdk.String("dolor"),
            TechnologyTargeting: &shared.TechnologyTargeting{
                Browsers: []shared.Browser{
                    shared.Browser{
                        BrowserVersionID: sdk.String("aperiam"),
                        DartID: sdk.String("eaque"),
                        Kind: sdk.String("eum"),
                        MajorVersion: sdk.String("laboriosam"),
                        MinorVersion: sdk.String("laborum"),
                        Name: sdk.String("Nadine Christiansen Jr."),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("alias"),
                        DartID: sdk.String("velit"),
                        Kind: sdk.String("ullam"),
                        MajorVersion: sdk.String("quis"),
                        MinorVersion: sdk.String("velit"),
                        Name: sdk.String("Billie Schmitt"),
                    },
                    shared.Browser{
                        BrowserVersionID: sdk.String("doloremque"),
                        DartID: sdk.String("totam"),
                        Kind: sdk.String("iure"),
                        MajorVersion: sdk.String("maiores"),
                        MinorVersion: sdk.String("est"),
                        Name: sdk.String("Christine Tromp III"),
                    },
                },
                ConnectionTypes: []shared.ConnectionType{
                    shared.ConnectionType{
                        ID: sdk.String("cumque"),
                        Kind: sdk.String("quidem"),
                        Name: sdk.String("Doris Casper III"),
                    },
                },
                MobileCarriers: []shared.MobileCarrier{
                    shared.MobileCarrier{
                        CountryCode: sdk.String("PR"),
                        CountryDartID: sdk.String("molestias"),
                        ID: sdk.String("necessitatibus"),
                        Kind: sdk.String("ipsum"),
                        Name: sdk.String("Julian Stanton I"),
                    },
                    shared.MobileCarrier{
                        CountryCode: sdk.String("GD"),
                        CountryDartID: sdk.String("consequatur"),
                        ID: sdk.String("laudantium"),
                        Kind: sdk.String("repellendus"),
                        Name: sdk.String("Doreen Feeney"),
                    },
                },
                OperatingSystemVersions: []shared.OperatingSystemVersion{
                    shared.OperatingSystemVersion{
                        ID: sdk.String("tenetur"),
                        Kind: sdk.String("assumenda"),
                        MajorVersion: sdk.String("dolore"),
                        MinorVersion: sdk.String("enim"),
                        Name: sdk.String("Claire Abernathy"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("dicta"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("quia"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Gladys Sporer"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("officiis"),
                        Kind: sdk.String("omnis"),
                        MajorVersion: sdk.String("neque"),
                        MinorVersion: sdk.String("corporis"),
                        Name: sdk.String("Todd Schowalter"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("quos"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("dicta"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Dale Altenwerth"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("sequi"),
                        Kind: sdk.String("recusandae"),
                        MajorVersion: sdk.String("labore"),
                        MinorVersion: sdk.String("adipisci"),
                        Name: sdk.String("Sarah D'Amore"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("magni"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("beatae"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Geraldine Kling"),
                        },
                    },
                    shared.OperatingSystemVersion{
                        ID: sdk.String("sit"),
                        Kind: sdk.String("vel"),
                        MajorVersion: sdk.String("laboriosam"),
                        MinorVersion: sdk.String("quaerat"),
                        Name: sdk.String("Dr. Hilda Kunde"),
                        OperatingSystem: &shared.OperatingSystem{
                            DartID: sdk.String("facere"),
                            Desktop: sdk.Bool(false),
                            Kind: sdk.String("sed"),
                            Mobile: sdk.Bool(false),
                            Name: sdk.String("Tami Mills"),
                        },
                    },
                },
                OperatingSystems: []shared.OperatingSystem{
                    shared.OperatingSystem{
                        DartID: sdk.String("adipisci"),
                        Desktop: sdk.Bool(false),
                        Kind: sdk.String("doloremque"),
                        Mobile: sdk.Bool(false),
                        Name: sdk.String("Don Toy"),
                    },
                },
                PlatformTypes: []shared.PlatformType{
                    shared.PlatformType{
                        ID: sdk.String("beatae"),
                        Kind: sdk.String("id"),
                        Name: sdk.String("Brandy Dicki"),
                    },
                },
            },
            Type: shared.AdTypeEnumAdServingStandardAd.ToPointer(),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("laudantium"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("officia"),
    }, operations.DfareportingAdsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ad != nil {
        // handle response
    }
}
```
