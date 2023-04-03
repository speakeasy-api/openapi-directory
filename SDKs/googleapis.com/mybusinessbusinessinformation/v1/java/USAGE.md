<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.SpecialHours;
import org.openapis.openapi.models.shared.SpecialHourPeriod;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.ServiceItem;
import org.openapis.openapi.models.shared.StructuredServiceItem;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.FreeFormServiceItem;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.ServiceAreaBusinessBusinessTypeEnum;
import org.openapis.openapi.models.shared.ServiceAreaBusiness;
import org.openapis.openapi.models.shared.Places;
import org.openapis.openapi.models.shared.PlaceInfo;
import org.openapis.openapi.models.shared.RelationshipData;
import org.openapis.openapi.models.shared.RelevantLocationRelationTypeEnum;
import org.openapis.openapi.models.shared.RelevantLocation;
import org.openapis.openapi.models.shared.BusinessHours;
import org.openapis.openapi.models.shared.TimePeriodCloseDayEnum;
import org.openapis.openapi.models.shared.TimePeriodOpenDayEnum;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.Profile;
import org.openapis.openapi.models.shared.PhoneNumbers;
import org.openapis.openapi.models.shared.OpenInfoStatusEnum;
import org.openapis.openapi.models.shared.OpenInfoInput;
import org.openapis.openapi.models.shared.MoreHours;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.CategoriesInput;
import org.openapis.openapi.models.shared.CategoryInput;
import org.openapis.openapi.models.shared.AdWordsLocationExtensions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationAccountsLocationsCreateRequest req = new MybusinessbusinessinformationAccountsLocationsCreateRequest() {{
                dollarXgafv = "2";
                locationInput = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "provident";
                    }};
                    categories = new CategoriesInput() {{
                        additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                            add(new CategoryInput() {{
                                name = "quibusdam";
                            }}),
                            add(new CategoryInput() {{
                                name = "unde";
                            }}),
                            add(new CategoryInput() {{
                                name = "nulla";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            name = "corrupti";
                        }};
                    }};
                    labels = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    languageCode = "iure";
                    latlng = new LatLng() {{
                        latitude = 2975.34;
                        longitude = 8917.73;
                    }};
                    moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                        add(new MoreHours() {{
                            hoursTypeId = "delectus";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = "WEDNESDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 477665;
                                        minutes = 791725;
                                        nanos = 812169;
                                        seconds = 528895;
                                    }};
                                    openDay = "WEDNESDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 568045;
                                        minutes = 392785;
                                        nanos = 925597;
                                        seconds = 836079;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "DAY_OF_WEEK_UNSPECIFIED";
                                    closeTime = new TimeOfDay() {{
                                        hours = 337396;
                                        minutes = 87129;
                                        nanos = 648172;
                                        seconds = 20218;
                                    }};
                                    openDay = "TUESDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 832620;
                                        minutes = 957156;
                                        nanos = 778157;
                                        seconds = 140350;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    name = "at";
                    openInfo = new OpenInfoInput() {{
                        openingDate = new Date() {{
                            day = 870088;
                            month = 978619;
                            year = 473608;
                        }};
                        status = "CLOSED_TEMPORARILY";
                    }};
                    phoneNumbers = new PhoneNumbers() {{
                        additionalPhones = new String[]{{
                            add("esse"),
                            add("totam"),
                            add("porro"),
                            add("dolorum"),
                        }};
                        primaryPhone = "dicta";
                    }};
                    profile = new Profile() {{
                        description = "nam";
                    }};
                    regularHours = new BusinessHours() {{
                        periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                            add(new TimePeriod() {{
                                closeDay = "THURSDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 143353;
                                    minutes = 537373;
                                    nanos = 944669;
                                    seconds = 758616;
                                }};
                                openDay = "THURSDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 105907;
                                    minutes = 414662;
                                    nanos = 473600;
                                    seconds = 264555;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "MONDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 774234;
                                    minutes = 736918;
                                    nanos = 456150;
                                    seconds = 216550;
                                }};
                                openDay = "THURSDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 135218;
                                    minutes = 18789;
                                    nanos = 324141;
                                    seconds = 617636;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "MONDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 612096;
                                    minutes = 222321;
                                    nanos = 616934;
                                    seconds = 386489;
                                }};
                                openDay = "SUNDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 902599;
                                    minutes = 681820;
                                    nanos = 449950;
                                    seconds = 359508;
                                }};
                            }}),
                        }};
                    }};
                    relationshipData = new RelationshipData() {{
                        childrenLocations = new org.openapis.openapi.models.shared.RelevantLocation[]{{
                            add(new RelevantLocation() {{
                                placeId = "iure";
                                relationType = "INDEPENDENT_ESTABLISHMENT_IN";
                            }}),
                            add(new RelevantLocation() {{
                                placeId = "quidem";
                                relationType = "RELATION_TYPE_UNSPECIFIED";
                            }}),
                            add(new RelevantLocation() {{
                                placeId = "ipsa";
                                relationType = "INDEPENDENT_ESTABLISHMENT_IN";
                            }}),
                        }};
                        parentChain = "est";
                        parentLocation = new RelevantLocation() {{
                            placeId = "mollitia";
                            relationType = "INDEPENDENT_ESTABLISHMENT_IN";
                        }};
                    }};
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = "BUSINESS_TYPE_UNSPECIFIED";
                        places = new Places() {{
                            placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                add(new PlaceInfo() {{
                                    placeId = "corporis";
                                    placeName = "explicabo";
                                }}),
                            }};
                        }};
                        regionCode = "nobis";
                    }};
                    serviceItems = new org.openapis.openapi.models.shared.ServiceItem[]{{
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "omnis";
                                label = new Label() {{
                                    description = "nemo";
                                    displayName = "minima";
                                    languageCode = "excepturi";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "accusantium";
                                nanos = 438601;
                                units = "culpa";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "doloribus";
                                serviceTypeId = "sapiente";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "architecto";
                                label = new Label() {{
                                    description = "mollitia";
                                    displayName = "dolorem";
                                    languageCode = "culpa";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "consequuntur";
                                nanos = 995300;
                                units = "mollitia";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "occaecati";
                                serviceTypeId = "numquam";
                            }};
                        }}),
                    }};
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 466311;
                                    minutes = 474697;
                                    nanos = 244425;
                                    seconds = 623510;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 158969;
                                    month = 338007;
                                    year = 110375;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 674752;
                                    minutes = 656330;
                                    nanos = 317202;
                                    seconds = 138183;
                                }};
                                startDate = new Date() {{
                                    day = 778346;
                                    month = 196582;
                                    year = 949572;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 368725;
                                    minutes = 662527;
                                    nanos = 820994;
                                    seconds = 13571;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 97101;
                                    month = 622846;
                                    year = 837945;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 673660;
                                    minutes = 96098;
                                    nanos = 971945;
                                    seconds = 976460;
                                }};
                                startDate = new Date() {{
                                    day = 878194;
                                    month = 468651;
                                    year = 509624;
                                }};
                            }}),
                        }};
                    }};
                    storeCode = "voluptatibus";
                    storefrontAddress = new PostalAddress() {{
                        addressLines = new String[]{{
                            add("omnis"),
                        }};
                        administrativeArea = "voluptate";
                        languageCode = "cum";
                        locality = "perferendis";
                        organization = "doloremque";
                        postalCode = "29132";
                        recipients = new String[]{{
                            add("dicta"),
                            add("harum"),
                        }};
                        regionCode = "enim";
                        revision = 880476;
                        sortingCode = "commodi";
                        sublocality = "repudiandae";
                    }};
                    title = "Mr.";
                    websiteUri = "ipsum";
                }};
                accessToken = "quidem";
                alt = "media";
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                parent = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                requestId = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
                validateOnly = false;
            }}            

            MybusinessbusinessinformationAccountsLocationsCreateResponse res = sdk.accounts.mybusinessbusinessinformationAccountsLocationsCreate(req);

            if (res.location.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->