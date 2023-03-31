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

import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreatePathParams;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateQueryParams;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAccountsLocationsCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationAccountsLocationsCreateRequest req = new MybusinessbusinessinformationAccountsLocationsCreateRequest() {{
                pathParams = new MybusinessbusinessinformationAccountsLocationsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new MybusinessbusinessinformationAccountsLocationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    requestId = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                    validateOnly = false;
                }};
                request = new LocationInput() {{
                    adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                        adPhone = "iure";
                    }};
                    categories = new CategoriesInput() {{
                        additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                            add(new CategoryInput() {{
                                name = "debitis";
                            }}),
                            add(new CategoryInput() {{
                                name = "ipsa";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            name = "delectus";
                        }};
                    }};
                    labels = new String[]{{
                        add("suscipit"),
                        add("molestiae"),
                    }};
                    languageCode = "minus";
                    latlng = new LatLng() {{
                        latitude = 8121.69;
                        longitude = 5288.95;
                    }};
                    moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                        add(new MoreHours() {{
                            hoursTypeId = "excepturi";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = "SUNDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 836079;
                                        minutes = 71036;
                                        nanos = 337396;
                                        seconds = 87129;
                                    }};
                                    openDay = "FRIDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 20218;
                                        minutes = 368241;
                                        nanos = 832620;
                                        seconds = 957156;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "SATURDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 140350;
                                        minutes = 870013;
                                        nanos = 870088;
                                        seconds = 978619;
                                    }};
                                    openDay = "WEDNESDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 799159;
                                        minutes = 800911;
                                        nanos = 461479;
                                        seconds = 520478;
                                    }};
                                }}),
                            }};
                        }}),
                        add(new MoreHours() {{
                            hoursTypeId = "porro";
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = "DAY_OF_WEEK_UNSPECIFIED";
                                    closeTime = new TimeOfDay() {{
                                        hours = 720633;
                                        minutes = 639921;
                                        nanos = 582020;
                                        seconds = 143353;
                                    }};
                                    openDay = "THURSDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 944669;
                                        minutes = 758616;
                                        nanos = 521848;
                                        seconds = 105907;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "WEDNESDAY";
                                    closeTime = new TimeOfDay() {{
                                        hours = 473600;
                                        minutes = 264555;
                                        nanos = 186332;
                                        seconds = 774234;
                                    }};
                                    openDay = "FRIDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 456150;
                                        minutes = 216550;
                                        nanos = 568434;
                                        seconds = 135218;
                                    }};
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = "DAY_OF_WEEK_UNSPECIFIED";
                                    closeTime = new TimeOfDay() {{
                                        hours = 324141;
                                        minutes = 617636;
                                        nanos = 149675;
                                        seconds = 612096;
                                    }};
                                    openDay = "MONDAY";
                                    openTime = new TimeOfDay() {{
                                        hours = 616934;
                                        minutes = 386489;
                                        nanos = 943749;
                                        seconds = 902599;
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                    name = "fuga";
                    openInfo = new OpenInfoInput() {{
                        openingDate = new Date() {{
                            day = 449950;
                            month = 359508;
                            year = 613064;
                        }};
                        status = "OPEN";
                    }};
                    phoneNumbers = new PhoneNumbers() {{
                        additionalPhones = new String[]{{
                            add("quidem"),
                            add("architecto"),
                            add("ipsa"),
                            add("reiciendis"),
                        }};
                        primaryPhone = "est";
                    }};
                    profile = new Profile() {{
                        description = "mollitia";
                    }};
                    regularHours = new BusinessHours() {{
                        periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                            add(new TimePeriod() {{
                                closeDay = "MONDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 210382;
                                    minutes = 358152;
                                    nanos = 128926;
                                    seconds = 750686;
                                }};
                                openDay = "TUESDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 607831;
                                    minutes = 363711;
                                    nanos = 325047;
                                    seconds = 570197;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "DAY_OF_WEEK_UNSPECIFIED";
                                closeTime = new TimeOfDay() {{
                                    hours = 438601;
                                    minutes = 634274;
                                    nanos = 988374;
                                    seconds = 958950;
                                }};
                                openDay = "DAY_OF_WEEK_UNSPECIFIED";
                                openTime = new TimeOfDay() {{
                                    hours = 652790;
                                    minutes = 208876;
                                    nanos = 635059;
                                    seconds = 161309;
                                }};
                            }}),
                            add(new TimePeriod() {{
                                closeDay = "SUNDAY";
                                closeTime = new TimeOfDay() {{
                                    hours = 653108;
                                    minutes = 581850;
                                    nanos = 253291;
                                    seconds = 414369;
                                }};
                                openDay = "WEDNESDAY";
                                openTime = new TimeOfDay() {{
                                    hours = 474697;
                                    minutes = 244425;
                                    nanos = 623510;
                                    seconds = 158969;
                                }};
                            }}),
                        }};
                    }};
                    relationshipData = new RelationshipData() {{
                        childrenLocations = new org.openapis.openapi.models.shared.RelevantLocation[]{{
                            add(new RelevantLocation() {{
                                placeId = "vitae";
                                relationType = "INDEPENDENT_ESTABLISHMENT_IN";
                            }}),
                            add(new RelevantLocation() {{
                                placeId = "animi";
                                relationType = "RELATION_TYPE_UNSPECIFIED";
                            }}),
                        }};
                        parentChain = "odit";
                        parentLocation = new RelevantLocation() {{
                            placeId = "quo";
                            relationType = "RELATION_TYPE_UNSPECIFIED";
                        }};
                    }};
                    serviceArea = new ServiceAreaBusiness() {{
                        businessType = "CUSTOMER_AND_BUSINESS_LOCATION";
                        places = new Places() {{
                            placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                add(new PlaceInfo() {{
                                    placeId = "id";
                                    placeName = "possimus";
                                }}),
                                add(new PlaceInfo() {{
                                    placeId = "aut";
                                    placeName = "quasi";
                                }}),
                            }};
                        }};
                        regionCode = "error";
                    }};
                    serviceItems = new org.openapis.openapi.models.shared.ServiceItem[]{{
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "laborum";
                                label = new Label() {{
                                    description = "quasi";
                                    displayName = "reiciendis";
                                    languageCode = "voluptatibus";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "vero";
                                nanos = 468651;
                                units = "praesentium";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "voluptatibus";
                                serviceTypeId = "ipsa";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "omnis";
                                label = new Label() {{
                                    description = "voluptate";
                                    displayName = "cum";
                                    languageCode = "perferendis";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "doloremque";
                                nanos = 441711;
                                units = "ut";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "maiores";
                                serviceTypeId = "dicta";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "corporis";
                                label = new Label() {{
                                    description = "dolore";
                                    displayName = "iusto";
                                    languageCode = "dicta";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "harum";
                                nanos = 317983;
                                units = "accusamus";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "commodi";
                                serviceTypeId = "repudiandae";
                            }};
                        }}),
                        add(new ServiceItem() {{
                            freeFormServiceItem = new FreeFormServiceItem() {{
                                category = "quae";
                                label = new Label() {{
                                    description = "ipsum";
                                    displayName = "quidem";
                                    languageCode = "molestias";
                                }};
                            }};
                            price = new Money() {{
                                currencyCode = "excepturi";
                                nanos = 865103;
                                units = "modi";
                            }};
                            structuredServiceItem = new StructuredServiceItem() {{
                                description = "praesentium";
                                serviceTypeId = "rem";
                            }};
                        }}),
                    }};
                    specialHours = new SpecialHours() {{
                        specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 93940;
                                    minutes = 921158;
                                    nanos = 575947;
                                    seconds = 83112;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 929297;
                                    month = 277718;
                                    year = 318569;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 9356;
                                    minutes = 667411;
                                    nanos = 842342;
                                    seconds = 131797;
                                }};
                                startDate = new Date() {{
                                    day = 647174;
                                    month = 716327;
                                    year = 841386;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 289406;
                                    minutes = 264730;
                                    nanos = 183191;
                                    seconds = 397821;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 586513;
                                    month = 552822;
                                    year = 20107;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 164940;
                                    minutes = 828940;
                                    nanos = 369808;
                                    seconds = 4695;
                                }};
                                startDate = new Date() {{
                                    day = 146441;
                                    month = 677817;
                                    year = 569618;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 270008;
                                    minutes = 703737;
                                    nanos = 735194;
                                    seconds = 288476;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 962189;
                                    month = 433288;
                                    year = 248753;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 756107;
                                    minutes = 576157;
                                    nanos = 396098;
                                    seconds = 592042;
                                }};
                                startDate = new Date() {{
                                    day = 896039;
                                    month = 572252;
                                    year = 638921;
                                }};
                            }}),
                            add(new SpecialHourPeriod() {{
                                closeTime = new TimeOfDay() {{
                                    hours = 223081;
                                    minutes = 891555;
                                    nanos = 952749;
                                    seconds = 680056;
                                }};
                                closed = false;
                                endDate = new Date() {{
                                    day = 447125;
                                    month = 449198;
                                    year = 846409;
                                }};
                                openTime = new TimeOfDay() {{
                                    hours = 978571;
                                    minutes = 699479;
                                    nanos = 116202;
                                    seconds = 297437;
                                }};
                                startDate = new Date() {{
                                    day = 767024;
                                    month = 813798;
                                    year = 411820;
                                }};
                            }}),
                        }};
                    }};
                    storeCode = "aliquid";
                    storefrontAddress = new PostalAddress() {{
                        addressLines = new String[]{{
                            add("accusamus"),
                            add("non"),
                            add("occaecati"),
                        }};
                        administrativeArea = "enim";
                        languageCode = "accusamus";
                        locality = "delectus";
                        organization = "quidem";
                        postalCode = "76559-2634";
                        recipients = new String[]{{
                            add("omnis"),
                            add("molestiae"),
                            add("perferendis"),
                        }};
                        regionCode = "nihil";
                        revision = 301575;
                        sortingCode = "distinctio";
                        sublocality = "id";
                    }};
                    title = "Mrs.";
                    websiteUri = "labore";
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `mybusinessbusinessinformationAccountsLocationsCreate` - Creates a new Location that will be owned by the logged in user.
* `mybusinessbusinessinformationAccountsLocationsList` - Lists the locations for the specified account.

### attributes

* `mybusinessbusinessinformationAttributesList` - Returns the list of attributes that would be available for a location with the given primary category and country.

### categories

* `mybusinessbusinessinformationCategoriesBatchGet` - Returns a list of business categories for the provided language and GConcept ids.
* `mybusinessbusinessinformationCategoriesList` - Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

### chains

* `mybusinessbusinessinformationChainsSearch` - Searches the chain based on chain name.

### googleLocations

* `mybusinessbusinessinformationGoogleLocationsSearch` - Search all of the possible locations that are a match to the specified request.

### locations

* `mybusinessbusinessinformationLocationsAssociate` - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
* `mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated` - Gets the Google-updated version of the specified location.
* `mybusinessbusinessinformationLocationsClearLocationAssociation` - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
* `mybusinessbusinessinformationLocationsDelete` - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
* `mybusinessbusinessinformationLocationsGetAttributes` - Looks up all the attributes set for a given location.
* `mybusinessbusinessinformationLocationsUpdateAttributes` - Update attributes for a given location.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
