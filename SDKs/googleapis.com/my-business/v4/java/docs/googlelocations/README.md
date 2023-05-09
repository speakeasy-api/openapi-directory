# googleLocations

### Available Operations

* [mybusinessGoogleLocationsReport](#mybusinessgooglelocationsreport) - Report a GoogleLocation.
* [mybusinessGoogleLocationsSearch](#mybusinessgooglelocationssearch) - Search all of the possible locations that are a match to the specified request.

## mybusinessGoogleLocationsReport

Report a GoogleLocation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessGoogleLocationsReportRequest;
import org.openapis.openapi.models.operations.MybusinessGoogleLocationsReportResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportGoogleLocationRequest;
import org.openapis.openapi.models.shared.ReportGoogleLocationRequestReportReasonBadLocationEnum;
import org.openapis.openapi.models.shared.ReportGoogleLocationRequestReportReasonBadRecommendationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessGoogleLocationsReportRequest req = new MybusinessGoogleLocationsReportRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                reportGoogleLocationRequest = new ReportGoogleLocationRequest() {{
                    locationGroupName = "dolor";
                    reportReasonBadLocation = ReportGoogleLocationRequestReportReasonBadLocationEnum.MOVED;
                    reportReasonBadRecommendation = ReportGoogleLocationRequestReportReasonBadRecommendationEnum.NOT_A_STORE_FRONT;
                    reportReasonElaboration = "consequuntur";
                    reportReasonLanguageCode = "ipsa";
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "officiis";
                key = "esse";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "veniam";
                uploadProtocol = "nesciunt";
            }};            

            MybusinessGoogleLocationsReportResponse res = sdk.googleLocations.mybusinessGoogleLocationsReport(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessGoogleLocationsSearch

Search all of the possible locations that are a match to the specified request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessGoogleLocationsSearchRequest;
import org.openapis.openapi.models.operations.MybusinessGoogleLocationsSearchResponse;
import org.openapis.openapi.models.shared.AdWordsLocationExtensions;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.AttributeValueTypeEnum;
import org.openapis.openapi.models.shared.BusinessHours;
import org.openapis.openapi.models.shared.CategoryInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.Duplicate;
import org.openapis.openapi.models.shared.DuplicateAccessEnum;
import org.openapis.openapi.models.shared.Item;
import org.openapis.openapi.models.shared.Label;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.LocationKey;
import org.openapis.openapi.models.shared.LocationStateInput;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.MoreHours;
import org.openapis.openapi.models.shared.OpenInfo;
import org.openapis.openapi.models.shared.OpenInfoStatusEnum;
import org.openapis.openapi.models.shared.PlaceInfo;
import org.openapis.openapi.models.shared.Places;
import org.openapis.openapi.models.shared.PointRadius;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.PriceList;
import org.openapis.openapi.models.shared.Profile;
import org.openapis.openapi.models.shared.RelationshipData;
import org.openapis.openapi.models.shared.RepeatedEnumAttributeValue;
import org.openapis.openapi.models.shared.SearchGoogleLocationsRequestInput;
import org.openapis.openapi.models.shared.Section;
import org.openapis.openapi.models.shared.SectionSectionTypeEnum;
import org.openapis.openapi.models.shared.ServiceAreaBusiness;
import org.openapis.openapi.models.shared.ServiceAreaBusinessBusinessTypeEnum;
import org.openapis.openapi.models.shared.SpecialHourPeriod;
import org.openapis.openapi.models.shared.SpecialHours;
import org.openapis.openapi.models.shared.TimePeriod;
import org.openapis.openapi.models.shared.TimePeriodCloseDayEnum;
import org.openapis.openapi.models.shared.TimePeriodOpenDayEnum;
import org.openapis.openapi.models.shared.UrlAttributeValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessGoogleLocationsSearchRequest req = new MybusinessGoogleLocationsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                searchGoogleLocationsRequestInput = new SearchGoogleLocationsRequestInput() {{
                    location = new LocationInput() {{
                        adWordsLocationExtensions = new AdWordsLocationExtensions() {{
                            adPhone = "eum";
                        }};;
                        additionalCategories = new org.openapis.openapi.models.shared.CategoryInput[]{{
                            add(new CategoryInput() {{
                                categoryId = "voluptatum";
                                displayName = "magnam";
                            }}),
                            add(new CategoryInput() {{
                                categoryId = "exercitationem";
                                displayName = "ab";
                            }}),
                        }};
                        additionalPhones = new String[]{{
                            add("autem"),
                            add("nobis"),
                            add("laboriosam"),
                            add("recusandae"),
                        }};
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("voluptatem"),
                            }};
                            administrativeArea = "exercitationem";
                            languageCode = "necessitatibus";
                            locality = "quasi";
                            organization = "nisi";
                            postalCode = "86619-9753";
                            recipients = new String[]{{
                                add("blanditiis"),
                                add("officia"),
                            }};
                            regionCode = "voluptas";
                            revision = 254025;
                            sortingCode = "nemo";
                            sublocality = "quos";
                        }};;
                        attributes = new org.openapis.openapi.models.shared.Attribute[]{{
                            add(new Attribute() {{
                                attributeId = "aspernatur";
                                repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                    setValues = new String[]{{
                                        add("nesciunt"),
                                        add("fuga"),
                                    }};
                                    unsetValues = new String[]{{
                                        add("incidunt"),
                                        add("quasi"),
                                        add("rem"),
                                    }};
                                }};
                                urlValues = new org.openapis.openapi.models.shared.UrlAttributeValue[]{{
                                    add(new UrlAttributeValue() {{
                                        url = "dicta";
                                    }}),
                                    add(new UrlAttributeValue() {{
                                        url = "nisi";
                                    }}),
                                    add(new UrlAttributeValue() {{
                                        url = "consequuntur";
                                    }}),
                                    add(new UrlAttributeValue() {{
                                        url = "consectetur";
                                    }}),
                                }};
                                valueType = AttributeValueTypeEnum.ATTRIBUTE_VALUE_TYPE_UNSPECIFIED;
                                values = new Object[]{{
                                    add("reiciendis"),
                                    add("soluta"),
                                    add("alias"),
                                }};
                            }}),
                            add(new Attribute() {{
                                attributeId = "omnis";
                                repeatedEnumValue = new RepeatedEnumAttributeValue() {{
                                    setValues = new String[]{{
                                        add("occaecati"),
                                    }};
                                    unsetValues = new String[]{{
                                        add("magni"),
                                        add("inventore"),
                                        add("fuga"),
                                    }};
                                }};
                                urlValues = new org.openapis.openapi.models.shared.UrlAttributeValue[]{{
                                    add(new UrlAttributeValue() {{
                                        url = "voluptatibus";
                                    }}),
                                    add(new UrlAttributeValue() {{
                                        url = "distinctio";
                                    }}),
                                    add(new UrlAttributeValue() {{
                                        url = "omnis";
                                    }}),
                                    add(new UrlAttributeValue() {{
                                        url = "delectus";
                                    }}),
                                }};
                                valueType = AttributeValueTypeEnum.BOOL;
                                values = new Object[]{{
                                    add("maxime"),
                                    add("magnam"),
                                    add("temporibus"),
                                }};
                            }}),
                        }};
                        labels = new String[]{{
                            add("commodi"),
                            add("itaque"),
                            add("commodi"),
                        }};
                        languageCode = "totam";
                        latlng = new LatLng() {{
                            latitude = 9366.18;
                            longitude = 2672.07;
                        }};;
                        locationKey = new LocationKey() {{
                            explicitNoPlaceId = false;
                            placeId = "nam";
                            plusPageId = "vero";
                            requestId = "voluptatem";
                        }};;
                        locationName = "ipsam";
                        locationState = new LocationStateInput() {{
                            canDelete = false;
                            canUpdate = false;
                            hasPendingEdits = false;
                            hasPendingVerification = false;
                            isDisabled = false;
                            isDisconnected = false;
                            isDuplicate = false;
                            isGoogleUpdated = false;
                            isLocalPostApiDisabled = false;
                            isPendingReview = false;
                            isPublished = false;
                            isSuspended = false;
                            isVerified = false;
                            needsReverification = false;
                        }};;
                        metadata = new Metadata() {{
                            duplicate = new Duplicate() {{
                                access = DuplicateAccessEnum.ACCESS_UNKNOWN;
                                locationName = "alias";
                                placeId = "quasi";
                            }};;
                            mapsUrl = "non";
                            newReviewUrl = "maiores";
                        }};;
                        moreHours = new org.openapis.openapi.models.shared.MoreHours[]{{
                            add(new MoreHours() {{
                                hoursTypeId = "sint";
                                periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                        closeTime = "esse";
                                        openDay = TimePeriodOpenDayEnum.TUESDAY;
                                        openTime = "reprehenderit";
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                        closeTime = "quis";
                                        openDay = TimePeriodOpenDayEnum.THURSDAY;
                                        openTime = "accusamus";
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.SATURDAY;
                                        closeTime = "hic";
                                        openDay = TimePeriodOpenDayEnum.SUNDAY;
                                        openTime = "asperiores";
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                        closeTime = "voluptas";
                                        openDay = TimePeriodOpenDayEnum.SUNDAY;
                                        openTime = "delectus";
                                    }}),
                                }};
                            }}),
                            add(new MoreHours() {{
                                hoursTypeId = "quae";
                                periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                        closeTime = "laborum";
                                        openDay = TimePeriodOpenDayEnum.MONDAY;
                                        openTime = "velit";
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.THURSDAY;
                                        closeTime = "ipsum";
                                        openDay = TimePeriodOpenDayEnum.SATURDAY;
                                        openTime = "magni";
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.FRIDAY;
                                        closeTime = "repudiandae";
                                        openDay = TimePeriodOpenDayEnum.FRIDAY;
                                        openTime = "dolore";
                                    }}),
                                    add(new TimePeriod() {{
                                        closeDay = TimePeriodCloseDayEnum.WEDNESDAY;
                                        closeTime = "voluptate";
                                        openDay = TimePeriodOpenDayEnum.MONDAY;
                                        openTime = "dignissimos";
                                    }}),
                                }};
                            }}),
                        }};
                        name = "Angelica Leuschke";
                        openInfo = new OpenInfo() {{
                            canReopen = false;
                            openingDate = new Date() {{
                                day = 139072;
                                month = 974990;
                                year = 426904;
                            }};;
                            status = OpenInfoStatusEnum.OPEN;
                        }};;
                        priceLists = new org.openapis.openapi.models.shared.PriceList[]{{
                            add(new PriceList() {{
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        description = "facere";
                                        displayName = "libero";
                                        languageCode = "architecto";
                                    }}),
                                }};
                                priceListId = "voluptatibus";
                                sections = new org.openapis.openapi.models.shared.Section[]{{
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "aliquam";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "illo";
                                                        displayName = "accusantium";
                                                        languageCode = "vel";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "ea";
                                                    nanos = 107617;
                                                    units = "vero";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "excepturi";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "velit";
                                                        displayName = "ut";
                                                        languageCode = "perspiciatis";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "earum";
                                                        displayName = "dicta";
                                                        languageCode = "impedit";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "voluptatibus";
                                                    nanos = 610987;
                                                    units = "itaque";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "alias";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "itaque";
                                                        displayName = "velit";
                                                        languageCode = "laborum";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "non";
                                                        displayName = "dolor";
                                                        languageCode = "iusto";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "sit";
                                                    nanos = 39992;
                                                    units = "consequatur";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "officia";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "ea";
                                                        displayName = "quidem";
                                                        languageCode = "voluptas";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "facilis";
                                                        displayName = "placeat";
                                                        languageCode = "perspiciatis";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "expedita";
                                                        displayName = "deleniti";
                                                        languageCode = "a";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "voluptate";
                                                        displayName = "ullam";
                                                        languageCode = "unde";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "necessitatibus";
                                                    nanos = 654082;
                                                    units = "impedit";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "corporis";
                                                displayName = "est";
                                                languageCode = "error";
                                            }}),
                                            add(new Label() {{
                                                description = "esse";
                                                displayName = "labore";
                                                languageCode = "veritatis";
                                            }}),
                                        }};
                                        sectionId = "vero";
                                        sectionType = SectionSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                sourceUrl = "vitae";
                            }}),
                            add(new PriceList() {{
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        description = "dolorem";
                                        displayName = "ad";
                                        languageCode = "qui";
                                    }}),
                                }};
                                priceListId = "iste";
                                sections = new org.openapis.openapi.models.shared.Section[]{{
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "soluta";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "rem";
                                                        displayName = "dolorum";
                                                        languageCode = "odio";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "fugit";
                                                        displayName = "alias";
                                                        languageCode = "magni";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "vel";
                                                        displayName = "quae";
                                                        languageCode = "quae";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "modi";
                                                    nanos = 208253;
                                                    units = "exercitationem";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "itaque";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "ipsum";
                                                        displayName = "unde";
                                                        languageCode = "nulla";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "distinctio";
                                                    nanos = 802894;
                                                    units = "quia";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "nostrum";
                                                displayName = "omnis";
                                                languageCode = "libero";
                                            }}),
                                        }};
                                        sectionId = "dicta";
                                        sectionType = SectionSectionTypeEnum.FOOD;
                                    }}),
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "fugiat";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "quos";
                                                        displayName = "placeat";
                                                        languageCode = "sit";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "iusto";
                                                        displayName = "ipsa";
                                                        languageCode = "voluptates";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "inventore";
                                                        displayName = "aperiam";
                                                        languageCode = "totam";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "dolore";
                                                    nanos = 755106;
                                                    units = "distinctio";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "voluptatem";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "esse";
                                                        displayName = "dolores";
                                                        languageCode = "assumenda";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "beatae";
                                                        displayName = "est";
                                                        languageCode = "facere";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "corrupti";
                                                    nanos = 473143;
                                                    units = "provident";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "accusamus";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "tempore";
                                                        displayName = "sint";
                                                        languageCode = "ea";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "autem";
                                                        displayName = "ipsam";
                                                        languageCode = "rerum";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "laudantium";
                                                        displayName = "corporis";
                                                        languageCode = "officiis";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "voluptatibus";
                                                        displayName = "cum";
                                                        languageCode = "at";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "alias";
                                                    nanos = 156653;
                                                    units = "quidem";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "repudiandae";
                                                displayName = "accusantium";
                                                languageCode = "expedita";
                                            }}),
                                            add(new Label() {{
                                                description = "officiis";
                                                displayName = "eos";
                                                languageCode = "quibusdam";
                                            }}),
                                            add(new Label() {{
                                                description = "odio";
                                                displayName = "praesentium";
                                                languageCode = "odit";
                                            }}),
                                        }};
                                        sectionId = "explicabo";
                                        sectionType = SectionSectionTypeEnum.FOOD;
                                    }}),
                                }};
                                sourceUrl = "error";
                            }}),
                            add(new PriceList() {{
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        description = "adipisci";
                                        displayName = "recusandae";
                                        languageCode = "similique";
                                    }}),
                                    add(new Label() {{
                                        description = "ut";
                                        displayName = "quidem";
                                        languageCode = "quis";
                                    }}),
                                    add(new Label() {{
                                        description = "beatae";
                                        displayName = "unde";
                                        languageCode = "molestiae";
                                    }}),
                                    add(new Label() {{
                                        description = "delectus";
                                        displayName = "cupiditate";
                                        languageCode = "fugit";
                                    }}),
                                }};
                                priceListId = "numquam";
                                sections = new org.openapis.openapi.models.shared.Section[]{{
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "at";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "dignissimos";
                                                        displayName = "optio";
                                                        languageCode = "necessitatibus";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "corporis";
                                                        displayName = "qui";
                                                        languageCode = "expedita";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "voluptatum";
                                                        displayName = "cupiditate";
                                                        languageCode = "minima";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "placeat";
                                                    nanos = 316542;
                                                    units = "neque";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "minus";
                                                displayName = "eum";
                                                languageCode = "modi";
                                            }}),
                                            add(new Label() {{
                                                description = "corporis";
                                                displayName = "magnam";
                                                languageCode = "voluptates";
                                            }}),
                                        }};
                                        sectionId = "maiores";
                                        sectionType = SectionSectionTypeEnum.SERVICES;
                                    }}),
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "libero";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "labore";
                                                        displayName = "totam";
                                                        languageCode = "occaecati";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "voluptas";
                                                    nanos = 779180;
                                                    units = "velit";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "fuga";
                                                displayName = "nostrum";
                                                languageCode = "est";
                                            }}),
                                            add(new Label() {{
                                                description = "impedit";
                                                displayName = "delectus";
                                                languageCode = "tempore";
                                            }}),
                                            add(new Label() {{
                                                description = "vero";
                                                displayName = "odit";
                                                languageCode = "repellat";
                                            }}),
                                            add(new Label() {{
                                                description = "pariatur";
                                                displayName = "nemo";
                                                languageCode = "reprehenderit";
                                            }}),
                                        }};
                                        sectionId = "aperiam";
                                        sectionType = SectionSectionTypeEnum.FOOD;
                                    }}),
                                }};
                                sourceUrl = "minima";
                            }}),
                            add(new PriceList() {{
                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                    add(new Label() {{
                                        description = "ducimus";
                                        displayName = "excepturi";
                                        languageCode = "dolores";
                                    }}),
                                    add(new Label() {{
                                        description = "error";
                                        displayName = "veritatis";
                                        languageCode = "ducimus";
                                    }}),
                                }};
                                priceListId = "voluptate";
                                sections = new org.openapis.openapi.models.shared.Section[]{{
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "similique";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "ex";
                                                        displayName = "quaerat";
                                                        languageCode = "commodi";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "officiis";
                                                        displayName = "placeat";
                                                        languageCode = "quidem";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "exercitationem";
                                                        displayName = "quam";
                                                        languageCode = "dolorem";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "modi";
                                                        displayName = "ipsa";
                                                        languageCode = "sint";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "vero";
                                                    nanos = 194901;
                                                    units = "repudiandae";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "cum";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "earum";
                                                        displayName = "veniam";
                                                        languageCode = "animi";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "dolores";
                                                    nanos = 724994;
                                                    units = "dicta";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "consequuntur";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "nobis";
                                                        displayName = "ipsa";
                                                        languageCode = "ducimus";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "maiores";
                                                        displayName = "veritatis";
                                                        languageCode = "quasi";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "laboriosam";
                                                        displayName = "pariatur";
                                                        languageCode = "libero";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "excepturi";
                                                        displayName = "occaecati";
                                                        languageCode = "nemo";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "aliquam";
                                                    nanos = 342342;
                                                    units = "doloribus";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "eligendi";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "enim";
                                                        displayName = "hic";
                                                        languageCode = "animi";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "quas";
                                                        displayName = "totam";
                                                        languageCode = "molestias";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "odio";
                                                        displayName = "eaque";
                                                        languageCode = "saepe";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "architecto";
                                                    nanos = 554645;
                                                    units = "iste";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "tempore";
                                                displayName = "libero";
                                                languageCode = "velit";
                                            }}),
                                            add(new Label() {{
                                                description = "doloremque";
                                                displayName = "delectus";
                                                languageCode = "impedit";
                                            }}),
                                            add(new Label() {{
                                                description = "cum";
                                                displayName = "ipsum";
                                                languageCode = "adipisci";
                                            }}),
                                            add(new Label() {{
                                                description = "saepe";
                                                displayName = "deserunt";
                                                languageCode = "doloremque";
                                            }}),
                                        }};
                                        sectionId = "quis";
                                        sectionType = SectionSectionTypeEnum.SECTION_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "architecto";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "molestiae";
                                                        displayName = "eligendi";
                                                        languageCode = "possimus";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "non";
                                                        displayName = "magnam";
                                                        languageCode = "itaque";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "sed";
                                                        displayName = "asperiores";
                                                        languageCode = "veniam";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "consequuntur";
                                                    nanos = 813880;
                                                    units = "laudantium";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "odit";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "amet";
                                                        displayName = "exercitationem";
                                                        languageCode = "ab";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "velit";
                                                        displayName = "facilis";
                                                        languageCode = "tempore";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "nisi";
                                                        displayName = "voluptatibus";
                                                        languageCode = "quaerat";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "blanditiis";
                                                        displayName = "distinctio";
                                                        languageCode = "nisi";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "quis";
                                                    nanos = 391933;
                                                    units = "libero";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "minus";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "facilis";
                                                        displayName = "ipsum";
                                                        languageCode = "ad";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "voluptatibus";
                                                        displayName = "voluptatibus";
                                                        languageCode = "consequuntur";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "debitis";
                                                        displayName = "labore";
                                                        languageCode = "rerum";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "eos";
                                                        displayName = "reprehenderit";
                                                        languageCode = "nostrum";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "neque";
                                                    nanos = 480061;
                                                    units = "est";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "eligendi";
                                                displayName = "fugiat";
                                                languageCode = "unde";
                                            }}),
                                            add(new Label() {{
                                                description = "officiis";
                                                displayName = "ducimus";
                                                languageCode = "dolor";
                                            }}),
                                            add(new Label() {{
                                                description = "dicta";
                                                displayName = "error";
                                                languageCode = "porro";
                                            }}),
                                        }};
                                        sectionId = "vitae";
                                        sectionType = SectionSectionTypeEnum.FOOD;
                                    }}),
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "fugiat";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "aspernatur";
                                                        displayName = "enim";
                                                        languageCode = "delectus";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "iusto";
                                                        displayName = "dignissimos";
                                                        languageCode = "libero";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "illo";
                                                    nanos = 69182;
                                                    units = "incidunt";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "accusamus";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "tempore";
                                                        displayName = "veniam";
                                                        languageCode = "eos";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "reiciendis";
                                                        displayName = "earum";
                                                        languageCode = "reprehenderit";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "praesentium";
                                                        displayName = "nemo";
                                                        languageCode = "repellat";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "quisquam";
                                                        displayName = "sequi";
                                                        languageCode = "nihil";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "deleniti";
                                                    nanos = 75566;
                                                    units = "labore";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "aliquam";
                                                displayName = "quisquam";
                                                languageCode = "provident";
                                            }}),
                                            add(new Label() {{
                                                description = "laudantium";
                                                displayName = "repudiandae";
                                                languageCode = "consequatur";
                                            }}),
                                            add(new Label() {{
                                                description = "maxime";
                                                displayName = "aspernatur";
                                                languageCode = "nam";
                                            }}),
                                            add(new Label() {{
                                                description = "expedita";
                                                displayName = "quas";
                                                languageCode = "provident";
                                            }}),
                                        }};
                                        sectionId = "repudiandae";
                                        sectionType = SectionSectionTypeEnum.SERVICES;
                                    }}),
                                    add(new Section() {{
                                        items = new org.openapis.openapi.models.shared.Item[]{{
                                            add(new Item() {{
                                                itemId = "corporis";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "similique";
                                                        displayName = "repellendus";
                                                        languageCode = "iure";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "dolorem";
                                                        displayName = "commodi";
                                                        languageCode = "impedit";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "commodi";
                                                        displayName = "aut";
                                                        languageCode = "voluptatem";
                                                    }}),
                                                    add(new Label() {{
                                                        description = "ad";
                                                        displayName = "quae";
                                                        languageCode = "amet";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "illum";
                                                    nanos = 506863;
                                                    units = "quidem";
                                                }};
                                            }}),
                                            add(new Item() {{
                                                itemId = "cum";
                                                labels = new org.openapis.openapi.models.shared.Label[]{{
                                                    add(new Label() {{
                                                        description = "quasi";
                                                        displayName = "dicta";
                                                        languageCode = "laudantium";
                                                    }}),
                                                }};
                                                price = new Money() {{
                                                    currencyCode = "doloremque";
                                                    nanos = 938412;
                                                    units = "iusto";
                                                }};
                                            }}),
                                        }};
                                        labels = new org.openapis.openapi.models.shared.Label[]{{
                                            add(new Label() {{
                                                description = "provident";
                                                displayName = "dolorum";
                                                languageCode = "necessitatibus";
                                            }}),
                                        }};
                                        sectionId = "provident";
                                        sectionType = SectionSectionTypeEnum.SERVICES;
                                    }}),
                                }};
                                sourceUrl = "consequatur";
                            }}),
                        }};
                        primaryCategory = new CategoryInput() {{
                            categoryId = "nemo";
                            displayName = "molestiae";
                        }};;
                        primaryPhone = "itaque";
                        profile = new Profile() {{
                            description = "facilis";
                        }};;
                        regularHours = new BusinessHours() {{
                            periods = new org.openapis.openapi.models.shared.TimePeriod[]{{
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    closeTime = "sint";
                                    openDay = TimePeriodOpenDayEnum.SUNDAY;
                                    openTime = "eos";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.THURSDAY;
                                    closeTime = "dicta";
                                    openDay = TimePeriodOpenDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                    openTime = "velit";
                                }}),
                                add(new TimePeriod() {{
                                    closeDay = TimePeriodCloseDayEnum.MONDAY;
                                    closeTime = "sunt";
                                    openDay = TimePeriodOpenDayEnum.SUNDAY;
                                    openTime = "dolor";
                                }}),
                            }};
                        }};;
                        relationshipData = new RelationshipData() {{
                            parentChain = "occaecati";
                        }};;
                        serviceArea = new ServiceAreaBusiness() {{
                            businessType = ServiceAreaBusinessBusinessTypeEnum.CUSTOMER_LOCATION_ONLY;
                            places = new Places() {{
                                placeInfos = new org.openapis.openapi.models.shared.PlaceInfo[]{{
                                    add(new PlaceInfo() {{
                                        name = "Leroy Schinner Jr.";
                                        placeId = "rerum";
                                    }}),
                                }};
                            }};;
                            radius = new PointRadius() {{
                                latlng = new LatLng() {{
                                    latitude = 4116.15;
                                    longitude = 467.91;
                                }};;
                                radiusKm = 4894.59;
                            }};;
                        }};;
                        specialHours = new SpecialHours() {{
                            specialHourPeriods = new org.openapis.openapi.models.shared.SpecialHourPeriod[]{{
                                add(new SpecialHourPeriod() {{
                                    closeTime = "velit";
                                    endDate = new Date() {{
                                        day = 784115;
                                        month = 588639;
                                        year = 231382;
                                    }};
                                    isClosed = false;
                                    openTime = "eligendi";
                                    startDate = new Date() {{
                                        day = 490110;
                                        month = 235834;
                                        year = 744101;
                                    }};
                                }}),
                                add(new SpecialHourPeriod() {{
                                    closeTime = "natus";
                                    endDate = new Date() {{
                                        day = 839807;
                                        month = 639622;
                                        year = 228857;
                                    }};
                                    isClosed = false;
                                    openTime = "tenetur";
                                    startDate = new Date() {{
                                        day = 133949;
                                        month = 778276;
                                        year = 931077;
                                    }};
                                }}),
                                add(new SpecialHourPeriod() {{
                                    closeTime = "illum";
                                    endDate = new Date() {{
                                        day = 670762;
                                        month = 490420;
                                        year = 876285;
                                    }};
                                    isClosed = false;
                                    openTime = "qui";
                                    startDate = new Date() {{
                                        day = 232383;
                                        month = 995816;
                                        year = 128696;
                                    }};
                                }}),
                                add(new SpecialHourPeriod() {{
                                    closeTime = "explicabo";
                                    endDate = new Date() {{
                                        day = 350325;
                                        month = 471457;
                                        year = 252700;
                                    }};
                                    isClosed = false;
                                    openTime = "ab";
                                    startDate = new Date() {{
                                        day = 72754;
                                        month = 943851;
                                        year = 644479;
                                    }};
                                }}),
                            }};
                        }};;
                        storeCode = "delectus";
                        websiteUrl = "non";
                    }};;
                    query = "distinctio";
                    resultCount = 450224;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "repudiandae";
                key = "modi";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "accusamus";
                uploadProtocol = "rem";
            }};            

            MybusinessGoogleLocationsSearchResponse res = sdk.googleLocations.mybusinessGoogleLocationsSearch(req);

            if (res.searchGoogleLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
