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
        DollarXgafv: "2",
        LocationInput: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: "provident",
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: "quibusdam",
                    },
                    shared.CategoryInput{
                        Name: "unde",
                    },
                    shared.CategoryInput{
                        Name: "nulla",
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: "corrupti",
                },
            },
            Labels: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            LanguageCode: "iure",
            Latlng: &shared.LatLng{
                Latitude: 2975.34,
                Longitude: 8917.73,
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: "delectus",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "WEDNESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 477665,
                                Minutes: 791725,
                                Nanos: 812169,
                                Seconds: 528895,
                            },
                            OpenDay: "WEDNESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 568045,
                                Minutes: 392785,
                                Nanos: 925597,
                                Seconds: 836079,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 337396,
                                Minutes: 87129,
                                Nanos: 648172,
                                Seconds: 20218,
                            },
                            OpenDay: "TUESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 832620,
                                Minutes: 957156,
                                Nanos: 778157,
                                Seconds: 140350,
                            },
                        },
                    },
                },
            },
            Name: "at",
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: 870088,
                    Month: 978619,
                    Year: 473608,
                },
                Status: "CLOSED_TEMPORARILY",
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "esse",
                    "totam",
                    "porro",
                    "dolorum",
                },
                PrimaryPhone: "dicta",
            },
            Profile: &shared.Profile{
                Description: "nam",
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: "THURSDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 143353,
                            Minutes: 537373,
                            Nanos: 944669,
                            Seconds: 758616,
                        },
                        OpenDay: "THURSDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 105907,
                            Minutes: 414662,
                            Nanos: 473600,
                            Seconds: 264555,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "MONDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 774234,
                            Minutes: 736918,
                            Nanos: 456150,
                            Seconds: 216550,
                        },
                        OpenDay: "THURSDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 135218,
                            Minutes: 18789,
                            Nanos: 324141,
                            Seconds: 617636,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "MONDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 612096,
                            Minutes: 222321,
                            Nanos: 616934,
                            Seconds: 386489,
                        },
                        OpenDay: "SUNDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 902599,
                            Minutes: 681820,
                            Nanos: 449950,
                            Seconds: 359508,
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: "iure",
                        RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                    },
                    shared.RelevantLocation{
                        PlaceID: "quidem",
                        RelationType: "RELATION_TYPE_UNSPECIFIED",
                    },
                    shared.RelevantLocation{
                        PlaceID: "ipsa",
                        RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                    },
                },
                ParentChain: "est",
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: "mollitia",
                    RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: "BUSINESS_TYPE_UNSPECIFIED",
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: "corporis",
                            PlaceName: "explicabo",
                        },
                    },
                },
                RegionCode: "nobis",
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "omnis",
                        Label: &shared.Label{
                            Description: "nemo",
                            DisplayName: "minima",
                            LanguageCode: "excepturi",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "accusantium",
                        Nanos: 438601,
                        Units: "culpa",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "doloribus",
                        ServiceTypeID: "sapiente",
                    },
                },
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "architecto",
                        Label: &shared.Label{
                            Description: "mollitia",
                            DisplayName: "dolorem",
                            LanguageCode: "culpa",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "consequuntur",
                        Nanos: 995300,
                        Units: "mollitia",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "occaecati",
                        ServiceTypeID: "numquam",
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 466311,
                            Minutes: 474697,
                            Nanos: 244425,
                            Seconds: 623510,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 158969,
                            Month: 338007,
                            Year: 110375,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 674752,
                            Minutes: 656330,
                            Nanos: 317202,
                            Seconds: 138183,
                        },
                        StartDate: &shared.Date{
                            Day: 778346,
                            Month: 196582,
                            Year: 949572,
                        },
                    },
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 368725,
                            Minutes: 662527,
                            Nanos: 820994,
                            Seconds: 13571,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 97101,
                            Month: 622846,
                            Year: 837945,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 673660,
                            Minutes: 96098,
                            Nanos: 971945,
                            Seconds: 976460,
                        },
                        StartDate: &shared.Date{
                            Day: 878194,
                            Month: 468651,
                            Year: 509624,
                        },
                    },
                },
            },
            StoreCode: "voluptatibus",
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "omnis",
                },
                AdministrativeArea: "voluptate",
                LanguageCode: "cum",
                Locality: "perferendis",
                Organization: "doloremque",
                PostalCode: "29132",
                Recipients: []string{
                    "dicta",
                    "harum",
                },
                RegionCode: "enim",
                Revision: 880476,
                SortingCode: "commodi",
                Sublocality: "repudiandae",
            },
            Title: "Mr.",
            WebsiteURI: "ipsum",
        },
        AccessToken: "quidem",
        Alt: "media",
        Callback: "excepturi",
        Fields: "pariatur",
        Key: "modi",
        OauthToken: "praesentium",
        Parent: "rem",
        PrettyPrint: false,
        QuotaUser: "voluptates",
        RequestID: "quasi",
        UploadType: "repudiandae",
        UploadProtocol: "sint",
        ValidateOnly: false,
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
## Available Resources and Operations


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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
