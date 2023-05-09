# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            MybusinessbusinessinformationAccountsLocationsCreateRequest req = new MybusinessbusinessinformationAccountsLocationsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                locationInput = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "distinctio";
                    }};;
                    categories = new CategoriesInput() {{
                        additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                            add(new CategoryInput() {{
                                name = "Ismael Little";
                            }}),
                            add(new CategoryInput() {{
                                name = "Doug Hoppe";
                            }}),
                            add(new CategoryInput() {{
                                name = "Larry Windler";
                            }}),
                            add(new CategoryInput() {{
                                name = "Alexandra Schulist";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            name = "Charlie Walsh II";
                        }};;
                    }};;
                    labels = new String[]{{
                        add("deserunt"),
                    }};
                    languageCode = "perferendis";
                    latlng = new LatLng() {{
                        latitude = 3682.41;
                        longitude = 8326.2;
                    }};;
                    moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                        add(new MoreHours() {{
                            hoursTypeId = "quo";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.SATURDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 870088;
                                        minutes = 978619;
                                        nanos = 473608;
                                        seconds = 799159;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.SATURDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 461479;
                                        minutes = 520478;
                                        nanos = 780529;
                                        seconds = 678880;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "dicta";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 582020;
                                        minutes = 143353;
                                        nanos = 537373;
                                        seconds = 944669;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.SATURDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 521848;
                                        minutes = 105907;
                                        nanos = 414662;
                                        seconds = 473600;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.TUESDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 186332;
                                        minutes = 774234;
                                        nanos = 736918;
                                        seconds = 456150;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.MONDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 568434;
                                        minutes = 135218;
                                        nanos = 18789;
                                        seconds = 324141;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.THURSDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 149675;
                                        minutes = 612096;
                                        nanos = 222321;
                                        seconds = 616934;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.WEDNESDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 943749;
                                        minutes = 902599;
                                        nanos = 681820;
                                        seconds = 449950;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "corporis";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 902349;
                                        minutes = 697631;
                                        nanos = 99280;
                                        seconds = 60225;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.SUNDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 666767;
                                        minutes = 653140;
                                        nanos = 670638;
                                        seconds = 170909;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.MONDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 358152;
                                        minutes = 128926;
                                        nanos = 750686;
                                        seconds = 315428;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.THURSDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 363711;
                                        minutes = 325047;
                                        nanos = 570197;
                                        seconds = 38425;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 634274;
                                        minutes = 988374;
                                        nanos = 958950;
                                        seconds = 102044;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.FRIDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 208876;
                                        minutes = 635059;
                                        nanos = 161309;
                                        seconds = 995300;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "mollitia";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.TUESDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 414369;
                                        minutes = 466311;
                                        nanos = 474697;
                                        seconds = 244425;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.THURSDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 158969;
                                        minutes = 338007;
                                        nanos = 110375;
                                        seconds = 674752;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                    closeTime = new TimeOfDay() {{
                                        hours = 317202;
                                        minutes = 138183;
                                        nanos = 778346;
                                        seconds = 196582;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.SUNDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 368725;
                                        minutes = 662527;
                                        nanos = 820994;
                                        seconds = 13571;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    closeTime = new TimeOfDay() {{
                                        hours = 622846;
                                        minutes = 837945;
                                        nanos = 673660;
                                        seconds = 96098;
                                    }};
                                    openDay = TimePeriodOpenDayEnum.SUNDAY;
                                    openTime = new TimeOfDay() {{
                                        hours = 976460;
                                        minutes = 878194;
                                        nanos = 468651;
                                        seconds = 509624;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    name = "Jose Moen";
                    openInfo = new OpenInfoInput() {{
                        openingDate = new Date() {{
                            day = 19987;
                            month = 39187;
                            year = 441711;
                        }};;
                        status = OpenInfoStatusEnum.OPEN;
                    }};;
                    phoneNumbers = new PhoneNumbers() {{
                        additionalPhones = new String[]{{
                            add("dicta"),
                            add("corporis"),
                            add("dolore"),
                            add("iusto"),
                        }};
                        primaryPhone = "dicta";
                    }};;
                    profile = new Profile() {{
                        description = "harum";
                    }};;
                    regularHours = new BusinessHours() {{
                        periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                            add(new TimePeriod() {{
                                closeDay = TimePeriodCloseDayEnum.SUNDAY;
                                closeTime = new TimeOfDay() {{
                                    hours = 414263;
                                    minutes = 918236;
                                    nanos = 64147;
                                    seconds = 216822;
                                }};
                                openDay = TimePeriodOpenDayEnum.FRIDAY;
                                openTime = new TimeOfDay() {{
                                    hours = 565189;
                                    minutes = 566602;
                                    nanos = 865103;
                                    seconds = 265389;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = TimePeriodCloseDayEnum.THURSDAY;
                                closeTime = new TimeOfDay() {{
                                    hours = 523248;
                                    minutes = 916723;
                                    nanos = 93940;
                                    seconds = 921158;
                                }};
                                openDay = TimePeriodOpenDayEnum.THURSDAY;
                                openTime = new TimeOfDay() {{
                                    hours = 83112;
                                    minutes = 929297;
                                    nanos = 277718;
                                    seconds = 318569;
                                }};
                            }}),
                        }};
                    }};;
                    relationshipData = new RelationshipData() {{
                        childrenLocations = new org.openapis.openapi.models.shared.RelevantLocation[]{{
                            add(new RelevantLocation() {{
                                placeId = "est";
                                relationType = RelevantLocationRelationTypeEnum.INDEPENDENT_ESTABLISHMENT_IN;
                            }}),
                        }};
                        parentChain = "explicabo";
                        parentLocation = new RelevantLocation() {{
                            placeId = "deserunt";
                            relationType = RelevantLocationRelationTypeEnum.INDEPENDENT_ESTABLISHMENT_IN;
                        }};;
                    }};;
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = ServiceAreaBusinessBusinessTypeEnum.CUSTOMER_AND_BUSINESS_LOCATION;
                        places = new Places() {{
                            placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                add(new PlaceInfo() {{
                                    placeId = "modi";
                                    placeName = "qui";
                                }}),
                                add(new PlaceInfo() {{
                                    placeId = "aliquid";
                                    placeName = "cupiditate";
                                }}),
                            }};
                        }};;
                        regionCode = "quos";
                    }};;
                    serviceItems = new org.openapis.openapi.models.shared.ServiceItem[]{{
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "magni";
                                label = new Label() {{
                                    description = "assumenda";
                                    displayName = "ipsam";
                                    languageCode = "alias";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "fugit";
                                nanos = 677817;
                                units = "excepturi";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "tempora";
                                serviceTypeId = "facilis";
                            }};
                        }}),
                    }};
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 288476;
                                    minutes = 962189;
                                    nanos = 433288;
                                    seconds = 248753;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 756107;
                                    month = 576157;
                                    year = 396098;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 592042;
                                    minutes = 896039;
                                    nanos = 572252;
                                    seconds = 638921;
                                }};
                                startDate = new Date() {{
                                    day = 223081;
                                    month = 891555;
                                    year = 952749;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 680056;
                                    minutes = 447125;
                                    nanos = 449198;
                                    seconds = 846409;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 978571;
                                    month = 699479;
                                    year = 116202;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 297437;
                                    minutes = 767024;
                                    nanos = 813798;
                                    seconds = 411820;
                                }};
                                startDate = new Date() {{
                                    day = 396506;
                                    month = 675439;
                                    year = 881104;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 249796;
                                    minutes = 581273;
                                    nanos = 313218;
                                    seconds = 881736;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 965417;
                                    month = 692532;
                                    year = 588465;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 725255;
                                    minutes = 659669;
                                    nanos = 501324;
                                    seconds = 533206;
                                }};
                                startDate = new Date() {{
                                    day = 956084;
                                    month = 230533;
                                    year = 643990;
                                }};
                            }}),
                        }};
                    }};;
                    storeCode = "nisi";
                    storefrontAddress = new PostalAddress() {{
                        addressLines = new String[]{{
                            add("natus"),
                            add("omnis"),
                        }};
                        administrativeArea = "molestiae";
                        languageCode = "perferendis";
                        locality = "nihil";
                        organization = "magnam";
                        postalCode = "62236-7481";
                        recipients = new String[]{{
                            add("magnam"),
                        }};
                        regionCode = "et";
                        revision = 569965;
                        sortingCode = "ullam";
                        sublocality = "provident";
                    }};;
                    title = "Ms.";
                    websiteUri = "sint";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "mollitia";
                key = "ad";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "dolor";
                requestId = "necessitatibus";
                uploadType = "odit";
                uploadProtocol = "nemo";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [mybusinessbusinessinformationAccountsLocationsCreate](docs/accounts/README.md#mybusinessbusinessinformationaccountslocationscreate) - Creates a new Location that will be owned by the logged in user.
* [mybusinessbusinessinformationAccountsLocationsList](docs/accounts/README.md#mybusinessbusinessinformationaccountslocationslist) - Lists the locations for the specified account.

### [attributes](docs/attributes/README.md)

* [mybusinessbusinessinformationAttributesList](docs/attributes/README.md#mybusinessbusinessinformationattributeslist) - Returns the list of attributes that would be available for a location with the given primary category and country.

### [categories](docs/categories/README.md)

* [mybusinessbusinessinformationCategoriesBatchGet](docs/categories/README.md#mybusinessbusinessinformationcategoriesbatchget) - Returns a list of business categories for the provided language and GConcept ids.
* [mybusinessbusinessinformationCategoriesList](docs/categories/README.md#mybusinessbusinessinformationcategorieslist) - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### [chains](docs/chains/README.md)

* [mybusinessbusinessinformationChainsSearch](docs/chains/README.md#mybusinessbusinessinformationchainssearch) - Searches the chain based on chain name.

### [googleLocations](docs/googlelocations/README.md)

* [mybusinessbusinessinformationGoogleLocationsSearch](docs/googlelocations/README.md#mybusinessbusinessinformationgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

### [locations](docs/locations/README.md)

* [mybusinessbusinessinformationLocationsAssociate](docs/locations/README.md#mybusinessbusinessinformationlocationsassociate) - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* [mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated](docs/locations/README.md#mybusinessbusinessinformationlocationsattributesgetgoogleupdated) - Gets the Google-updated version of the specified location.
* [mybusinessbusinessinformationLocationsClearLocationAssociation](docs/locations/README.md#mybusinessbusinessinformationlocationsclearlocationassociation) - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* [mybusinessbusinessinformationLocationsDelete](docs/locations/README.md#mybusinessbusinessinformationlocationsdelete) - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* [mybusinessbusinessinformationLocationsGetAttributes](docs/locations/README.md#mybusinessbusinessinformationlocationsgetattributes) - Looks up all the attributes set for a given location.
* [mybusinessbusinessinformationLocationsUpdateAttributes](docs/locations/README.md#mybusinessbusinessinformationlocationsupdateattributes) - Update attributes for a given location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
