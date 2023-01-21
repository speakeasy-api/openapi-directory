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
            Parent: "sit",
        },
        QueryParams: operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            RequestID: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
            ValidateOnly: true,
        },
        Request: &shared.LocationInput{
            AdWordsLocationExtensions: &shared.AdWordsLocationExtensions{
                AdPhone: "voluptatum",
            },
            Categories: &shared.CategoriesInput{
                AdditionalCategories: []shared.CategoryInput{
                    shared.CategoryInput{
                        Name: "ut",
                    },
                },
                PrimaryCategory: &shared.CategoryInput{
                    Name: "dolorem",
                },
            },
            Labels: []string{
                "voluptate",
                "iste",
            },
            LanguageCode: "vitae",
            Latlng: &shared.LatLng{
                Latitude: 66.099998,
                Longitude: 1.100000,
            },
            MoreHours: []shared.MoreHours{
                shared.MoreHours{
                    HoursTypeID: "odio",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "THURSDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 959367522974354090,
                                Minutes: 2914295034816259174,
                                Nanos: 1395437218309923052,
                                Seconds: 6745438398739480977,
                            },
                            OpenDay: "SATURDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 3398579248012586914,
                                Minutes: 5974317550424871033,
                                Nanos: 3317123977833389635,
                                Seconds: 5001958211167890979,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "TUESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 4778690082005258714,
                                Minutes: 1059542851699319360,
                                Nanos: 6972732843819909978,
                                Seconds: 5558237345453186302,
                            },
                            OpenDay: "SUNDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 771642788862502430,
                                Minutes: 8514850266767180993,
                                Nanos: 8683452355129068124,
                                Seconds: 4345851588384648695,
                            },
                        },
                    },
                },
                shared.MoreHours{
                    HoursTypeID: "qui",
                    Periods: []shared.TimePeriod{
                        shared.TimePeriod{
                            CloseDay: "DAY_OF_WEEK_UNSPECIFIED",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 3959279844101328186,
                                Minutes: 8902041070398994519,
                                Nanos: 303089054982227392,
                                Seconds: 7338728586234333996,
                            },
                            OpenDay: "MONDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 7847956203786849690,
                                Minutes: 406703151708498928,
                                Nanos: 4756106358532488297,
                                Seconds: 5837486892148644279,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "WEDNESDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 2264299874001785192,
                                Minutes: 1061380815263676471,
                                Nanos: 7242748068272024738,
                                Seconds: 7719717197379695442,
                            },
                            OpenDay: "SUNDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 2671030200101705776,
                                Minutes: 3508963237347473586,
                                Nanos: 8565714761387219319,
                                Seconds: 4564823113789767141,
                            },
                        },
                        shared.TimePeriod{
                            CloseDay: "SATURDAY",
                            CloseTime: &shared.TimeOfDay{
                                Hours: 7014402135919778893,
                                Minutes: 3983722386484812742,
                                Nanos: 2118716725206170867,
                                Seconds: 2587000937929698613,
                            },
                            OpenDay: "MONDAY",
                            OpenTime: &shared.TimeOfDay{
                                Hours: 1938800996802160635,
                                Minutes: 8097022081922209513,
                                Nanos: 7481608503761597087,
                                Seconds: 6056649900269286653,
                            },
                        },
                    },
                },
            },
            Name: "qui",
            OpenInfo: &shared.OpenInfoInput{
                OpeningDate: &shared.Date{
                    Day: 4308690457412179793,
                    Month: 7663837986485606015,
                    Year: 7132033595893905170,
                },
                Status: "OPEN",
            },
            PhoneNumbers: &shared.PhoneNumbers{
                AdditionalPhones: []string{
                    "itaque",
                    "ab",
                    "neque",
                },
                PrimaryPhone: "ullam",
            },
            Profile: &shared.Profile{
                Description: "et",
            },
            RegularHours: &shared.BusinessHours{
                Periods: []shared.TimePeriod{
                    shared.TimePeriod{
                        CloseDay: "THURSDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 5902760509050140210,
                            Minutes: 9021104375654741729,
                            Nanos: 3604381780091280195,
                            Seconds: 2066195468801476818,
                        },
                        OpenDay: "TUESDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 759605945513541974,
                            Minutes: 2408550365227740434,
                            Nanos: 5521202747878656476,
                            Seconds: 5596430475431407243,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "FRIDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 8482125374365136680,
                            Minutes: 7862762095958642309,
                            Nanos: 4391202566038595699,
                            Seconds: 6215632031706852400,
                        },
                        OpenDay: "TUESDAY",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 7442289190031176026,
                            Minutes: 5364953311572054685,
                            Nanos: 7945398411639602224,
                            Seconds: 1925401661646756611,
                        },
                    },
                    shared.TimePeriod{
                        CloseDay: "SUNDAY",
                        CloseTime: &shared.TimeOfDay{
                            Hours: 4989862523986425397,
                            Minutes: 2803285039048912676,
                            Nanos: 950400323440343118,
                            Seconds: 6430969915190400444,
                        },
                        OpenDay: "DAY_OF_WEEK_UNSPECIFIED",
                        OpenTime: &shared.TimeOfDay{
                            Hours: 6604365855503062775,
                            Minutes: 1836598054518427835,
                            Nanos: 7540276489530073149,
                            Seconds: 7638413271565042464,
                        },
                    },
                },
            },
            RelationshipData: &shared.RelationshipData{
                ChildrenLocations: []shared.RelevantLocation{
                    shared.RelevantLocation{
                        PlaceID: "laudantium",
                        RelationType: "RELATION_TYPE_UNSPECIFIED",
                    },
                    shared.RelevantLocation{
                        PlaceID: "ipsa",
                        RelationType: "DEPARTMENT_OF",
                    },
                    shared.RelevantLocation{
                        PlaceID: "doloremque",
                        RelationType: "DEPARTMENT_OF",
                    },
                },
                ParentChain: "atque",
                ParentLocation: &shared.RelevantLocation{
                    PlaceID: "ratione",
                    RelationType: "INDEPENDENT_ESTABLISHMENT_IN",
                },
            },
            ServiceArea: &shared.ServiceAreaBusiness{
                BusinessType: "CUSTOMER_AND_BUSINESS_LOCATION",
                Places: &shared.Places{
                    PlaceInfos: []shared.PlaceInfo{
                        shared.PlaceInfo{
                            PlaceID: "maxime",
                            PlaceName: "eum",
                        },
                    },
                },
                RegionCode: "perferendis",
            },
            ServiceItems: []shared.ServiceItem{
                shared.ServiceItem{
                    FreeFormServiceItem: &shared.FreeFormServiceItem{
                        Category: "rerum",
                        Label: &shared.Label{
                            Description: "reiciendis",
                            DisplayName: "quis",
                            LanguageCode: "cumque",
                        },
                    },
                    Price: &shared.Money{
                        CurrencyCode: "minima",
                        Nanos: 2333048574390956331,
                        Units: "est",
                    },
                    StructuredServiceItem: &shared.StructuredServiceItem{
                        Description: "quis",
                        ServiceTypeID: "eum",
                    },
                },
            },
            SpecialHours: &shared.SpecialHours{
                SpecialHourPeriods: []shared.SpecialHourPeriod{
                    shared.SpecialHourPeriod{
                        CloseTime: &shared.TimeOfDay{
                            Hours: 544981646038740619,
                            Minutes: 4814861198247358488,
                            Nanos: 4975249678507640420,
                            Seconds: 8953538234431013647,
                        },
                        Closed: true,
                        EndDate: &shared.Date{
                            Day: 5310832663795041070,
                            Month: 1363585710475529225,
                            Year: 8279128640960530079,
                        },
                        OpenTime: &shared.TimeOfDay{
                            Hours: 1011676084465510524,
                            Minutes: 8764227983217623240,
                            Nanos: 4745905187492708501,
                            Seconds: 7941830299651147569,
                        },
                        StartDate: &shared.Date{
                            Day: 157519078836327761,
                            Month: 2867593906384393455,
                            Year: 7506934391669544280,
                        },
                    },
                },
            },
            StoreCode: "vel",
            StorefrontAddress: &shared.PostalAddress{
                AddressLines: []string{
                    "placeat",
                    "qui",
                },
                AdministrativeArea: "nisi",
                LanguageCode: "quis",
                Locality: "adipisci",
                Organization: "porro",
                PostalCode: "rerum",
                Recipients: []string{
                    "accusamus",
                },
                RegionCode: "numquam",
                Revision: 2223751782546645906,
                SortingCode: "rerum",
                Sublocality: "ut",
            },
            Title: "laborum",
            WebsiteURI: "fugit",
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