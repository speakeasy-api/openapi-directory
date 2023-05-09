# googleLocations

### Available Operations

* [mybusinessbusinessinformationGoogleLocationsSearch](#mybusinessbusinessinformationgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

## mybusinessbusinessinformationGoogleLocationsSearch

Search all of the possible locations that are a match to the specified request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationGoogleLocationsSearchRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationGoogleLocationsSearchResponse;
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
import org.openapis.openapi.models.shared.SearchGoogleLocationsRequestInput;
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

            MybusinessbusinessinformationGoogleLocationsSearchRequest req = new MybusinessbusinessinformationGoogleLocationsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                searchGoogleLocationsRequestInput = new SearchGoogleLocationsRequestInput() {{
                    location = new LocationInput() {{
                        adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                            adPhone = "impedit";
                        }};;
                        categories = new CategoriesInput() {{
                            additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                                add(new CategoryInput() {{
                                    name = "Jeanne Bode";
                                }}),
                                add(new CategoryInput() {{
                                    name = "Glenn Walter";
                                }}),
                            }};
                            primaryCategory = new CategoryInput() {{
                                name = "Mr. Elsa Reinger";
                            }};;
                        }};;
                        labels = new String[]{{
                            add("aliquam"),
                            add("fugit"),
                            add("accusamus"),
                            add("inventore"),
                        }};
                        languageCode = "non";
                        latlng = new LatLng() {{
                            latitude = 896.03;
                            longitude = 6774.12;
                        }};;
                        moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                            add(new MoreHours() {{
                                hoursTypeId = "placeat";
                                periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                        closeTime = new TimeOfDay() {{
                                            hours = 420539;
                                            minutes = 752135;
                                            nanos = 557369;
                                            seconds = 829603;
                                        }};
                                        openDay = TimePeriodOpenDayEnum.SATURDAY;
                                        openTime = new TimeOfDay() {{
                                            hours = 379034;
                                            minutes = 727044;
                                            nanos = 96549;
                                            seconds = 270328;
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new MoreHours() {{
                                hoursTypeId = "numquam";
                                periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.THURSDAY;
                                        closeTime = new TimeOfDay() {{
                                            hours = 55374;
                                            minutes = 476477;
                                            nanos = 301598;
                                            seconds = 487935;
                                        }};
                                        openDay = TimePeriodOpenDayEnum.TUESDAY;
                                        openTime = new TimeOfDay() {{
                                            hours = 458515;
                                            minutes = 456141;
                                            nanos = 524593;
                                            seconds = 683282;
                                        }};
                                    }}),
                                }};
                            }}),
                            add(new MoreHours() {{
                                hoursTypeId = "reprehenderit";
                                periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.SATURDAY;
                                        closeTime = new TimeOfDay() {{
                                            hours = 283519;
                                            minutes = 433439;
                                            nanos = 379927;
                                            seconds = 826871;
                                        }};
                                        openDay = TimePeriodOpenDayEnum.MONDAY;
                                        openTime = new TimeOfDay() {{
                                            hours = 509342;
                                            minutes = 788546;
                                            nanos = 86377;
                                            seconds = 56848;
                                        }};
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                        closeTime = new TimeOfDay() {{
                                            hours = 696997;
                                            minutes = 206594;
                                            nanos = 778696;
                                            seconds = 847276;
                                        }};
                                        openDay = TimePeriodOpenDayEnum.SATURDAY;
                                        openTime = new TimeOfDay() {{
                                            hours = 681359;
                                            minutes = 259422;
                                            nanos = 178367;
                                            seconds = 373813;
                                        }};
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        closeTime = new TimeOfDay() {{
                                            hours = 587600;
                                            minutes = 9688;
                                            nanos = 272822;
                                            seconds = 892050;
                                        }};
                                        openDay = TimePeriodOpenDayEnum.TUESDAY;
                                        openTime = new TimeOfDay() {{
                                            hours = 133465;
                                            minutes = 197054;
                                            nanos = 779192;
                                            seconds = 459856;
                                        }};
                                    }}),
                                }};
                            }}),
                        }};
                        name = "Kevin Rau";
                        openInfo = new OpenInfoInput() {{
                            openingDate = new Date() {{
                                day = 76956;
                                month = 469498;
                                year = 518835;
                            }};;
                            status = OpenInfoStatusEnum.CLOSED_TEMPORARILY;
                        }};;
                        phoneNumbers = new PhoneNumbers() {{
                            additionalPhones = new String[]{{
                                add("odio"),
                                add("occaecati"),
                            }};
                            primaryPhone = "commodi";
                        }};;
                        profile = new Profile() {{
                            description = "sapiente";
                        }};;
                        regularHours = new BusinessHours() {{
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 475289;
                                        minutes = 35362;
                                        nanos = 783648;
                                        seconds = 430402;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.THURSDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 510017;
                                        minutes = 159867;
                                        nanos = 536178;
                                        seconds = 143829;
                                    }};
                                }}),
                            }};
                        }};;
                        relationshipData = new RelationshipData() {{
                            childrenLocations = new org.openapis.openapi.models.shared.RelevantLocation[]{{
                                add(new RelevantLocation() {{
                                    placeId = "mollitia";
                                    relationType = RelevantLocationRelationTypeEnum.RELATION_TYPE_UNSPECIFIED;
                                }}),
                                add(new RelevantLocation() {{
                                    placeId = "atque";
                                    relationType = RelevantLocationRelationTypeEnum.RELATION_TYPE_UNSPECIFIED;
                                }}),
                                add(new RelevantLocation() {{
                                    placeId = "minima";
                                    relationType = RelevantLocationRelationTypeEnum.DEPARTMENT_OF;
                                }}),
                            }};
                            parentChain = "fugit";
                            parentLocation = new RelevantLocation() {{
                                placeId = "sapiente";
                                relationType = RelevantLocationRelationTypeEnum.RELATION_TYPE_UNSPECIFIED;
                            }};;
                        }};;
                        serviceArea = new ServiceAreaBusiness() {{
                            businessType = ServiceAreaBusinessBusinessTypeEnum.BUSINESS_TYPE_UNSPECIFIED;
                            places = new Places() {{
                                placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                    add(new PlaceInfo() {{
                                        placeId = "saepe";
                                        placeName = "occaecati";
                                    }}),
                                }};
                            }};;
                            regionCode = "atque";
                        }};;
                        serviceItems = new org.openapis.openapi.models.shared.ServiceItem[]{{
                            add(new ServiceItem() {{
                                freeFormServiceItem = new FreeFormServiceItem() {{
                                    category = "esse";
                                    label = new Label() {{
                                        description = "eveniet";
                                        displayName = "accusamus";
                                        languageCode = "veritatis";
                                    }};
                                }};
                                price = new Money() {{
                                    currencyCode = "esse";
                                    nanos = 800379;
                                    units = "nam";
                                }};
                                structuredServiceItem = new StructuredServiceItem() {{
                                    description = "vero";
                                    serviceTypeId = "aliquid";
                                }};
                            }}),
                        }};
                        specialHours = new SpecialHours() {{
                            specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                                add(new SpecialHourPeriod() {{
                                    closeTime = new TimeOfDay() {{
                                        hours = 904045;
                                        minutes = 426306;
                                        nanos = 690025;
                                        seconds = 473221;
                                    }};
                                    closed = false;
                                    endDate = new Date() {{
                                        day = 699622;
                                        month = 580197;
                                        year = 327720;
                                    }};
                                    openTime = new TimeOfDay() {{
                                        hours = 716244;
                                        minutes = 756779;
                                        nanos = 27069;
                                        seconds = 636061;
                                    }};
                                    startDate = new Date() {{
                                        day = 731398;
                                        month = 240020;
                                        year = 766964;
                                    }};
                                }}),
                            }};
                        }};;
                        storeCode = "consequuntur";
                        storefrontAddress = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("minus"),
                            }};
                            administrativeArea = "quaerat";
                            languageCode = "sapiente";
                            locality = "consectetur";
                            organization = "esse";
                            postalCode = "59854-0965";
                            recipients = new String[]{{
                                add("possimus"),
                                add("quia"),
                                add("eveniet"),
                                add("asperiores"),
                            }};
                            regionCode = "facere";
                            revision = 85001;
                            sortingCode = "consequuntur";
                            sublocality = "quasi";
                        }};;
                        title = "Miss";
                        websiteUri = "culpa";
                    }};;
                    pageSize = 398434;
                    query = "tenetur";
                }};;
                accessToken = "quae";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "in";
                key = "eius";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "soluta";
                uploadProtocol = "accusantium";
            }};            

            MybusinessbusinessinformationGoogleLocationsSearchResponse res = sdk.googleLocations.mybusinessbusinessinformationGoogleLocationsSearch(req);

            if (res.searchGoogleLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
