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
                    parent = "esse";
                }};
                queryParams = new MybusinessbusinessinformationAccountsLocationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "hic";
                    alt = "json";
                    callback = "omnis";
                    fields = "enim";
                    key = "quisquam";
                    oauthToken = "incidunt";
                    prettyPrint = true;
                    quotaUser = "architecto";
                    requestId = "et";
                    uploadType = "ut";
                    uploadProtocol = "ducimus";
                    validateOnly = true;
                }};
                request = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "sit";
                    }};
                    categories = new CategoriesInput() {{
                        additionalCategories = new openapisdk.models.shared.CategoryInput[]() {{
                            add(new CategoryInput() {{
                                name = "ipsum";
                            }}),
                            add(new CategoryInput() {{
                                name = "voluptas";
                            }}),
                            add(new CategoryInput() {{
                                name = "aut";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            name = "praesentium";
                        }};
                    }};
                    labels = new String[]() {{
                        add("consequatur"),
                        add("repudiandae"),
                        add("ad"),
                    }};
                    languageCode = "autem";
                    latlng = new LatLng() {{
                        latitude = 74.099998;
                        longitude = 25.200001;
                    }};
                    moreHours = new openapisdk.models.shared.MoreHours[]() {{
                        add(new MoreHours() {{
                            hoursTypeId = "eos";
                            periods = new openapisdk.models.shared.TimePeriod[]() {{
                                add(new TimePeriod() {{
                                    closeDay = "SUNDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 8956812255000501790;
                                        minutes = 6594448416862872051;
                                        nanos = 2365427177157407913;
                                        seconds = 6496756602967468201;
                                    }};
                                    openDay = "WEDNESDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 5544279529081547922;
                                        minutes = 5636188084729962625;
                                        nanos = 267522429736370275;
                                        seconds = 7971758997962231191;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "MONDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 5600693175631115631;
                                        minutes = 5201825097848090873;
                                        nanos = 7936060753552099991;
                                        seconds = 2568002514708336802;
                                    }};
                                    openDay = "DAY_OF_WEEK_UNSPECIFIED";
                                    openTime = new TimeOfDay() {{
                                        hours = 1670522014353144846;
                                        minutes = 3657746545751231535;
                                        nanos = 2237308781106406462;
                                        seconds = 918104054562347582;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "DAY_OF_WEEK_UNSPECIFIED";
                                    closeTime = new TimeOfDay() {{
                                        hours = 2849909889144657895;
                                        minutes = 2290594206881691377;
                                        nanos = 5091790338961770301;
                                        seconds = 7624367679864463878;
                                    }};
                                    openDay = "FRIDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 8822210019666594793;
                                        minutes = 499226085082128053;
                                        nanos = 4316907716025790453;
                                        seconds = 1529228953833439917;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "doloribus";
                            periods = new openapisdk.models.shared.TimePeriod[]() {{
                                add(new TimePeriod() {{
                                    closeDay = "SATURDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 2236616055062591592;
                                        minutes = 4777951740119887386;
                                        nanos = 2479624476467036760;
                                        seconds = 411148928113157129;
                                    }};
                                    openDay = "TUESDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 6433124387408892737;
                                        minutes = 4490375488917455613;
                                        nanos = 8225139419763530723;
                                        seconds = 816178461338084396;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "FRIDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 219362647248610947;
                                        minutes = 5241321804756924741;
                                        nanos = 6061022360120023196;
                                        seconds = 5117334917440830456;
                                    }};
                                    openDay = "THURSDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 5255732658552191451;
                                        minutes = 613170746652806269;
                                        nanos = 7787661256457744821;
                                        seconds = 4487701909492494552;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "SUNDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 3136716343423206627;
                                        minutes = 4144700148820223787;
                                        nanos = 5433344406284268436;
                                        seconds = 3852770570426943190;
                                    }};
                                    openDay = "SUNDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 5738688387912234337;
                                        minutes = 2864442702628456687;
                                        nanos = 2957714213033577844;
                                        seconds = 6516087261759926348;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    name = "eius";
                    openInfo = new OpenInfoInput() {{
                        openingDate = new Date() {{
                            day = 8048538296615267604;
                            month = 2465165877059700210;
                            year = 1048284054623033027;
                        }};
                        status = "OPEN_FOR_BUSINESS_UNSPECIFIED";
                    }};
                    phoneNumbers = new PhoneNumbers() {{
                        additionalPhones = new String[]() {{
                            add("ratione"),
                            add("eveniet"),
                            add("maiores"),
                        }};
                        primaryPhone = "quisquam";
                    }};
                    profile = new Profile() {{
                        description = "mollitia";
                    }};
                    regularHours = new BusinessHours() {{
                        periods = new openapisdk.models.shared.TimePeriod[]() {{
                            add(new TimePeriod() {{
                                closeDay = "WEDNESDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 8235397403417960373;
                                    minutes = 6636521727785823267;
                                    nanos = 3525647410743710159;
                                    seconds = 3994284371791525585;
                                }};
                                openDay = "FRIDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 3000267451972927124;
                                    minutes = 4232892324359657764;
                                    nanos = 3580329177564402885;
                                    seconds = 239753116615157220;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "THURSDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 8293663672161381586;
                                    minutes = 3393773183587364634;
                                    nanos = 7310606577049726603;
                                    seconds = 3257104386742137709;
                                }};
                                openDay = "MONDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 2664658111759513944;
                                    minutes = 8079238391444676960;
                                    nanos = 6730614508163407646;
                                    seconds = 2932172921074959144;
                                }};
                            }}),
                        }};
                    }};
                    relationshipData = new RelationshipData() {{
                        childrenLocations = new openapisdk.models.shared.RelevantLocation[]() {{
                            add(new RelevantLocation() {{
                                placeId = "molestiae";
                                relationType = "INDEPENDENT_ESTABLISHMENT_IN";
                            }}),
                        }};
                        parentChain = "aut";
                        parentLocation = new RelevantLocation() {{
                            placeId = "quis";
                            relationType = "DEPARTMENT_OF";
                        }};
                    }};
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = "CUSTOMER_LOCATION_ONLY";
                        places = new Places() {{
                            placeInfos = new openapisdk.models.shared.PlaceInfo[]() {{
                                add(new PlaceInfo() {{
                                    placeId = "autem";
                                    placeName = "culpa";
                                }}),
                                add(new PlaceInfo() {{
                                    placeId = "porro";
                                    placeName = "repellendus";
                                }}),
                            }};
                        }};
                        regionCode = "voluptatem";
                    }};
                    serviceItems = new openapisdk.models.shared.ServiceItem[]() {{
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "sapiente";
                                label = new Label() {{
                                    description = "deserunt";
                                    displayName = "aut";
                                    languageCode = "fuga";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "eos";
                                nanos = 9186086913458974902;
                                units = "voluptas";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "nisi";
                                serviceTypeId = "quibusdam";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "est";
                                label = new Label() {{
                                    description = "dolorum";
                                    displayName = "ea";
                                    languageCode = "molestias";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "omnis";
                                nanos = 7083658243271105555;
                                units = "ex";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "animi";
                                serviceTypeId = "minima";
                            }};
                        }}),
                    }};
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new openapisdk.models.shared.SpecialHourPeriod[]() {{
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 4899733971554601410;
                                    minutes = 581537093952181571;
                                    nanos = 1083655671280517242;
                                    seconds = 2141408137181002946;
                                }};
                                closed = true;
                                endDate = new Date() {{
                                    day = 777143119742742865;
                                    month = 206888289568120129;
                                    year = 6565456183353776089;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 8624369828782510488;
                                    minutes = 3660753741178873120;
                                    nanos = 1736647862132649693;
                                    seconds = 5470181037630673736;
                                }};
                                startDate = new Date() {{
                                    day = 2216203617041542792;
                                    month = 1918071675268484983;
                                    year = 7282957726278087973;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 6969271138816369737;
                                    minutes = 6459535646579317303;
                                    nanos = 7565348563291879665;
                                    seconds = 5814875222526965460;
                                }};
                                closed = true;
                                endDate = new Date() {{
                                    day = 3026858029093079187;
                                    month = 5707596477903956916;
                                    year = 4853798054261458232;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 1587585381886736164;
                                    minutes = 6799634913858799613;
                                    nanos = 2084093888726807454;
                                    seconds = 2408456254985065816;
                                }};
                                startDate = new Date() {{
                                    day = 3942168334789446932;
                                    month = 1270254207850762203;
                                    year = 4392924444694012713;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 7787724275490844271;
                                    minutes = 5890994024312477292;
                                    nanos = 8189128364234782251;
                                    seconds = 7485671414252263460;
                                }};
                                closed = true;
                                endDate = new Date() {{
                                    day = 2458436273137813924;
                                    month = 5984595884769565822;
                                    year = 6167509246177457514;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 2313022783413792985;
                                    minutes = 6987802107749558443;
                                    nanos = 3739117160430453394;
                                    seconds = 6745368018451919254;
                                }};
                                startDate = new Date() {{
                                    day = 3196215042576485670;
                                    month = 2296350715085835502;
                                    year = 8115989956290617870;
                                }};
                            }}),
                        }};
                    }};
                    storeCode = "esse";
                    storefrontAddress = new PostalAddress() {{
                        addressLines = new String[]() {{
                            add("eveniet"),
                            add("quod"),
                        }};
                        administrativeArea = "illum";
                        languageCode = "consequuntur";
                        locality = "tempore";
                        organization = "consequatur";
                        postalCode = "tempora";
                        recipients = new String[]() {{
                            add("animi"),
                        }};
                        regionCode = "aut";
                        revision = 1894898506065921841;
                        sortingCode = "rem";
                        sublocality = "ut";
                    }};
                    title = "amet";
                    websiteUri = "qui";
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