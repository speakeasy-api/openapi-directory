# Accounts

### Available Operations

* [MybusinessbusinessinformationAccountsLocationsCreate](#mybusinessbusinessinformationaccountslocationscreate) - Creates a new Location that will be owned by the logged in user.
* [MybusinessbusinessinformationAccountsLocationsList](#mybusinessbusinessinformationaccountslocationslist) - Lists the locations for the specified account.

## MybusinessbusinessinformationAccountsLocationsCreate

Creates a new Location that will be owned by the logged in user.

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
    res, err := s.Accounts.MybusinessbusinessinformationAccountsLocationsCreate(ctx, operations.MybusinessbusinessinformationAccountsLocationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LocationInput: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: sdk.String("necessitatibus"),
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: sdk.String("Joyce Kertzmann"),
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: sdk.String("Jasmine Lind"),
                },
            },
            Labels: []string{
                "architecto",
            },
            LanguageCode: sdk.String("repudiandae"),
            Latlng: &shared.LatLng{
                Latitude: sdk.Float64(3523.12),
                Longitude: sdk.Float64(7142.42),
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: sdk.String("repellat"),
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(904648),
                                Minutes: sdk.Int(868126),
                                Nanos: sdk.Int(37559),
                                Seconds: sdk.Int(162493),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumThursday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(615560),
                                Minutes: sdk.Int(166847),
                                Nanos: sdk.Int(123820),
                                Seconds: sdk.Int(779051),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSaturday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(864934),
                                Minutes: sdk.Int(807319),
                                Nanos: sdk.Int(411397),
                                Seconds: sdk.Int(569101),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(407183),
                                Minutes: sdk.Int(33222),
                                Nanos: sdk.Int(69167),
                                Seconds: sdk.Int(982575),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumFriday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(373291),
                                Minutes: sdk.Int(453543),
                                Nanos: sdk.Int(420075),
                                Seconds: sdk.Int(722056),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumDayOfWeekUnspecified.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(866383),
                                Minutes: sdk.Int(365496),
                                Nanos: sdk.Int(975522),
                                Seconds: sdk.Int(16627),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSaturday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(230742),
                                Minutes: sdk.Int(11714),
                                Nanos: sdk.Int(764912),
                                Seconds: sdk.Int(359978),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumSunday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(729991),
                                Minutes: sdk.Int(749999),
                                Nanos: sdk.Int(171629),
                                Seconds: sdk.Int(339404),
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: sdk.String("totam"),
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(338985),
                                Minutes: sdk.Int(199996),
                                Nanos: sdk.Int(179490),
                                Seconds: sdk.Int(18521),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(793698),
                                Minutes: sdk.Int(463451),
                                Nanos: sdk.Int(223924),
                                Seconds: sdk.Int(874573),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumTuesday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(944120),
                                Minutes: sdk.Int(928082),
                                Nanos: sdk.Int(608253),
                                Seconds: sdk.Int(704415),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumThursday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(31838),
                                Minutes: sdk.Int(783645),
                                Nanos: sdk.Int(164694),
                                Seconds: sdk.Int(500026),
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Gary Mayert"),
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: sdk.Int(992397),
                    Month: sdk.Int(934214),
                    Year: sdk.Int(267262),
                },
                Status: shared.OpenInfoStatusEnumClosedPermanently.ToPointer(),
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "deleniti",
                    "pariatur",
                    "provident",
                },
                PrimaryPhone: sdk.String("nobis"),
            },
            Profile: &shared.Profile{
                Description: sdk.String("libero"),
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumTuesday.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(554242),
                            Minutes: sdk.Int(398221),
                            Nanos: sdk.Int(212390),
                            Seconds: sdk.Int(209843),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(186193),
                            Minutes: sdk.Int(218749),
                            Nanos: sdk.Int(944373),
                            Seconds: sdk.Int(569574),
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumFriday.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(452109),
                            Minutes: sdk.Int(490459),
                            Nanos: sdk.Int(970237),
                            Seconds: sdk.Int(227414),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(254356),
                            Minutes: sdk.Int(85295),
                            Nanos: sdk.Int(58029),
                            Seconds: sdk.Int(56418),
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(487838),
                            Minutes: sdk.Int(311796),
                            Nanos: sdk.Int(881005),
                            Seconds: sdk.Int(696344),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumSunday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(377752),
                            Minutes: sdk.Int(617658),
                            Nanos: sdk.Int(179603),
                            Seconds: sdk.Int(542499),
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(854614),
                            Minutes: sdk.Int(67249),
                            Nanos: sdk.Int(743835),
                            Seconds: sdk.Int(679393),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(453697),
                            Minutes: sdk.Int(677082),
                            Nanos: sdk.Int(536579),
                            Seconds: sdk.Int(607045),
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: sdk.String("distinctio"),
                        RelationType: shared.RelevantLocationRelationTypeEnumIndependentEstablishmentIn.ToPointer(),
                    },
                    shared.RelevantLocation{
                        PlaceID: sdk.String("nihil"),
                        RelationType: shared.RelevantLocationRelationTypeEnumRelationTypeUnspecified.ToPointer(),
                    },
                    shared.RelevantLocation{
                        PlaceID: sdk.String("voluptate"),
                        RelationType: shared.RelevantLocationRelationTypeEnumDepartmentOf.ToPointer(),
                    },
                    shared.RelevantLocation{
                        PlaceID: sdk.String("saepe"),
                        RelationType: shared.RelevantLocationRelationTypeEnumRelationTypeUnspecified.ToPointer(),
                    },
                },
                ParentChain: sdk.String("aspernatur"),
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: sdk.String("perferendis"),
                    RelationType: shared.RelevantLocationRelationTypeEnumRelationTypeUnspecified.ToPointer(),
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: shared.ServiceAreaBusinessBusinessTypeEnumCustomerAndBusinessLocation.ToPointer(),
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: sdk.String("ad"),
                            PlaceName: sdk.String("saepe"),
                        },
                        shared.PlaceInfo{
                            PlaceID: sdk.String("suscipit"),
                            PlaceName: sdk.String("deserunt"),
                        },
                        shared.PlaceInfo{
                            PlaceID: sdk.String("provident"),
                            PlaceName: sdk.String("minima"),
                        },
                        shared.PlaceInfo{
                            PlaceID: sdk.String("repellendus"),
                            PlaceName: sdk.String("totam"),
                        },
                    },
                },
                RegionCode: sdk.String("similique"),
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: sdk.String("at"),
                        Label: &shared.Label{
                            Description: sdk.String("quaerat"),
                            DisplayName: sdk.String("tempora"),
                            LanguageCode: sdk.String("vel"),
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: sdk.String("quod"),
                        Nanos: sdk.Int(885338),
                        Units: sdk.String("qui"),
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: sdk.String("dolorum"),
                        ServiceTypeID: sdk.String("a"),
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(687488),
                            Minutes: sdk.Int(483409),
                            Nanos: sdk.Int(215507),
                            Seconds: sdk.Int(788740),
                        },
                        Closed: sdk.Bool(false),
                        EndDate: &shared.Date{
                            Day: sdk.Int(947371),
                            Month: sdk.Int(229442),
                            Year: sdk.Int(730856),
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(880298),
                            Minutes: sdk.Int(253941),
                            Nanos: sdk.Int(313692),
                            Seconds: sdk.Int(213312),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(957451),
                            Month: sdk.Int(518201),
                            Year: sdk.Int(471752),
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(25662),
                            Minutes: sdk.Int(711584),
                            Nanos: sdk.Int(207470),
                            Seconds: sdk.Int(153694),
                        },
                        Closed: sdk.Bool(false),
                        EndDate: &shared.Date{
                            Day: sdk.Int(424685),
                            Month: sdk.Int(730442),
                            Year: sdk.Int(374170),
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(646265),
                            Minutes: sdk.Int(463575),
                            Nanos: sdk.Int(214880),
                            Seconds: sdk.Int(277628),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(186458),
                            Month: sdk.Int(586784),
                            Year: sdk.Int(807581),
                        },
                    },
                },
            },
            StoreCode: sdk.String("pariatur"),
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "dicta",
                    "laborum",
                    "totam",
                },
                AdministrativeArea: sdk.String("incidunt"),
                LanguageCode: sdk.String("aspernatur"),
                Locality: sdk.String("dolores"),
                Organization: sdk.String("distinctio"),
                PostalCode: sdk.String("34581-2114"),
                Recipients: []string{
                    "ullam",
                },
                RegionCode: sdk.String("nam"),
                Revision: sdk.Int(940432),
                SortingCode: sdk.String("voluptatem"),
                Sublocality: sdk.String("cumque"),
            },
            Title: sdk.String("Miss"),
            WebsiteURI: sdk.String("nobis"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("quos"),
        Parent: "tempore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        RequestID: sdk.String("aperiam"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("dolorem"),
        ValidateOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## MybusinessbusinessinformationAccountsLocationsList

Lists the locations for the specified account.

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
    res, err := s.Accounts.MybusinessbusinessinformationAccountsLocationsList(ctx, operations.MybusinessbusinessinformationAccountsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("architecto"),
        Filter: sdk.String("quae"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quas"),
        OrderBy: sdk.String("itaque"),
        PageSize: sdk.Int64(9240),
        PageToken: sdk.String("est"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        ReadMask: sdk.String("doloribus"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```
