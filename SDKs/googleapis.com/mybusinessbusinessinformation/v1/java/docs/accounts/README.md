# accounts

### Available Operations

* [mybusinessbusinessinformationAccountsLocationsCreate](#mybusinessbusinessinformationaccountslocationscreate) - Creates a new Location that will be owned by the logged in user.
* [mybusinessbusinessinformationAccountsLocationsList](#mybusinessbusinessinformationaccountslocationslist) - Lists the locations for the specified account.

## mybusinessbusinessinformationAccountsLocationsCreate

Creates a new Location that will be owned by the logged in user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateResponse;
import org.openapis.openapi.models.shared.AdWordsLocationExtensions;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BusinessHours;
import org.openapis.openapi.models.shared.CategoriesInput;
import org.openapis.openapi.models.shared.CategoryInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.FreeFormServiceItem;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.MoreHours;
import org.openapis.openapi.models.shared.OpenInfoInput;
import org.openapis.openapi.models.shared.OpenInfoStatusEnum;
import org.openapis.openapi.models.shared.PhoneNumbers;
import org.openapis.openapi.models.shared.PlaceInfo;
import org.openapis.openapi.models.shared.Places;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.Profile;
import org.openapis.openapi.models.shared.RelationshipData;
import org.openapis.openapi.models.shared.RelevantLocation;
import org.openapis.openapi.models.shared.RelevantLocationRelationTypeEnum;
import org.openapis.openapi.models.shared.ServiceAreaBusiness;
import org.openapis.openapi.models.shared.ServiceAreaBusinessBusinessTypeEnum;
import org.openapis.openapi.models.shared.ServiceItem;
import org.openapis.openapi.models.shared.SpecialHourPeriod;
import org.openapis.openapi.models.shared.SpecialHours;
import org.openapis.openapi.models.shared.StructuredServiceItem;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.TimePeriodCloseDayEnum;
import org.openapis.openapi.models.shared.TimePeriodOpenDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationAccountsLocationsCreateRequest req = new MybusinessbusinessinformationAccountsLocationsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                locationInput = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "doloribus";
                    }};;
                    categories = new CategoriesInput() {{
                        additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                            add(new CategoryInput() {{
                                name = "Jasmine Lind";
                            }}),
                            add(new CategoryInput() {{
                                name = "Diane VonRueden";
                            }}),
                            add(new CategoryInput() {{
                                name = "Kristie Spencer";
                            }}),
                            add(new CategoryInput() {{
                                name = "Edward Crooks";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            name = "Joan Satterfield";
                        }};;
                    }};;
                    labels = new String[]{{
                        add("ea"),
                        add("excepturi"),
                        add("odit"),
                        add("ea"),
                    }};
                    languageCode = "accusantium";
                    latlng = new LatLng() {{
                        latitude = 691.67;
                        longitude = 9825.75;
                    }};;
                    moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                        add(new MoreHours() {{
                            hoursTypeId = "ipsam";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 722056;
                                        minutes = 50588;
                                        nanos = 866383;
                                        seconds = 365496;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.SUNDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 16627;
                                        minutes = 855804;
                                        nanos = 230742;
                                        seconds = 11714;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.SATURDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 359978;
                                        minutes = 944124;
                                        nanos = 729991;
                                        seconds = 749999;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.MONDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 339404;
                                        minutes = 521037;
                                        nanos = 489549;
                                        seconds = 54338;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "quis";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.MONDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 18521;
                                        minutes = 170986;
                                        nanos = 793698;
                                        seconds = 463451;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.MONDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 874573;
                                        minutes = 345352;
                                        nanos = 944120;
                                        seconds = 928082;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "omnis";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.THURSDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 31838;
                                        minutes = 783645;
                                        nanos = 164694;
                                        seconds = 500026;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.THURSDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 50370;
                                        minutes = 577229;
                                        nanos = 699098;
                                        seconds = 237893;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.SUNDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 934214;
                                        minutes = 267262;
                                        nanos = 613966;
                                        seconds = 679091;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.THURSDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 864282;
                                        minutes = 589910;
                                        nanos = 750844;
                                        seconds = 730122;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.SUNDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 311945;
                                        minutes = 554242;
                                        nanos = 398221;
                                        seconds = 212390;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.MONDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 222443;
                                        minutes = 186193;
                                        nanos = 218749;
                                        seconds = 944373;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    name = "Felipe Klein";
                    openInfo = new OpenInfoInput() {{
                        openingDate = new Date() {{
                            day = 227414;
                            month = 680545;
                            year = 254356;
                        }};;
                        status = OpenInfoStatusEnum.OPEN_FOR_BUSINESS_UNSPECIFIED;
                    }};;
                    phoneNumbers = new PhoneNumbers() {{
                        additionalPhones = new String[]{{
                            add("ipsa"),
                        }};
                        primaryPhone = "iure";
                    }};;
                    profile = new Profile() {{
                        description = "odio";
                    }};;
                    regularHours = new BusinessHours() {{
                        periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                            add(new TimePeriod() {{
                                closeDay = TimePeriodCloseDayEnum.SUNDAY;
                                closeTime = new TimeOfDay() {{
                                    hours = 696344;
                                    minutes = 976405;
                                    nanos = 377752;
                                    seconds = 617658;
                                }};
                                openDay = TimePeriodOpenDayEnum.MONDAY;
                                openTime = new TimeOfDay() {{
                                    hours = 542499;
                                    minutes = 24678;
                                    nanos = 854614;
                                    seconds = 67249;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                closeTime = new TimeOfDay() {{
                                    hours = 679393;
                                    minutes = 478596;
                                    nanos = 453697;
                                    seconds = 677082;
                                }};
                                openDay = TimePeriodOpenDayEnum.THURSDAY;
                                openTime = new TimeOfDay() {{
                                    hours = 607045;
                                    minutes = 896672;
                                    nanos = 714697;
                                    seconds = 990339;
                                }};
                            }}),
                        }};
                    }};;
                    relationshipData = new RelationshipData() {{
                        childrenLocations = new org.openapis.openapi.models.shared.RelevantLocation[]{{
                            add(new RelevantLocation() {{
                                placeId = "ipsum";
                                relationType = RelevantLocationRelationTypeEnum.DEPARTMENT_OF;
                            }}),
                            add(new RelevantLocation() {{
                                placeId = "id";
                                relationType = RelevantLocationRelationTypeEnum.INDEPENDENT_ESTABLISHMENT_IN;
                            }}),
                        }};
                        parentChain = "eius";
                        parentLocation = new RelevantLocation() {{
                            placeId = "aspernatur";
                            relationType = RelevantLocationRelationTypeEnum.RELATION_TYPE_UNSPECIFIED;
                        }};;
                    }};;
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = ServiceAreaBusinessBusinessTypeEnum.BUSINESS_TYPE_UNSPECIFIED;
                        places = new Places() {{
                            placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                add(new PlaceInfo() {{
                                    placeId = "accusamus";
                                    placeName = "ad";
                                }}),
                                add(new PlaceInfo() {{
                                    placeId = "saepe";
                                    placeName = "suscipit";
                                }}),
                                add(new PlaceInfo() {{
                                    placeId = "deserunt";
                                    placeName = "provident";
                                }}),
                                add(new PlaceInfo() {{
                                    placeId = "minima";
                                    placeName = "repellendus";
                                }}),
                            }};
                        }};;
                        regionCode = "totam";
                    }};;
                    serviceItems = new org.openapis.openapi.models.shared.ServiceItem[]{{
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "alias";
                                label = new Label() {{
                                    description = "at";
                                    displayName = "quaerat";
                                    languageCode = "tempora";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "vel";
                                nanos = 798047;
                                units = "officiis";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "qui";
                                serviceTypeId = "dolorum";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "a";
                                label = new Label() {{
                                    description = "esse";
                                    displayName = "harum";
                                    languageCode = "iusto";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "ipsum";
                                nanos = 788740;
                                units = "tenetur";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "amet";
                                serviceTypeId = "tempore";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "accusamus";
                                label = new Label() {{
                                    description = "numquam";
                                    displayName = "enim";
                                    languageCode = "dolorem";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "sapiente";
                                nanos = 518201;
                                units = "nihil";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "sit";
                                serviceTypeId = "expedita";
                            }};
                        }}),
                    }};
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 153694;
                                    minutes = 424685;
                                    nanos = 730442;
                                    seconds = 374170;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 646265;
                                    month = 463575;
                                    year = 214880;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 277628;
                                    minutes = 186458;
                                    nanos = 586784;
                                    seconds = 807581;
                                }};
                                startDate = new Date() {{
                                    day = 863856;
                                    month = 747080;
                                    year = 117531;
                                }};
                            }}),
                        }};
                    }};;
                    storeCode = "laborum";
                    storefrontAddress = new PostalAddress() {{
                        addressLines = new String[]{{
                            add("incidunt"),
                            add("aspernatur"),
                            add("dolores"),
                        }};
                        administrativeArea = "distinctio";
                        languageCode = "facilis";
                        locality = "aliquid";
                        organization = "quam";
                        postalCode = "81211-4137";
                        recipients = new String[]{{
                            add("voluptatem"),
                            add("cumque"),
                            add("soluta"),
                            add("nobis"),
                        }};
                        regionCode = "et";
                        revision = 903720;
                        sortingCode = "ipsum";
                        sublocality = "veritatis";
                    }};;
                    title = "Miss";
                    websiteUri = "quos";
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "delectus";
                key = "dolorem";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "adipisci";
                uploadType = "dolorum";
                uploadProtocol = "architecto";
                validateOnly = false;
            }};            

            MybusinessbusinessinformationAccountsLocationsCreateResponse res = sdk.accounts.mybusinessbusinessinformationAccountsLocationsCreate(req);

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessbusinessinformationAccountsLocationsList

Lists the locations for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsListRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationAccountsLocationsListRequest req = new MybusinessbusinessinformationAccountsLocationsListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "est";
                filter = "repellendus";
                key = "porro";
                oauthToken = "doloribus";
                orderBy = "ut";
                pageSize = 703495L;
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "qui";
                readMask = "quae";
                uploadType = "laudantium";
                uploadProtocol = "odio";
            }};            

            MybusinessbusinessinformationAccountsLocationsListResponse res = sdk.accounts.mybusinessbusinessinformationAccountsLocationsList(req);

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
