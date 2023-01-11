<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            MybusinessbusinessinformationAccountsLocationsCreateRequest req = new MybusinessbusinessinformationAccountsLocationsCreateRequest() {{
                pathParams = new MybusinessbusinessinformationAccountsLocationsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new MybusinessbusinessinformationAccountsLocationsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    requestId = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                    validateOnly = true;
                }};
                request = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "voluptatum";
                    }};
                    categories = new CategoriesInput() {{
                        additionalCategories = new openapisdk.models.shared.CategoryInput[]() {{
                            add(new CategoryInput() {{
                                name = "ut";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            name = "dolorem";
                        }};
                    }};
                    labels = new String[]() {{
                        add("voluptate"),
                        add("iste"),
                    }};
                    languageCode = "vitae";
                    latlng = new LatLng() {{
                        latitude = 66.099998;
                        longitude = 1.100000;
                    }};
                    moreHours = new openapisdk.models.shared.MoreHours[]() {{
                        add(new MoreHours() {{
                            hoursTypeId = "odio";
                            periods = new openapisdk.models.shared.TimePeriod[]() {{
                                add(new TimePeriod() {{
                                    closeDay = "THURSDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 959367522974354090;
                                        minutes = 2914295034816259174;
                                        nanos = 1395437218309923052;
                                        seconds = 6745438398739480977;
                                    }};
                                    openDay = "SATURDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 3398579248012586914;
                                        minutes = 5974317550424871033;
                                        nanos = 3317123977833389635;
                                        seconds = 5001958211167890979;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "TUESDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 4778690082005258714;
                                        minutes = 1059542851699319360;
                                        nanos = 6972732843819909978;
                                        seconds = 5558237345453186302;
                                    }};
                                    openDay = "SUNDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 771642788862502430;
                                        minutes = 8514850266767180993;
                                        nanos = 8683452355129068124;
                                        seconds = 4345851588384648695;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "qui";
                            periods = new openapisdk.models.shared.TimePeriod[]() {{
                                add(new TimePeriod() {{
                                    closeDay = "DAY_OF_WEEK_UNSPECIFIED";
                                    closeTime = new TimeOfDay() {{
                                        hours = 3959279844101328186;
                                        minutes = 8902041070398994519;
                                        nanos = 303089054982227392;
                                        seconds = 7338728586234333996;
                                    }};
                                    openDay = "MONDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 7847956203786849690;
                                        minutes = 406703151708498928;
                                        nanos = 4756106358532488297;
                                        seconds = 5837486892148644279;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "WEDNESDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 2264299874001785192;
                                        minutes = 1061380815263676471;
                                        nanos = 7242748068272024738;
                                        seconds = 7719717197379695442;
                                    }};
                                    openDay = "SUNDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 2671030200101705776;
                                        minutes = 3508963237347473586;
                                        nanos = 8565714761387219319;
                                        seconds = 4564823113789767141;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "SATURDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 7014402135919778893;
                                        minutes = 3983722386484812742;
                                        nanos = 2118716725206170867;
                                        seconds = 2587000937929698613;
                                    }};
                                    openDay = "MONDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 1938800996802160635;
                                        minutes = 8097022081922209513;
                                        nanos = 7481608503761597087;
                                        seconds = 6056649900269286653;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    name = "qui";
                    openInfo = new OpenInfoInput() {{
                        openingDate = new Date() {{
                            day = 4308690457412179793;
                            month = 7663837986485606015;
                            year = 7132033595893905170;
                        }};
                        status = "OPEN";
                    }};
                    phoneNumbers = new PhoneNumbers() {{
                        additionalPhones = new String[]() {{
                            add("itaque"),
                            add("ab"),
                            add("neque"),
                        }};
                        primaryPhone = "ullam";
                    }};
                    profile = new Profile() {{
                        description = "et";
                    }};
                    regularHours = new BusinessHours() {{
                        periods = new openapisdk.models.shared.TimePeriod[]() {{
                            add(new TimePeriod() {{
                                closeDay = "THURSDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 5902760509050140210;
                                    minutes = 9021104375654741729;
                                    nanos = 3604381780091280195;
                                    seconds = 2066195468801476818;
                                }};
                                openDay = "TUESDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 759605945513541974;
                                    minutes = 2408550365227740434;
                                    nanos = 5521202747878656476;
                                    seconds = 5596430475431407243;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "FRIDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 8482125374365136680;
                                    minutes = 7862762095958642309;
                                    nanos = 4391202566038595699;
                                    seconds = 6215632031706852400;
                                }};
                                openDay = "TUESDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 7442289190031176026;
                                    minutes = 5364953311572054685;
                                    nanos = 7945398411639602224;
                                    seconds = 1925401661646756611;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "SUNDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 4989862523986425397;
                                    minutes = 2803285039048912676;
                                    nanos = 950400323440343118;
                                    seconds = 6430969915190400444;
                                }};
                                openDay = "DAY_OF_WEEK_UNSPECIFIED";
                                openTime = new TimeOfDay() {{
                                    hours = 6604365855503062775;
                                    minutes = 1836598054518427835;
                                    nanos = 7540276489530073149;
                                    seconds = 7638413271565042464;
                                }};
                            }}),
                        }};
                    }};
                    relationshipData = new RelationshipData() {{
                        childrenLocations = new openapisdk.models.shared.RelevantLocation[]() {{
                            add(new RelevantLocation() {{
                                placeId = "laudantium";
                                relationType = "RELATION_TYPE_UNSPECIFIED";
                            }}),
                            add(new RelevantLocation() {{
                                placeId = "ipsa";
                                relationType = "DEPARTMENT_OF";
                            }}),
                            add(new RelevantLocation() {{
                                placeId = "doloremque";
                                relationType = "DEPARTMENT_OF";
                            }}),
                        }};
                        parentChain = "atque";
                        parentLocation = new RelevantLocation() {{
                            placeId = "ratione";
                            relationType = "INDEPENDENT_ESTABLISHMENT_IN";
                        }};
                    }};
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = "CUSTOMER_AND_BUSINESS_LOCATION";
                        places = new Places() {{
                            placeInfos = new openapisdk.models.shared.PlaceInfo[]() {{
                                add(new PlaceInfo() {{
                                    placeId = "maxime";
                                    placeName = "eum";
                                }}),
                            }};
                        }};
                        regionCode = "perferendis";
                    }};
                    serviceItems = new openapisdk.models.shared.ServiceItem[]() {{
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "rerum";
                                label = new Label() {{
                                    description = "reiciendis";
                                    displayName = "quis";
                                    languageCode = "cumque";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "minima";
                                nanos = 2333048574390956331;
                                units = "est";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "quis";
                                serviceTypeId = "eum";
                            }};
                        }}),
                    }};
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new openapisdk.models.shared.SpecialHourPeriod[]() {{
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 544981646038740619;
                                    minutes = 4814861198247358488;
                                    nanos = 4975249678507640420;
                                    seconds = 8953538234431013647;
                                }};
                                closed = true;
                                endDate = new Date() {{
                                    day = 5310832663795041070;
                                    month = 1363585710475529225;
                                    year = 8279128640960530079;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 1011676084465510524;
                                    minutes = 8764227983217623240;
                                    nanos = 4745905187492708501;
                                    seconds = 7941830299651147569;
                                }};
                                startDate = new Date() {{
                                    day = 157519078836327761;
                                    month = 2867593906384393455;
                                    year = 7506934391669544280;
                                }};
                            }}),
                        }};
                    }};
                    storeCode = "vel";
                    storefrontAddress = new PostalAddress() {{
                        addressLines = new String[]() {{
                            add("placeat"),
                            add("qui"),
                        }};
                        administrativeArea = "nisi";
                        languageCode = "quis";
                        locality = "adipisci";
                        organization = "porro";
                        postalCode = "rerum";
                        recipients = new String[]() {{
                            add("accusamus"),
                        }};
                        regionCode = "numquam";
                        revision = 2223751782546645906;
                        sortingCode = "rerum";
                        sublocality = "ut";
                    }};
                    title = "laborum";
                    websiteUri = "fugit";
                }};
            }};

            MybusinessbusinessinformationAccountsLocationsCreateResponse res = sdk.accounts.mybusinessbusinessinformationAccountsLocationsCreate(req);

            if (res.location.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->