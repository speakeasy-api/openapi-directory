# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.MybusinessbusinessinformationAccountsLocationsCreateRequest{
        PathParams: operations.MybusinessbusinessinformationAccountsLocationsCreatePathParams{
            Parent: "temporibus",
        },
        QueryParams: operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "harum",
            Alt: "media",
            Callback: "fugit",
            Fields: "a",
            Key: "amet",
            OauthToken: "quibusdam",
            PrettyPrint: false,
            QuotaUser: "quos",
            RequestID: "omnis",
            UploadType: "est",
            UploadProtocol: "id",
            ValidateOnly: true,
        },
        Request: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: "illum",
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: "optio",
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: "quisquam",
                },
            },
            Labels: []string{
                "et",
                "hic",
            },
            LanguageCode: "assumenda",
            Latlng: &shared.LatLng{
                Latitude: 54.099998,
                Longitude: 34.200001,
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: "recusandae",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 2537770117610432193,
                                Minutes: 1912920672296459305,
                                Nanos: 6770456412245770345,
                                Seconds: 6655009388421852526,
                            },
                            OpenDay: "THURSDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 2906124279796139485,
                                Minutes: 1460108050017592436,
                                Nanos: 4496514852982219161,
                                Seconds: 7830275496070812867,
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: "laborum",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "MONDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 140129618390307362,
                                Minutes: 6481932307260638572,
                                Nanos: 8624434911982963503,
                                Seconds: 5301084492258222799,
                            },
                            OpenDay: "TUESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 3643434216752886557,
                                Minutes: 1526691750871500017,
                                Nanos: 615599060894877633,
                                Seconds: 5742336221095795413,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "SUNDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 6635443539021804830,
                                Minutes: 8774311263671957765,
                                Nanos: 1940018004485532256,
                                Seconds: 350120187217077839,
                            },
                            OpenDay: "DAY_OF_WEEK_UNSPECIFIED",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 4167141316852830752,
                                Minutes: 4909115012644506722,
                                Nanos: 6927570835766857202,
                                Seconds: 5422274956964018399,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "TUESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 2269806733975515318,
                                Minutes: 770437130682450053,
                                Nanos: 7979467384428972949,
                                Seconds: 5700002135054739387,
                            },
                            OpenDay: "MONDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 1001415491032606581,
                                Minutes: 7064411216880932946,
                                Nanos: 3383795025353746966,
                                Seconds: 1164991827637001981,
                            },
                        },
                    },
                },
            },
            Name: "maiores",
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: 749565612414263141,
                    Month: 3009604560745221670,
                    Year: 6733321884604198461,
                },
                Status: "OPEN",
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "nesciunt",
                    "libero",
                    "sint",
                },
                PrimaryPhone: "architecto",
            },
            Profile: &shared.Profile{
                Description: "facere",
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: "FRIDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 801919713860541343,
                            Minutes: 8091713230454783072,
                            Nanos: 9104200779147671369,
                            Seconds: 1363238256696863377,
                        },
                        OpenDay: "DAY_OF_WEEK_UNSPECIFIED",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 3259495980163297170,
                            Minutes: 2296654132039688578,
                            Nanos: 5771819234161692898,
                            Seconds: 9092355897977314672,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 9171820464672257984,
                            Minutes: 994269214858439577,
                            Nanos: 8849097352879285740,
                            Seconds: 5291340909935044473,
                        },
                        OpenDay: "THURSDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 5619863262170207724,
                            Minutes: 6639726309396845330,
                            Nanos: 1219392515936132656,
                            Seconds: 3350873722599631527,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "FRIDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 1138555545343431620,
                            Minutes: 3648632884966860357,
                            Nanos: 8585313129564246062,
                            Seconds: 7364810765125760782,
                        },
                        OpenDay: "WEDNESDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 3095140000035118340,
                            Minutes: 5216580997470616401,
                            Nanos: 7767047723797557038,
                            Seconds: 3363709501079387354,
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: "voluptatem",
                        RelationType: "RELATION_TYPE_UNSPECIFIED",
                    },
                    shared.RelevantLocation{
                        PlaceID: "itaque",
                        RelationType: "RELATION_TYPE_UNSPECIFIED",
                    },
                },
                ParentChain: "quo",
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: "doloribus",
                    RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: "CUSTOMER_LOCATION_ONLY",
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: "dolor",
                            PlaceName: "quidem",
                        },
                        shared.PlaceInfo{
                            PlaceID: "aut",
                            PlaceName: "possimus",
                        },
                        shared.PlaceInfo{
                            PlaceID: "quam",
                            PlaceName: "harum",
                        },
                    },
                },
                RegionCode: "nam",
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "deserunt",
                        Label: &shared.Label{
                            Description: "repellendus",
                            DisplayName: "voluptatem",
                            LanguageCode: "reiciendis",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "maxime",
                        Nanos: 2769094337139705554,
                        Units: "iusto",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "numquam",
                        ServiceTypeID: "tempore",
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 7497738140442995187,
                            Minutes: 185060451020074194,
                            Nanos: 5428158002401732905,
                            Seconds: 8984962643975718305,
                        },
                        Closed: true,
                        EndDate: &shared.Date{
                            Day: 6801276904129870564,
                            Month: 3310938803414307472,
                            Year: 1257723659178083677,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 6424616684946641422,
                            Minutes: 3416011805705925653,
                            Nanos: 516569779453296898,
                            Seconds: 2656648535299900283,
                        },
                        StartDate: &shared.Date{
                            Day: 7507090394446079719,
                            Month: 677422378990051746,
                            Year: 6447346903261011331,
                        },
                    },
                },
            },
            StoreCode: "vel",
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "molestiae",
                    "est",
                    "non",
                },
                AdministrativeArea: "deleniti",
                LanguageCode: "expedita",
                Locality: "aspernatur",
                Organization: "dolor",
                PostalCode: "quis",
                Recipients: []string{
                    "corrupti",
                    "ut",
                },
                RegionCode: "ullam",
                Revision: 8461969961211307587,
                SortingCode: "voluptatibus",
                Sublocality: "minima",
            },
            Title: "eum",
            WebsiteURI: "praesentium",
        },
    }
    
    res, err := s.Accounts.MybusinessbusinessinformationAccountsLocationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `MybusinessbusinessinformationAccountsLocationsCreate` - Creates a new Location that will be owned by the logged in user.
* `MybusinessbusinessinformationAccountsLocationsList` - Lists the locations for the specified account.

### attributes

* `MybusinessbusinessinformationAttributesList` - Returns the list of attributes that would be available for a location with the given primary category and country.

### categories

* `MybusinessbusinessinformationCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `MybusinessbusinessinformationCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `MybusinessbusinessinformationChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `MybusinessbusinessinformationGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

### locations

* `MybusinessbusinessinformationLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `MybusinessbusinessinformationLocationsAttributesGetGoogleUpdated` - Gets the Google-updated version of the specified location.
* `MybusinessbusinessinformationLocationsClearLocationAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `MybusinessbusinessinformationLocationsDelete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `MybusinessbusinessinformationLocationsGetAttributes` - Looks up all the attributes set for a given location.
* `MybusinessbusinessinformationLocationsUpdateAttributes` - Update attributes for a given location.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
