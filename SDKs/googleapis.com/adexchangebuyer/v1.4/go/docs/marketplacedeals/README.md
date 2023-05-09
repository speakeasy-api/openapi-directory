# Marketplacedeals

### Available Operations

* [AdexchangebuyerMarketplacedealsDelete](#adexchangebuyermarketplacedealsdelete) - Delete the specified deals from the proposal
* [AdexchangebuyerMarketplacedealsInsert](#adexchangebuyermarketplacedealsinsert) - Add new deals for the specified proposal
* [AdexchangebuyerMarketplacedealsList](#adexchangebuyermarketplacedealslist) - List all the deals for a given proposal
* [AdexchangebuyerMarketplacedealsUpdate](#adexchangebuyermarketplacedealsupdate) - Replaces all the deals in the proposal with the passed in deals

## AdexchangebuyerMarketplacedealsDelete

Delete the specified deals from the proposal

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
    res, err := s.Marketplacedeals.AdexchangebuyerMarketplacedealsDelete(ctx, operations.AdexchangebuyerMarketplacedealsDeleteRequest{
        DeleteOrderDealsRequest: &shared.DeleteOrderDealsRequest{
            DealIds: []string{
                "nihil",
                "ipsum",
                "voluptate",
                "id",
            },
            ProposalRevisionNumber: sdk.String("saepe"),
            UpdateAction: sdk.String("eius"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "optio",
        QuotaUser: sdk.String("accusamus"),
        UserIP: sdk.String("ad"),
    }, operations.AdexchangebuyerMarketplacedealsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOrderDealsResponse != nil {
        // handle response
    }
}
```

## AdexchangebuyerMarketplacedealsInsert

Add new deals for the specified proposal

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
    res, err := s.Marketplacedeals.AdexchangebuyerMarketplacedealsInsert(ctx, operations.AdexchangebuyerMarketplacedealsInsertRequest{
        AddOrderDealsRequest: &shared.AddOrderDealsRequest{
            Deals: []shared.MarketplaceDeal{
                shared.MarketplaceDeal{
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("suscipit"),
                        ReferencePayload: sdk.String("deserunt"),
                    },
                    CreationTimeMs: sdk.String("provident"),
                    CreativePreApprovalPolicy: sdk.String("minima"),
                    CreativeSafeFrameCompatibility: sdk.String("repellendus"),
                    DealID: sdk.String("totam"),
                    DealServingMetadata: &shared.DealServingMetadata{
                        AlcoholAdsAllowed: sdk.Bool(false),
                        DealPauseStatus: &shared.DealServingMetadataDealPauseStatus{
                            BuyerPauseReason: sdk.String("similique"),
                            FirstPausedBy: sdk.String("alias"),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("at"),
                        },
                    },
                    DeliveryControl: &shared.DeliveryControl{
                        CreativeBlockingLevel: sdk.String("quaerat"),
                        DeliveryRateType: sdk.String("tempora"),
                        FrequencyCaps: []shared.DeliveryControlFrequencyCap{
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(798047),
                                NumTimeUnits: sdk.Int(885338),
                                TimeUnitType: sdk.String("qui"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(679880),
                                NumTimeUnits: sdk.Int(952792),
                                TimeUnitType: sdk.String("esse"),
                            },
                        },
                    },
                    ExternalDealID: sdk.String("harum"),
                    FlightEndTimeMs: sdk.String("iusto"),
                    FlightStartTimeMs: sdk.String("ipsum"),
                    InventoryDescription: sdk.String("quisquam"),
                    IsRfpTemplate: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("tenetur"),
                    LastUpdateTimeMs: sdk.String("amet"),
                    MakegoodRequestedReason: sdk.String("tempore"),
                    Name: sdk.String("Francis Haley"),
                    ProductID: sdk.String("totam"),
                    ProductRevisionNumber: sdk.String("nihil"),
                    ProgrammaticCreativeSource: sdk.String("sit"),
                    ProposalID: sdk.String("expedita"),
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Hermann_Renner@gmail.com"),
                            Name: sdk.String("Tracy Gottlieb"),
                        },
                    },
                    SharedTargetings: []shared.SharedTargeting{
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "dicta",
                                            "laborum",
                                            "totam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(132068),
                                                Width: sdk.Int(174909),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(716860),
                                                Width: sdk.Int(704474),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("aliquid"),
                                        NativeTemplate: sdk.String("quam"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(565421),
                                            Width: sdk.Int(840429),
                                        },
                                        SkippableAdType: sdk.String("qui"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("fugit"),
                                                EndHour: sdk.Int(164959),
                                                EndMinute: sdk.Int(488056),
                                                StartHour: sdk.Int(124833),
                                                StartMinute: sdk.Int(355613),
                                            },
                                        },
                                        TimeZoneType: sdk.String("nam"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "voluptatem",
                                            "cumque",
                                            "soluta",
                                            "nobis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "saepe",
                                        },
                                    },
                                    LongValue: sdk.String("ipsum"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "nobis",
                                        },
                                    },
                                    StringValue: sdk.String("quos"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "cupiditate",
                                            "aperiam",
                                            "delectus",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(292147),
                                                Width: sdk.Int(286915),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("adipisci"),
                                        NativeTemplate: sdk.String("dolorum"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(100294),
                                            Width: sdk.Int(63038),
                                        },
                                        SkippableAdType: sdk.String("aut"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("itaque"),
                                                EndHour: sdk.Int(9240),
                                                EndMinute: sdk.Int(669917),
                                                StartHour: sdk.Int(833038),
                                                StartMinute: sdk.Int(785153),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("doloribus"),
                                                EndHour: sdk.Int(281730),
                                                EndMinute: sdk.Int(703495),
                                                StartHour: sdk.Int(586410),
                                                StartMinute: sdk.Int(181631),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quae"),
                                                EndHour: sdk.Int(512393),
                                                EndMinute: sdk.Int(485628),
                                                StartHour: sdk.Int(580447),
                                                StartMinute: sdk.Int(977496),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quisquam"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "omnis",
                                            "quis",
                                            "ipsum",
                                            "delectus",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "consectetur",
                                            "vero",
                                        },
                                    },
                                    LongValue: sdk.String("tenetur"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "hic",
                                            "distinctio",
                                        },
                                    },
                                    StringValue: sdk.String("quod"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "similique",
                                            "facilis",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(498140),
                                                Width: sdk.Int(293020),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(844550),
                                                Width: sdk.Int(848944),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(194342),
                                                Width: sdk.Int(617877),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(773326),
                                                Width: sdk.Int(13236),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("voluptatibus"),
                                        NativeTemplate: sdk.String("exercitationem"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(862310),
                                            Width: sdk.Int(148141),
                                        },
                                        SkippableAdType: sdk.String("porro"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("doloribus"),
                                                EndHour: sdk.Int(478370),
                                                EndMinute: sdk.Int(753570),
                                                StartHour: sdk.Int(497391),
                                                StartMinute: sdk.Int(4048),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("officia"),
                                                EndHour: sdk.Int(269479),
                                                EndMinute: sdk.Int(368584),
                                                StartHour: sdk.Int(410492),
                                                StartMinute: sdk.Int(136900),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("vel"),
                                                EndHour: sdk.Int(822118),
                                                EndMinute: sdk.Int(297842),
                                                StartHour: sdk.Int(189848),
                                                StartMinute: sdk.Int(401132),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("laudantium"),
                                                EndHour: sdk.Int(120657),
                                                EndMinute: sdk.Int(224317),
                                                StartHour: sdk.Int(980700),
                                                StartMinute: sdk.Int(97844),
                                            },
                                        },
                                        TimeZoneType: sdk.String("ex"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "excepturi",
                                            "voluptatibus",
                                            "nostrum",
                                            "sapiente",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "saepe",
                                            "ea",
                                            "impedit",
                                            "corporis",
                                        },
                                    },
                                    LongValue: sdk.String("veniam"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "inventore",
                                            "magnam",
                                        },
                                    },
                                    StringValue: sdk.String("ea"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "consectetur",
                                            "recusandae",
                                            "aspernatur",
                                            "minima",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(952871),
                                                Width: sdk.Int(725595),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("aut"),
                                        NativeTemplate: sdk.String("aut"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(533466),
                                            Width: sdk.Int(770581),
                                        },
                                        SkippableAdType: sdk.String("aliquam"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("accusamus"),
                                                EndHour: sdk.Int(79522),
                                                EndMinute: sdk.Int(250622),
                                                StartHour: sdk.Int(89603),
                                                StartMinute: sdk.Int(677412),
                                            },
                                        },
                                        TimeZoneType: sdk.String("laborum"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "velit",
                                            "eum",
                                            "autem",
                                            "nobis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "assumenda",
                                            "nulla",
                                            "voluptas",
                                        },
                                    },
                                    LongValue: sdk.String("libero"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "tempora",
                                        },
                                    },
                                    StringValue: sdk.String("numquam"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "ipsa",
                                            "molestiae",
                                            "magnam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(262118),
                                                Width: sdk.Int(458515),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(456141),
                                                Width: sdk.Int(524593),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("fuga"),
                                        NativeTemplate: sdk.String("reprehenderit"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(695626),
                                            Width: sdk.Int(852635),
                                        },
                                        SkippableAdType: sdk.String("ut"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("suscipit"),
                                                EndHour: sdk.Int(826871),
                                                EndMinute: sdk.Int(181151),
                                                StartHour: sdk.Int(509342),
                                                StartMinute: sdk.Int(788546),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("veritatis"),
                                                EndHour: sdk.Int(56848),
                                                EndMinute: sdk.Int(660040),
                                                StartHour: sdk.Int(696997),
                                                StartMinute: sdk.Int(206594),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quo"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "quo",
                                            "fuga",
                                            "eius",
                                            "eos",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "ab",
                                            "cupiditate",
                                        },
                                    },
                                    LongValue: sdk.String("consequatur"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "debitis",
                                            "ipsam",
                                        },
                                    },
                                    StringValue: sdk.String("aspernatur"),
                                },
                            },
                            Key: sdk.String("sequi"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "recusandae",
                                            "aperiam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(799796),
                                                Width: sdk.Int(490819),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(76956),
                                                Width: sdk.Int(469498),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(518835),
                                                Width: sdk.Int(882710),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("aliquam"),
                                        NativeTemplate: sdk.String("odio"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(577543),
                                            Width: sdk.Int(414567),
                                        },
                                        SkippableAdType: sdk.String("sapiente"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("deserunt"),
                                                EndHour: sdk.Int(475289),
                                                EndMinute: sdk.Int(35362),
                                                StartHour: sdk.Int(783648),
                                                StartMinute: sdk.Int(430402),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quas"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "consequuntur",
                                            "deleniti",
                                            "fugit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "mollitia",
                                            "incidunt",
                                            "atque",
                                        },
                                    },
                                    LongValue: sdk.String("explicabo"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "nisi",
                                            "fugit",
                                        },
                                    },
                                    StringValue: sdk.String("sapiente"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "ratione",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(903984),
                                                Width: sdk.Int(578922),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("atque"),
                                        NativeTemplate: sdk.String("et"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(456911),
                                            Width: sdk.Int(910545),
                                        },
                                        SkippableAdType: sdk.String("accusamus"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("esse"),
                                                EndHour: sdk.Int(800379),
                                                EndMinute: sdk.Int(724168),
                                                StartHour: sdk.Int(877131),
                                                StartMinute: sdk.Int(399025),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quasi"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "vel",
                                            "harum",
                                            "molestiae",
                                            "rerum",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "minima",
                                            "distinctio",
                                            "eligendi",
                                        },
                                    },
                                    LongValue: sdk.String("sit"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "tempore",
                                            "adipisci",
                                            "cumque",
                                        },
                                    },
                                    StringValue: sdk.String("consequuntur"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "minus",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(959167),
                                                Width: sdk.Int(232865),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(458139),
                                                Width: sdk.Int(503427),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("provident"),
                                        NativeTemplate: sdk.String("a"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(857723),
                                            Width: sdk.Int(557811),
                                        },
                                        SkippableAdType: sdk.String("esse"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("a"),
                                                EndHour: sdk.Int(621679),
                                                EndMinute: sdk.Int(575751),
                                                StartHour: sdk.Int(863023),
                                                StartMinute: sdk.Int(820767),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quia"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "asperiores",
                                            "facere",
                                            "veritatis",
                                            "consequuntur",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "similique",
                                        },
                                    },
                                    LongValue: sdk.String("culpa"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "tenetur",
                                            "quae",
                                        },
                                    },
                                    StringValue: sdk.String("earum"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "in",
                                            "eius",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(849039),
                                                Width: sdk.Int(742238),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(33304),
                                                Width: sdk.Int(306986),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(958983),
                                                Width: sdk.Int(119771),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("ullam"),
                                        NativeTemplate: sdk.String("reprehenderit"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(356707),
                                            Width: sdk.Int(391774),
                                        },
                                        SkippableAdType: sdk.String("aut"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("qui"),
                                                EndHour: sdk.Int(845358),
                                                EndMinute: sdk.Int(401259),
                                                StartHour: sdk.Int(536275),
                                                StartMinute: sdk.Int(929292),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dolorum"),
                                                EndHour: sdk.Int(99615),
                                                EndMinute: sdk.Int(609178),
                                                StartHour: sdk.Int(945302),
                                                StartMinute: sdk.Int(98478),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("at"),
                                                EndHour: sdk.Int(92027),
                                                EndMinute: sdk.Int(454162),
                                                StartHour: sdk.Int(55965),
                                                StartMinute: sdk.Int(326701),
                                            },
                                        },
                                        TimeZoneType: sdk.String("veritatis"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "adipisci",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "temporibus",
                                            "accusantium",
                                            "rem",
                                        },
                                    },
                                    LongValue: sdk.String("aut"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "eum",
                                            "mollitia",
                                            "ab",
                                        },
                                    },
                                    StringValue: sdk.String("corrupti"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "dolor",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(253191),
                                                Width: sdk.Int(771089),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(131055),
                                                Width: sdk.Int(376226),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(12036),
                                                Width: sdk.Int(491025),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("dicta"),
                                        NativeTemplate: sdk.String("maiores"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(618480),
                                            Width: sdk.Int(244651),
                                        },
                                        SkippableAdType: sdk.String("voluptatibus"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("asperiores"),
                                                EndHour: sdk.Int(45659),
                                                EndMinute: sdk.Int(409054),
                                                StartHour: sdk.Int(310067),
                                                StartMinute: sdk.Int(162954),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("repellendus"),
                                                EndHour: sdk.Int(638762),
                                                EndMinute: sdk.Int(807023),
                                                StartHour: sdk.Int(490305),
                                                StartMinute: sdk.Int(640024),
                                            },
                                        },
                                        TimeZoneType: sdk.String("asperiores"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "quae",
                                            "quaerat",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "quod",
                                            "labore",
                                            "ab",
                                            "adipisci",
                                        },
                                    },
                                    LongValue: sdk.String("fuga"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "suscipit",
                                            "velit",
                                            "culpa",
                                        },
                                    },
                                    StringValue: sdk.String("est"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "totam",
                                            "fugiat",
                                            "vel",
                                            "ducimus",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(427834),
                                                Width: sdk.Int(287051),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(822560),
                                                Width: sdk.Int(706575),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(738227),
                                                Width: sdk.Int(414857),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("in"),
                                        NativeTemplate: sdk.String("corporis"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(968904),
                                            Width: sdk.Int(828657),
                                        },
                                        SkippableAdType: sdk.String("nemo"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aliquid"),
                                                EndHour: sdk.Int(46007),
                                                EndMinute: sdk.Int(738683),
                                                StartHour: sdk.Int(232627),
                                                StartMinute: sdk.Int(449083),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("exercitationem"),
                                                EndHour: sdk.Int(937285),
                                                EndMinute: sdk.Int(814967),
                                                StartHour: sdk.Int(257233),
                                                StartMinute: sdk.Int(985492),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("suscipit"),
                                                EndHour: sdk.Int(968972),
                                                EndMinute: sdk.Int(697142),
                                                StartHour: sdk.Int(904949),
                                                StartMinute: sdk.Int(897071),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dolore"),
                                                EndHour: sdk.Int(121059),
                                                EndMinute: sdk.Int(992012),
                                                StartHour: sdk.Int(241545),
                                                StartMinute: sdk.Int(249420),
                                            },
                                        },
                                        TimeZoneType: sdk.String("amet"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dignissimos",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "debitis",
                                            "consectetur",
                                            "corporis",
                                            "harum",
                                        },
                                    },
                                    LongValue: sdk.String("laboriosam"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "voluptates",
                                        },
                                    },
                                    StringValue: sdk.String("libero"),
                                },
                            },
                            Key: sdk.String("vitae"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "tempora",
                                            "aspernatur",
                                            "voluptas",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(374296),
                                                Width: sdk.Int(324405),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(748789),
                                                Width: sdk.Int(680116),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("adipisci"),
                                        NativeTemplate: sdk.String("minus"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(171853),
                                            Width: sdk.Int(503934),
                                        },
                                        SkippableAdType: sdk.String("in"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aliquam"),
                                                EndHour: sdk.Int(885963),
                                                EndMinute: sdk.Int(839189),
                                                StartHour: sdk.Int(351870),
                                                StartMinute: sdk.Int(237742),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("cum"),
                                                EndHour: sdk.Int(502389),
                                                EndMinute: sdk.Int(555361),
                                                StartHour: sdk.Int(942584),
                                                StartMinute: sdk.Int(201517),
                                            },
                                        },
                                        TimeZoneType: sdk.String("culpa"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "pariatur",
                                            "totam",
                                            "hic",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "nobis",
                                            "sit",
                                        },
                                    },
                                    LongValue: sdk.String("rerum"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "reiciendis",
                                        },
                                    },
                                    StringValue: sdk.String("explicabo"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "facilis",
                                            "voluptate",
                                            "expedita",
                                            "ab",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(292794),
                                                Width: sdk.Int(671907),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(152354),
                                                Width: sdk.Int(447516),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(417486),
                                                Width: sdk.Int(696077),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("explicabo"),
                                        NativeTemplate: sdk.String("voluptas"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(604118),
                                            Width: sdk.Int(100032),
                                        },
                                        SkippableAdType: sdk.String("suscipit"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("debitis"),
                                                EndHour: sdk.Int(72434),
                                                EndMinute: sdk.Int(967795),
                                                StartHour: sdk.Int(19300),
                                                StartMinute: sdk.Int(546885),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("maiores"),
                                                EndHour: sdk.Int(274823),
                                                EndMinute: sdk.Int(148478),
                                                StartHour: sdk.Int(592231),
                                                StartMinute: sdk.Int(258702),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("necessitatibus"),
                                                EndHour: sdk.Int(215529),
                                                EndMinute: sdk.Int(406733),
                                                StartHour: sdk.Int(579912),
                                                StartMinute: sdk.Int(552078),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptatibus"),
                                                EndHour: sdk.Int(271653),
                                                EndMinute: sdk.Int(273009),
                                                StartHour: sdk.Int(455444),
                                                StartMinute: sdk.Int(970076),
                                            },
                                        },
                                        TimeZoneType: sdk.String("ex"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "non",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "praesentium",
                                            "facilis",
                                            "quaerat",
                                            "incidunt",
                                        },
                                    },
                                    LongValue: sdk.String("ipsam"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "rem",
                                            "sit",
                                            "nobis",
                                            "error",
                                        },
                                    },
                                    StringValue: sdk.String("veniam"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "recusandae",
                                            "reiciendis",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(168576),
                                                Width: sdk.Int(48690),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(901483),
                                                Width: sdk.Int(253642),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(329935),
                                                Width: sdk.Int(446135),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(889234),
                                                Width: sdk.Int(104627),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("laudantium"),
                                        NativeTemplate: sdk.String("exercitationem"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(510629),
                                            Width: sdk.Int(740098),
                                        },
                                        SkippableAdType: sdk.String("laboriosam"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptatum"),
                                                EndHour: sdk.Int(622385),
                                                EndMinute: sdk.Int(944708),
                                                StartHour: sdk.Int(710529),
                                                StartMinute: sdk.Int(892863),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("neque"),
                                                EndHour: sdk.Int(677115),
                                                EndMinute: sdk.Int(341698),
                                                StartHour: sdk.Int(639028),
                                                StartMinute: sdk.Int(676243),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("corrupti"),
                                                EndHour: sdk.Int(879235),
                                                EndMinute: sdk.Int(272683),
                                                StartHour: sdk.Int(543678),
                                                StartMinute: sdk.Int(148268),
                                            },
                                        },
                                        TimeZoneType: sdk.String("ut"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "voluptatem",
                                            "culpa",
                                            "expedita",
                                            "magnam",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "esse",
                                        },
                                    },
                                    LongValue: sdk.String("ipsam"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "voluptatum",
                                        },
                                    },
                                    StringValue: sdk.String("quas"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "corporis",
                                            "et",
                                            "blanditiis",
                                            "ex",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(24313),
                                                Width: sdk.Int(425508),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nostrum"),
                                        NativeTemplate: sdk.String("saepe"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(622231),
                                            Width: sdk.Int(8511),
                                        },
                                        SkippableAdType: sdk.String("incidunt"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dolorem"),
                                                EndHour: sdk.Int(690894),
                                                EndMinute: sdk.Int(115703),
                                                StartHour: sdk.Int(99416),
                                                StartMinute: sdk.Int(577140),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("labore"),
                                                EndHour: sdk.Int(695270),
                                                EndMinute: sdk.Int(539074),
                                                StartHour: sdk.Int(671957),
                                                StartMinute: sdk.Int(724148),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("tenetur"),
                                                EndHour: sdk.Int(388867),
                                                EndMinute: sdk.Int(2703),
                                                StartHour: sdk.Int(227084),
                                                StartMinute: sdk.Int(647197),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptate"),
                                                EndHour: sdk.Int(600392),
                                                EndMinute: sdk.Int(972083),
                                                StartHour: sdk.Int(588740),
                                                StartMinute: sdk.Int(833819),
                                            },
                                        },
                                        TimeZoneType: sdk.String("delectus"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "perferendis",
                                            "est",
                                            "quidem",
                                            "reprehenderit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "fuga",
                                            "praesentium",
                                            "mollitia",
                                            "veniam",
                                        },
                                    },
                                    LongValue: sdk.String("voluptatem"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "repudiandae",
                                            "quasi",
                                            "atque",
                                            "reprehenderit",
                                        },
                                    },
                                    StringValue: sdk.String("asperiores"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "quidem",
                                            "maxime",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(461007),
                                                Width: sdk.Int(227759),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("assumenda"),
                                        NativeTemplate: sdk.String("ea"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(539118),
                                            Width: sdk.Int(623295),
                                        },
                                        SkippableAdType: sdk.String("officiis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("accusamus"),
                                                EndHour: sdk.Int(618826),
                                                EndMinute: sdk.Int(328303),
                                                StartHour: sdk.Int(133461),
                                                StartMinute: sdk.Int(404425),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("maiores"),
                                                EndHour: sdk.Int(544647),
                                                EndMinute: sdk.Int(871786),
                                                StartHour: sdk.Int(621693),
                                                StartMinute: sdk.Int(502721),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("suscipit"),
                                                EndHour: sdk.Int(922348),
                                                EndMinute: sdk.Int(542129),
                                                StartHour: sdk.Int(541381),
                                                StartMinute: sdk.Int(120919),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("recusandae"),
                                                EndHour: sdk.Int(680697),
                                                EndMinute: sdk.Int(829898),
                                                StartHour: sdk.Int(287119),
                                                StartMinute: sdk.Int(968287),
                                            },
                                        },
                                        TimeZoneType: sdk.String("doloremque"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dicta",
                                            "accusantium",
                                            "beatae",
                                            "dolores",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "laboriosam",
                                            "velit",
                                        },
                                    },
                                    LongValue: sdk.String("a"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "magnam",
                                            "saepe",
                                            "consequuntur",
                                        },
                                    },
                                    StringValue: sdk.String("occaecati"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "perspiciatis",
                                            "in",
                                            "adipisci",
                                            "eveniet",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(160230),
                                                Width: sdk.Int(145870),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(661118),
                                                Width: sdk.Int(335631),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(440264),
                                                Width: sdk.Int(625528),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("illo"),
                                        NativeTemplate: sdk.String("corporis"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(696463),
                                            Width: sdk.Int(910994),
                                        },
                                        SkippableAdType: sdk.String("non"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("doloremque"),
                                                EndHour: sdk.Int(434156),
                                                EndMinute: sdk.Int(59944),
                                                StartHour: sdk.Int(517612),
                                                StartMinute: sdk.Int(61078),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("molestiae"),
                                                EndHour: sdk.Int(907733),
                                                EndMinute: sdk.Int(184362),
                                                StartHour: sdk.Int(739884),
                                                StartMinute: sdk.Int(434761),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("necessitatibus"),
                                                EndHour: sdk.Int(187552),
                                                EndMinute: sdk.Int(672582),
                                                StartHour: sdk.Int(715208),
                                                StartMinute: sdk.Int(528940),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("rem"),
                                                EndHour: sdk.Int(304446),
                                                EndMinute: sdk.Int(320565),
                                                StartHour: sdk.Int(997963),
                                                StartMinute: sdk.Int(3099),
                                            },
                                        },
                                        TimeZoneType: sdk.String("corporis"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "nihil",
                                            "mollitia",
                                            "voluptas",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "maiores",
                                        },
                                    },
                                    LongValue: sdk.String("reiciendis"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "id",
                                        },
                                    },
                                    StringValue: sdk.String("minima"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "dolorum",
                                            "nesciunt",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(925703),
                                                Width: sdk.Int(607249),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("quaerat"),
                                        NativeTemplate: sdk.String("molestiae"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(403218),
                                            Width: sdk.Int(284000),
                                        },
                                        SkippableAdType: sdk.String("culpa"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("debitis"),
                                                EndHour: sdk.Int(514513),
                                                EndMinute: sdk.Int(432606),
                                                StartHour: sdk.Int(367927),
                                                StartMinute: sdk.Int(928219),
                                            },
                                        },
                                        TimeZoneType: sdk.String("esse"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "quis",
                                            "eum",
                                            "reiciendis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "aspernatur",
                                            "ullam",
                                            "quasi",
                                        },
                                    },
                                    LongValue: sdk.String("animi"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "mollitia",
                                            "provident",
                                        },
                                    },
                                    StringValue: sdk.String("possimus"),
                                },
                            },
                            Key: sdk.String("animi"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "accusantium",
                                            "repellat",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(351893),
                                                Width: sdk.Int(448143),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(721407),
                                                Width: sdk.Int(937636),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(637583),
                                                Width: sdk.Int(672041),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(813054),
                                                Width: sdk.Int(266697),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("voluptatibus"),
                                        NativeTemplate: sdk.String("molestias"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(889794),
                                            Width: sdk.Int(956933),
                                        },
                                        SkippableAdType: sdk.String("cumque"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("rerum"),
                                                EndHour: sdk.Int(272229),
                                                EndMinute: sdk.Int(335498),
                                                StartHour: sdk.Int(82057),
                                                StartMinute: sdk.Int(147685),
                                            },
                                        },
                                        TimeZoneType: sdk.String("cumque"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "perferendis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "aspernatur",
                                        },
                                    },
                                    LongValue: sdk.String("eum"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "rem",
                                            "at",
                                        },
                                    },
                                    StringValue: sdk.String("impedit"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "sapiente",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(117320),
                                                Width: sdk.Int(325118),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(107004),
                                                Width: sdk.Int(583404),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("provident"),
                                        NativeTemplate: sdk.String("earum"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(745398),
                                            Width: sdk.Int(940782),
                                        },
                                        SkippableAdType: sdk.String("illum"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("earum"),
                                                EndHour: sdk.Int(596211),
                                                EndMinute: sdk.Int(983427),
                                                StartHour: sdk.Int(891801),
                                                StartMinute: sdk.Int(399802),
                                            },
                                        },
                                        TimeZoneType: sdk.String("porro"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dolorem",
                                            "fugit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "fuga",
                                            "ratione",
                                            "animi",
                                            "necessitatibus",
                                        },
                                    },
                                    LongValue: sdk.String("nulla"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "quasi",
                                        },
                                    },
                                    StringValue: sdk.String("et"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "occaecati",
                                            "suscipit",
                                            "adipisci",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(169025),
                                                Width: sdk.Int(984934),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nulla"),
                                        NativeTemplate: sdk.String("necessitatibus"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(58534),
                                            Width: sdk.Int(271113),
                                        },
                                        SkippableAdType: sdk.String("nihil"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dicta"),
                                                EndHour: sdk.Int(479754),
                                                EndMinute: sdk.Int(457059),
                                                StartHour: sdk.Int(508390),
                                                StartMinute: sdk.Int(979963),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("reiciendis"),
                                                EndHour: sdk.Int(423706),
                                                EndMinute: sdk.Int(99958),
                                                StartHour: sdk.Int(857125),
                                                StartMinute: sdk.Int(39650),
                                            },
                                        },
                                        TimeZoneType: sdk.String("dicta"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "tempora",
                                            "esse",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "consectetur",
                                            "aliquid",
                                        },
                                    },
                                    LongValue: sdk.String("ipsa"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "sunt",
                                            "nostrum",
                                            "fugiat",
                                        },
                                    },
                                    StringValue: sdk.String("expedita"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "officia",
                                            "suscipit",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(21973),
                                                Width: sdk.Int(431760),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(374753),
                                                Width: sdk.Int(614528),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("id"),
                                        NativeTemplate: sdk.String("ab"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(625358),
                                            Width: sdk.Int(822407),
                                        },
                                        SkippableAdType: sdk.String("voluptates"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("laborum"),
                                                EndHour: sdk.Int(726343),
                                                EndMinute: sdk.Int(324083),
                                                StartHour: sdk.Int(536923),
                                                StartMinute: sdk.Int(316220),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("vitae"),
                                                EndHour: sdk.Int(833316),
                                                EndMinute: sdk.Int(405036),
                                                StartHour: sdk.Int(775803),
                                                StartMinute: sdk.Int(405373),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("ut"),
                                                EndHour: sdk.Int(321043),
                                                EndMinute: sdk.Int(713927),
                                                StartHour: sdk.Int(29950),
                                                StartMinute: sdk.Int(561577),
                                            },
                                        },
                                        TimeZoneType: sdk.String("cum"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "beatae",
                                            "voluptatum",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "veritatis",
                                            "rerum",
                                            "est",
                                        },
                                    },
                                    LongValue: sdk.String("culpa"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "sapiente",
                                        },
                                    },
                                    StringValue: sdk.String("officiis"),
                                },
                            },
                            Key: sdk.String("architecto"),
                        },
                    },
                    SyndicationProduct: sdk.String("fuga"),
                    Terms: &shared.DealTerms{
                        BrandingType: sdk.String("pariatur"),
                        CrossListedExternalDealIDType: sdk.String("debitis"),
                        Description: sdk.String("voluptatem"),
                        EstimatedGrossSpend: &shared.Price{
                            AmountMicros: sdk.Float64(12.07),
                            CurrencyCode: sdk.String("deleniti"),
                            ExpectedCpmMicros: sdk.Float64(9372.19),
                            PricingType: sdk.String("ex"),
                        },
                        EstimatedImpressionsPerDay: sdk.String("sapiente"),
                        GuaranteedFixedPriceTerms: &shared.DealTermsGuaranteedFixedPriceTerms{
                            BillingInfo: &shared.DealTermsGuaranteedFixedPriceTermsBillingInfo{
                                CurrencyConversionTimeMs: sdk.String("rem"),
                                DfpLineItemID: sdk.String("minus"),
                                OriginalContractedQuantity: sdk.String("nemo"),
                                Price: &shared.Price{
                                    AmountMicros: sdk.Float64(9920.74),
                                    CurrencyCode: sdk.String("ratione"),
                                    ExpectedCpmMicros: sdk.Float64(3552.25),
                                    PricingType: sdk.String("perferendis"),
                                },
                            },
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("totam"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("impedit"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quibusdam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7205.28),
                                        CurrencyCode: sdk.String("ipsam"),
                                        ExpectedCpmMicros: sdk.Float64(6334.15),
                                        PricingType: sdk.String("dolor"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("aliquam"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("inventore"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("deleniti"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(853.11),
                                        CurrencyCode: sdk.String("tempora"),
                                        ExpectedCpmMicros: sdk.Float64(2213.96),
                                        PricingType: sdk.String("consequatur"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("architecto"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("sit"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("modi"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1442.86),
                                        CurrencyCode: sdk.String("ab"),
                                        ExpectedCpmMicros: sdk.Float64(5137.6),
                                        PricingType: sdk.String("quae"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("dolor"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("fugiat"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("ipsam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1621.2),
                                        CurrencyCode: sdk.String("ipsa"),
                                        ExpectedCpmMicros: sdk.Float64(5596.82),
                                        PricingType: sdk.String("eveniet"),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("impedit"),
                            GuaranteedLooks: sdk.String("officiis"),
                            MinimumDailyLooks: sdk.String("esse"),
                        },
                        NonGuaranteedAuctionTerms: &shared.DealTermsNonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricePerBuyers: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("sed"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("veniam"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("nesciunt"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7129.27),
                                        CurrencyCode: sdk.String("eum"),
                                        ExpectedCpmMicros: sdk.Float64(4269.43),
                                        PricingType: sdk.String("voluptatum"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("magnam"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("exercitationem"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("ab"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7814.8),
                                        CurrencyCode: sdk.String("autem"),
                                        ExpectedCpmMicros: sdk.Float64(7510.22),
                                        PricingType: sdk.String("laboriosam"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("recusandae"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("consequuntur"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("voluptatem"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(3502.07),
                                        CurrencyCode: sdk.String("necessitatibus"),
                                        ExpectedCpmMicros: sdk.Float64(956.19),
                                        PricingType: sdk.String("nisi"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("at"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("vero"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("est"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(6907.85),
                                        CurrencyCode: sdk.String("sequi"),
                                        ExpectedCpmMicros: sdk.Float64(9873.49),
                                        PricingType: sdk.String("repudiandae"),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.DealTermsNonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("occaecati"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("nemo"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("voluptate"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(5010.63),
                                        CurrencyCode: sdk.String("officia"),
                                        ExpectedCpmMicros: sdk.Float64(3763.89),
                                        PricingType: sdk.String("numquam"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("nemo"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("quos"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("eius"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1319.03),
                                        CurrencyCode: sdk.String("ducimus"),
                                        ExpectedCpmMicros: sdk.Float64(2005.16),
                                        PricingType: sdk.String("fuga"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("laudantium"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("incidunt"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quasi"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(5243.8),
                                        CurrencyCode: sdk.String("fugiat"),
                                        ExpectedCpmMicros: sdk.Float64(1173.8),
                                        PricingType: sdk.String("nisi"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("consequuntur"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("consectetur"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("aperiam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(5854.32),
                                        CurrencyCode: sdk.String("reiciendis"),
                                        ExpectedCpmMicros: sdk.Float64(7468.37),
                                        PricingType: sdk.String("alias"),
                                    },
                                },
                            },
                        },
                        RubiconNonGuaranteedTerms: &shared.DealTermsRubiconNonGuaranteedTerms{
                            PriorityPrice: &shared.Price{
                                AmountMicros: sdk.Float64(6089.89),
                                CurrencyCode: sdk.String("eos"),
                                ExpectedCpmMicros: sdk.Float64(5790.11),
                                PricingType: sdk.String("iste"),
                            },
                            StandardPrice: &shared.Price{
                                AmountMicros: sdk.Float64(1700.99),
                                CurrencyCode: sdk.String("inventore"),
                                ExpectedCpmMicros: sdk.Float64(6863.62),
                                PricingType: sdk.String("accusamus"),
                            },
                        },
                        SellerTimeZone: sdk.String("voluptatibus"),
                    },
                    WebPropertyCode: sdk.String("distinctio"),
                },
                shared.MarketplaceDeal{
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("omnis"),
                        ReferencePayload: sdk.String("delectus"),
                    },
                    CreationTimeMs: sdk.String("minima"),
                    CreativePreApprovalPolicy: sdk.String("praesentium"),
                    CreativeSafeFrameCompatibility: sdk.String("maxime"),
                    DealID: sdk.String("magnam"),
                    DealServingMetadata: &shared.DealServingMetadata{
                        AlcoholAdsAllowed: sdk.Bool(false),
                        DealPauseStatus: &shared.DealServingMetadataDealPauseStatus{
                            BuyerPauseReason: sdk.String("temporibus"),
                            FirstPausedBy: sdk.String("quos"),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("commodi"),
                        },
                    },
                    DeliveryControl: &shared.DeliveryControl{
                        CreativeBlockingLevel: sdk.String("itaque"),
                        DeliveryRateType: sdk.String("commodi"),
                        FrequencyCaps: []shared.DeliveryControlFrequencyCap{
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(936618),
                                NumTimeUnits: sdk.Int(267207),
                                TimeUnitType: sdk.String("nam"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(877399),
                                NumTimeUnits: sdk.Int(32901),
                                TimeUnitType: sdk.String("ipsam"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(425946),
                                NumTimeUnits: sdk.Int(1383),
                                TimeUnitType: sdk.String("quasi"),
                            },
                        },
                    },
                    ExternalDealID: sdk.String("non"),
                    FlightEndTimeMs: sdk.String("maiores"),
                    FlightStartTimeMs: sdk.String("enim"),
                    InventoryDescription: sdk.String("sint"),
                    IsRfpTemplate: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("nulla"),
                    LastUpdateTimeMs: sdk.String("deserunt"),
                    MakegoodRequestedReason: sdk.String("esse"),
                    Name: sdk.String("Melinda Orn"),
                    ProductID: sdk.String("accusamus"),
                    ProductRevisionNumber: sdk.String("impedit"),
                    ProgrammaticCreativeSource: sdk.String("hic"),
                    ProposalID: sdk.String("necessitatibus"),
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Garth.Tremblay79@yahoo.com"),
                            Name: sdk.String("Pablo Feeney"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Ollie_Cummerata72@gmail.com"),
                            Name: sdk.String("Glenda Kling"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Orlando.Leuschke13@gmail.com"),
                            Name: sdk.String("Cecil Gutkowski DDS"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Bartholome78@hotmail.com"),
                            Name: sdk.String("Ms. Sheila Blanda"),
                        },
                    },
                    SharedTargetings: []shared.SharedTargeting{
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "eum",
                                            "velit",
                                            "ut",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(935302),
                                                Width: sdk.Int(117525),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(772266),
                                                Width: sdk.Int(975884),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(610987),
                                                Width: sdk.Int(932562),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("alias"),
                                        NativeTemplate: sdk.String("nisi"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(931505),
                                            Width: sdk.Int(242178),
                                        },
                                        SkippableAdType: sdk.String("laborum"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dolor"),
                                                EndHour: sdk.Int(483394),
                                                EndMinute: sdk.Int(24753),
                                                StartHour: sdk.Int(39992),
                                                StartMinute: sdk.Int(7468),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("officia"),
                                                EndHour: sdk.Int(927403),
                                                EndMinute: sdk.Int(408303),
                                                StartHour: sdk.Int(693153),
                                                StartMinute: sdk.Int(377406),
                                            },
                                        },
                                        TimeZoneType: sdk.String("facilis"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "perspiciatis",
                                            "expedita",
                                            "deleniti",
                                            "a",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "ullam",
                                            "unde",
                                        },
                                    },
                                    LongValue: sdk.String("necessitatibus"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "impedit",
                                            "ipsam",
                                            "corporis",
                                        },
                                    },
                                    StringValue: sdk.String("est"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "esse",
                                            "labore",
                                            "veritatis",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(233173),
                                                Width: sdk.Int(112427),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(81371),
                                                Width: sdk.Int(212434),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(322017),
                                                Width: sdk.Int(183033),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(611328),
                                                Width: sdk.Int(403026),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nemo"),
                                        NativeTemplate: sdk.String("soluta"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(726227),
                                            Width: sdk.Int(526907),
                                        },
                                        SkippableAdType: sdk.String("dolorum"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("fugit"),
                                                EndHour: sdk.Int(545),
                                                EndMinute: sdk.Int(168042),
                                                StartHour: sdk.Int(425402),
                                                StartMinute: sdk.Int(64435),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quae"),
                                                EndHour: sdk.Int(264333),
                                                EndMinute: sdk.Int(208253),
                                                StartHour: sdk.Int(348357),
                                                StartMinute: sdk.Int(932394),
                                            },
                                        },
                                        TimeZoneType: sdk.String("et"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "unde",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "distinctio",
                                            "maxime",
                                            "quia",
                                            "quia",
                                        },
                                    },
                                    LongValue: sdk.String("nostrum"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "libero",
                                            "dicta",
                                            "id",
                                        },
                                    },
                                    StringValue: sdk.String("libero"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "officia",
                                            "quos",
                                            "placeat",
                                            "sit",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(57320),
                                                Width: sdk.Int(914864),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(80061),
                                                Width: sdk.Int(49348),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("totam"),
                                        NativeTemplate: sdk.String("dolore"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(755106),
                                            Width: sdk.Int(715053),
                                        },
                                        SkippableAdType: sdk.String("voluptatem"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("esse"),
                                                EndHour: sdk.Int(172951),
                                                EndMinute: sdk.Int(824798),
                                                StartHour: sdk.Int(107210),
                                                StartMinute: sdk.Int(668606),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("facere"),
                                                EndHour: sdk.Int(545918),
                                                EndMinute: sdk.Int(473143),
                                                StartHour: sdk.Int(588812),
                                                StartMinute: sdk.Int(882284),
                                            },
                                        },
                                        TimeZoneType: sdk.String("necessitatibus"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "sint",
                                            "ea",
                                            "autem",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "rerum",
                                            "laudantium",
                                        },
                                    },
                                    LongValue: sdk.String("corporis"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "voluptatibus",
                                            "cum",
                                            "at",
                                            "alias",
                                        },
                                    },
                                    StringValue: sdk.String("quia"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "fuga",
                                            "repudiandae",
                                            "accusantium",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(885208),
                                                Width: sdk.Int(177005),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(844854),
                                                Width: sdk.Int(483518),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(510128),
                                                Width: sdk.Int(140316),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("explicabo"),
                                        NativeTemplate: sdk.String("corporis"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(621473),
                                            Width: sdk.Int(937117),
                                        },
                                        SkippableAdType: sdk.String("adipisci"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("similique"),
                                                EndHour: sdk.Int(282837),
                                                EndMinute: sdk.Int(693746),
                                                StartHour: sdk.Int(339631),
                                                StartMinute: sdk.Int(106255),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("unde"),
                                                EndHour: sdk.Int(476946),
                                                EndMinute: sdk.Int(963198),
                                                StartHour: sdk.Int(585593),
                                                StartMinute: sdk.Int(147801),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("numquam"),
                                                EndHour: sdk.Int(256916),
                                                EndMinute: sdk.Int(201010),
                                                StartHour: sdk.Int(873557),
                                                StartMinute: sdk.Int(637856),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dignissimos"),
                                                EndHour: sdk.Int(760744),
                                                EndMinute: sdk.Int(898961),
                                                StartHour: sdk.Int(359111),
                                                StartMinute: sdk.Int(185518),
                                            },
                                        },
                                        TimeZoneType: sdk.String("expedita"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "cupiditate",
                                            "minima",
                                            "placeat",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "neque",
                                            "in",
                                        },
                                    },
                                    LongValue: sdk.String("minus"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "modi",
                                            "corporis",
                                        },
                                    },
                                    StringValue: sdk.String("magnam"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "tempore",
                                            "aperiam",
                                            "libero",
                                            "ratione",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(520875),
                                                Width: sdk.Int(577709),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(375994),
                                                Width: sdk.Int(779180),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("velit"),
                                        NativeTemplate: sdk.String("minus"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(684553),
                                            Width: sdk.Int(344530),
                                        },
                                        SkippableAdType: sdk.String("est"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("delectus"),
                                                EndHour: sdk.Int(735894),
                                                EndMinute: sdk.Int(878601),
                                                StartHour: sdk.Int(141506),
                                                StartMinute: sdk.Int(997437),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("pariatur"),
                                                EndHour: sdk.Int(362888),
                                                EndMinute: sdk.Int(441321),
                                                StartHour: sdk.Int(45234),
                                                StartMinute: sdk.Int(486410),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("minima"),
                                                EndHour: sdk.Int(448369),
                                                EndMinute: sdk.Int(496915),
                                                StartHour: sdk.Int(567846),
                                                StartMinute: sdk.Int(172195),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("error"),
                                                EndHour: sdk.Int(85076),
                                                EndMinute: sdk.Int(498180),
                                                StartHour: sdk.Int(452729),
                                                StartMinute: sdk.Int(866789),
                                            },
                                        },
                                        TimeZoneType: sdk.String("itaque"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "optio",
                                            "ex",
                                            "quaerat",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "officiis",
                                            "placeat",
                                        },
                                    },
                                    LongValue: sdk.String("quidem"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "quam",
                                            "dolorem",
                                        },
                                    },
                                    StringValue: sdk.String("modi"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "sint",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(194901),
                                                Width: sdk.Int(918547),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(741232),
                                                Width: sdk.Int(120120),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(936928),
                                                Width: sdk.Int(334474),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(659268),
                                                Width: sdk.Int(175372),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nam"),
                                        NativeTemplate: sdk.String("dicta"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(164488),
                                            Width: sdk.Int(899867),
                                        },
                                        SkippableAdType: sdk.String("nobis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("ducimus"),
                                                EndHour: sdk.Int(980486),
                                                EndMinute: sdk.Int(87382),
                                                StartHour: sdk.Int(96450),
                                                StartMinute: sdk.Int(386447),
                                            },
                                        },
                                        TimeZoneType: sdk.String("pariatur"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "excepturi",
                                            "occaecati",
                                            "nemo",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "nostrum",
                                            "doloribus",
                                        },
                                    },
                                    LongValue: sdk.String("eligendi"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "enim",
                                            "hic",
                                            "animi",
                                        },
                                    },
                                    StringValue: sdk.String("quas"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "molestias",
                                            "odio",
                                            "eaque",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(104078),
                                                Width: sdk.Int(554645),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(614438),
                                                Width: sdk.Int(826862),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(731634),
                                                Width: sdk.Int(725574),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(244032),
                                                Width: sdk.Int(38557),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("delectus"),
                                        NativeTemplate: sdk.String("impedit"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(741238),
                                            Width: sdk.Int(216870),
                                        },
                                        SkippableAdType: sdk.String("adipisci"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("deserunt"),
                                                EndHour: sdk.Int(42924),
                                                EndMinute: sdk.Int(339756),
                                                StartHour: sdk.Int(333072),
                                                StartMinute: sdk.Int(727481),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("architecto"),
                                                EndHour: sdk.Int(584593),
                                                EndMinute: sdk.Int(475589),
                                                StartHour: sdk.Int(756654),
                                                StartMinute: sdk.Int(820023),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("non"),
                                                EndHour: sdk.Int(298187),
                                                EndMinute: sdk.Int(932296),
                                                StartHour: sdk.Int(150935),
                                                StartMinute: sdk.Int(993002),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("veniam"),
                                                EndHour: sdk.Int(164532),
                                                EndMinute: sdk.Int(813880),
                                                StartHour: sdk.Int(512905),
                                                StartMinute: sdk.Int(140384),
                                            },
                                        },
                                        TimeZoneType: sdk.String("pariatur"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "exercitationem",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "velit",
                                        },
                                    },
                                    LongValue: sdk.String("facilis"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "nisi",
                                            "voluptatibus",
                                            "quaerat",
                                        },
                                    },
                                    StringValue: sdk.String("blanditiis"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "nisi",
                                            "quis",
                                            "nisi",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(794507),
                                                Width: sdk.Int(815200),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(706061),
                                                Width: sdk.Int(217663),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(318917),
                                                Width: sdk.Int(973819),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("voluptatibus"),
                                        NativeTemplate: sdk.String("consequuntur"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(891581),
                                            Width: sdk.Int(290841),
                                        },
                                        SkippableAdType: sdk.String("rerum"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("reprehenderit"),
                                                EndHour: sdk.Int(345506),
                                                EndMinute: sdk.Int(207296),
                                                StartHour: sdk.Int(480061),
                                                StartMinute: sdk.Int(664965),
                                            },
                                        },
                                        TimeZoneType: sdk.String("rem"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "fugiat",
                                            "unde",
                                            "officiis",
                                            "ducimus",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "dicta",
                                        },
                                    },
                                    LongValue: sdk.String("error"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "vitae",
                                            "dignissimos",
                                            "esse",
                                            "fugiat",
                                        },
                                    },
                                    StringValue: sdk.String("ad"),
                                },
                            },
                            Key: sdk.String("aspernatur"),
                        },
                    },
                    SyndicationProduct: sdk.String("enim"),
                    Terms: &shared.DealTerms{
                        BrandingType: sdk.String("delectus"),
                        CrossListedExternalDealIDType: sdk.String("iusto"),
                        Description: sdk.String("dignissimos"),
                        EstimatedGrossSpend: &shared.Price{
                            AmountMicros: sdk.Float64(7298.28),
                            CurrencyCode: sdk.String("illo"),
                            ExpectedCpmMicros: sdk.Float64(691.82),
                            PricingType: sdk.String("incidunt"),
                        },
                        EstimatedImpressionsPerDay: sdk.String("accusamus"),
                        GuaranteedFixedPriceTerms: &shared.DealTermsGuaranteedFixedPriceTerms{
                            BillingInfo: &shared.DealTermsGuaranteedFixedPriceTermsBillingInfo{
                                CurrencyConversionTimeMs: sdk.String("saepe"),
                                DfpLineItemID: sdk.String("tempore"),
                                OriginalContractedQuantity: sdk.String("veniam"),
                                Price: &shared.Price{
                                    AmountMicros: sdk.Float64(1764.99),
                                    CurrencyCode: sdk.String("reiciendis"),
                                    ExpectedCpmMicros: sdk.Float64(9391.61),
                                    PricingType: sdk.String("reprehenderit"),
                                },
                            },
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("nemo"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("repellat"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quisquam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1972.59),
                                        CurrencyCode: sdk.String("nihil"),
                                        ExpectedCpmMicros: sdk.Float64(5349.08),
                                        PricingType: sdk.String("illo"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("labore"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("assumenda"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("aliquam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7904.63),
                                        CurrencyCode: sdk.String("provident"),
                                        ExpectedCpmMicros: sdk.Float64(5149.93),
                                        PricingType: sdk.String("repudiandae"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("consequatur"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("maxime"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("aspernatur"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7239.42),
                                        CurrencyCode: sdk.String("expedita"),
                                        ExpectedCpmMicros: sdk.Float64(5591.74),
                                        PricingType: sdk.String("provident"),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("repudiandae"),
                            GuaranteedLooks: sdk.String("rerum"),
                            MinimumDailyLooks: sdk.String("dignissimos"),
                        },
                        NonGuaranteedAuctionTerms: &shared.DealTermsNonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricePerBuyers: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("vero"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("similique"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("repellendus"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(4348.27),
                                        CurrencyCode: sdk.String("dolorem"),
                                        ExpectedCpmMicros: sdk.Float64(4138.01),
                                        PricingType: sdk.String("impedit"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("commodi"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("aut"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("voluptatem"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(3228.29),
                                        CurrencyCode: sdk.String("quae"),
                                        ExpectedCpmMicros: sdk.Float64(2295.67),
                                        PricingType: sdk.String("illum"),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.DealTermsNonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("quidem"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("cum"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("amet"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(976.76),
                                        CurrencyCode: sdk.String("dicta"),
                                        ExpectedCpmMicros: sdk.Float64(5149.22),
                                        PricingType: sdk.String("doloremque"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("earum"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("iusto"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("amet"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(5879.67),
                                        CurrencyCode: sdk.String("dolorum"),
                                        ExpectedCpmMicros: sdk.Float64(8979.56),
                                        PricingType: sdk.String("provident"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("repudiandae"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("consequatur"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("nemo"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(4758.26),
                                        CurrencyCode: sdk.String("itaque"),
                                        ExpectedCpmMicros: sdk.Float64(7087.71),
                                        PricingType: sdk.String("corrupti"),
                                    },
                                },
                            },
                        },
                        RubiconNonGuaranteedTerms: &shared.DealTermsRubiconNonGuaranteedTerms{
                            PriorityPrice: &shared.Price{
                                AmountMicros: sdk.Float64(439.75),
                                CurrencyCode: sdk.String("sint"),
                                ExpectedCpmMicros: sdk.Float64(8795.22),
                                PricingType: sdk.String("eos"),
                            },
                            StandardPrice: &shared.Price{
                                AmountMicros: sdk.Float64(5200.81),
                                CurrencyCode: sdk.String("dicta"),
                                ExpectedCpmMicros: sdk.Float64(306.61),
                                PricingType: sdk.String("velit"),
                            },
                        },
                        SellerTimeZone: sdk.String("dolor"),
                    },
                    WebPropertyCode: sdk.String("sunt"),
                },
                shared.MarketplaceDeal{
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("a"),
                        ReferencePayload: sdk.String("dolor"),
                    },
                    CreationTimeMs: sdk.String("occaecati"),
                    CreativePreApprovalPolicy: sdk.String("atque"),
                    CreativeSafeFrameCompatibility: sdk.String("beatae"),
                    DealID: sdk.String("at"),
                    DealServingMetadata: &shared.DealServingMetadata{
                        AlcoholAdsAllowed: sdk.Bool(false),
                        DealPauseStatus: &shared.DealServingMetadataDealPauseStatus{
                            BuyerPauseReason: sdk.String("labore"),
                            FirstPausedBy: sdk.String("minus"),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("esse"),
                        },
                    },
                    DeliveryControl: &shared.DeliveryControl{
                        CreativeBlockingLevel: sdk.String("voluptatem"),
                        DeliveryRateType: sdk.String("perferendis"),
                        FrequencyCaps: []shared.DeliveryControlFrequencyCap{
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(411615),
                                NumTimeUnits: sdk.Int(46791),
                                TimeUnitType: sdk.String("dignissimos"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(998026),
                                NumTimeUnits: sdk.Int(243678),
                                TimeUnitType: sdk.String("porro"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(588639),
                                NumTimeUnits: sdk.Int(231382),
                                TimeUnitType: sdk.String("eligendi"),
                            },
                        },
                    },
                    ExternalDealID: sdk.String("dignissimos"),
                    FlightEndTimeMs: sdk.String("consectetur"),
                    FlightStartTimeMs: sdk.String("soluta"),
                    InventoryDescription: sdk.String("natus"),
                    IsRfpTemplate: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("temporibus"),
                    LastUpdateTimeMs: sdk.String("officia"),
                    MakegoodRequestedReason: sdk.String("amet"),
                    Name: sdk.String("Bruce Satterfield"),
                    ProductID: sdk.String("laborum"),
                    ProductRevisionNumber: sdk.String("dignissimos"),
                    ProgrammaticCreativeSource: sdk.String("vero"),
                    ProposalID: sdk.String("qui"),
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Brant.Christiansen@hotmail.com"),
                            Name: sdk.String("Virginia Bins"),
                        },
                    },
                    SharedTargetings: []shared.SharedTargeting{
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "in",
                                            "exercitationem",
                                            "labore",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(921193),
                                                Width: sdk.Int(265303),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(450209),
                                                Width: sdk.Int(127294),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("accusamus"),
                                        NativeTemplate: sdk.String("rem"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(44016),
                                            Width: sdk.Int(141817),
                                        },
                                        SkippableAdType: sdk.String("deleniti"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptate"),
                                                EndHour: sdk.Int(626707),
                                                EndMinute: sdk.Int(326118),
                                                StartHour: sdk.Int(727544),
                                                StartMinute: sdk.Int(300189),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("sit"),
                                                EndHour: sdk.Int(266788),
                                                EndMinute: sdk.Int(430116),
                                                StartHour: sdk.Int(199529),
                                                StartMinute: sdk.Int(652125),
                                            },
                                        },
                                        TimeZoneType: sdk.String("dignissimos"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "nostrum",
                                            "molestiae",
                                            "veniam",
                                            "reiciendis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "modi",
                                        },
                                    },
                                    LongValue: sdk.String("aut"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "eveniet",
                                        },
                                    },
                                    StringValue: sdk.String("odio"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "numquam",
                                            "dolorum",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(452399),
                                                Width: sdk.Int(232772),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(200637),
                                                Width: sdk.Int(310629),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(929476),
                                                Width: sdk.Int(791228),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(122662),
                                                Width: sdk.Int(715143),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("iusto"),
                                        NativeTemplate: sdk.String("quas"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(91728),
                                            Width: sdk.Int(704948),
                                        },
                                        SkippableAdType: sdk.String("amet"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("fuga"),
                                                EndHour: sdk.Int(5310),
                                                EndMinute: sdk.Int(526413),
                                                StartHour: sdk.Int(11355),
                                                StartMinute: sdk.Int(550055),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("laudantium"),
                                                EndHour: sdk.Int(832239),
                                                EndMinute: sdk.Int(83291),
                                                StartHour: sdk.Int(60778),
                                                StartMinute: sdk.Int(51075),
                                            },
                                        },
                                        TimeZoneType: sdk.String("saepe"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "mollitia",
                                            "nulla",
                                            "officia",
                                            "sed",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "alias",
                                        },
                                    },
                                    LongValue: sdk.String("eveniet"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "voluptatem",
                                            "incidunt",
                                            "qui",
                                            "qui",
                                        },
                                    },
                                    StringValue: sdk.String("necessitatibus"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "beatae",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(264649),
                                                Width: sdk.Int(760049),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(975095),
                                                Width: sdk.Int(562948),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("officia"),
                                        NativeTemplate: sdk.String("libero"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(520678),
                                            Width: sdk.Int(192846),
                                        },
                                        SkippableAdType: sdk.String("aliquid"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("impedit"),
                                                EndHour: sdk.Int(498388),
                                                EndMinute: sdk.Int(140957),
                                                StartHour: sdk.Int(243623),
                                                StartMinute: sdk.Int(967338),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("repellat"),
                                                EndHour: sdk.Int(861123),
                                                EndMinute: sdk.Int(671116),
                                                StartHour: sdk.Int(617657),
                                                StartMinute: sdk.Int(883780),
                                            },
                                        },
                                        TimeZoneType: sdk.String("doloremque"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "rerum",
                                            "recusandae",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "non",
                                            "rem",
                                            "quia",
                                            "ullam",
                                        },
                                    },
                                    LongValue: sdk.String("quisquam"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "voluptatibus",
                                        },
                                    },
                                    StringValue: sdk.String("eligendi"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "officiis",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(100251),
                                                Width: sdk.Int(317898),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("optio"),
                                        NativeTemplate: sdk.String("rem"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(17060),
                                            Width: sdk.Int(704271),
                                        },
                                        SkippableAdType: sdk.String("reiciendis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("iste"),
                                                EndHour: sdk.Int(117819),
                                                EndMinute: sdk.Int(552439),
                                                StartHour: sdk.Int(356315),
                                                StartMinute: sdk.Int(295950),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("modi"),
                                                EndHour: sdk.Int(929292),
                                                EndMinute: sdk.Int(807419),
                                                StartHour: sdk.Int(265905),
                                                StartMinute: sdk.Int(163558),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("assumenda"),
                                                EndHour: sdk.Int(876840),
                                                EndMinute: sdk.Int(985109),
                                                StartHour: sdk.Int(773711),
                                                StartMinute: sdk.Int(783397),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("accusamus"),
                                                EndHour: sdk.Int(518990),
                                                EndMinute: sdk.Int(969168),
                                                StartHour: sdk.Int(66074),
                                                StartMinute: sdk.Int(573444),
                                            },
                                        },
                                        TimeZoneType: sdk.String("nihil"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "iure",
                                            "odio",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "debitis",
                                        },
                                    },
                                    LongValue: sdk.String("vel"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "corporis",
                                        },
                                    },
                                    StringValue: sdk.String("voluptas"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "officia",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(716033),
                                                Width: sdk.Int(262800),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(56372),
                                                Width: sdk.Int(522062),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("maiores"),
                                        NativeTemplate: sdk.String("accusantium"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(331452),
                                            Width: sdk.Int(906232),
                                        },
                                        SkippableAdType: sdk.String("neque"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aliquam"),
                                                EndHour: sdk.Int(552581),
                                                EndMinute: sdk.Int(984773),
                                                StartHour: sdk.Int(851809),
                                                StartMinute: sdk.Int(668577),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("delectus"),
                                                EndHour: sdk.Int(245278),
                                                EndMinute: sdk.Int(110522),
                                                StartHour: sdk.Int(201096),
                                                StartMinute: sdk.Int(630832),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("illo"),
                                                EndHour: sdk.Int(997995),
                                                EndMinute: sdk.Int(363214),
                                                StartHour: sdk.Int(987890),
                                                StartMinute: sdk.Int(823753),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("unde"),
                                                EndHour: sdk.Int(275425),
                                                EndMinute: sdk.Int(128021),
                                                StartHour: sdk.Int(368491),
                                                StartMinute: sdk.Int(583193),
                                            },
                                        },
                                        TimeZoneType: sdk.String("optio"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "quidem",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "commodi",
                                        },
                                    },
                                    LongValue: sdk.String("sapiente"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "veniam",
                                        },
                                    },
                                    StringValue: sdk.String("debitis"),
                                },
                            },
                            Key: sdk.String("officia"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "numquam",
                                            "tenetur",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(728559),
                                                Width: sdk.Int(448386),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("minima"),
                                        NativeTemplate: sdk.String("ex"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(791762),
                                            Width: sdk.Int(68880),
                                        },
                                        SkippableAdType: sdk.String("beatae"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("nisi"),
                                                EndHour: sdk.Int(786954),
                                                EndMinute: sdk.Int(221218),
                                                StartHour: sdk.Int(496548),
                                                StartMinute: sdk.Int(683727),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("minima"),
                                                EndHour: sdk.Int(102446),
                                                EndMinute: sdk.Int(181476),
                                                StartHour: sdk.Int(397026),
                                                StartMinute: sdk.Int(166289),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("incidunt"),
                                                EndHour: sdk.Int(240490),
                                                EndMinute: sdk.Int(506343),
                                                StartHour: sdk.Int(220528),
                                                StartMinute: sdk.Int(349898),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("expedita"),
                                                EndHour: sdk.Int(706411),
                                                EndMinute: sdk.Int(769634),
                                                StartHour: sdk.Int(24577),
                                                StartMinute: sdk.Int(363482),
                                            },
                                        },
                                        TimeZoneType: sdk.String("culpa"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "amet",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "modi",
                                            "veniam",
                                            "quod",
                                        },
                                    },
                                    LongValue: sdk.String("itaque"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "quisquam",
                                            "enim",
                                            "doloribus",
                                            "assumenda",
                                        },
                                    },
                                    StringValue: sdk.String("officiis"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "alias",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(60335),
                                                Width: sdk.Int(751033),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(898193),
                                                Width: sdk.Int(155978),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(118932),
                                                Width: sdk.Int(426002),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("perspiciatis"),
                                        NativeTemplate: sdk.String("debitis"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(354821),
                                            Width: sdk.Int(103578),
                                        },
                                        SkippableAdType: sdk.String("accusantium"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("veritatis"),
                                                EndHour: sdk.Int(590585),
                                                EndMinute: sdk.Int(765833),
                                                StartHour: sdk.Int(435531),
                                                StartMinute: sdk.Int(842402),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quod"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "recusandae",
                                            "velit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "dignissimos",
                                            "laboriosam",
                                        },
                                    },
                                    LongValue: sdk.String("sed"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "natus",
                                            "provident",
                                        },
                                    },
                                    StringValue: sdk.String("cum"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "facilis",
                                            "quidem",
                                            "itaque",
                                            "laboriosam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(263767),
                                                Width: sdk.Int(595198),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(944626),
                                                Width: sdk.Int(736985),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(135548),
                                                Width: sdk.Int(725784),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nam"),
                                        NativeTemplate: sdk.String("incidunt"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(925395),
                                            Width: sdk.Int(797254),
                                        },
                                        SkippableAdType: sdk.String("id"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("autem"),
                                                EndHour: sdk.Int(779409),
                                                EndMinute: sdk.Int(198991),
                                                StartHour: sdk.Int(849383),
                                                StartMinute: sdk.Int(367475),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("illum"),
                                                EndHour: sdk.Int(706872),
                                                EndMinute: sdk.Int(247618),
                                                StartHour: sdk.Int(649534),
                                                StartMinute: sdk.Int(827051),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("recusandae"),
                                                EndHour: sdk.Int(718981),
                                                EndMinute: sdk.Int(866861),
                                                StartHour: sdk.Int(323365),
                                                StartMinute: sdk.Int(816151),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("laborum"),
                                                EndHour: sdk.Int(911451),
                                                EndMinute: sdk.Int(673191),
                                                StartHour: sdk.Int(276337),
                                                StartMinute: sdk.Int(802356),
                                            },
                                        },
                                        TimeZoneType: sdk.String("ipsam"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "suscipit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "molestias",
                                            "laborum",
                                            "est",
                                        },
                                    },
                                    LongValue: sdk.String("occaecati"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "quo",
                                            "perferendis",
                                        },
                                    },
                                    StringValue: sdk.String("fugit"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "quaerat",
                                            "eligendi",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(342921),
                                                Width: sdk.Int(888265),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(603650),
                                                Width: sdk.Int(860311),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(621393),
                                                Width: sdk.Int(653000),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(298613),
                                                Width: sdk.Int(344289),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("esse"),
                                        NativeTemplate: sdk.String("corrupti"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(684799),
                                            Width: sdk.Int(815225),
                                        },
                                        SkippableAdType: sdk.String("impedit"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("deserunt"),
                                                EndHour: sdk.Int(801075),
                                                EndMinute: sdk.Int(385739),
                                                StartHour: sdk.Int(41179),
                                                StartMinute: sdk.Int(31574),
                                            },
                                        },
                                        TimeZoneType: sdk.String("facere"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "maxime",
                                            "consequatur",
                                            "eaque",
                                            "architecto",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "porro",
                                            "blanditiis",
                                            "quae",
                                        },
                                    },
                                    LongValue: sdk.String("magni"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "sed",
                                            "necessitatibus",
                                            "impedit",
                                            "ipsa",
                                        },
                                    },
                                    StringValue: sdk.String("excepturi"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "maiores",
                                            "laudantium",
                                            "maiores",
                                            "alias",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(523365),
                                                Width: sdk.Int(118615),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(380595),
                                                Width: sdk.Int(938257),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(985360),
                                                Width: sdk.Int(244569),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(260588),
                                                Width: sdk.Int(458212),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("in"),
                                        NativeTemplate: sdk.String("eligendi"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(94697),
                                            Width: sdk.Int(203621),
                                        },
                                        SkippableAdType: sdk.String("vero"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("accusantium"),
                                                EndHour: sdk.Int(185816),
                                                EndMinute: sdk.Int(771241),
                                                StartHour: sdk.Int(104736),
                                                StartMinute: sdk.Int(278329),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("dicta"),
                                                EndHour: sdk.Int(139133),
                                                EndMinute: sdk.Int(357639),
                                                StartHour: sdk.Int(701441),
                                                StartMinute: sdk.Int(4654),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("error"),
                                                EndHour: sdk.Int(424854),
                                                EndMinute: sdk.Int(35581),
                                                StartHour: sdk.Int(664197),
                                                StartMinute: sdk.Int(388169),
                                            },
                                        },
                                        TimeZoneType: sdk.String("ex"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "veritatis",
                                            "ullam",
                                            "quae",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "incidunt",
                                            "quam",
                                            "magni",
                                        },
                                    },
                                    LongValue: sdk.String("deserunt"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "omnis",
                                            "sed",
                                            "nesciunt",
                                            "maxime",
                                        },
                                    },
                                    StringValue: sdk.String("quis"),
                                },
                            },
                            Key: sdk.String("cupiditate"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "maiores",
                                            "laudantium",
                                            "velit",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(230305),
                                                Width: sdk.Int(363845),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(57470),
                                                Width: sdk.Int(787916),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(948444),
                                                Width: sdk.Int(555294),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(476003),
                                                Width: sdk.Int(395634),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("asperiores"),
                                        NativeTemplate: sdk.String("a"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(749702),
                                            Width: sdk.Int(598316),
                                        },
                                        SkippableAdType: sdk.String("accusantium"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("minus"),
                                                EndHour: sdk.Int(417539),
                                                EndMinute: sdk.Int(908734),
                                                StartHour: sdk.Int(781582),
                                                StartMinute: sdk.Int(735740),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quidem"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "voluptates",
                                            "fugit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "sequi",
                                            "eligendi",
                                        },
                                    },
                                    LongValue: sdk.String("asperiores"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "blanditiis",
                                            "sint",
                                        },
                                    },
                                    StringValue: sdk.String("repellat"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "animi",
                                            "maiores",
                                            "itaque",
                                            "nulla",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(359097),
                                                Width: sdk.Int(246577),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(887701),
                                                Width: sdk.Int(315022),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(638609),
                                                Width: sdk.Int(902979),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("eum"),
                                        NativeTemplate: sdk.String("repudiandae"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(35742),
                                            Width: sdk.Int(637840),
                                        },
                                        SkippableAdType: sdk.String("impedit"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("blanditiis"),
                                                EndHour: sdk.Int(260911),
                                                EndMinute: sdk.Int(786189),
                                                StartHour: sdk.Int(177929),
                                                StartMinute: sdk.Int(748023),
                                            },
                                        },
                                        TimeZoneType: sdk.String("natus"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "quia",
                                            "magnam",
                                            "reprehenderit",
                                            "quod",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "corrupti",
                                            "amet",
                                            "molestiae",
                                        },
                                    },
                                    LongValue: sdk.String("amet"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "modi",
                                            "perferendis",
                                            "necessitatibus",
                                        },
                                    },
                                    StringValue: sdk.String("architecto"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "sunt",
                                            "maiores",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(139745),
                                                Width: sdk.Int(936845),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("veniam"),
                                        NativeTemplate: sdk.String("ipsam"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(51053),
                                            Width: sdk.Int(350387),
                                        },
                                        SkippableAdType: sdk.String("veniam"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("ad"),
                                                EndHour: sdk.Int(394161),
                                                EndMinute: sdk.Int(946808),
                                                StartHour: sdk.Int(338281),
                                                StartMinute: sdk.Int(845154),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("nemo"),
                                                EndHour: sdk.Int(382764),
                                                EndMinute: sdk.Int(866459),
                                                StartHour: sdk.Int(24769),
                                                StartMinute: sdk.Int(694728),
                                            },
                                        },
                                        TimeZoneType: sdk.String("repellendus"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "id",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "sed",
                                            "possimus",
                                            "repellat",
                                            "repudiandae",
                                        },
                                    },
                                    LongValue: sdk.String("architecto"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "pariatur",
                                        },
                                    },
                                    StringValue: sdk.String("harum"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "voluptatibus",
                                            "iure",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(795457),
                                                Width: sdk.Int(746688),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("dolorum"),
                                        NativeTemplate: sdk.String("velit"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(937865),
                                            Width: sdk.Int(510020),
                                        },
                                        SkippableAdType: sdk.String("error"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quasi"),
                                                EndHour: sdk.Int(649032),
                                                EndMinute: sdk.Int(884361),
                                                StartHour: sdk.Int(687589),
                                                StartMinute: sdk.Int(769156),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("doloremque"),
                                                EndHour: sdk.Int(711871),
                                                EndMinute: sdk.Int(549237),
                                                StartHour: sdk.Int(53733),
                                                StartMinute: sdk.Int(643199),
                                            },
                                        },
                                        TimeZoneType: sdk.String("aliquid"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "magni",
                                            "tempora",
                                            "possimus",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "rerum",
                                        },
                                    },
                                    LongValue: sdk.String("sed"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "optio",
                                            "delectus",
                                            "minus",
                                            "quo",
                                        },
                                    },
                                    StringValue: sdk.String("quos"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "voluptatum",
                                            "iste",
                                            "corporis",
                                            "accusantium",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(14251),
                                                Width: sdk.Int(984031),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nostrum"),
                                        NativeTemplate: sdk.String("at"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(823472),
                                            Width: sdk.Int(205499),
                                        },
                                        SkippableAdType: sdk.String("pariatur"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("sapiente"),
                                                EndHour: sdk.Int(652515),
                                                EndMinute: sdk.Int(65121),
                                                StartHour: sdk.Int(552646),
                                                StartMinute: sdk.Int(44571),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("non"),
                                                EndHour: sdk.Int(913284),
                                                EndMinute: sdk.Int(324052),
                                                StartHour: sdk.Int(305047),
                                                StartMinute: sdk.Int(788165),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quas"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "maiores",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "aliquid",
                                        },
                                    },
                                    LongValue: sdk.String("laudantium"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "dolor",
                                            "aliquid",
                                            "consectetur",
                                        },
                                    },
                                    StringValue: sdk.String("cumque"),
                                },
                            },
                            Key: sdk.String("rem"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "adipisci",
                                            "recusandae",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(503449),
                                                Width: sdk.Int(258059),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(196374),
                                                Width: sdk.Int(532320),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("sit"),
                                        NativeTemplate: sdk.String("rerum"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(84178),
                                            Width: sdk.Int(949280),
                                        },
                                        SkippableAdType: sdk.String("autem"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("totam"),
                                                EndHour: sdk.Int(781193),
                                                EndMinute: sdk.Int(646491),
                                                StartHour: sdk.Int(168926),
                                                StartMinute: sdk.Int(471207),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptas"),
                                                EndHour: sdk.Int(658199),
                                                EndMinute: sdk.Int(413780),
                                                StartHour: sdk.Int(716),
                                                StartMinute: sdk.Int(686380),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aut"),
                                                EndHour: sdk.Int(295892),
                                                EndMinute: sdk.Int(802734),
                                                StartHour: sdk.Int(303292),
                                                StartMinute: sdk.Int(613702),
                                            },
                                        },
                                        TimeZoneType: sdk.String("ullam"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "placeat",
                                            "voluptas",
                                            "occaecati",
                                            "unde",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "nihil",
                                        },
                                    },
                                    LongValue: sdk.String("inventore"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "ipsam",
                                            "quasi",
                                            "cumque",
                                        },
                                    },
                                    StringValue: sdk.String("dicta"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "facere",
                                            "facilis",
                                            "beatae",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(964511),
                                                Width: sdk.Int(287152),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(712640),
                                                Width: sdk.Int(548256),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(523995),
                                                Width: sdk.Int(543353),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(886118),
                                                Width: sdk.Int(739633),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("pariatur"),
                                        NativeTemplate: sdk.String("sapiente"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(775427),
                                            Width: sdk.Int(277990),
                                        },
                                        SkippableAdType: sdk.String("quod"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("porro"),
                                                EndHour: sdk.Int(659971),
                                                EndMinute: sdk.Int(569706),
                                                StartHour: sdk.Int(580238),
                                                StartMinute: sdk.Int(726851),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quo"),
                                                EndHour: sdk.Int(457150),
                                                EndMinute: sdk.Int(944033),
                                                StartHour: sdk.Int(802216),
                                                StartMinute: sdk.Int(36691),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("soluta"),
                                                EndHour: sdk.Int(147400),
                                                EndMinute: sdk.Int(866292),
                                                StartHour: sdk.Int(756287),
                                                StartMinute: sdk.Int(927490),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("veritatis"),
                                                EndHour: sdk.Int(13637),
                                                EndMinute: sdk.Int(516124),
                                                StartHour: sdk.Int(480421),
                                                StartMinute: sdk.Int(219860),
                                            },
                                        },
                                        TimeZoneType: sdk.String("voluptates"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "magni",
                                            "rerum",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "voluptatem",
                                        },
                                    },
                                    LongValue: sdk.String("eum"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "eum",
                                            "reprehenderit",
                                            "voluptatum",
                                            "blanditiis",
                                        },
                                    },
                                    StringValue: sdk.String("nihil"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "rerum",
                                            "deserunt",
                                            "atque",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(542340),
                                                Width: sdk.Int(101107),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(667213),
                                                Width: sdk.Int(318379),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("rem"),
                                        NativeTemplate: sdk.String("magni"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(62130),
                                            Width: sdk.Int(556133),
                                        },
                                        SkippableAdType: sdk.String("placeat"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("labore"),
                                                EndHour: sdk.Int(958068),
                                                EndMinute: sdk.Int(901651),
                                                StartHour: sdk.Int(965735),
                                                StartMinute: sdk.Int(642234),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("natus"),
                                                EndHour: sdk.Int(763869),
                                                EndMinute: sdk.Int(617497),
                                                StartHour: sdk.Int(312511),
                                                StartMinute: sdk.Int(985379),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quia"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "mollitia",
                                            "cumque",
                                            "quis",
                                            "enim",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "nemo",
                                            "illum",
                                        },
                                    },
                                    LongValue: sdk.String("nesciunt"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "odio",
                                        },
                                    },
                                    StringValue: sdk.String("minus"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "voluptates",
                                            "praesentium",
                                            "dicta",
                                            "fugit",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(396234),
                                                Width: sdk.Int(898638),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("sed"),
                                        NativeTemplate: sdk.String("deleniti"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(122744),
                                            Width: sdk.Int(200190),
                                        },
                                        SkippableAdType: sdk.String("delectus"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aliquam"),
                                                EndHour: sdk.Int(644223),
                                                EndMinute: sdk.Int(266680),
                                                StartHour: sdk.Int(122085),
                                                StartMinute: sdk.Int(771092),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("eius"),
                                                EndHour: sdk.Int(528320),
                                                EndMinute: sdk.Int(60078),
                                                StartHour: sdk.Int(872991),
                                                StartMinute: sdk.Int(209860),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("repellat"),
                                                EndHour: sdk.Int(132305),
                                                EndMinute: sdk.Int(80284),
                                                StartHour: sdk.Int(193236),
                                                StartMinute: sdk.Int(143078),
                                            },
                                        },
                                        TimeZoneType: sdk.String("fuga"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "eaque",
                                            "dolorem",
                                            "architecto",
                                            "aperiam",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "nulla",
                                        },
                                    },
                                    LongValue: sdk.String("enim"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "magnam",
                                        },
                                    },
                                    StringValue: sdk.String("delectus"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "optio",
                                            "nobis",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(998023),
                                                Width: sdk.Int(65118),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(533978),
                                                Width: sdk.Int(711615),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("hic"),
                                        NativeTemplate: sdk.String("excepturi"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(396610),
                                            Width: sdk.Int(151385),
                                        },
                                        SkippableAdType: sdk.String("beatae"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("ea"),
                                                EndHour: sdk.Int(657301),
                                                EndMinute: sdk.Int(296128),
                                                StartHour: sdk.Int(945419),
                                                StartMinute: sdk.Int(493407),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("esse"),
                                                EndHour: sdk.Int(657044),
                                                EndMinute: sdk.Int(512488),
                                                StartHour: sdk.Int(461050),
                                                StartMinute: sdk.Int(908539),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("earum"),
                                                EndHour: sdk.Int(246402),
                                                EndMinute: sdk.Int(884765),
                                                StartHour: sdk.Int(263346),
                                                StartMinute: sdk.Int(701978),
                                            },
                                        },
                                        TimeZoneType: sdk.String("itaque"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "ipsam",
                                            "explicabo",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "aliquid",
                                            "quis",
                                            "facilis",
                                            "ipsum",
                                        },
                                    },
                                    LongValue: sdk.String("ut"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "architecto",
                                            "praesentium",
                                        },
                                    },
                                    StringValue: sdk.String("eveniet"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "expedita",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(615277),
                                                Width: sdk.Int(74921),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(792499),
                                                Width: sdk.Int(553315),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(835646),
                                                Width: sdk.Int(576657),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("iusto"),
                                        NativeTemplate: sdk.String("enim"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(881189),
                                            Width: sdk.Int(44467),
                                        },
                                        SkippableAdType: sdk.String("voluptates"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("tempora"),
                                                EndHour: sdk.Int(63825),
                                                EndMinute: sdk.Int(607545),
                                                StartHour: sdk.Int(848063),
                                                StartMinute: sdk.Int(526584),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("tenetur"),
                                                EndHour: sdk.Int(537946),
                                                EndMinute: sdk.Int(264958),
                                                StartHour: sdk.Int(937664),
                                                StartMinute: sdk.Int(101374),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aliquam"),
                                                EndHour: sdk.Int(286726),
                                                EndMinute: sdk.Int(983434),
                                                StartHour: sdk.Int(196646),
                                                StartMinute: sdk.Int(902132),
                                            },
                                        },
                                        TimeZoneType: sdk.String("consequatur"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "debitis",
                                            "facere",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "cumque",
                                            "aliquam",
                                            "dolorum",
                                            "deserunt",
                                        },
                                    },
                                    LongValue: sdk.String("ad"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "sequi",
                                            "porro",
                                            "laborum",
                                            "nobis",
                                        },
                                    },
                                    StringValue: sdk.String("quibusdam"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "aut",
                                            "ipsam",
                                            "officia",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(442873),
                                                Width: sdk.Int(157281),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(898088),
                                                Width: sdk.Int(37764),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(321473),
                                                Width: sdk.Int(392752),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("molestiae"),
                                        NativeTemplate: sdk.String("quia"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(514767),
                                            Width: sdk.Int(152742),
                                        },
                                        SkippableAdType: sdk.String("odit"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("expedita"),
                                                EndHour: sdk.Int(176935),
                                                EndMinute: sdk.Int(830477),
                                                StartHour: sdk.Int(199879),
                                                StartMinute: sdk.Int(57909),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("sint"),
                                                EndHour: sdk.Int(291389),
                                                EndMinute: sdk.Int(457063),
                                                StartHour: sdk.Int(38044),
                                                StartMinute: sdk.Int(718119),
                                            },
                                        },
                                        TimeZoneType: sdk.String("sapiente"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "est",
                                            "aliquam",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "culpa",
                                            "voluptatum",
                                            "iusto",
                                            "quod",
                                        },
                                    },
                                    LongValue: sdk.String("voluptatibus"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "non",
                                            "ullam",
                                        },
                                    },
                                    StringValue: sdk.String("laborum"),
                                },
                            },
                            Key: sdk.String("voluptas"),
                        },
                    },
                    SyndicationProduct: sdk.String("doloribus"),
                    Terms: &shared.DealTerms{
                        BrandingType: sdk.String("animi"),
                        CrossListedExternalDealIDType: sdk.String("recusandae"),
                        Description: sdk.String("corporis"),
                        EstimatedGrossSpend: &shared.Price{
                            AmountMicros: sdk.Float64(2525.67),
                            CurrencyCode: sdk.String("necessitatibus"),
                            ExpectedCpmMicros: sdk.Float64(7194.69),
                            PricingType: sdk.String("maiores"),
                        },
                        EstimatedImpressionsPerDay: sdk.String("laboriosam"),
                        GuaranteedFixedPriceTerms: &shared.DealTermsGuaranteedFixedPriceTerms{
                            BillingInfo: &shared.DealTermsGuaranteedFixedPriceTermsBillingInfo{
                                CurrencyConversionTimeMs: sdk.String("voluptatem"),
                                DfpLineItemID: sdk.String("optio"),
                                OriginalContractedQuantity: sdk.String("sequi"),
                                Price: &shared.Price{
                                    AmountMicros: sdk.Float64(1257.07),
                                    CurrencyCode: sdk.String("vitae"),
                                    ExpectedCpmMicros: sdk.Float64(9730.96),
                                    PricingType: sdk.String("doloremque"),
                                },
                            },
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("amet"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("rerum"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("in"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(3455.14),
                                        CurrencyCode: sdk.String("temporibus"),
                                        ExpectedCpmMicros: sdk.Float64(1869.37),
                                        PricingType: sdk.String("dolor"),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("nisi"),
                            GuaranteedLooks: sdk.String("dignissimos"),
                            MinimumDailyLooks: sdk.String("reiciendis"),
                        },
                        NonGuaranteedAuctionTerms: &shared.DealTermsNonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricePerBuyers: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("vitae"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("est"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("accusantium"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7980.79),
                                        CurrencyCode: sdk.String("minus"),
                                        ExpectedCpmMicros: sdk.Float64(5509.94),
                                        PricingType: sdk.String("possimus"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("maiores"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("odio"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("provident"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(9609.33),
                                        CurrencyCode: sdk.String("aperiam"),
                                        ExpectedCpmMicros: sdk.Float64(6277.17),
                                        PricingType: sdk.String("nesciunt"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("provident"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("ex"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("repellendus"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(6012.77),
                                        CurrencyCode: sdk.String("alias"),
                                        ExpectedCpmMicros: sdk.Float64(7719.31),
                                        PricingType: sdk.String("sequi"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("commodi"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("labore"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("expedita"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(4467.37),
                                        CurrencyCode: sdk.String("quisquam"),
                                        ExpectedCpmMicros: sdk.Float64(1237.95),
                                        PricingType: sdk.String("enim"),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.DealTermsNonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("maiores"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("distinctio"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("mollitia"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7709.97),
                                        CurrencyCode: sdk.String("accusamus"),
                                        ExpectedCpmMicros: sdk.Float64(911.2),
                                        PricingType: sdk.String("quas"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("blanditiis"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("cum"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("dicta"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7705.44),
                                        CurrencyCode: sdk.String("tempora"),
                                        ExpectedCpmMicros: sdk.Float64(9082.49),
                                        PricingType: sdk.String("repudiandae"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("sed"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("impedit"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quas"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7720.57),
                                        CurrencyCode: sdk.String("vel"),
                                        ExpectedCpmMicros: sdk.Float64(7530.87),
                                        PricingType: sdk.String("recusandae"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("ex"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("beatae"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("veritatis"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(9825.74),
                                        CurrencyCode: sdk.String("itaque"),
                                        ExpectedCpmMicros: sdk.Float64(8754.52),
                                        PricingType: sdk.String("quidem"),
                                    },
                                },
                            },
                        },
                        RubiconNonGuaranteedTerms: &shared.DealTermsRubiconNonGuaranteedTerms{
                            PriorityPrice: &shared.Price{
                                AmountMicros: sdk.Float64(738.26),
                                CurrencyCode: sdk.String("quo"),
                                ExpectedCpmMicros: sdk.Float64(4909.66),
                                PricingType: sdk.String("minus"),
                            },
                            StandardPrice: &shared.Price{
                                AmountMicros: sdk.Float64(7175.6),
                                CurrencyCode: sdk.String("possimus"),
                                ExpectedCpmMicros: sdk.Float64(7381.52),
                                PricingType: sdk.String("suscipit"),
                            },
                        },
                        SellerTimeZone: sdk.String("saepe"),
                    },
                    WebPropertyCode: sdk.String("earum"),
                },
                shared.MarketplaceDeal{
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("quod"),
                        ReferencePayload: sdk.String("nihil"),
                    },
                    CreationTimeMs: sdk.String("quaerat"),
                    CreativePreApprovalPolicy: sdk.String("ipsum"),
                    CreativeSafeFrameCompatibility: sdk.String("ducimus"),
                    DealID: sdk.String("laudantium"),
                    DealServingMetadata: &shared.DealServingMetadata{
                        AlcoholAdsAllowed: sdk.Bool(false),
                        DealPauseStatus: &shared.DealServingMetadataDealPauseStatus{
                            BuyerPauseReason: sdk.String("rerum"),
                            FirstPausedBy: sdk.String("deserunt"),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("odit"),
                        },
                    },
                    DeliveryControl: &shared.DeliveryControl{
                        CreativeBlockingLevel: sdk.String("ad"),
                        DeliveryRateType: sdk.String("sequi"),
                        FrequencyCaps: []shared.DeliveryControlFrequencyCap{
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(481042),
                                NumTimeUnits: sdk.Int(456865),
                                TimeUnitType: sdk.String("magnam"),
                            },
                        },
                    },
                    ExternalDealID: sdk.String("odio"),
                    FlightEndTimeMs: sdk.String("nulla"),
                    FlightStartTimeMs: sdk.String("impedit"),
                    InventoryDescription: sdk.String("cupiditate"),
                    IsRfpTemplate: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("illo"),
                    LastUpdateTimeMs: sdk.String("exercitationem"),
                    MakegoodRequestedReason: sdk.String("laborum"),
                    Name: sdk.String("Steve Schneider"),
                    ProductID: sdk.String("nostrum"),
                    ProductRevisionNumber: sdk.String("illum"),
                    ProgrammaticCreativeSource: sdk.String("quibusdam"),
                    ProposalID: sdk.String("commodi"),
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Darrell.Spencer97@gmail.com"),
                            Name: sdk.String("Molly Waelchi"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Lucile.Hoeger4@gmail.com"),
                            Name: sdk.String("Myrtle Kshlerin"),
                        },
                    },
                    SharedTargetings: []shared.SharedTargeting{
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "quaerat",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(956942),
                                                Width: sdk.Int(357984),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("est"),
                                        NativeTemplate: sdk.String("iure"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(787629),
                                            Width: sdk.Int(590927),
                                        },
                                        SkippableAdType: sdk.String("laudantium"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("nemo"),
                                                EndHour: sdk.Int(317632),
                                                EndMinute: sdk.Int(371213),
                                                StartHour: sdk.Int(328954),
                                                StartMinute: sdk.Int(273383),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("perferendis"),
                                                EndHour: sdk.Int(546963),
                                                EndMinute: sdk.Int(40874),
                                                StartHour: sdk.Int(854137),
                                                StartMinute: sdk.Int(257821),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("doloremque"),
                                                EndHour: sdk.Int(740245),
                                                EndMinute: sdk.Int(751298),
                                                StartHour: sdk.Int(628314),
                                                StartMinute: sdk.Int(783764),
                                            },
                                        },
                                        TimeZoneType: sdk.String("impedit"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "cumque",
                                            "soluta",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "laboriosam",
                                            "nam",
                                            "enim",
                                            "maiores",
                                        },
                                    },
                                    LongValue: sdk.String("consectetur"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "maxime",
                                            "cupiditate",
                                            "voluptatem",
                                            "provident",
                                        },
                                    },
                                    StringValue: sdk.String("adipisci"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "magnam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(607631),
                                                Width: sdk.Int(131576),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(425817),
                                                Width: sdk.Int(740347),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(663062),
                                                Width: sdk.Int(821016),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(143061),
                                                Width: sdk.Int(373054),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nostrum"),
                                        NativeTemplate: sdk.String("sequi"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(529310),
                                            Width: sdk.Int(98759),
                                        },
                                        SkippableAdType: sdk.String("error"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("tempora"),
                                                EndHour: sdk.Int(452653),
                                                EndMinute: sdk.Int(261170),
                                                StartHour: sdk.Int(713718),
                                                StartMinute: sdk.Int(46384),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptates"),
                                                EndHour: sdk.Int(822711),
                                                EndMinute: sdk.Int(146583),
                                                StartHour: sdk.Int(27946),
                                                StartMinute: sdk.Int(919171),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("corporis"),
                                                EndHour: sdk.Int(411626),
                                                EndMinute: sdk.Int(179906),
                                                StartHour: sdk.Int(305267),
                                                StartMinute: sdk.Int(501768),
                                            },
                                        },
                                        TimeZoneType: sdk.String("hic"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "asperiores",
                                            "autem",
                                            "nesciunt",
                                            "cupiditate",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "provident",
                                            "beatae",
                                            "ipsa",
                                        },
                                    },
                                    LongValue: sdk.String("mollitia"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "assumenda",
                                            "quo",
                                            "fuga",
                                        },
                                    },
                                    StringValue: sdk.String("tempore"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "suscipit",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(393122),
                                                Width: sdk.Int(397160),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(589712),
                                                Width: sdk.Int(385760),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("accusamus"),
                                        NativeTemplate: sdk.String("ab"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(929067),
                                            Width: sdk.Int(790305),
                                        },
                                        SkippableAdType: sdk.String("eaque"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("qui"),
                                                EndHour: sdk.Int(163263),
                                                EndMinute: sdk.Int(112224),
                                                StartHour: sdk.Int(696828),
                                                StartMinute: sdk.Int(193334),
                                            },
                                        },
                                        TimeZoneType: sdk.String("amet"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "illum",
                                            "praesentium",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "similique",
                                            "eligendi",
                                            "tempore",
                                        },
                                    },
                                    LongValue: sdk.String("amet"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "nobis",
                                            "asperiores",
                                            "temporibus",
                                            "id",
                                        },
                                    },
                                    StringValue: sdk.String("atque"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "sit",
                                            "quo",
                                            "veniam",
                                            "aliquam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(875693),
                                                Width: sdk.Int(938094),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(42763),
                                                Width: sdk.Int(217504),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(367),
                                                Width: sdk.Int(43715),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("tempora"),
                                        NativeTemplate: sdk.String("perspiciatis"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(462097),
                                            Width: sdk.Int(541009),
                                        },
                                        SkippableAdType: sdk.String("officia"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("architecto"),
                                                EndHour: sdk.Int(953564),
                                                EndMinute: sdk.Int(673010),
                                                StartHour: sdk.Int(84288),
                                                StartMinute: sdk.Int(801816),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("a"),
                                                EndHour: sdk.Int(185313),
                                                EndMinute: sdk.Int(34989),
                                                StartHour: sdk.Int(415125),
                                                StartMinute: sdk.Int(538944),
                                            },
                                        },
                                        TimeZoneType: sdk.String("totam"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "voluptate",
                                            "quam",
                                            "quod",
                                            "vitae",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "reiciendis",
                                            "quod",
                                            "voluptate",
                                            "inventore",
                                        },
                                    },
                                    LongValue: sdk.String("facere"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "fuga",
                                            "ab",
                                            "ex",
                                            "consectetur",
                                        },
                                    },
                                    StringValue: sdk.String("maiores"),
                                },
                            },
                            Key: sdk.String("sed"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "eligendi",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(21668),
                                                Width: sdk.Int(671690),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(609172),
                                                Width: sdk.Int(470321),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(945190),
                                                Width: sdk.Int(959696),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("velit"),
                                        NativeTemplate: sdk.String("adipisci"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(250298),
                                            Width: sdk.Int(763140),
                                        },
                                        SkippableAdType: sdk.String("illum"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("tenetur"),
                                                EndHour: sdk.Int(562066),
                                                EndMinute: sdk.Int(371295),
                                                StartHour: sdk.Int(456222),
                                                StartMinute: sdk.Int(675755),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("perspiciatis"),
                                                EndHour: sdk.Int(915647),
                                                EndMinute: sdk.Int(428810),
                                                StartHour: sdk.Int(95123),
                                                StartMinute: sdk.Int(555194),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("odio"),
                                                EndHour: sdk.Int(416934),
                                                EndMinute: sdk.Int(780789),
                                                StartHour: sdk.Int(400470),
                                                StartMinute: sdk.Int(648497),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quidem"),
                                                EndHour: sdk.Int(126512),
                                                EndMinute: sdk.Int(92851),
                                                StartHour: sdk.Int(860027),
                                                StartMinute: sdk.Int(166542),
                                            },
                                        },
                                        TimeZoneType: sdk.String("natus"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "a",
                                            "impedit",
                                            "unde",
                                            "ut",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "voluptas",
                                            "doloribus",
                                            "recusandae",
                                            "quisquam",
                                        },
                                    },
                                    LongValue: sdk.String("facere"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "iste",
                                            "provident",
                                        },
                                    },
                                    StringValue: sdk.String("dolor"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "aperiam",
                                            "eaque",
                                            "eum",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(672627),
                                                Width: sdk.Int(422276),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(828481),
                                                Width: sdk.Int(129631),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("fugiat"),
                                        NativeTemplate: sdk.String("doloremque"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(32775),
                                            Width: sdk.Int(4747),
                                        },
                                        SkippableAdType: sdk.String("velit"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quis"),
                                                EndHour: sdk.Int(242532),
                                                EndMinute: sdk.Int(188732),
                                                StartHour: sdk.Int(555386),
                                                StartMinute: sdk.Int(802976),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("recusandae"),
                                                EndHour: sdk.Int(767466),
                                                EndMinute: sdk.Int(39047),
                                                StartHour: sdk.Int(516833),
                                                StartMinute: sdk.Int(435266),
                                            },
                                        },
                                        TimeZoneType: sdk.String("maiores"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "fugit",
                                            "veritatis",
                                            "necessitatibus",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "dicta",
                                            "ipsam",
                                            "consequuntur",
                                        },
                                    },
                                    LongValue: sdk.String("cumque"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "non",
                                            "beatae",
                                            "sunt",
                                        },
                                    },
                                    StringValue: sdk.String("molestias"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "autem",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(728474),
                                                Width: sdk.Int(562065),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(900676),
                                                Width: sdk.Int(218783),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("impedit"),
                                        NativeTemplate: sdk.String("quos"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(849690),
                                            Width: sdk.Int(717853),
                                        },
                                        SkippableAdType: sdk.String("voluptatem"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quaerat"),
                                                EndHour: sdk.Int(10164),
                                                EndMinute: sdk.Int(515433),
                                                StartHour: sdk.Int(831067),
                                                StartMinute: sdk.Int(415953),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quibusdam"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "voluptas",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "earum",
                                            "tenetur",
                                        },
                                    },
                                    LongValue: sdk.String("assumenda"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "enim",
                                            "ullam",
                                        },
                                    },
                                    StringValue: sdk.String("perspiciatis"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "quibusdam",
                                            "dicta",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(412481),
                                                Width: sdk.Int(204144),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("quibusdam"),
                                        NativeTemplate: sdk.String("numquam"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(523109),
                                            Width: sdk.Int(884622),
                                        },
                                        SkippableAdType: sdk.String("omnis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("corporis"),
                                                EndHour: sdk.Int(797527),
                                                EndMinute: sdk.Int(175803),
                                                StartHour: sdk.Int(808050),
                                                StartMinute: sdk.Int(570039),
                                            },
                                        },
                                        TimeZoneType: sdk.String("recusandae"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dicta",
                                            "sapiente",
                                            "ipsum",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "soluta",
                                        },
                                    },
                                    LongValue: sdk.String("necessitatibus"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "recusandae",
                                        },
                                    },
                                    StringValue: sdk.String("labore"),
                                },
                            },
                            Key: sdk.String("adipisci"),
                        },
                    },
                    SyndicationProduct: sdk.String("magni"),
                    Terms: &shared.DealTerms{
                        BrandingType: sdk.String("aperiam"),
                        CrossListedExternalDealIDType: sdk.String("dolores"),
                        Description: sdk.String("illum"),
                        EstimatedGrossSpend: &shared.Price{
                            AmountMicros: sdk.Float64(4815.53),
                            CurrencyCode: sdk.String("magni"),
                            ExpectedCpmMicros: sdk.Float64(1096.83),
                            PricingType: sdk.String("aliquid"),
                        },
                        EstimatedImpressionsPerDay: sdk.String("ad"),
                        GuaranteedFixedPriceTerms: &shared.DealTermsGuaranteedFixedPriceTerms{
                            BillingInfo: &shared.DealTermsGuaranteedFixedPriceTermsBillingInfo{
                                CurrencyConversionTimeMs: sdk.String("voluptate"),
                                DfpLineItemID: sdk.String("vel"),
                                OriginalContractedQuantity: sdk.String("minima"),
                                Price: &shared.Price{
                                    AmountMicros: sdk.Float64(245.48),
                                    CurrencyCode: sdk.String("vel"),
                                    ExpectedCpmMicros: sdk.Float64(3883.33),
                                    PricingType: sdk.String("quaerat"),
                                },
                            },
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("rem"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("dignissimos"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("doloremque"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(8257.39),
                                        CurrencyCode: sdk.String("provident"),
                                        ExpectedCpmMicros: sdk.Float64(8184.22),
                                        PricingType: sdk.String("sed"),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("inventore"),
                            GuaranteedLooks: sdk.String("voluptatibus"),
                            MinimumDailyLooks: sdk.String("unde"),
                        },
                        NonGuaranteedAuctionTerms: &shared.DealTermsNonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricePerBuyers: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("repellendus"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("consequatur"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("adipisci"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(390.69),
                                        CurrencyCode: sdk.String("optio"),
                                        ExpectedCpmMicros: sdk.Float64(2697.31),
                                        PricingType: sdk.String("debitis"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("cumque"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("maxime"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("et"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1073.01),
                                        CurrencyCode: sdk.String("id"),
                                        ExpectedCpmMicros: sdk.Float64(90.6),
                                        PricingType: sdk.String("quos"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("ratione"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("iure"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("tempora"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1773.37),
                                        CurrencyCode: sdk.String("natus"),
                                        ExpectedCpmMicros: sdk.Float64(327.19),
                                        PricingType: sdk.String("suscipit"),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.DealTermsNonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("facilis"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("laudantium"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("ullam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(149),
                                        CurrencyCode: sdk.String("quia"),
                                        ExpectedCpmMicros: sdk.Float64(6425.76),
                                        PricingType: sdk.String("quaerat"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("corporis"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("accusamus"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("iusto"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(9585.33),
                                        CurrencyCode: sdk.String("esse"),
                                        ExpectedCpmMicros: sdk.Float64(2075.12),
                                        PricingType: sdk.String("quidem"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("quisquam"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("praesentium"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("tempora"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(3700.52),
                                        CurrencyCode: sdk.String("officiis"),
                                        ExpectedCpmMicros: sdk.Float64(1964.97),
                                        PricingType: sdk.String("magni"),
                                    },
                                },
                            },
                        },
                        RubiconNonGuaranteedTerms: &shared.DealTermsRubiconNonGuaranteedTerms{
                            PriorityPrice: &shared.Price{
                                AmountMicros: sdk.Float64(298.81),
                                CurrencyCode: sdk.String("est"),
                                ExpectedCpmMicros: sdk.Float64(2261.81),
                                PricingType: sdk.String("veritatis"),
                            },
                            StandardPrice: &shared.Price{
                                AmountMicros: sdk.Float64(6218.1),
                                CurrencyCode: sdk.String("voluptatibus"),
                                ExpectedCpmMicros: sdk.Float64(2581.4),
                                PricingType: sdk.String("rerum"),
                            },
                        },
                        SellerTimeZone: sdk.String("dolorum"),
                    },
                    WebPropertyCode: sdk.String("quibusdam"),
                },
            },
            ProposalRevisionNumber: sdk.String("earum"),
            UpdateAction: sdk.String("excepturi"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("numquam"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "error",
        QuotaUser: sdk.String("animi"),
        UserIP: sdk.String("voluptatum"),
    }, operations.AdexchangebuyerMarketplacedealsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddOrderDealsResponse != nil {
        // handle response
    }
}
```

## AdexchangebuyerMarketplacedealsList

List all the deals for a given proposal

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
    res, err := s.Marketplacedeals.AdexchangebuyerMarketplacedealsList(ctx, operations.AdexchangebuyerMarketplacedealsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("facilis"),
        PqlQuery: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "incidunt",
        QuotaUser: sdk.String("eos"),
        UserIP: sdk.String("magnam"),
    }, operations.AdexchangebuyerMarketplacedealsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderDealsResponse != nil {
        // handle response
    }
}
```

## AdexchangebuyerMarketplacedealsUpdate

Replaces all the deals in the proposal with the passed in deals

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
    res, err := s.Marketplacedeals.AdexchangebuyerMarketplacedealsUpdate(ctx, operations.AdexchangebuyerMarketplacedealsUpdateRequest{
        EditAllOrderDealsRequest: &shared.EditAllOrderDealsRequest{
            Deals: []shared.MarketplaceDeal{
                shared.MarketplaceDeal{
                    BuyerPrivateData: &shared.PrivateData{
                        ReferenceID: sdk.String("aliquid"),
                        ReferencePayload: sdk.String("eum"),
                    },
                    CreationTimeMs: sdk.String("vel"),
                    CreativePreApprovalPolicy: sdk.String("ad"),
                    CreativeSafeFrameCompatibility: sdk.String("quos"),
                    DealID: sdk.String("illo"),
                    DealServingMetadata: &shared.DealServingMetadata{
                        AlcoholAdsAllowed: sdk.Bool(false),
                        DealPauseStatus: &shared.DealServingMetadataDealPauseStatus{
                            BuyerPauseReason: sdk.String("suscipit"),
                            FirstPausedBy: sdk.String("quibusdam"),
                            HasBuyerPaused: sdk.Bool(false),
                            HasSellerPaused: sdk.Bool(false),
                            SellerPauseReason: sdk.String("fugiat"),
                        },
                    },
                    DeliveryControl: &shared.DeliveryControl{
                        CreativeBlockingLevel: sdk.String("impedit"),
                        DeliveryRateType: sdk.String("culpa"),
                        FrequencyCaps: []shared.DeliveryControlFrequencyCap{
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(913909),
                                NumTimeUnits: sdk.Int(979325),
                                TimeUnitType: sdk.String("nemo"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(72600),
                                NumTimeUnits: sdk.Int(984669),
                                TimeUnitType: sdk.String("cumque"),
                            },
                            shared.DeliveryControlFrequencyCap{
                                MaxImpressions: sdk.Int(711310),
                                NumTimeUnits: sdk.Int(266370),
                                TimeUnitType: sdk.String("cumque"),
                            },
                        },
                    },
                    ExternalDealID: sdk.String("ipsam"),
                    FlightEndTimeMs: sdk.String("occaecati"),
                    FlightStartTimeMs: sdk.String("ipsum"),
                    InventoryDescription: sdk.String("accusamus"),
                    IsRfpTemplate: sdk.Bool(false),
                    IsSetupComplete: sdk.Bool(false),
                    Kind: sdk.String("quisquam"),
                    LastUpdateTimeMs: sdk.String("quasi"),
                    MakegoodRequestedReason: sdk.String("fugit"),
                    Name: sdk.String("Marty O'Hara"),
                    ProductID: sdk.String("ipsa"),
                    ProductRevisionNumber: sdk.String("accusamus"),
                    ProgrammaticCreativeSource: sdk.String("placeat"),
                    ProposalID: sdk.String("quam"),
                    SellerContacts: []shared.ContactInformation{
                        shared.ContactInformation{
                            Email: sdk.String("Susan_Schultz56@hotmail.com"),
                            Name: sdk.String("Paulette White"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Loma_Greenholt@yahoo.com"),
                            Name: sdk.String("Miss Allen McClure"),
                        },
                        shared.ContactInformation{
                            Email: sdk.String("Jo59@yahoo.com"),
                            Name: sdk.String("Manuel Swift"),
                        },
                    },
                    SharedTargetings: []shared.SharedTargeting{
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "a",
                                            "consectetur",
                                            "sapiente",
                                            "voluptatibus",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(830149),
                                                Width: sdk.Int(607742),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(966652),
                                                Width: sdk.Int(487765),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(974703),
                                                Width: sdk.Int(13316),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(465732),
                                                Width: sdk.Int(606262),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("similique"),
                                        NativeTemplate: sdk.String("asperiores"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(266289),
                                            Width: sdk.Int(818101),
                                        },
                                        SkippableAdType: sdk.String("neque"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("in"),
                                                EndHour: sdk.Int(152047),
                                                EndMinute: sdk.Int(250621),
                                                StartHour: sdk.Int(784059),
                                                StartMinute: sdk.Int(852610),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("soluta"),
                                                EndHour: sdk.Int(58463),
                                                EndMinute: sdk.Int(967047),
                                                StartHour: sdk.Int(289153),
                                                StartMinute: sdk.Int(874843),
                                            },
                                        },
                                        TimeZoneType: sdk.String("eos"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "quasi",
                                            "architecto",
                                            "praesentium",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "fugiat",
                                            "enim",
                                        },
                                    },
                                    LongValue: sdk.String("iure"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "modi",
                                            "magnam",
                                            "accusamus",
                                        },
                                    },
                                    StringValue: sdk.String("nulla"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "quibusdam",
                                            "praesentium",
                                            "enim",
                                            "animi",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(61498),
                                                Width: sdk.Int(430181),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(341405),
                                                Width: sdk.Int(909093),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(389630),
                                                Width: sdk.Int(187361),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("blanditiis"),
                                        NativeTemplate: sdk.String("quidem"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(848649),
                                            Width: sdk.Int(970376),
                                        },
                                        SkippableAdType: sdk.String("placeat"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("consequatur"),
                                                EndHour: sdk.Int(201966),
                                                EndMinute: sdk.Int(155371),
                                                StartHour: sdk.Int(693724),
                                                StartMinute: sdk.Int(377161),
                                            },
                                        },
                                        TimeZoneType: sdk.String("quo"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dignissimos",
                                            "omnis",
                                            "omnis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "dolorem",
                                        },
                                    },
                                    LongValue: sdk.String("quidem"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "debitis",
                                            "vitae",
                                        },
                                    },
                                    StringValue: sdk.String("dolor"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "atque",
                                            "ut",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(444625),
                                                Width: sdk.Int(644129),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(930127),
                                                Width: sdk.Int(93254),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(181267),
                                                Width: sdk.Int(773355),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(401388),
                                                Width: sdk.Int(507874),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("natus"),
                                        NativeTemplate: sdk.String("vitae"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(946558),
                                            Width: sdk.Int(515153),
                                        },
                                        SkippableAdType: sdk.String("aspernatur"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("repudiandae"),
                                                EndHour: sdk.Int(117142),
                                                EndMinute: sdk.Int(81053),
                                                StartHour: sdk.Int(356256),
                                                StartMinute: sdk.Int(480741),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("inventore"),
                                                EndHour: sdk.Int(454590),
                                                EndMinute: sdk.Int(151497),
                                                StartHour: sdk.Int(209602),
                                                StartMinute: sdk.Int(52497),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("exercitationem"),
                                                EndHour: sdk.Int(226143),
                                                EndMinute: sdk.Int(454165),
                                                StartHour: sdk.Int(454232),
                                                StartMinute: sdk.Int(865212),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("minus"),
                                                EndHour: sdk.Int(955065),
                                                EndMinute: sdk.Int(686301),
                                                StartHour: sdk.Int(518926),
                                                StartMinute: sdk.Int(587539),
                                            },
                                        },
                                        TimeZoneType: sdk.String("at"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "omnis",
                                            "quam",
                                            "exercitationem",
                                            "voluptates",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "quis",
                                        },
                                    },
                                    LongValue: sdk.String("commodi"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "rem",
                                            "aliquid",
                                        },
                                    },
                                    StringValue: sdk.String("aperiam"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "itaque",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(767778),
                                                Width: sdk.Int(225001),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(833946),
                                                Width: sdk.Int(837327),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(792106),
                                                Width: sdk.Int(326942),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("a"),
                                        NativeTemplate: sdk.String("beatae"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(114212),
                                            Width: sdk.Int(83530),
                                        },
                                        SkippableAdType: sdk.String("facere"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("laborum"),
                                                EndHour: sdk.Int(118020),
                                                EndMinute: sdk.Int(32737),
                                                StartHour: sdk.Int(140909),
                                                StartMinute: sdk.Int(398847),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("pariatur"),
                                                EndHour: sdk.Int(318450),
                                                EndMinute: sdk.Int(254288),
                                                StartHour: sdk.Int(103193),
                                                StartMinute: sdk.Int(665952),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quaerat"),
                                                EndHour: sdk.Int(816726),
                                                EndMinute: sdk.Int(112391),
                                                StartHour: sdk.Int(607181),
                                                StartMinute: sdk.Int(3860),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("sapiente"),
                                                EndHour: sdk.Int(887600),
                                                EndMinute: sdk.Int(708883),
                                                StartHour: sdk.Int(156843),
                                                StartMinute: sdk.Int(112751),
                                            },
                                        },
                                        TimeZoneType: sdk.String("odio"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "ipsa",
                                            "distinctio",
                                            "placeat",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "eligendi",
                                            "sit",
                                            "possimus",
                                            "distinctio",
                                        },
                                    },
                                    LongValue: sdk.String("distinctio"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "illum",
                                            "soluta",
                                            "magnam",
                                            "laudantium",
                                        },
                                    },
                                    StringValue: sdk.String("tempora"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "doloremque",
                                            "corrupti",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(704644),
                                                Width: sdk.Int(306023),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(922915),
                                                Width: sdk.Int(227424),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(617035),
                                                Width: sdk.Int(68253),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(887835),
                                                Width: sdk.Int(429823),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("rerum"),
                                        NativeTemplate: sdk.String("placeat"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(68336),
                                            Width: sdk.Int(319592),
                                        },
                                        SkippableAdType: sdk.String("blanditiis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("labore"),
                                                EndHour: sdk.Int(773889),
                                                EndMinute: sdk.Int(285175),
                                                StartHour: sdk.Int(936518),
                                                StartMinute: sdk.Int(355927),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("numquam"),
                                                EndHour: sdk.Int(314733),
                                                EndMinute: sdk.Int(585046),
                                                StartHour: sdk.Int(578610),
                                                StartMinute: sdk.Int(929443),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("fuga"),
                                                EndHour: sdk.Int(234845),
                                                EndMinute: sdk.Int(268749),
                                                StartHour: sdk.Int(134832),
                                                StartMinute: sdk.Int(129762),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("suscipit"),
                                                EndHour: sdk.Int(58808),
                                                EndMinute: sdk.Int(910410),
                                                StartHour: sdk.Int(575753),
                                                StartMinute: sdk.Int(749537),
                                            },
                                        },
                                        TimeZoneType: sdk.String("qui"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "consequatur",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "recusandae",
                                            "voluptate",
                                            "deleniti",
                                            "est",
                                        },
                                    },
                                    LongValue: sdk.String("et"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "quibusdam",
                                            "quos",
                                            "maiores",
                                        },
                                    },
                                    StringValue: sdk.String("quidem"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "culpa",
                                            "doloremque",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(117546),
                                                Width: sdk.Int(103901),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(381654),
                                                Width: sdk.Int(757438),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(885523),
                                                Width: sdk.Int(490956),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("fugit"),
                                        NativeTemplate: sdk.String("ratione"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(823990),
                                            Width: sdk.Int(311548),
                                        },
                                        SkippableAdType: sdk.String("aut"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("esse"),
                                                EndHour: sdk.Int(963908),
                                                EndMinute: sdk.Int(644397),
                                                StartHour: sdk.Int(188081),
                                                StartMinute: sdk.Int(60379),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("debitis"),
                                                EndHour: sdk.Int(614763),
                                                EndMinute: sdk.Int(646776),
                                                StartHour: sdk.Int(944405),
                                                StartMinute: sdk.Int(497480),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("consequuntur"),
                                                EndHour: sdk.Int(370195),
                                                EndMinute: sdk.Int(729612),
                                                StartHour: sdk.Int(153942),
                                                StartMinute: sdk.Int(609094),
                                            },
                                        },
                                        TimeZoneType: sdk.String("dicta"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "explicabo",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "amet",
                                        },
                                    },
                                    LongValue: sdk.String("consequatur"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "voluptatum",
                                            "velit",
                                            "hic",
                                            "ullam",
                                        },
                                    },
                                    StringValue: sdk.String("deserunt"),
                                },
                            },
                            Key: sdk.String("itaque"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "dignissimos",
                                            "provident",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(828735),
                                                Width: sdk.Int(126367),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(142856),
                                                Width: sdk.Int(876821),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(533723),
                                                Width: sdk.Int(760793),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("quasi"),
                                        NativeTemplate: sdk.String("repellat"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(542783),
                                            Width: sdk.Int(297723),
                                        },
                                        SkippableAdType: sdk.String("perspiciatis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("corrupti"),
                                                EndHour: sdk.Int(125161),
                                                EndMinute: sdk.Int(364284),
                                                StartHour: sdk.Int(964210),
                                                StartMinute: sdk.Int(848439),
                                            },
                                        },
                                        TimeZoneType: sdk.String("porro"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "magni",
                                            "cumque",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "in",
                                            "commodi",
                                            "maxime",
                                        },
                                    },
                                    LongValue: sdk.String("sed"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "consequuntur",
                                            "possimus",
                                            "delectus",
                                            "harum",
                                        },
                                    },
                                    StringValue: sdk.String("aliquam"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "hic",
                                            "quo",
                                            "illo",
                                            "nobis",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(392080),
                                                Width: sdk.Int(129619),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(197441),
                                                Width: sdk.Int(4787),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("reiciendis"),
                                        NativeTemplate: sdk.String("quos"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(256310),
                                            Width: sdk.Int(113894),
                                        },
                                        SkippableAdType: sdk.String("maiores"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("architecto"),
                                                EndHour: sdk.Int(698117),
                                                EndMinute: sdk.Int(826975),
                                                StartHour: sdk.Int(176333),
                                                StartMinute: sdk.Int(211518),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("hic"),
                                                EndHour: sdk.Int(830948),
                                                EndMinute: sdk.Int(721044),
                                                StartHour: sdk.Int(69184),
                                                StartMinute: sdk.Int(297970),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("pariatur"),
                                                EndHour: sdk.Int(709234),
                                                EndMinute: sdk.Int(418363),
                                                StartHour: sdk.Int(731931),
                                                StartMinute: sdk.Int(924825),
                                            },
                                        },
                                        TimeZoneType: sdk.String("nostrum"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "voluptas",
                                            "laudantium",
                                            "corporis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "natus",
                                            "deleniti",
                                            "necessitatibus",
                                        },
                                    },
                                    LongValue: sdk.String("aspernatur"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "laborum",
                                        },
                                    },
                                    StringValue: sdk.String("vero"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "voluptatem",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(660339),
                                                Width: sdk.Int(62907),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(414439),
                                                Width: sdk.Int(954401),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(791282),
                                                Width: sdk.Int(148958),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(721198),
                                                Width: sdk.Int(155473),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("iusto"),
                                        NativeTemplate: sdk.String("ab"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(643864),
                                            Width: sdk.Int(149815),
                                        },
                                        SkippableAdType: sdk.String("blanditiis"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("placeat"),
                                                EndHour: sdk.Int(356904),
                                                EndMinute: sdk.Int(476084),
                                                StartHour: sdk.Int(933840),
                                                StartMinute: sdk.Int(523156),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("nemo"),
                                                EndHour: sdk.Int(250520),
                                                EndMinute: sdk.Int(926142),
                                                StartHour: sdk.Int(605043),
                                                StartMinute: sdk.Int(58567),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aliquam"),
                                                EndHour: sdk.Int(219940),
                                                EndMinute: sdk.Int(577284),
                                                StartHour: sdk.Int(842678),
                                                StartMinute: sdk.Int(169678),
                                            },
                                        },
                                        TimeZoneType: sdk.String("consequuntur"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "eius",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "ipsam",
                                            "vel",
                                        },
                                    },
                                    LongValue: sdk.String("cupiditate"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "nisi",
                                            "explicabo",
                                        },
                                    },
                                    StringValue: sdk.String("modi"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "sit",
                                            "voluptatum",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(962411),
                                                Width: sdk.Int(461853),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(675955),
                                                Width: sdk.Int(726244),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("ratione"),
                                        NativeTemplate: sdk.String("molestiae"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(761331),
                                            Width: sdk.Int(904051),
                                        },
                                        SkippableAdType: sdk.String("maiores"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("sed"),
                                                EndHour: sdk.Int(180660),
                                                EndMinute: sdk.Int(162251),
                                                StartHour: sdk.Int(338514),
                                                StartMinute: sdk.Int(114681),
                                            },
                                        },
                                        TimeZoneType: sdk.String("occaecati"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "fugiat",
                                            "quidem",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "veniam",
                                            "modi",
                                        },
                                    },
                                    LongValue: sdk.String("quasi"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "similique",
                                        },
                                    },
                                    StringValue: sdk.String("possimus"),
                                },
                            },
                            Key: sdk.String("quo"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "sint",
                                            "est",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(589031),
                                                Width: sdk.Int(1594),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(643644),
                                                Width: sdk.Int(145450),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(421882),
                                                Width: sdk.Int(779111),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(477099),
                                                Width: sdk.Int(805128),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("facere"),
                                        NativeTemplate: sdk.String("impedit"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(587122),
                                            Width: sdk.Int(536999),
                                        },
                                        SkippableAdType: sdk.String("quasi"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptatem"),
                                                EndHour: sdk.Int(396184),
                                                EndMinute: sdk.Int(511252),
                                                StartHour: sdk.Int(601944),
                                                StartMinute: sdk.Int(544660),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quae"),
                                                EndHour: sdk.Int(816168),
                                                EndMinute: sdk.Int(409857),
                                                StartHour: sdk.Int(730437),
                                                StartMinute: sdk.Int(722500),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("amet"),
                                                EndHour: sdk.Int(238739),
                                                EndMinute: sdk.Int(793597),
                                                StartHour: sdk.Int(943828),
                                                StartMinute: sdk.Int(629116),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("fuga"),
                                                EndHour: sdk.Int(233271),
                                                EndMinute: sdk.Int(287575),
                                                StartHour: sdk.Int(515873),
                                                StartMinute: sdk.Int(768999),
                                            },
                                        },
                                        TimeZoneType: sdk.String("adipisci"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "nam",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "magnam",
                                            "aperiam",
                                            "ducimus",
                                            "itaque",
                                        },
                                    },
                                    LongValue: sdk.String("necessitatibus"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "doloribus",
                                            "eligendi",
                                        },
                                    },
                                    StringValue: sdk.String("sapiente"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "impedit",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(136203),
                                                Width: sdk.Int(749101),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(467947),
                                                Width: sdk.Int(532336),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("reiciendis"),
                                        NativeTemplate: sdk.String("vitae"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(353009),
                                            Width: sdk.Int(393630),
                                        },
                                        SkippableAdType: sdk.String("consequuntur"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("ratione"),
                                                EndHour: sdk.Int(568162),
                                                EndMinute: sdk.Int(549348),
                                                StartHour: sdk.Int(667977),
                                                StartMinute: sdk.Int(21701),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quibusdam"),
                                                EndHour: sdk.Int(770262),
                                                EndMinute: sdk.Int(497231),
                                                StartHour: sdk.Int(392569),
                                                StartMinute: sdk.Int(392022),
                                            },
                                        },
                                        TimeZoneType: sdk.String("dolor"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dolore",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "maxime",
                                            "expedita",
                                            "accusantium",
                                            "ea",
                                        },
                                    },
                                    LongValue: sdk.String("impedit"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "optio",
                                            "est",
                                            "inventore",
                                        },
                                    },
                                    StringValue: sdk.String("consequuntur"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "dolores",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(136432),
                                                Width: sdk.Int(595585),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(166401),
                                                Width: sdk.Int(486606),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("alias"),
                                        NativeTemplate: sdk.String("quidem"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(533457),
                                            Width: sdk.Int(819690),
                                        },
                                        SkippableAdType: sdk.String("ipsam"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("fugit"),
                                                EndHour: sdk.Int(134267),
                                                EndMinute: sdk.Int(868729),
                                                StartHour: sdk.Int(850628),
                                                StartMinute: sdk.Int(506202),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("sint"),
                                                EndHour: sdk.Int(348708),
                                                EndMinute: sdk.Int(739938),
                                                StartHour: sdk.Int(532721),
                                                StartMinute: sdk.Int(704665),
                                            },
                                        },
                                        TimeZoneType: sdk.String("placeat"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "dolores",
                                            "dolore",
                                            "pariatur",
                                            "facilis",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "nemo",
                                            "natus",
                                            "nisi",
                                        },
                                    },
                                    LongValue: sdk.String("provident"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "dolor",
                                        },
                                    },
                                    StringValue: sdk.String("nostrum"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "tenetur",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(292571),
                                                Width: sdk.Int(356343),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(245990),
                                                Width: sdk.Int(240836),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("cupiditate"),
                                        NativeTemplate: sdk.String("occaecati"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(258036),
                                            Width: sdk.Int(856185),
                                        },
                                        SkippableAdType: sdk.String("molestiae"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("repellendus"),
                                                EndHour: sdk.Int(906524),
                                                EndMinute: sdk.Int(230400),
                                                StartHour: sdk.Int(716795),
                                                StartMinute: sdk.Int(426691),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("necessitatibus"),
                                                EndHour: sdk.Int(610490),
                                                EndMinute: sdk.Int(201710),
                                                StartHour: sdk.Int(545629),
                                                StartMinute: sdk.Int(587337),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptatibus"),
                                                EndHour: sdk.Int(354678),
                                                EndMinute: sdk.Int(680370),
                                                StartHour: sdk.Int(743705),
                                                StartMinute: sdk.Int(739946),
                                            },
                                        },
                                        TimeZoneType: sdk.String("in"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "commodi",
                                            "commodi",
                                            "fugit",
                                            "ullam",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "doloremque",
                                            "est",
                                        },
                                    },
                                    LongValue: sdk.String("qui"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "adipisci",
                                            "totam",
                                            "qui",
                                        },
                                    },
                                    StringValue: sdk.String("deserunt"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "incidunt",
                                            "deleniti",
                                            "dolor",
                                            "est",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(820462),
                                                Width: sdk.Int(137831),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(230774),
                                                Width: sdk.Int(80998),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(325924),
                                                Width: sdk.Int(703651),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(708360),
                                                Width: sdk.Int(647125),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("nisi"),
                                        NativeTemplate: sdk.String("ipsam"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(29270),
                                            Width: sdk.Int(76786),
                                        },
                                        SkippableAdType: sdk.String("iure"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("eveniet"),
                                                EndHour: sdk.Int(62224),
                                                EndMinute: sdk.Int(409021),
                                                StartHour: sdk.Int(989122),
                                                StartMinute: sdk.Int(332249),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quidem"),
                                                EndHour: sdk.Int(989526),
                                                EndMinute: sdk.Int(431893),
                                                StartHour: sdk.Int(644416),
                                                StartMinute: sdk.Int(919730),
                                            },
                                        },
                                        TimeZoneType: sdk.String("nemo"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "architecto",
                                            "expedita",
                                            "quisquam",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "facilis",
                                            "assumenda",
                                            "repudiandae",
                                        },
                                    },
                                    LongValue: sdk.String("maiores"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "commodi",
                                        },
                                    },
                                    StringValue: sdk.String("vitae"),
                                },
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "nam",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(203396),
                                                Width: sdk.Int(797712),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(176104),
                                                Width: sdk.Int(186),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("ad"),
                                        NativeTemplate: sdk.String("a"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(816825),
                                            Width: sdk.Int(662515),
                                        },
                                        SkippableAdType: sdk.String("atque"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("aperiam"),
                                                EndHour: sdk.Int(489821),
                                                EndMinute: sdk.Int(463895),
                                                StartHour: sdk.Int(264073),
                                                StartMinute: sdk.Int(683980),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("iure"),
                                                EndHour: sdk.Int(538368),
                                                EndMinute: sdk.Int(638219),
                                                StartHour: sdk.Int(572450),
                                                StartMinute: sdk.Int(674077),
                                            },
                                        },
                                        TimeZoneType: sdk.String("dolor"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "illum",
                                            "sit",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "voluptas",
                                            "expedita",
                                            "voluptas",
                                        },
                                    },
                                    LongValue: sdk.String("maiores"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "vel",
                                            "delectus",
                                        },
                                    },
                                    StringValue: sdk.String("accusamus"),
                                },
                            },
                            Key: sdk.String("reiciendis"),
                        },
                        shared.SharedTargeting{
                            Exclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "accusantium",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(590280),
                                                Width: sdk.Int(978460),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(311449),
                                                Width: sdk.Int(256647),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(248276),
                                                Width: sdk.Int(741024),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(277935),
                                                Width: sdk.Int(175455),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("enim"),
                                        NativeTemplate: sdk.String("nihil"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(728948),
                                            Width: sdk.Int(607205),
                                        },
                                        SkippableAdType: sdk.String("excepturi"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("quisquam"),
                                                EndHour: sdk.Int(547184),
                                                EndMinute: sdk.Int(830197),
                                                StartHour: sdk.Int(738832),
                                                StartMinute: sdk.Int(842935),
                                            },
                                        },
                                        TimeZoneType: sdk.String("est"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "similique",
                                            "autem",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "recusandae",
                                        },
                                    },
                                    LongValue: sdk.String("sapiente"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "odit",
                                            "inventore",
                                            "iste",
                                        },
                                    },
                                    StringValue: sdk.String("atque"),
                                },
                            },
                            Inclusions: []shared.TargetingValue{
                                shared.TargetingValue{
                                    CreativeSizeValue: &shared.TargetingValueCreativeSize{
                                        AllowedFormats: []string{
                                            "atque",
                                            "doloribus",
                                        },
                                        CompanionSizes: []shared.TargetingValueSize{
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(13655),
                                                Width: sdk.Int(630286),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(612181),
                                                Width: sdk.Int(908587),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(723623),
                                                Width: sdk.Int(658544),
                                            },
                                            shared.TargetingValueSize{
                                                Height: sdk.Int(288907),
                                                Width: sdk.Int(455400),
                                            },
                                        },
                                        CreativeSizeType: sdk.String("voluptatibus"),
                                        NativeTemplate: sdk.String("quam"),
                                        Size: &shared.TargetingValueSize{
                                            Height: sdk.Int(859537),
                                            Width: sdk.Int(211637),
                                        },
                                        SkippableAdType: sdk.String("voluptates"),
                                    },
                                    DayPartTargetingValue: &shared.TargetingValueDayPartTargeting{
                                        DayParts: []shared.TargetingValueDayPartTargetingDayPart{
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("perferendis"),
                                                EndHour: sdk.Int(310926),
                                                EndMinute: sdk.Int(569872),
                                                StartHour: sdk.Int(399946),
                                                StartMinute: sdk.Int(294650),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("voluptatem"),
                                                EndHour: sdk.Int(849029),
                                                EndMinute: sdk.Int(388006),
                                                StartHour: sdk.Int(632850),
                                                StartMinute: sdk.Int(116705),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("atque"),
                                                EndHour: sdk.Int(191425),
                                                EndMinute: sdk.Int(114588),
                                                StartHour: sdk.Int(789539),
                                                StartMinute: sdk.Int(540223),
                                            },
                                            shared.TargetingValueDayPartTargetingDayPart{
                                                DayOfWeek: sdk.String("nihil"),
                                                EndHour: sdk.Int(631904),
                                                EndMinute: sdk.Int(837739),
                                                StartHour: sdk.Int(955913),
                                                StartMinute: sdk.Int(322849),
                                            },
                                        },
                                        TimeZoneType: sdk.String("cupiditate"),
                                    },
                                    DemogAgeCriteriaValue: &shared.TargetingValueDemogAgeCriteria{
                                        DemogAgeCriteriaIds: []string{
                                            "reiciendis",
                                            "repellendus",
                                        },
                                    },
                                    DemogGenderCriteriaValue: &shared.TargetingValueDemogGenderCriteria{
                                        DemogGenderCriteriaIds: []string{
                                            "ab",
                                            "mollitia",
                                            "possimus",
                                            "praesentium",
                                        },
                                    },
                                    LongValue: sdk.String("neque"),
                                    RequestPlatformTargetingValue: &shared.TargetingValueRequestPlatformTargeting{
                                        RequestPlatforms: []string{
                                            "animi",
                                            "debitis",
                                        },
                                    },
                                    StringValue: sdk.String("voluptatum"),
                                },
                            },
                            Key: sdk.String("voluptatem"),
                        },
                    },
                    SyndicationProduct: sdk.String("quisquam"),
                    Terms: &shared.DealTerms{
                        BrandingType: sdk.String("vitae"),
                        CrossListedExternalDealIDType: sdk.String("cumque"),
                        Description: sdk.String("architecto"),
                        EstimatedGrossSpend: &shared.Price{
                            AmountMicros: sdk.Float64(5754.04),
                            CurrencyCode: sdk.String("eligendi"),
                            ExpectedCpmMicros: sdk.Float64(5806.89),
                            PricingType: sdk.String("quis"),
                        },
                        EstimatedImpressionsPerDay: sdk.String("tempore"),
                        GuaranteedFixedPriceTerms: &shared.DealTermsGuaranteedFixedPriceTerms{
                            BillingInfo: &shared.DealTermsGuaranteedFixedPriceTermsBillingInfo{
                                CurrencyConversionTimeMs: sdk.String("officia"),
                                DfpLineItemID: sdk.String("iste"),
                                OriginalContractedQuantity: sdk.String("unde"),
                                Price: &shared.Price{
                                    AmountMicros: sdk.Float64(5589.92),
                                    CurrencyCode: sdk.String("laboriosam"),
                                    ExpectedCpmMicros: sdk.Float64(4976.95),
                                    PricingType: sdk.String("voluptatum"),
                                },
                            },
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("deserunt"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("dolor"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("hic"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(4370.94),
                                        CurrencyCode: sdk.String("sint"),
                                        ExpectedCpmMicros: sdk.Float64(4187.87),
                                        PricingType: sdk.String("iste"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("cupiditate"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("ab"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("fuga"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(9522.16),
                                        CurrencyCode: sdk.String("dolor"),
                                        ExpectedCpmMicros: sdk.Float64(5280.82),
                                        PricingType: sdk.String("molestias"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("quod"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("repudiandae"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("eaque"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(2343.47),
                                        CurrencyCode: sdk.String("autem"),
                                        ExpectedCpmMicros: sdk.Float64(1108.04),
                                        PricingType: sdk.String("numquam"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("incidunt"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("modi"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("quos"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(7914.54),
                                        CurrencyCode: sdk.String("voluptate"),
                                        ExpectedCpmMicros: sdk.Float64(6238.67),
                                        PricingType: sdk.String("reprehenderit"),
                                    },
                                },
                            },
                            GuaranteedImpressions: sdk.String("reprehenderit"),
                            GuaranteedLooks: sdk.String("animi"),
                            MinimumDailyLooks: sdk.String("consequatur"),
                        },
                        NonGuaranteedAuctionTerms: &shared.DealTermsNonGuaranteedAuctionTerms{
                            AutoOptimizePrivateAuction: sdk.Bool(false),
                            ReservePricePerBuyers: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("delectus"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("qui"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("delectus"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(3485.73),
                                        CurrencyCode: sdk.String("ipsum"),
                                        ExpectedCpmMicros: sdk.Float64(3851.65),
                                        PricingType: sdk.String("doloremque"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("sed"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("voluptatum"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("debitis"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(9514.11),
                                        CurrencyCode: sdk.String("itaque"),
                                        ExpectedCpmMicros: sdk.Float64(9103.96),
                                        PricingType: sdk.String("repellat"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("cupiditate"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("adipisci"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("aliquam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(717.51),
                                        CurrencyCode: sdk.String("veniam"),
                                        ExpectedCpmMicros: sdk.Float64(1483.73),
                                        PricingType: sdk.String("necessitatibus"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("possimus"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("dignissimos"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("itaque"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(1311.16),
                                        CurrencyCode: sdk.String("ullam"),
                                        ExpectedCpmMicros: sdk.Float64(2484.25),
                                        PricingType: sdk.String("delectus"),
                                    },
                                },
                            },
                        },
                        NonGuaranteedFixedPriceTerms: &shared.DealTermsNonGuaranteedFixedPriceTerms{
                            FixedPrices: []shared.PricePerBuyer{
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("quod"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("sunt"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("ullam"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(4630.44),
                                        CurrencyCode: sdk.String("illum"),
                                        ExpectedCpmMicros: sdk.Float64(9160.51),
                                        PricingType: sdk.String("officia"),
                                    },
                                },
                                shared.PricePerBuyer{
                                    AuctionTier: sdk.String("est"),
                                    BilledBuyer: &shared.Buyer{
                                        AccountID: sdk.String("in"),
                                    },
                                    Buyer: &shared.Buyer{
                                        AccountID: sdk.String("illo"),
                                    },
                                    Price: &shared.Price{
                                        AmountMicros: sdk.Float64(4519.26),
                                        CurrencyCode: sdk.String("consequatur"),
                                        ExpectedCpmMicros: sdk.Float64(9621.2),
                                        PricingType: sdk.String("incidunt"),
                                    },
                                },
                            },
                        },
                        RubiconNonGuaranteedTerms: &shared.DealTermsRubiconNonGuaranteedTerms{
                            PriorityPrice: &shared.Price{
                                AmountMicros: sdk.Float64(2930.23),
                                CurrencyCode: sdk.String("nemo"),
                                ExpectedCpmMicros: sdk.Float64(6696.95),
                                PricingType: sdk.String("quo"),
                            },
                            StandardPrice: &shared.Price{
                                AmountMicros: sdk.Float64(8042.1),
                                CurrencyCode: sdk.String("delectus"),
                                ExpectedCpmMicros: sdk.Float64(3853.83),
                                PricingType: sdk.String("laboriosam"),
                            },
                        },
                        SellerTimeZone: sdk.String("quam"),
                    },
                    WebPropertyCode: sdk.String("fuga"),
                },
            },
            Proposal: &shared.Proposal{
                BilledBuyer: &shared.Buyer{
                    AccountID: sdk.String("officia"),
                },
                Buyer: &shared.Buyer{
                    AccountID: sdk.String("repellat"),
                },
                BuyerContacts: []shared.ContactInformation{
                    shared.ContactInformation{
                        Email: sdk.String("Mozelle.Nicolas54@hotmail.com"),
                        Name: sdk.String("Miranda Volkman"),
                    },
                    shared.ContactInformation{
                        Email: sdk.String("Rosalee_Hoppe36@gmail.com"),
                        Name: sdk.String("Ken Donnelly"),
                    },
                    shared.ContactInformation{
                        Email: sdk.String("Maymie.Larson5@hotmail.com"),
                        Name: sdk.String("Archie Jaskolski"),
                    },
                },
                BuyerPrivateData: &shared.PrivateData{
                    ReferenceID: sdk.String("minus"),
                    ReferencePayload: sdk.String("ut"),
                },
                DbmAdvertiserIds: []string{
                    "eius",
                    "eos",
                    "veniam",
                },
                HasBuyerSignedOff: sdk.Bool(false),
                HasSellerSignedOff: sdk.Bool(false),
                InventorySource: sdk.String("repudiandae"),
                IsRenegotiating: sdk.Bool(false),
                IsSetupComplete: sdk.Bool(false),
                Kind: sdk.String("sint"),
                Labels: []shared.MarketplaceLabel{
                    shared.MarketplaceLabel{
                        AccountID: sdk.String("debitis"),
                        CreateTimeMs: sdk.String("laboriosam"),
                        DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                            Buyer: &shared.Buyer{
                                AccountID: sdk.String("eos"),
                            },
                            Seller: &shared.Seller{
                                AccountID: sdk.String("amet"),
                                SubAccountID: sdk.String("incidunt"),
                            },
                        },
                        Label: sdk.String("porro"),
                    },
                    shared.MarketplaceLabel{
                        AccountID: sdk.String("occaecati"),
                        CreateTimeMs: sdk.String("reiciendis"),
                        DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                            Buyer: &shared.Buyer{
                                AccountID: sdk.String("voluptate"),
                            },
                            Seller: &shared.Seller{
                                AccountID: sdk.String("tempore"),
                                SubAccountID: sdk.String("in"),
                            },
                        },
                        Label: sdk.String("omnis"),
                    },
                    shared.MarketplaceLabel{
                        AccountID: sdk.String("possimus"),
                        CreateTimeMs: sdk.String("tenetur"),
                        DeprecatedMarketplaceDealParty: &shared.MarketplaceDealParty{
                            Buyer: &shared.Buyer{
                                AccountID: sdk.String("recusandae"),
                            },
                            Seller: &shared.Seller{
                                AccountID: sdk.String("expedita"),
                                SubAccountID: sdk.String("iusto"),
                            },
                        },
                        Label: sdk.String("esse"),
                    },
                },
                LastUpdaterOrCommentorRole: sdk.String("harum"),
                Name: sdk.String("Traci Dickens"),
                NegotiationID: sdk.String("dolore"),
                OriginatorRole: sdk.String("nam"),
                PrivateAuctionID: sdk.String("officia"),
                ProposalID: sdk.String("maiores"),
                ProposalState: sdk.String("cupiditate"),
                RevisionNumber: sdk.String("illo"),
                RevisionTimeMs: sdk.String("saepe"),
                Seller: &shared.Seller{
                    AccountID: sdk.String("enim"),
                    SubAccountID: sdk.String("eaque"),
                },
                SellerContacts: []shared.ContactInformation{
                    shared.ContactInformation{
                        Email: sdk.String("Vince.Lesch@hotmail.com"),
                        Name: sdk.String("Dean Goldner"),
                    },
                    shared.ContactInformation{
                        Email: sdk.String("Evelyn42@yahoo.com"),
                        Name: sdk.String("Warren Jakubowski"),
                    },
                },
            },
            ProposalRevisionNumber: sdk.String("corrupti"),
            UpdateAction: sdk.String("nostrum"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("fuga"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "numquam",
        QuotaUser: sdk.String("laborum"),
        UserIP: sdk.String("eligendi"),
    }, operations.AdexchangebuyerMarketplacedealsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EditAllOrderDealsResponse != nil {
        // handle response
    }
}
```
