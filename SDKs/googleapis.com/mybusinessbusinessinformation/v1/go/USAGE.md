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
            Parent: "unde",
        },
        QueryParams: operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptatem",
            Alt: "media",
            Callback: "non",
            Fields: "quasi",
            Key: "at",
            OauthToken: "suscipit",
            PrettyPrint: false,
            QuotaUser: "corporis",
            RequestID: "minima",
            UploadType: "eum",
            UploadProtocol: "veniam",
            ValidateOnly: true,
        },
        Request: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: "omnis",
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: "distinctio",
                    },
                    shared.CategoryInput{
                        Name: "rerum",
                    },
                    shared.CategoryInput{
                        Name: "quod",
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: "aut",
                },
            },
            Labels: []string{
                "unde",
                "eos",
                "labore",
            },
            LanguageCode: "rem",
            Latlng: &shared.LatLng{
                Latitude: 10.100000,
                Longitude: 80.199997,
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: "ea",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "SATURDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 4293624407014179396,
                                Minutes: 8618311859470989704,
                                Nanos: 2577217011091381517,
                                Seconds: 8408764892721861047,
                            },
                            OpenDay: "THURSDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 6039502786246854343,
                                Minutes: 4005166601202950937,
                                Nanos: 7476400345827996223,
                                Seconds: 4472922932521409352,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "MONDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 856026380890295436,
                                Minutes: 6996167651055798176,
                                Nanos: 1156090135587436031,
                                Seconds: 4418630906646449194,
                            },
                            OpenDay: "SUNDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 8555304527772983074,
                                Minutes: 913067687362198170,
                                Nanos: 8424095809042831566,
                                Seconds: 6521062591232907708,
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: "voluptas",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "TUESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 4506293131118387345,
                                Minutes: 3453645689746721379,
                                Nanos: 4923844940854801599,
                                Seconds: 4986268923856388181,
                            },
                            OpenDay: "SUNDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 9021147083455187159,
                                Minutes: 5692969918342385802,
                                Nanos: 3200989815766506694,
                                Seconds: 2337377473478512183,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 8516192705974510142,
                                Minutes: 1571898979881754695,
                                Nanos: 3513297558746514651,
                                Seconds: 2634587948854693955,
                            },
                            OpenDay: "THURSDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 5222398404867931857,
                                Minutes: 6220737759186385211,
                                Nanos: 2995952183700006524,
                                Seconds: 2139650484966624359,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "WEDNESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 8202934227866469961,
                                Minutes: 766550704165004677,
                                Nanos: 4183550601241738253,
                                Seconds: 7258502981053835557,
                            },
                            OpenDay: "WEDNESDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 6500272087546440290,
                                Minutes: 2090886536117024,
                                Nanos: 8990962201144210255,
                                Seconds: 4131504272941119976,
                            },
                        },
                    },
                },
            },
            Name: "nihil",
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: 5930851159748586667,
                    Month: 7988342029080062854,
                    Year: 7881272142187045715,
                },
                Status: "CLOSED_PERMANENTLY",
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "est",
                    "modi",
                },
                PrimaryPhone: "at",
            },
            Profile: &shared.Profile{
                Description: "corrupti",
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: "TUESDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 2762109391817409535,
                            Minutes: 1575045024179296572,
                            Nanos: 6974673099724536076,
                            Seconds: 873522467434103297,
                        },
                        OpenDay: "SUNDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 2954580168129579985,
                            Minutes: 5899257480099004400,
                            Nanos: 6040027381989169015,
                            Seconds: 2527026283228159424,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "THURSDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 869287011410563977,
                            Minutes: 6884972105889303390,
                            Nanos: 1609201545458999956,
                            Seconds: 5162583618586589132,
                        },
                        OpenDay: "WEDNESDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 4559066787581848330,
                            Minutes: 7178277312729210,
                            Nanos: 3328298241968348528,
                            Seconds: 4263848624484055065,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "TUESDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 8131189729732361887,
                            Minutes: 1759613873322670482,
                            Nanos: 2754990351631687985,
                            Seconds: 5818407123095056469,
                        },
                        OpenDay: "THURSDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 3039653223100995410,
                            Minutes: 5872112625777418562,
                            Nanos: 8664992930516941470,
                            Seconds: 1321763761505389694,
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: "cupiditate",
                        RelationType: "DEPARTMENT_OF",
                    },
                    shared.RelevantLocation{
                        PlaceID: "explicabo",
                        RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                    },
                },
                ParentChain: "corporis",
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: "cumque",
                    RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: "CUSTOMER_AND_BUSINESS_LOCATION",
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: "et",
                            PlaceName: "voluptatum",
                        },
                        shared.PlaceInfo{
                            PlaceID: "exercitationem",
                            PlaceName: "inventore",
                        },
                    },
                },
                RegionCode: "dolores",
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "inventore",
                        Label: &shared.Label{
                            Description: "et",
                            DisplayName: "ipsum",
                            LanguageCode: "consequatur",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "ut",
                        Nanos: 3455115243747883727,
                        Units: "repellat",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "odio",
                        ServiceTypeID: "et",
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 7647609532855137878,
                            Minutes: 3054520383972741130,
                            Nanos: 6923868840268317341,
                            Seconds: 3724697606965346803,
                        },
                        Closed: false,
                        EndDate: &shared.Date{
                            Day: 2124946868670971999,
                            Month: 2024144337430199439,
                            Year: 3949419708592426033,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 6806371935748508301,
                            Minutes: 3944092093948773347,
                            Nanos: 5363860680367506524,
                            Seconds: 8947363127042062471,
                        },
                        StartDate: &shared.Date{
                            Day: 1029000880696260174,
                            Month: 6864639428555912078,
                            Year: 7421713807782676930,
                        },
                    },
                },
            },
            StoreCode: "fugiat",
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "quia",
                    "rerum",
                },
                AdministrativeArea: "assumenda",
                LanguageCode: "ut",
                Locality: "ea",
                Organization: "distinctio",
                PostalCode: "fugiat",
                Recipients: []string{
                    "est",
                    "aut",
                },
                RegionCode: "eos",
                Revision: 4925408277221349020,
                SortingCode: "quisquam",
                Sublocality: "placeat",
            },
            Title: "et",
            WebsiteURI: "reiciendis",
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