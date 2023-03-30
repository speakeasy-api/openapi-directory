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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MybusinessbusinessinformationAccountsLocationsCreateRequest{
        PathParams: operations.MybusinessbusinessinformationAccountsLocationsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            RequestID: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
            ValidateOnly: false,
        },
        Request: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: "iure",
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: "debitis",
                    },
                    shared.CategoryInput{
                        Name: "ipsa",
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: "delectus",
                },
            },
            Labels: []string{
                "suscipit",
                "molestiae",
            },
            LanguageCode: "minus",
            Latlng: &shared.LatLng{
                Latitude: 8121.69,
                Longitude: 5288.95,
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: "excepturi",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "SUNDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 836079,
                                Minutes: 71036,
                                Nanos: 337396,
                                Seconds: 87129,
                            },
                            OpenDay: "FRIDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 20218,
                                Minutes: 368241,
                                Nanos: 832620,
                                Seconds: 957156,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "SATURDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 140350,
                                Minutes: 870013,
                                Nanos: 870088,
                                Seconds: 978619,
                            },
                            OpenDay: "WEDNESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 799159,
                                Minutes: 800911,
                                Nanos: 461479,
                                Seconds: 520478,
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: "porro",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 720633,
                                Minutes: 639921,
                                Nanos: 582020,
                                Seconds: 143353,
                            },
                            OpenDay: "THURSDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 944669,
                                Minutes: 758616,
                                Nanos: 521848,
                                Seconds: 105907,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "WEDNESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 473600,
                                Minutes: 264555,
                                Nanos: 186332,
                                Seconds: 774234,
                            },
                            OpenDay: "FRIDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 456150,
                                Minutes: 216550,
                                Nanos: 568434,
                                Seconds: 135218,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 324141,
                                Minutes: 617636,
                                Nanos: 149675,
                                Seconds: 612096,
                            },
                            OpenDay: "MONDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 616934,
                                Minutes: 386489,
                                Nanos: 943749,
                                Seconds: 902599,
                            },
                        },
                    },
                },
            },
            Name: "fuga",
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: 449950,
                    Month: 359508,
                    Year: 613064,
                },
                Status: "OPEN",
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "quidem",
                    "architecto",
                    "ipsa",
                    "reiciendis",
                },
                PrimaryPhone: "est",
            },
            Profile: &shared.Profile{
                Description: "mollitia",
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: "MONDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 210382,
                            Minutes: 358152,
                            Nanos: 128926,
                            Seconds: 750686,
                        },
                        OpenDay: "TUESDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 607831,
                            Minutes: 363711,
                            Nanos: 325047,
                            Seconds: 570197,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 438601,
                            Minutes: 634274,
                            Nanos: 988374,
                            Seconds: 958950,
                        },
                        OpenDay: "DAY_OF_WEEK_UNSPECIFIED",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 652790,
                            Minutes: 208876,
                            Nanos: 635059,
                            Seconds: 161309,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "SUNDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 653108,
                            Minutes: 581850,
                            Nanos: 253291,
                            Seconds: 414369,
                        },
                        OpenDay: "WEDNESDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 474697,
                            Minutes: 244425,
                            Nanos: 623510,
                            Seconds: 158969,
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: "vitae",
                        RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                    },
                    shared.RelevantLocation{
                        PlaceID: "animi",
                        RelationType: "RELATION_TYPE_UNSPECIFIED",
                    },
                },
                ParentChain: "odit",
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: "quo",
                    RelationType: "RELATION_TYPE_UNSPECIFIED",
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: "CUSTOMER_AND_BUSINESS_LOCATION",
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: "id",
                            PlaceName: "possimus",
                        },
                        shared.PlaceInfo{
                            PlaceID: "aut",
                            PlaceName: "quasi",
                        },
                    },
                },
                RegionCode: "error",
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "laborum",
                        Label: &shared.Label{
                            Description: "quasi",
                            DisplayName: "reiciendis",
                            LanguageCode: "voluptatibus",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "vero",
                        Nanos: 468651,
                        Units: "praesentium",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "voluptatibus",
                        ServiceTypeID: "ipsa",
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "omnis",
                        Label: &shared.Label{
                            Description: "voluptate",
                            DisplayName: "cum",
                            LanguageCode: "perferendis",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "doloremque",
                        Nanos: 441711,
                        Units: "ut",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "maiores",
                        ServiceTypeID: "dicta",
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "corporis",
                        Label: &shared.Label{
                            Description: "dolore",
                            DisplayName: "iusto",
                            LanguageCode: "dicta",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "harum",
                        Nanos: 317983,
                        Units: "accusamus",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "commodi",
                        ServiceTypeID: "repudiandae",
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "quae",
                        Label: &shared.Label{
                            Description: "ipsum",
                            DisplayName: "quidem",
                            LanguageCode: "molestias",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "excepturi",
                        Nanos: 865103,
                        Units: "modi",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "praesentium",
                        ServiceTypeID: "rem",
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 93940,
                            Minutes: 921158,
                            Nanos: 575947,
                            Seconds: 83112,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 929297,
                            Month: 277718,
                            Year: 318569,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 9356,
                            Minutes: 667411,
                            Nanos: 842342,
                            Seconds: 131797,
                        },
                        StartDate: &shared.Date{
                            Day: 647174,
                            Month: 716327,
                            Year: 841386,
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 289406,
                            Minutes: 264730,
                            Nanos: 183191,
                            Seconds: 397821,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 586513,
                            Month: 552822,
                            Year: 20107,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 164940,
                            Minutes: 828940,
                            Nanos: 369808,
                            Seconds: 4695,
                        },
                        StartDate: &shared.Date{
                            Day: 146441,
                            Month: 677817,
                            Year: 569618,
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 270008,
                            Minutes: 703737,
                            Nanos: 735194,
                            Seconds: 288476,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 962189,
                            Month: 433288,
                            Year: 248753,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 756107,
                            Minutes: 576157,
                            Nanos: 396098,
                            Seconds: 592042,
                        },
                        StartDate: &shared.Date{
                            Day: 896039,
                            Month: 572252,
                            Year: 638921,
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 223081,
                            Minutes: 891555,
                            Nanos: 952749,
                            Seconds: 680056,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 447125,
                            Month: 449198,
                            Year: 846409,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 978571,
                            Minutes: 699479,
                            Nanos: 116202,
                            Seconds: 297437,
                        },
                        StartDate: &shared.Date{
                            Day: 767024,
                            Month: 813798,
                            Year: 411820,
                        },
                    },
                },
            },
            StoreCode: "aliquid",
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "accusamus",
                    "non",
                    "occaecati",
                },
                AdministrativeArea: "enim",
                LanguageCode: "accusamus",
                Locality: "delectus",
                Organization: "quidem",
                PostalCode: "76559-2634",
                Recipients: []string{
                    "omnis",
                    "molestiae",
                    "perferendis",
                },
                RegionCode: "nihil",
                Revision: 301575,
                SortingCode: "distinctio",
                Sublocality: "id",
            },
            Title: "Mrs.",
            WebsiteURI: "labore",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.MybusinessbusinessinformationAccountsLocationsCreate(ctx, req)
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
## SDK Available Operations


### Accounts

* `MybusinessbusinessinformationAccountsLocationsCreate` - Creates a new Location that will be owned by the logged in user.
* `MybusinessbusinessinformationAccountsLocationsList` - Lists the locations for the specified account.

### Attributes

* `MybusinessbusinessinformationAttributesList` - Returns the list of attributes that would be available for a location with the given primary category and country.

### Categories

* `MybusinessbusinessinformationCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `MybusinessbusinessinformationCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### Chains

* `MybusinessbusinessinformationChainsSearch` - Searches the chain based on chain name.

### GoogleLocations

* `MybusinessbusinessinformationGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

### Locations

* `MybusinessbusinessinformationLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated` - Gets the Google-updated version of the specified location.
* `MybusinessbusinessinformationLocationsClearLocationAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `MybusinessbusinessinformationLocationsDelete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `MybusinessbusinessinformationLocationsGetAttributes` - Looks up all the attributes set for a given location.
* `MybusinessbusinessinformationLocationsUpdateAttributes` - Update attributes for a given location.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
