# GoogleLocations

### Available Operations

* [MybusinessbusinessinformationGoogleLocationsSearch](#mybusinessbusinessinformationgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

## MybusinessbusinessinformationGoogleLocationsSearch

Search all of the possible locations that are a match to the specified request.

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
    res, err := s.GoogleLocations.MybusinessbusinessinformationGoogleLocationsSearch(ctx, operations.MybusinessbusinessinformationGoogleLocationsSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchGoogleLocationsRequestInput: &shared.SearchGoogleLocationsRequestInput{
            Location: &shared.LocationInput{
                AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                    AdPhone: sdk.String("voluptatibus"),
                },
                Categories: &shared.CategoriesInput{
                    AdditionalCategories: []shared.CategoryInput{
                        shared.CategoryInput{
                            Name: sdk.String("Devin Ullrich"),
                        },
                        shared.CategoryInput{
                            Name: sdk.String("Mrs. Sally Jacobi"),
                        },
                    },
                    PrimaryCategory: &shared.CategoryInput{
                        Name: sdk.String("Glenn Walter"),
                    },
                },
                Labels: []string{
                    "a",
                },
                LanguageCode: sdk.String("libero"),
                Latlng: &shared.LatLng{
                    Latitude: sdk.Float64(139.48),
                    Longitude: sdk.Float64(114.27),
                },
                MoreHours: []shared.MoreHours{
                    shared.MoreHours{
                        HoursTypeID: sdk.String("impedit"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                                CloseTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(882860),
                                    Minutes: sdk.Int(79522),
                                    Nanos: sdk.Int(250622),
                                    Seconds: sdk.Int(89603),
                                },
                                OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                                OpenTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(672048),
                                    Minutes: sdk.Int(810424),
                                    Nanos: sdk.Int(245367),
                                    Seconds: sdk.Int(432148),
                                },
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                                CloseTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(752135),
                                    Minutes: sdk.Int(557369),
                                    Nanos: sdk.Int(829603),
                                    Seconds: sdk.Int(860552),
                                },
                                OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                                OpenTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(727044),
                                    Minutes: sdk.Int(96549),
                                    Nanos: sdk.Int(270328),
                                    Seconds: sdk.Int(256139),
                                },
                            },
                        },
                    },
                    shared.MoreHours{
                        HoursTypeID: sdk.String("explicabo"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                                CloseTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(476477),
                                    Minutes: sdk.Int(301598),
                                    Nanos: sdk.Int(487935),
                                    Seconds: sdk.Int(262118),
                                },
                                OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                                OpenTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(456141),
                                    Minutes: sdk.Int(524593),
                                    Nanos: sdk.Int(683282),
                                    Seconds: sdk.Int(442015),
                                },
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumFriday.ToPointer(),
                                CloseTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(852635),
                                    Minutes: sdk.Int(283519),
                                    Nanos: sdk.Int(433439),
                                    Seconds: sdk.Int(379927),
                                },
                                OpenDay: shared.TimePeriodOpenDayEnumSaturday.ToPointer(),
                                OpenTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(181151),
                                    Minutes: sdk.Int(509342),
                                    Nanos: sdk.Int(788546),
                                    Seconds: sdk.Int(86377),
                                },
                            },
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                                CloseTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(660040),
                                    Minutes: sdk.Int(696997),
                                    Nanos: sdk.Int(206594),
                                    Seconds: sdk.Int(778696),
                                },
                                OpenDay: shared.TimePeriodOpenDayEnumSaturday.ToPointer(),
                                OpenTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(777408),
                                    Minutes: sdk.Int(681359),
                                    Nanos: sdk.Int(259422),
                                    Seconds: sdk.Int(178367),
                                },
                            },
                        },
                    },
                    shared.MoreHours{
                        HoursTypeID: sdk.String("voluptas"),
                        Periods: []shared.TimePeriod{
                            shared.TimePeriod{
                                CloseDay: shared.TimePeriodCloseDayEnumThursday.ToPointer(),
                                CloseTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(9688),
                                    Minutes: sdk.Int(272822),
                                    Nanos: sdk.Int(892050),
                                    Seconds: sdk.Int(370853),
                                },
                                OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                                OpenTime: &shared.TimeOfDay{
                                    Hours: sdk.Int(197054),
                                    Minutes: sdk.Int(779192),
                                    Nanos: sdk.Int(459856),
                                    Seconds: sdk.Int(925164),
                                },
                            },
                        },
                    },
                },
                Name: sdk.String("Lola Schmidt IV"),
                OpenInfo: &shared.OpenInfoInput{
                    OpeningDate: &shared.Date{
                        Day: sdk.Int(518835),
                        Month: sdk.Int(882710),
                        Year: sdk.Int(306810),
                    },
                    Status: shared.OpenInfoStatusEnumOpen.ToPointer(),
                },
                PhoneNumbers: &shared.PhoneNumbers{
                    AdditionalPhones: []string{
                        "commodi",
                        "sapiente",
                        "dolores",
                    },
                    PrimaryPhone: sdk.String("deserunt"),
                },
                Profile: &shared.Profile{
                    Description: sdk.String("molestiae"),
                },
                RegularHours: &shared.BusinessHours{
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSaturday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(430402),
                                Minutes: sdk.Int(556429),
                                Nanos: sdk.Int(510017),
                                Seconds: sdk.Int(159867),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumThursday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(143829),
                                Minutes: sdk.Int(681393),
                                Nanos: sdk.Int(649463),
                                Seconds: sdk.Int(277596),
                            },
                        },
                    },
                },
                RelationshipData: &shared.RelationshipData{
                    ChildrenLocations: []shared.RelevantLocation{
                        shared.RelevantLocation{
                            PlaceID: sdk.String("explicabo"),
                            RelationType: shared.RelevantLocationRelationTypeEnumRelationTypeUnspecified.ToPointer(),
                        },
                        shared.RelevantLocation{
                            PlaceID: sdk.String("nisi"),
                            RelationType: shared.RelevantLocationRelationTypeEnumRelationTypeUnspecified.ToPointer(),
                        },
                        shared.RelevantLocation{
                            PlaceID: sdk.String("sapiente"),
                            RelationType: shared.RelevantLocationRelationTypeEnumRelationTypeUnspecified.ToPointer(),
                        },
                    },
                    ParentChain: sdk.String("ratione"),
                    ParentLocation: &shared.RelevantLocation{
                        PlaceID: sdk.String("explicabo"),
                        RelationType: shared.RelevantLocationRelationTypeEnumIndependentEstablishmentIn.ToPointer(),
                    },
                },
                ServiceArea: &shared.ServiceAreaBusiness{
                    BusinessType: shared.ServiceAreaBusinessBusinessTypeEnumCustomerLocationOnly.ToPointer(),
                    Places: &shared.Places{
                        PlaceInfos: []shared.PlaceInfo{
                            shared.PlaceInfo{
                                PlaceID: sdk.String("et"),
                                PlaceName: sdk.String("esse"),
                            },
                            shared.PlaceInfo{
                                PlaceID: sdk.String("eveniet"),
                                PlaceName: sdk.String("accusamus"),
                            },
                            shared.PlaceInfo{
                                PlaceID: sdk.String("veritatis"),
                                PlaceName: sdk.String("esse"),
                            },
                        },
                    },
                    RegionCode: sdk.String("quod"),
                },
                ServiceItems: []shared.ServiceItem{
                    shared.ServiceItem{
                        FreeFormServiceItem: &shared.FreeFormServiceItem{
                            Category: sdk.String("vero"),
                            Label: &shared.Label{
                                Description: sdk.String("aliquid"),
                                DisplayName: sdk.String("quasi"),
                                LanguageCode: sdk.String("saepe"),
                            },
                        },
                        Price: &shared.Money{
                            CurrencyCode: sdk.String("vel"),
                            Nanos: sdk.Int(690025),
                            Units: sdk.String("molestiae"),
                        },
                        StructuredServiceItem: &shared.StructuredServiceItem{
                            Description: sdk.String("rerum"),
                            ServiceTypeID: sdk.String("occaecati"),
                        },
                    },
                    shared.ServiceItem{
                        FreeFormServiceItem: &shared.FreeFormServiceItem{
                            Category: sdk.String("minima"),
                            Label: &shared.Label{
                                Description: sdk.String("distinctio"),
                                DisplayName: sdk.String("eligendi"),
                                LanguageCode: sdk.String("sit"),
                            },
                        },
                        Price: &shared.Money{
                            CurrencyCode: sdk.String("culpa"),
                            Nanos: sdk.Int(731398),
                            Units: sdk.String("adipisci"),
                        },
                        StructuredServiceItem: &shared.StructuredServiceItem{
                            Description: sdk.String("cumque"),
                            ServiceTypeID: sdk.String("consequuntur"),
                        },
                    },
                    shared.ServiceItem{
                        FreeFormServiceItem: &shared.FreeFormServiceItem{
                            Category: sdk.String("consequatur"),
                            Label: &shared.Label{
                                Description: sdk.String("minus"),
                                DisplayName: sdk.String("quaerat"),
                                LanguageCode: sdk.String("sapiente"),
                            },
                        },
                        Price: &shared.Money{
                            CurrencyCode: sdk.String("consectetur"),
                            Nanos: sdk.Int(458139),
                            Units: sdk.String("blanditiis"),
                        },
                        StructuredServiceItem: &shared.StructuredServiceItem{
                            Description: sdk.String("provident"),
                            ServiceTypeID: sdk.String("a"),
                        },
                    },
                },
                SpecialHours: &shared.SpecialHours{
                    SpecialHourPeriods: []shared.SpecialHourPeriod{
                        shared.SpecialHourPeriod{
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(557811),
                                Minutes: sdk.Int(457223),
                                Nanos: sdk.Int(97468),
                                Seconds: sdk.Int(951875),
                            },
                            Closed: sdk.Bool(false),
                            EndDate: &shared.Date{
                                Day: sdk.Int(621679),
                                Month: sdk.Int(575751),
                                Year: sdk.Int(863023),
                            },
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(820767),
                                Minutes: sdk.Int(157632),
                                Nanos: sdk.Int(908844),
                                Seconds: sdk.Int(992430),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(815524),
                                Month: sdk.Int(85001),
                                Year: sdk.Int(159414),
                            },
                        },
                        shared.SpecialHourPeriod{
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(94458),
                                Minutes: sdk.Int(628899),
                                Nanos: sdk.Int(633608),
                                Seconds: sdk.Int(398434),
                            },
                            Closed: sdk.Bool(false),
                            EndDate: &shared.Date{
                                Day: sdk.Int(949298),
                                Month: sdk.Int(62713),
                                Year: sdk.Int(936747),
                            },
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(424032),
                                Minutes: sdk.Int(447378),
                                Nanos: sdk.Int(258684),
                                Seconds: sdk.Int(727697),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(849039),
                                Month: sdk.Int(742238),
                                Year: sdk.Int(33304),
                            },
                        },
                        shared.SpecialHourPeriod{
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(306986),
                                Minutes: sdk.Int(958983),
                                Nanos: sdk.Int(119771),
                                Seconds: sdk.Int(355369),
                            },
                            Closed: sdk.Bool(false),
                            EndDate: &shared.Date{
                                Day: sdk.Int(443879),
                                Month: sdk.Int(356707),
                                Year: sdk.Int(391774),
                            },
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(16328),
                                Minutes: sdk.Int(531849),
                                Nanos: sdk.Int(185232),
                                Seconds: sdk.Int(845358),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(401259),
                                Month: sdk.Int(536275),
                                Year: sdk.Int(929292),
                            },
                        },
                        shared.SpecialHourPeriod{
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(680270),
                                Minutes: sdk.Int(99615),
                                Nanos: sdk.Int(609178),
                                Seconds: sdk.Int(945302),
                            },
                            Closed: sdk.Bool(false),
                            EndDate: &shared.Date{
                                Day: sdk.Int(98478),
                                Month: sdk.Int(869489),
                                Year: sdk.Int(92027),
                            },
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(454162),
                                Minutes: sdk.Int(55965),
                                Nanos: sdk.Int(326701),
                                Seconds: sdk.Int(86532),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(232744),
                                Month: sdk.Int(237173),
                                Year: sdk.Int(614465),
                            },
                        },
                    },
                },
                StoreCode: sdk.String("temporibus"),
                StorefrontAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "rem",
                    },
                    AdministrativeArea: sdk.String("aut"),
                    LanguageCode: sdk.String("laudantium"),
                    Locality: sdk.String("eum"),
                    Organization: sdk.String("mollitia"),
                    PostalCode: sdk.String("52025"),
                    Recipients: []string{
                        "impedit",
                        "explicabo",
                    },
                    RegionCode: sdk.String("voluptas"),
                    Revision: sdk.Int(12036),
                    SortingCode: sdk.String("dignissimos"),
                    Sublocality: sdk.String("dicta"),
                },
                Title: sdk.String("Dr."),
                WebsiteURI: sdk.String("natus"),
            },
            PageSize: sdk.Int(244651),
            Query: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("ea"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchGoogleLocationsResponse != nil {
        // handle response
    }
}
```
