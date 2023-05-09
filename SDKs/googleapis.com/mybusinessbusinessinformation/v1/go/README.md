# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessbusinessinformation/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LocationInput: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: sdk.String("provident"),
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: sdk.String("Stuart Stiedemann"),
                    },
                    shared.CategoryInput{
                        Name: sdk.String("Sabrina Oberbrunner"),
                    },
                    shared.CategoryInput{
                        Name: sdk.String("Raquel Bednar"),
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: sdk.String("Minnie Schiller"),
                },
            },
            Labels: []string{
                "excepturi",
                "nisi",
            },
            LanguageCode: sdk.String("recusandae"),
            Latlng: &shared.LatLng{
                Latitude: sdk.Float64(8360.79),
                Longitude: sdk.Float64(710.36),
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: sdk.String("veritatis"),
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumDayOfWeekUnspecified.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(368241),
                                Minutes: sdk.Int(832620),
                                Nanos: sdk.Int(957156),
                                Seconds: sdk.Int(778157),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumMonday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(870013),
                                Minutes: sdk.Int(870088),
                                Nanos: sdk.Int(978619),
                                Seconds: sdk.Int(473608),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumSaturday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(800911),
                                Minutes: sdk.Int(461479),
                                Nanos: sdk.Int(520478),
                                Seconds: sdk.Int(780529),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(118274),
                                Minutes: sdk.Int(720633),
                                Nanos: sdk.Int(639921),
                                Seconds: sdk.Int(582020),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(537373),
                                Minutes: sdk.Int(944669),
                                Nanos: sdk.Int(758616),
                                Seconds: sdk.Int(521848),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumDayOfWeekUnspecified.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(414662),
                                Minutes: sdk.Int(473600),
                                Nanos: sdk.Int(264555),
                                Seconds: sdk.Int(186332),
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: sdk.String("impedit"),
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumWednesday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(216550),
                                Minutes: sdk.Int(568434),
                                Nanos: sdk.Int(135218),
                                Seconds: sdk.Int(18789),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumTuesday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(617636),
                                Minutes: sdk.Int(149675),
                                Nanos: sdk.Int(612096),
                                Seconds: sdk.Int(222321),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumThursday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(386489),
                                Minutes: sdk.Int(943749),
                                Nanos: sdk.Int(902599),
                                Seconds: sdk.Int(681820),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(359508),
                                Minutes: sdk.Int(613064),
                                Nanos: sdk.Int(437032),
                                Seconds: sdk.Int(902349),
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: shared.TimePeriodCloseDayEnumFriday.ToPointer(),
                            CloseTime: &shared.TimeOfDay{
                                Hours: sdk.Int(99280),
                                Minutes: sdk.Int(60225),
                                Nanos: sdk.Int(969810),
                                Seconds: sdk.Int(666767),
                            },
                            OpenDay: shared.TimePeriodOpenDayEnumFriday.ToPointer(),
                            OpenTime: &shared.TimeOfDay{
                                Hours: sdk.Int(670638),
                                Minutes: sdk.Int(170909),
                                Nanos: sdk.Int(210382),
                                Seconds: sdk.Int(358152),
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Della Halvorson"),
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: sdk.Int(325047),
                    Month: sdk.Int(570197),
                    Year: sdk.Int(38425),
                },
                Status: shared.OpenInfoStatusEnumOpen.ToPointer(),
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "doloribus",
                    "sapiente",
                    "architecto",
                },
                PrimaryPhone: sdk.String("mollitia"),
            },
            Profile: &shared.Profile{
                Description: sdk.String("dolorem"),
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(995300),
                            Minutes: sdk.Int(653108),
                            Nanos: sdk.Int(581850),
                            Seconds: sdk.Int(253291),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumWednesday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(466311),
                            Minutes: sdk.Int(474697),
                            Nanos: sdk.Int(244425),
                            Seconds: sdk.Int(623510),
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumMonday.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(338007),
                            Minutes: sdk.Int(110375),
                            Nanos: sdk.Int(674752),
                            Seconds: sdk.Int(656330),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumTuesday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(138183),
                            Minutes: sdk.Int(778346),
                            Nanos: sdk.Int(196582),
                            Seconds: sdk.Int(949572),
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: shared.TimePeriodCloseDayEnumTuesday.ToPointer(),
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(662527),
                            Minutes: sdk.Int(820994),
                            Nanos: sdk.Int(13571),
                            Seconds: sdk.Int(97101),
                        },
                        OpenDay: shared.TimePeriodOpenDayEnumThursday.ToPointer(),
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(837945),
                            Minutes: sdk.Int(673660),
                            Nanos: sdk.Int(96098),
                            Seconds: sdk.Int(971945),
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: sdk.String("vero"),
                        RelationType: shared.RelevantLocationRelationTypeEnumDepartmentOf.ToPointer(),
                    },
                    shared.RelevantLocation{
                        PlaceID: sdk.String("praesentium"),
                        RelationType: shared.RelevantLocationRelationTypeEnumIndependentEstablishmentIn.ToPointer(),
                    },
                    shared.RelevantLocation{
                        PlaceID: sdk.String("ipsa"),
                        RelationType: shared.RelevantLocationRelationTypeEnumDepartmentOf.ToPointer(),
                    },
                    shared.RelevantLocation{
                        PlaceID: sdk.String("voluptate"),
                        RelationType: shared.RelevantLocationRelationTypeEnumIndependentEstablishmentIn.ToPointer(),
                    },
                },
                ParentChain: sdk.String("perferendis"),
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: sdk.String("doloremque"),
                    RelationType: shared.RelevantLocationRelationTypeEnumDepartmentOf.ToPointer(),
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: shared.ServiceAreaBusinessBusinessTypeEnumBusinessTypeUnspecified.ToPointer(),
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: sdk.String("dicta"),
                            PlaceName: sdk.String("corporis"),
                        },
                        shared.PlaceInfo{
                            PlaceID: sdk.String("dolore"),
                            PlaceName: sdk.String("iusto"),
                        },
                        shared.PlaceInfo{
                            PlaceID: sdk.String("dicta"),
                            PlaceName: sdk.String("harum"),
                        },
                        shared.PlaceInfo{
                            PlaceID: sdk.String("enim"),
                            PlaceName: sdk.String("accusamus"),
                        },
                    },
                },
                RegionCode: sdk.String("commodi"),
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: sdk.String("quae"),
                        Label: &shared.Label{
                            Description: sdk.String("ipsum"),
                            DisplayName: sdk.String("quidem"),
                            LanguageCode: sdk.String("molestias"),
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: sdk.String("excepturi"),
                        Nanos: sdk.Int(865103),
                        Units: sdk.String("modi"),
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: sdk.String("praesentium"),
                        ServiceTypeID: sdk.String("rem"),
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: sdk.String("voluptates"),
                        Label: &shared.Label{
                            Description: sdk.String("quasi"),
                            DisplayName: sdk.String("repudiandae"),
                            LanguageCode: sdk.String("sint"),
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: sdk.String("veritatis"),
                        Nanos: sdk.Int(929297),
                        Units: sdk.String("incidunt"),
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: sdk.String("enim"),
                        ServiceTypeID: sdk.String("consequatur"),
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: sdk.String("est"),
                        Label: &shared.Label{
                            Description: sdk.String("quibusdam"),
                            DisplayName: sdk.String("explicabo"),
                            LanguageCode: sdk.String("deserunt"),
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: sdk.String("distinctio"),
                        Nanos: sdk.Int(841386),
                        Units: sdk.String("labore"),
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: sdk.String("modi"),
                        ServiceTypeID: sdk.String("qui"),
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: sdk.String("aliquid"),
                        Label: &shared.Label{
                            Description: sdk.String("cupiditate"),
                            DisplayName: sdk.String("quos"),
                            LanguageCode: sdk.String("perferendis"),
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: sdk.String("magni"),
                        Nanos: sdk.Int(828940),
                        Units: sdk.String("ipsam"),
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: sdk.String("alias"),
                        ServiceTypeID: sdk.String("fugit"),
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(569618),
                            Minutes: sdk.Int(270008),
                            Nanos: sdk.Int(703737),
                            Seconds: sdk.Int(735194),
                        },
                        Closed: sdk.Bool(false),
                        EndDate: &shared.Date{
                            Day: sdk.Int(288476),
                            Month: sdk.Int(962189),
                            Year: sdk.Int(433288),
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(248753),
                            Minutes: sdk.Int(756107),
                            Nanos: sdk.Int(576157),
                            Seconds: sdk.Int(396098),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(592042),
                            Month: sdk.Int(896039),
                            Year: sdk.Int(572252),
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(638921),
                            Minutes: sdk.Int(223081),
                            Nanos: sdk.Int(891555),
                            Seconds: sdk.Int(952749),
                        },
                        Closed: sdk.Bool(false),
                        EndDate: &shared.Date{
                            Day: sdk.Int(680056),
                            Month: sdk.Int(447125),
                            Year: sdk.Int(449198),
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(846409),
                            Minutes: sdk.Int(978571),
                            Nanos: sdk.Int(699479),
                            Seconds: sdk.Int(116202),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(297437),
                            Month: sdk.Int(767024),
                            Year: sdk.Int(813798),
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: sdk.Int(411820),
                            Minutes: sdk.Int(396506),
                            Nanos: sdk.Int(675439),
                            Seconds: sdk.Int(881104),
                        },
                        Closed: sdk.Bool(false),
                        EndDate: &shared.Date{
                            Day: sdk.Int(249796),
                            Month: sdk.Int(581273),
                            Year: sdk.Int(313218),
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: sdk.Int(881736),
                            Minutes: sdk.Int(965417),
                            Nanos: sdk.Int(692532),
                            Seconds: sdk.Int(588465),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(725255),
                            Month: sdk.Int(659669),
                            Year: sdk.Int(501324),
                        },
                    },
                },
            },
            StoreCode: sdk.String("deleniti"),
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "amet",
                    "deserunt",
                    "nisi",
                    "vel",
                },
                AdministrativeArea: sdk.String("natus"),
                LanguageCode: sdk.String("omnis"),
                Locality: sdk.String("molestiae"),
                Organization: sdk.String("perferendis"),
                PostalCode: sdk.String("37622"),
                Recipients: []string{
                    "natus",
                    "nobis",
                },
                RegionCode: sdk.String("eum"),
                Revision: sdk.Int(878453),
                SortingCode: sdk.String("aspernatur"),
                Sublocality: sdk.String("architecto"),
            },
            Title: sdk.String("Mrs."),
            WebsiteURI: sdk.String("et"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("quos"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("accusantium"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        RequestID: sdk.String("mollitia"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("eum"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [MybusinessbusinessinformationAccountsLocationsCreate](docs/accounts/README.md#mybusinessbusinessinformationaccountslocationscreate) - Creates a new Location that will be owned by the logged in user.
* [MybusinessbusinessinformationAccountsLocationsList](docs/accounts/README.md#mybusinessbusinessinformationaccountslocationslist) - Lists the locations for the specified account.

### [Attributes](docs/attributes/README.md)

* [MybusinessbusinessinformationAttributesList](docs/attributes/README.md#mybusinessbusinessinformationattributeslist) - Returns the list of attributes that would be available for a location with the given primary category and country.

### [Categories](docs/categories/README.md)

* [MybusinessbusinessinformationCategoriesBatchGet](docs/categories/README.md#mybusinessbusinessinformationcategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [MybusinessbusinessinformationCategoriesList](docs/categories/README.md#mybusinessbusinessinformationcategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### [Chains](docs/chains/README.md)

* [MybusinessbusinessinformationChainsSearch](docs/chains/README.md#mybusinessbusinessinformationchainssearch) - Searches the chain based on chain name.

### [GoogleLocations](docs/googlelocations/README.md)

* [MybusinessbusinessinformationGoogleLocationsSearch](docs/googlelocations/README.md#mybusinessbusinessinformationgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

### [Locations](docs/locations/README.md)

* [MybusinessbusinessinformationLocationsAssociate](docs/locations/README.md#mybusinessbusinessinformationlocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* [MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated](docs/locations/README.md#mybusinessbusinessinformationlocationsattributesgetgoogleupdated) - Gets the Google-updated version of the specified location.
* [MybusinessbusinessinformationLocationsClearLocationAssociation](docs/locations/README.md#mybusinessbusinessinformationlocationsclearlocationassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [MybusinessbusinessinformationLocationsDelete](docs/locations/README.md#mybusinessbusinessinformationlocationsdelete) - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* [MybusinessbusinessinformationLocationsGetAttributes](docs/locations/README.md#mybusinessbusinessinformationlocationsgetattributes) - Looks up all the attributes set for a given location.
* [MybusinessbusinessinformationLocationsUpdateAttributes](docs/locations/README.md#mybusinessbusinessinformationlocationsupdateattributes) - Update attributes for a given location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
