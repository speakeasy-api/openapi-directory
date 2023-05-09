# ads

### Available Operations

* [dfareportingAdsGet](#dfareportingadsget) - Gets one ad by ID.
* [dfareportingAdsInsert](#dfareportingadsinsert) - Inserts a new ad.
* [dfareportingAdsList](#dfareportingadslist) - Retrieves a list of ads, possibly filtered. This method supports paging.
* [dfareportingAdsPatch](#dfareportingadspatch) - Updates an existing ad. This method supports patch semantics.
* [dfareportingAdsUpdate](#dfareportingadsupdate) - Updates an existing ad.

## dfareportingAdsGet

Gets one ad by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdsGetRequest;
import org.openapis.openapi.models.operations.DfareportingAdsGetResponse;
import org.openapis.openapi.models.operations.DfareportingAdsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdsGetRequest req = new DfareportingAdsGetRequest("quaerat", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "eos";
                key = "atque";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ab";
                uploadProtocol = "soluta";
            }};            

            DfareportingAdsGetResponse res = sdk.ads.dfareportingAdsGet(req, new DfareportingAdsGetSecurity("dolorum", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ad != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdsInsert

Inserts a new ad.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingAdsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingAdsInsertSecurity;
import org.openapis.openapi.models.shared.Ad;
import org.openapis.openapi.models.shared.AdCompatibilityEnum;
import org.openapis.openapi.models.shared.AdTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Browser;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.ClickThroughUrl;
import org.openapis.openapi.models.shared.ClickThroughUrlSuffixProperties;
import org.openapis.openapi.models.shared.CompanionClickThroughOverride;
import org.openapis.openapi.models.shared.ConnectionType;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.CreativeAssignment;
import org.openapis.openapi.models.shared.CreativeGroupAssignment;
import org.openapis.openapi.models.shared.CreativeGroupAssignmentCreativeGroupNumberEnum;
import org.openapis.openapi.models.shared.CreativeRotation;
import org.openapis.openapi.models.shared.CreativeRotationTypeEnum;
import org.openapis.openapi.models.shared.CreativeRotationWeightCalculationStrategyEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum;
import org.openapis.openapi.models.shared.DefaultClickThroughEventTagProperties;
import org.openapis.openapi.models.shared.DeliverySchedule;
import org.openapis.openapi.models.shared.DeliverySchedulePriorityEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTagOverride;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.GeoTargeting;
import org.openapis.openapi.models.shared.KeyValueTargetingExpression;
import org.openapis.openapi.models.shared.Language;
import org.openapis.openapi.models.shared.LanguageTargeting;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.ListTargetingExpression;
import org.openapis.openapi.models.shared.Metro;
import org.openapis.openapi.models.shared.MobileCarrier;
import org.openapis.openapi.models.shared.OperatingSystem;
import org.openapis.openapi.models.shared.OperatingSystemVersion;
import org.openapis.openapi.models.shared.PlacementAssignment;
import org.openapis.openapi.models.shared.PlatformType;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.RichMediaExitOverride;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdsInsertRequest req = new DfareportingAdsInsertRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                ad = new Ad() {{
                    accountId = "deleniti";
                    active = false;
                    advertiserId = "omnis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "necessitatibus";
                        etag = "distinctio";
                        id = "f737ae42-03ce-45e6-a95d-8a0d446ce2af";
                        kind = "esse";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "iusto";
                    }};;
                    archived = false;
                    audienceSegmentId = "ipsum";
                    campaignId = "quisquam";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "tenetur";
                        etag = "amet";
                        id = "be453f87-0b32-46b5-a734-29cdb1a8422b";
                        kind = "facilis";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quam";
                    }};;
                    clickThroughUrl = new ClickThroughUrl() {{
                        computedClickThroughUrl = "molestias";
                        customClickThroughUrl = "temporibus";
                        defaultLandingPage = false;
                        landingPageId = "qui";
                    }};;
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "neque";
                        overrideInheritedSuffix = false;
                    }};;
                    comments = "fugit";
                    compatibility = AdCompatibilityEnum.DISPLAY;
                    createInfo = new LastModifiedInfo() {{
                        time = "odio";
                    }};;
                    creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "ullam";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                        }}),
                    }};
                    creativeRotation = new CreativeRotation() {{
                        creativeAssignments = new org.openapis.openapi.models.shared.CreativeAssignment[]{{
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "voluptatem";
                                    customClickThroughUrl = "cumque";
                                    defaultLandingPage = false;
                                    landingPageId = "soluta";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "et";
                                            customClickThroughUrl = "saepe";
                                            defaultLandingPage = false;
                                            landingPageId = "ipsum";
                                        }};
                                        creativeId = "veritatis";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "nobis";
                                            customClickThroughUrl = "quos";
                                            defaultLandingPage = false;
                                            landingPageId = "tempore";
                                        }};
                                        creativeId = "cupiditate";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "aperiam";
                                            customClickThroughUrl = "delectus";
                                            defaultLandingPage = false;
                                            landingPageId = "dolorem";
                                        }};
                                        creativeId = "dolore";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "adipisci";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "architecto";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                                    }}),
                                }};
                                creativeId = "aut";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "quas";
                                    etag = "itaque";
                                    id = "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab";
                                    kind = "vero";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "dolore";
                                }};
                                endTime = OffsetDateTime.parse("2020-06-15T09:45:48.083Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "natus";
                                            customClickThroughUrl = "impedit";
                                            defaultLandingPage = false;
                                            landingPageId = "aut";
                                        }};
                                        enabled = false;
                                        exitId = "voluptatibus";
                                    }}),
                                }};
                                sequence = 347233;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-07-22T18:51:28.663Z");
                                weight = 780427;
                            }}),
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "maiores";
                                    customClickThroughUrl = "doloribus";
                                    defaultLandingPage = false;
                                    landingPageId = "iusto";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "ducimus";
                                            customClickThroughUrl = "alias";
                                            defaultLandingPage = false;
                                            landingPageId = "officia";
                                        }};
                                        creativeId = "tempora";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "ipsam";
                                            customClickThroughUrl = "ea";
                                            defaultLandingPage = false;
                                            landingPageId = "aspernatur";
                                        }};
                                        creativeId = "vel";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "possimus";
                                            customClickThroughUrl = "magnam";
                                            defaultLandingPage = false;
                                            landingPageId = "ratione";
                                        }};
                                        creativeId = "ex";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "laudantium";
                                            customClickThroughUrl = "dicta";
                                            defaultLandingPage = false;
                                            landingPageId = "dolor";
                                        }};
                                        creativeId = "maiores";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "ex";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                }};
                                creativeId = "excepturi";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "voluptatibus";
                                    etag = "nostrum";
                                    id = "fce6c556-146c-43e2-90fb-008c42e141aa";
                                    kind = "placeat";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "eum";
                                }};
                                endTime = OffsetDateTime.parse("2022-04-01T11:18:05.592Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "assumenda";
                                            customClickThroughUrl = "nulla";
                                            defaultLandingPage = false;
                                            landingPageId = "voluptas";
                                        }};
                                        enabled = false;
                                        exitId = "libero";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "quasi";
                                            customClickThroughUrl = "tempora";
                                            defaultLandingPage = false;
                                            landingPageId = "numquam";
                                        }};
                                        enabled = false;
                                        exitId = "explicabo";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "provident";
                                            customClickThroughUrl = "ipsa";
                                            defaultLandingPage = false;
                                            landingPageId = "molestiae";
                                        }};
                                        enabled = false;
                                        exitId = "magnam";
                                    }}),
                                }};
                                sequence = 487935;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-07-17T15:24:44.492Z");
                                weight = 456141;
                            }}),
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "rem";
                                    customClickThroughUrl = "fuga";
                                    defaultLandingPage = false;
                                    landingPageId = "reprehenderit";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "fugiat";
                                            customClickThroughUrl = "ut";
                                            defaultLandingPage = false;
                                            landingPageId = "eum";
                                        }};
                                        creativeId = "suscipit";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "assumenda";
                                            customClickThroughUrl = "eos";
                                            defaultLandingPage = false;
                                            landingPageId = "praesentium";
                                        }};
                                        creativeId = "quisquam";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "veritatis";
                                            customClickThroughUrl = "ipsa";
                                            defaultLandingPage = false;
                                            landingPageId = "id";
                                        }};
                                        creativeId = "quidem";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "quo";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                }};
                                creativeId = "quo";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "fuga";
                                    etag = "eius";
                                    id = "251904e5-23c7-4e0b-8717-8e4796f2a70c";
                                    kind = "eum";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "praesentium";
                                }};
                                endTime = OffsetDateTime.parse("2022-06-19T07:05:05.913Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "fuga";
                                            customClickThroughUrl = "mollitia";
                                            defaultLandingPage = false;
                                            landingPageId = "incidunt";
                                        }};
                                        enabled = false;
                                        exitId = "atque";
                                    }}),
                                }};
                                sequence = 128860;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-08-10T16:09:39.108Z");
                                weight = 147014;
                            }}),
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "sapiente";
                                    customClickThroughUrl = "consequuntur";
                                    defaultLandingPage = false;
                                    landingPageId = "ratione";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "saepe";
                                            customClickThroughUrl = "occaecati";
                                            defaultLandingPage = false;
                                            landingPageId = "atque";
                                        }};
                                        creativeId = "et";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "eveniet";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "veritatis";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                                    }}),
                                }};
                                creativeId = "quod";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "nam";
                                    etag = "vero";
                                    id = "61e6b7b9-5bc0-4ab3-820c-4f3789fd871f";
                                    kind = "error";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "pariatur";
                                }};
                                endTime = OffsetDateTime.parse("2022-07-12T09:25:25.257Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "asperiores";
                                            customClickThroughUrl = "facere";
                                            defaultLandingPage = false;
                                            landingPageId = "veritatis";
                                        }};
                                        enabled = false;
                                        exitId = "consequuntur";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "quasi";
                                            customClickThroughUrl = "similique";
                                            defaultLandingPage = false;
                                            landingPageId = "culpa";
                                        }};
                                        enabled = false;
                                        exitId = "aliquid";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "tenetur";
                                            customClickThroughUrl = "quae";
                                            defaultLandingPage = false;
                                            landingPageId = "earum";
                                        }};
                                        enabled = false;
                                        exitId = "vel";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "in";
                                            customClickThroughUrl = "eius";
                                            defaultLandingPage = false;
                                            landingPageId = "libero";
                                        }};
                                        enabled = false;
                                        exitId = "illum";
                                    }}),
                                }};
                                sequence = 742238;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-09-10T22:48:07.154Z");
                                weight = 958983;
                            }}),
                        }};
                        creativeOptimizationConfigurationId = "dicta";
                        type = CreativeRotationTypeEnum.CREATIVE_ROTATION_TYPE_SEQUENTIAL;
                        weightCalculationStrategy = CreativeRotationWeightCalculationStrategyEnum.WEIGHT_STRATEGY_CUSTOM;
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(185232),
                            add(845358),
                            add(401259),
                        }};
                        userLocalTime = false;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "deleniti";
                        overrideInheritedEventTag = false;
                    }};;
                    deliverySchedule = new DeliverySchedule() {{
                        frequencyCap = new FrequencyCap() {{
                            duration = "itaque";
                            impressions = "dolorum";
                        }};;
                        hardCutoff = false;
                        impressionRatio = "architecto";
                        priority = DeliverySchedulePriorityEnum.AD_PRIORITY10;
                    }};;
                    dynamicClickTracker = false;
                    endTime = OffsetDateTime.parse("2022-09-15T03:59:52.153Z");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "et";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "voluptate";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "ipsa";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "minima";
                        }}),
                    }};
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "DJ";
                                countryDartId = "adipisci";
                                dartId = "iste";
                                kind = "temporibus";
                                metroCode = "accusantium";
                                metroDmaId = "rem";
                                name = "Marsha Keebler IV";
                                regionCode = "non";
                                regionDartId = "voluptatem";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "ML";
                                dartId = "numquam";
                                kind = "impedit";
                                name = "Loretta Anderson DVM";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "DO";
                                countryDartId = "voluptatibus";
                                dartId = "voluptas";
                                dmaId = "asperiores";
                                kind = "aperiam";
                                metroCode = "ea";
                                name = "Kathryn Sipes";
                            }}),
                            add(new Metro() {{
                                countryCode = "KW";
                                countryDartId = "officia";
                                dartId = "asperiores";
                                dmaId = "nemo";
                                kind = "quae";
                                metroCode = "quaerat";
                                name = "Mrs. Forrest Green";
                            }}),
                            add(new Metro() {{
                                countryCode = "NI";
                                countryDartId = "suscipit";
                                dartId = "velit";
                                dmaId = "culpa";
                                kind = "est";
                                metroCode = "recusandae";
                                name = "Nicolas Kassulke";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "labore";
                                countryCode = "SN";
                                countryDartId = "facilis";
                                id = "b675fd5e-60b3-475e-94f6-fbee41f33317";
                                kind = "a";
                            }}),
                            add(new PostalCode() {{
                                code = "debitis";
                                countryCode = "DK";
                                countryDartId = "corporis";
                                id = "b60eb1ea-4265-455b-a3c2-8744ed53b88f";
                                kind = "nesciunt";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "MA";
                                countryDartId = "pariatur";
                                dartId = "totam";
                                kind = "hic";
                                name = "Della Bailey";
                                regionCode = "reiciendis";
                            }}),
                            add(new Region() {{
                                countryCode = "BT";
                                countryDartId = "asperiores";
                                dartId = "facilis";
                                kind = "voluptate";
                                name = "Raymond Moore";
                                regionCode = "sed";
                            }}),
                            add(new Region() {{
                                countryCode = "JM";
                                countryDartId = "commodi";
                                dartId = "quidem";
                                kind = "explicabo";
                                name = "Geneva Bradtke";
                                regionCode = "debitis";
                            }}),
                        }};
                    }};;
                    id = "illo";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "reiciendis";
                        etag = "perferendis";
                        id = "8f4294e3-698f-4447-b603-e8b445e80ca5";
                        kind = "minima";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "reiciendis";
                    }};;
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "nulla";
                    }};;
                    kind = "magni";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "saepe";
                                kind = "numquam";
                                languageCode = "veniam";
                                name = "Cecelia Braun";
                            }}),
                        }};
                    }};;
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "praesentium";
                    }};;
                    name = "Lester Parisian";
                    placementAssignments = new org.openapis.openapi.models.shared.PlacementAssignment[]{{
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "expedita";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "debitis";
                                etag = "neque";
                                id = "a5aa8e48-24d0-4ab4-8750-88e51862065e";
                                kind = "error";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "incidunt";
                            }};
                            sslRequired = false;
                        }}),
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "reiciendis";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "dolorem";
                                etag = "harum";
                                id = "1194b8ab-f603-4a79-b9df-e0ab7da8a50c";
                                kind = "repudiandae";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "atque";
                            }};
                            sslRequired = false;
                        }}),
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "reprehenderit";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "asperiores";
                                etag = "totam";
                                id = "6bc173d6-89ee-4e95-a6f8-d986e881ead4";
                                kind = "reiciendis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "repudiandae";
                            }};
                            sslRequired = false;
                        }}),
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "dicta";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "accusantium";
                                etag = "beatae";
                                id = "2563f94e-29e9-473e-922a-57a15be3e060";
                                kind = "totam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "molestiae";
                            }};
                            sslRequired = false;
                        }}),
                    }};
                    remarketingListExpression = new ListTargetingExpression() {{
                        expression = "eveniet";
                    }};;
                    size = new Size() {{
                        height = 184362;
                        iab = false;
                        id = "cum";
                        kind = "iure";
                        width = 898063;
                    }};;
                    sslCompliant = false;
                    sslRequired = false;
                    startTime = OffsetDateTime.parse("2022-04-30T12:10:44.049Z");
                    subaccountId = "distinctio";
                    targetingTemplateId = "voluptatum";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "aliquam";
                                dartId = "ad";
                                kind = "repellat";
                                majorVersion = "alias";
                                minorVersion = "corporis";
                                name = "Christian O'Conner DVM";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "reiciendis";
                                dartId = "dolores";
                                kind = "id";
                                majorVersion = "minima";
                                minorVersion = "dolore";
                                name = "Danny Berge";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "quaerat";
                                dartId = "molestiae";
                                kind = "ex";
                                majorVersion = "ut";
                                minorVersion = "culpa";
                                name = "Raquel Larkin";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "esse";
                                kind = "provident";
                                name = "Natalie Witting";
                            }}),
                            add(new ConnectionType() {{
                                id = "ullam";
                                kind = "quasi";
                                name = "Gordon O'Hara";
                            }}),
                            add(new ConnectionType() {{
                                id = "animi";
                                kind = "ex";
                                name = "Ruth Zulauf";
                            }}),
                            add(new ConnectionType() {{
                                id = "in";
                                kind = "nam";
                                name = "Oliver Osinski";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "MF";
                                countryDartId = "officiis";
                                id = "sapiente";
                                kind = "cumque";
                                name = "Luz Goldner Sr.";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "RU";
                                countryDartId = "quae";
                                id = "perferendis";
                                kind = "velit";
                                name = "Agnes Gibson";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "SA";
                                countryDartId = "eos";
                                id = "sapiente";
                                kind = "eum";
                                name = "Cathy Breitenberg";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "UY";
                                countryDartId = "soluta";
                                id = "hic";
                                kind = "illum";
                                name = "Sonja Metz";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "porro";
                                kind = "suscipit";
                                majorVersion = "dolorem";
                                minorVersion = "fugit";
                                name = "Grant Dickens";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "nulla";
                                    desktop = false;
                                    kind = "consequatur";
                                    mobile = false;
                                    name = "Catherine Kuphal";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "suscipit";
                                kind = "adipisci";
                                majorVersion = "quasi";
                                minorVersion = "magni";
                                name = "Mrs. Orville Treutel";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "molestiae";
                                    desktop = false;
                                    kind = "dicta";
                                    mobile = false;
                                    name = "Tamara Lang";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "architecto";
                                desktop = false;
                                kind = "fugiat";
                                mobile = false;
                                name = "Cheryl Kub";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "ex";
                                desktop = false;
                                kind = "consectetur";
                                mobile = false;
                                name = "Mrs. Melissa Osinski";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "aliquid";
                                kind = "officia";
                                name = "Jeanne Bahringer";
                            }}),
                            add(new PlatformType() {{
                                id = "iste";
                                kind = "id";
                                name = "Isabel Schuster";
                            }}),
                            add(new PlatformType() {{
                                id = "laborum";
                                kind = "libero";
                                name = "Dr. Cassandra Halvorson";
                            }}),
                        }};
                    }};;
                    type = AdTypeEnum.AD_SERVING_TRACKING;
                }};;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "expedita";
                key = "voluptatem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "aliquid";
                uploadProtocol = "beatae";
            }};            

            DfareportingAdsInsertResponse res = sdk.ads.dfareportingAdsInsert(req, new DfareportingAdsInsertSecurity("voluptatum", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ad != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdsList

Retrieves a list of ads, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdsListCompatibilityEnum;
import org.openapis.openapi.models.operations.DfareportingAdsListRequest;
import org.openapis.openapi.models.operations.DfareportingAdsListResponse;
import org.openapis.openapi.models.operations.DfareportingAdsListSecurity;
import org.openapis.openapi.models.operations.DfareportingAdsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingAdsListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingAdsListTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdsListRequest req = new DfareportingAdsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                active = false;
                advertiserId = "culpa";
                alt = AltEnum.JSON;
                archived = false;
                audienceSegmentIds = new String[]{{
                    add("officiis"),
                    add("architecto"),
                    add("fuga"),
                    add("pariatur"),
                }};
                callback = "debitis";
                campaignIds = new String[]{{
                    add("alias"),
                }};
                compatibility = DfareportingAdsListCompatibilityEnum.APP_INTERSTITIAL;
                creativeIds = new String[]{{
                    add("ex"),
                    add("sapiente"),
                    add("rem"),
                    add("minus"),
                }};
                creativeOptimizationConfigurationIds = new String[]{{
                    add("asperiores"),
                    add("ratione"),
                }};
                dynamicClickTracker = false;
                fields = "ullam";
                ids = new String[]{{
                    add("illum"),
                }};
                key = "totam";
                landingPageIds = new String[]{{
                    add("quibusdam"),
                    add("nam"),
                    add("ipsam"),
                    add("culpa"),
                }};
                maxResults = 222864L;
                oauthToken = "aliquam";
                overriddenEventTagId = "inventore";
                pageToken = "deleniti";
                placementIds = new String[]{{
                    add("tempora"),
                }};
                prettyPrint = false;
                quotaUser = "dolor";
                remarketingListIds = new String[]{{
                    add("architecto"),
                }};
                searchString = "sit";
                sizeIds = new String[]{{
                    add("fugit"),
                    add("ab"),
                }};
                sortField = DfareportingAdsListSortFieldEnum.NAME;
                sortOrder = DfareportingAdsListSortOrderEnum.ASCENDING;
                sslCompliant = false;
                sslRequired = false;
                type = new org.openapis.openapi.models.operations.DfareportingAdsListTypeEnum[]{{
                    add(DfareportingAdsListTypeEnum.AD_SERVING_BRAND_SAFE_AD),
                }};
                uploadType = "ipsam";
                uploadProtocol = "consequuntur";
            }};            

            DfareportingAdsListResponse res = sdk.ads.dfareportingAdsList(req, new DfareportingAdsListSecurity("ipsa", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdsPatch

Updates an existing ad. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingAdsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingAdsPatchSecurity;
import org.openapis.openapi.models.shared.Ad;
import org.openapis.openapi.models.shared.AdCompatibilityEnum;
import org.openapis.openapi.models.shared.AdTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Browser;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.ClickThroughUrl;
import org.openapis.openapi.models.shared.ClickThroughUrlSuffixProperties;
import org.openapis.openapi.models.shared.CompanionClickThroughOverride;
import org.openapis.openapi.models.shared.ConnectionType;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.CreativeAssignment;
import org.openapis.openapi.models.shared.CreativeGroupAssignment;
import org.openapis.openapi.models.shared.CreativeGroupAssignmentCreativeGroupNumberEnum;
import org.openapis.openapi.models.shared.CreativeRotation;
import org.openapis.openapi.models.shared.CreativeRotationTypeEnum;
import org.openapis.openapi.models.shared.CreativeRotationWeightCalculationStrategyEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum;
import org.openapis.openapi.models.shared.DefaultClickThroughEventTagProperties;
import org.openapis.openapi.models.shared.DeliverySchedule;
import org.openapis.openapi.models.shared.DeliverySchedulePriorityEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTagOverride;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.GeoTargeting;
import org.openapis.openapi.models.shared.KeyValueTargetingExpression;
import org.openapis.openapi.models.shared.Language;
import org.openapis.openapi.models.shared.LanguageTargeting;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.ListTargetingExpression;
import org.openapis.openapi.models.shared.Metro;
import org.openapis.openapi.models.shared.MobileCarrier;
import org.openapis.openapi.models.shared.OperatingSystem;
import org.openapis.openapi.models.shared.OperatingSystemVersion;
import org.openapis.openapi.models.shared.PlacementAssignment;
import org.openapis.openapi.models.shared.PlatformType;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.RichMediaExitOverride;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdsPatchRequest req = new DfareportingAdsPatchRequest("eveniet", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                ad = new Ad() {{
                    accountId = "esse";
                    active = false;
                    advertiserId = "necessitatibus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sed";
                        etag = "veniam";
                        id = "3b668451-c6c6-4e20-9e16-deab3fec9578";
                        kind = "officia";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "numquam";
                    }};;
                    archived = false;
                    audienceSegmentId = "nemo";
                    campaignId = "quos";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eius";
                        etag = "aspernatur";
                        id = "73a8418d-1623-409f-b092-9921aefb9f58";
                        kind = "maxime";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "temporibus";
                    }};;
                    clickThroughUrl = new ClickThroughUrl() {{
                        computedClickThroughUrl = "quos";
                        customClickThroughUrl = "commodi";
                        defaultLandingPage = false;
                        landingPageId = "itaque";
                    }};;
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "commodi";
                        overrideInheritedSuffix = false;
                    }};;
                    comments = "totam";
                    compatibility = AdCompatibilityEnum.IN_STREAM_AUDIO;
                    createInfo = new LastModifiedInfo() {{
                        time = "modi";
                    }};;
                    creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "vero";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                        }}),
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "ipsam";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                        }}),
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "alias";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                        }}),
                    }};
                    creativeRotation = new CreativeRotation() {{
                        creativeAssignments = new org.openapis.openapi.models.shared.CreativeAssignment[]{{
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "maiores";
                                    customClickThroughUrl = "enim";
                                    defaultLandingPage = false;
                                    landingPageId = "sint";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "deserunt";
                                            customClickThroughUrl = "esse";
                                            defaultLandingPage = false;
                                            landingPageId = "nemo";
                                        }};
                                        creativeId = "reprehenderit";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "est";
                                            customClickThroughUrl = "quis";
                                            defaultLandingPage = false;
                                            landingPageId = "sint";
                                        }};
                                        creativeId = "accusamus";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "impedit";
                                            customClickThroughUrl = "hic";
                                            defaultLandingPage = false;
                                            landingPageId = "necessitatibus";
                                        }};
                                        creativeId = "asperiores";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "ex";
                                            customClickThroughUrl = "voluptas";
                                            defaultLandingPage = false;
                                            landingPageId = "debitis";
                                        }};
                                        creativeId = "delectus";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "minus";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                }};
                                creativeId = "laborum";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "consectetur";
                                    etag = "velit";
                                    id = "83c2beb4-7737-43c8-972f-64d1db1f2c43";
                                    kind = "illo";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "vel";
                                }};
                                endTime = OffsetDateTime.parse("2022-11-22T17:16:07.137Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "excepturi";
                                            customClickThroughUrl = "eum";
                                            defaultLandingPage = false;
                                            landingPageId = "velit";
                                        }};
                                        enabled = false;
                                        exitId = "ut";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "perspiciatis";
                                            customClickThroughUrl = "earum";
                                            defaultLandingPage = false;
                                            landingPageId = "dicta";
                                        }};
                                        enabled = false;
                                        exitId = "impedit";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "voluptatibus";
                                            customClickThroughUrl = "iste";
                                            defaultLandingPage = false;
                                            landingPageId = "itaque";
                                        }};
                                        enabled = false;
                                        exitId = "alias";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "nisi";
                                            customClickThroughUrl = "itaque";
                                            defaultLandingPage = false;
                                            landingPageId = "velit";
                                        }};
                                        enabled = false;
                                        exitId = "laborum";
                                    }}),
                                }};
                                sequence = 250398;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-07-08T13:28:20.794Z");
                                weight = 24753;
                            }}),
                        }};
                        creativeOptimizationConfigurationId = "doloremque";
                        type = CreativeRotationTypeEnum.CREATIVE_ROTATION_TYPE_SEQUENTIAL;
                        weightCalculationStrategy = CreativeRotationWeightCalculationStrategyEnum.WEIGHT_STRATEGY_HIGHEST_CTR;
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(596065),
                            add(709036),
                            add(537236),
                            add(954334),
                        }};
                        userLocalTime = false;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "voluptate";
                        overrideInheritedEventTag = false;
                    }};;
                    deliverySchedule = new DeliverySchedule() {{
                        frequencyCap = new FrequencyCap() {{
                            duration = "ullam";
                            impressions = "unde";
                        }};;
                        hardCutoff = false;
                        impressionRatio = "necessitatibus";
                        priority = DeliverySchedulePriorityEnum.AD_PRIORITY11;
                    }};;
                    dynamicClickTracker = false;
                    endTime = OffsetDateTime.parse("2021-11-18T12:30:52.334Z");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "est";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "error";
                        }}),
                    }};
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "FK";
                                countryDartId = "veritatis";
                                dartId = "vero";
                                kind = "consectetur";
                                metroCode = "vitae";
                                metroDmaId = "inventore";
                                name = "Lauren Deckow";
                                regionCode = "nemo";
                                regionDartId = "soluta";
                            }}),
                            add(new City() {{
                                countryCode = "PN";
                                countryDartId = "rem";
                                dartId = "dolorum";
                                kind = "odio";
                                metroCode = "fugit";
                                metroDmaId = "alias";
                                name = "Mrs. Gina Bergnaum";
                                regionCode = "exercitationem";
                                regionDartId = "itaque";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "CX";
                                dartId = "unde";
                                kind = "nulla";
                                name = "Wilbert Crona";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "PR";
                                countryDartId = "dicta";
                                dartId = "id";
                                dmaId = "libero";
                                kind = "fugiat";
                                metroCode = "officia";
                                name = "Clark Balistreri DVM";
                            }}),
                            add(new Metro() {{
                                countryCode = "BE";
                                countryDartId = "aperiam";
                                dartId = "totam";
                                dmaId = "dolore";
                                kind = "eligendi";
                                metroCode = "distinctio";
                                name = "Ella Koch";
                            }}),
                            add(new Metro() {{
                                countryCode = "BM";
                                countryDartId = "est";
                                dartId = "facere";
                                dmaId = "corrupti";
                                kind = "molestiae";
                                metroCode = "provident";
                                name = "Terence Reynolds";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "ipsam";
                                countryCode = "PG";
                                countryDartId = "laudantium";
                                id = "5efbd02b-ae0b-4e2d-b822-59e3ea4b5197";
                                kind = "delectus";
                            }}),
                            add(new PostalCode() {{
                                code = "cupiditate";
                                countryCode = "BZ";
                                countryDartId = "numquam";
                                id = "43da7ce5-2b89-45c5-b7c6-454efb0b3489";
                                kind = "voluptas";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "DO";
                                countryDartId = "minus";
                                dartId = "fuga";
                                kind = "nostrum";
                                name = "Myron Windler";
                                regionCode = "odit";
                            }}),
                            add(new Region() {{
                                countryCode = "ZW";
                                countryDartId = "pariatur";
                                dartId = "nemo";
                                kind = "reprehenderit";
                                name = "Viola Hane";
                                regionCode = "excepturi";
                            }}),
                            add(new Region() {{
                                countryCode = "CH";
                                countryDartId = "error";
                                dartId = "veritatis";
                                kind = "ducimus";
                                name = "Meredith Watsica";
                                regionCode = "ex";
                            }}),
                            add(new Region() {{
                                countryCode = "GD";
                                countryDartId = "commodi";
                                dartId = "officiis";
                                kind = "placeat";
                                name = "Jorge Kohler";
                                regionCode = "ipsa";
                            }}),
                        }};
                    }};;
                    id = "sint";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "vero";
                        etag = "sequi";
                        id = "eb1e5a2b-12eb-407f-916d-b99545fc95fa";
                        kind = "quas";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "molestias";
                    }};;
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "odio";
                    }};;
                    kind = "eaque";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "architecto";
                                kind = "quos";
                                languageCode = "iste";
                                name = "Randolph Reinger DVM";
                            }}),
                            add(new Language() {{
                                id = "impedit";
                                kind = "cum";
                                languageCode = "ipsum";
                                name = "Mrs. Kerry Nolan";
                            }}),
                            add(new Language() {{
                                id = "libero";
                                kind = "architecto";
                                languageCode = "cupiditate";
                                name = "Sheri Schuppe";
                            }}),
                            add(new Language() {{
                                id = "itaque";
                                kind = "sed";
                                languageCode = "asperiores";
                                name = "Louise Schulist";
                            }}),
                        }};
                    }};;
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "pariatur";
                    }};;
                    name = "Yvonne Bernhard";
                    placementAssignments = new org.openapis.openapi.models.shared.PlacementAssignment[]{{
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "nisi";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "voluptatibus";
                                etag = "quaerat";
                                id = "8b656bcd-b35f-4f2e-8b27-537a8cd9e731";
                                kind = "error";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "vitae";
                            }};
                            sslRequired = false;
                        }}),
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "dignissimos";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "esse";
                                etag = "fugiat";
                                id = "525f77b1-14ee-4b52-bf78-5fc37814d4c9";
                                kind = "laudantium";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "consequatur";
                            }};
                            sslRequired = false;
                        }}),
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "maxime";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "aspernatur";
                                etag = "nam";
                                id = "b89eb75d-ad63-46c6-8050-3d8bb31180f7";
                                kind = "amet";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "dolorum";
                            }};
                            sslRequired = false;
                        }}),
                    }};
                    remarketingListExpression = new ListTargetingExpression() {{
                        expression = "necessitatibus";
                    }};;
                    size = new Size() {{
                        height = 592880;
                        iab = false;
                        id = "repudiandae";
                        kind = "consequatur";
                        width = 366244;
                    }};;
                    sslCompliant = false;
                    sslRequired = false;
                    startTime = OffsetDateTime.parse("2022-01-26T05:50:47.025Z");
                    subaccountId = "facilis";
                    targetingTemplateId = "corrupti";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "sint";
                                dartId = "accusamus";
                                kind = "eos";
                                majorVersion = "totam";
                                minorVersion = "dicta";
                                name = "Dr. Shannon Fahey";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "atque";
                                kind = "beatae";
                                name = "Leroy Schinner Jr.";
                            }}),
                            add(new ConnectionType() {{
                                id = "rerum";
                                kind = "ea";
                                name = "Courtney Zulauf";
                            }}),
                            add(new ConnectionType() {{
                                id = "provident";
                                kind = "consectetur";
                                name = "Cody Feil";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "NA";
                                countryDartId = "amet";
                                id = "tenetur";
                                kind = "aspernatur";
                                name = "Dexter Stanton";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "TJ";
                                countryDartId = "qui";
                                id = "consectetur";
                                kind = "repellat";
                                name = "Rose Heller";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "BA";
                                countryDartId = "illo";
                                id = "hic";
                                kind = "deserunt";
                                name = "Kyle Reichel";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "FK";
                                countryDartId = "numquam";
                                id = "repudiandae";
                                kind = "modi";
                                name = "Judith Thompson Sr.";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "enim";
                                kind = "voluptate";
                                majorVersion = "similique";
                                minorVersion = "minima";
                                name = "Oscar Bailey";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "nesciunt";
                                    desktop = false;
                                    kind = "mollitia";
                                    mobile = false;
                                    name = "Hope Hegmann";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "reiciendis";
                                kind = "ab";
                                majorVersion = "modi";
                                minorVersion = "aut";
                                name = "Olive Kub";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "dolorum";
                                    desktop = false;
                                    kind = "possimus";
                                    mobile = false;
                                    name = "Edith Dooley";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "minus";
                                kind = "sunt";
                                majorVersion = "distinctio";
                                minorVersion = "iusto";
                                name = "Henry Purdy";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "fuga";
                                    desktop = false;
                                    kind = "alias";
                                    mobile = false;
                                    name = "David Lubowitz";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "quae";
                                desktop = false;
                                kind = "eaque";
                                mobile = false;
                                name = "Toby O'Hara";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "voluptatem";
                                kind = "alias";
                                name = "Terrell Barrows";
                            }}),
                        }};
                    }};;
                    type = AdTypeEnum.AD_SERVING_STANDARD_AD;
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "beatae";
                key = "aliquid";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "voluptatibus";
                uploadProtocol = "molestias";
            }};            

            DfareportingAdsPatchResponse res = sdk.ads.dfareportingAdsPatch(req, new DfareportingAdsPatchSecurity("officia", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ad != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdsUpdate

Updates an existing ad.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingAdsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingAdsUpdateSecurity;
import org.openapis.openapi.models.shared.Ad;
import org.openapis.openapi.models.shared.AdCompatibilityEnum;
import org.openapis.openapi.models.shared.AdTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Browser;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.ClickThroughUrl;
import org.openapis.openapi.models.shared.ClickThroughUrlSuffixProperties;
import org.openapis.openapi.models.shared.CompanionClickThroughOverride;
import org.openapis.openapi.models.shared.ConnectionType;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.CreativeAssignment;
import org.openapis.openapi.models.shared.CreativeGroupAssignment;
import org.openapis.openapi.models.shared.CreativeGroupAssignmentCreativeGroupNumberEnum;
import org.openapis.openapi.models.shared.CreativeRotation;
import org.openapis.openapi.models.shared.CreativeRotationTypeEnum;
import org.openapis.openapi.models.shared.CreativeRotationWeightCalculationStrategyEnum;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum;
import org.openapis.openapi.models.shared.DefaultClickThroughEventTagProperties;
import org.openapis.openapi.models.shared.DeliverySchedule;
import org.openapis.openapi.models.shared.DeliverySchedulePriorityEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTagOverride;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.GeoTargeting;
import org.openapis.openapi.models.shared.KeyValueTargetingExpression;
import org.openapis.openapi.models.shared.Language;
import org.openapis.openapi.models.shared.LanguageTargeting;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.ListTargetingExpression;
import org.openapis.openapi.models.shared.Metro;
import org.openapis.openapi.models.shared.MobileCarrier;
import org.openapis.openapi.models.shared.OperatingSystem;
import org.openapis.openapi.models.shared.OperatingSystemVersion;
import org.openapis.openapi.models.shared.PlacementAssignment;
import org.openapis.openapi.models.shared.PlatformType;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.RichMediaExitOverride;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdsUpdateRequest req = new DfareportingAdsUpdateRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                ad = new Ad() {{
                    accountId = "aliquid";
                    active = false;
                    advertiserId = "ea";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "impedit";
                        etag = "ducimus";
                        id = "23ffda9e-06be-4e48-a5c1-fc0e115c80bf";
                        kind = "a";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "dicta";
                    }};;
                    archived = false;
                    audienceSegmentId = "quos";
                    campaignId = "ullam";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dolore";
                        etag = "modi";
                        id = "ec42defc-ce8f-4197-b773-e63562a7b408";
                        kind = "maiores";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "veniam";
                    }};;
                    clickThroughUrl = new ClickThroughUrl() {{
                        computedClickThroughUrl = "saepe";
                        customClickThroughUrl = "neque";
                        defaultLandingPage = false;
                        landingPageId = "facere";
                    }};;
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "aliquam";
                        overrideInheritedSuffix = false;
                    }};;
                    comments = "quos";
                    compatibility = AdCompatibilityEnum.IN_STREAM_AUDIO;
                    createInfo = new LastModifiedInfo() {{
                        time = "fugiat";
                    }};;
                    creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "delectus";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                        }}),
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "vitae";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                        }}),
                        add(new CreativeGroupAssignment() {{
                            creativeGroupId = "similique";
                            creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                        }}),
                    }};
                    creativeRotation = new CreativeRotation() {{
                        creativeAssignments = new org.openapis.openapi.models.shared.CreativeAssignment[]{{
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "nemo";
                                    customClickThroughUrl = "doloribus";
                                    defaultLandingPage = false;
                                    landingPageId = "possimus";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "incidunt";
                                            customClickThroughUrl = "explicabo";
                                            defaultLandingPage = false;
                                            landingPageId = "ipsam";
                                        }};
                                        creativeId = "cupiditate";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "optio";
                                            customClickThroughUrl = "alias";
                                            defaultLandingPage = false;
                                            landingPageId = "quidem";
                                        }};
                                        creativeId = "nesciunt";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "commodi";
                                            customClickThroughUrl = "sapiente";
                                            defaultLandingPage = false;
                                            landingPageId = "consequuntur";
                                        }};
                                        creativeId = "veniam";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "officia";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "ut";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "tenetur";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "libero";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                                    }}),
                                }};
                                creativeId = "minima";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "ex";
                                    etag = "minus";
                                    id = "11f6c37a-5126-4243-835b-bc05a23a45ce";
                                    kind = "a";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "enim";
                                }};
                                endTime = OffsetDateTime.parse("2020-07-09T15:33:26.948Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "architecto";
                                            customClickThroughUrl = "alias";
                                            defaultLandingPage = false;
                                            landingPageId = "culpa";
                                        }};
                                        enabled = false;
                                        exitId = "ipsa";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "nobis";
                                            customClickThroughUrl = "necessitatibus";
                                            defaultLandingPage = false;
                                            landingPageId = "quia";
                                        }};
                                        enabled = false;
                                        exitId = "dicta";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "vel";
                                            customClickThroughUrl = "perspiciatis";
                                            defaultLandingPage = false;
                                            landingPageId = "debitis";
                                        }};
                                        enabled = false;
                                        exitId = "ullam";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "architecto";
                                            customClickThroughUrl = "accusantium";
                                            defaultLandingPage = false;
                                            landingPageId = "perferendis";
                                        }};
                                        enabled = false;
                                        exitId = "veritatis";
                                    }}),
                                }};
                                sequence = 590585;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2021-09-11T02:13:51.734Z");
                                weight = 842402;
                            }}),
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "quod";
                                    customClickThroughUrl = "nemo";
                                    defaultLandingPage = false;
                                    landingPageId = "recusandae";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "magnam";
                                            customClickThroughUrl = "dignissimos";
                                            defaultLandingPage = false;
                                            landingPageId = "laboriosam";
                                        }};
                                        creativeId = "sed";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "natus";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "cum";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                }};
                                creativeId = "facilis";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "quidem";
                                    etag = "itaque";
                                    id = "6949fb2b-b4ec-4ae6-83d5-db3adebd5dae";
                                    kind = "laborum";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "maxime";
                                }};
                                endTime = OffsetDateTime.parse("2022-12-31T23:28:08.866Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "deserunt";
                                            customClickThroughUrl = "molestias";
                                            defaultLandingPage = false;
                                            landingPageId = "laborum";
                                        }};
                                        enabled = false;
                                        exitId = "est";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "occaecati";
                                            customClickThroughUrl = "labore";
                                            defaultLandingPage = false;
                                            landingPageId = "quo";
                                        }};
                                        enabled = false;
                                        exitId = "perferendis";
                                    }}),
                                }};
                                sequence = 143528;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-09-13T00:32:01.100Z");
                                weight = 308528;
                            }}),
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "eligendi";
                                    customClickThroughUrl = "hic";
                                    defaultLandingPage = false;
                                    landingPageId = "nostrum";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "unde";
                                            customClickThroughUrl = "nulla";
                                            defaultLandingPage = false;
                                            landingPageId = "error";
                                        }};
                                        creativeId = "mollitia";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "magnam";
                                            customClickThroughUrl = "nostrum";
                                            defaultLandingPage = false;
                                            landingPageId = "esse";
                                        }};
                                        creativeId = "corrupti";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "fuga";
                                            customClickThroughUrl = "facere";
                                            defaultLandingPage = false;
                                            landingPageId = "impedit";
                                        }};
                                        creativeId = "quasi";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "deserunt";
                                            customClickThroughUrl = "quod";
                                            defaultLandingPage = false;
                                            landingPageId = "laboriosam";
                                        }};
                                        creativeId = "doloremque";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "facere";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                }};
                                creativeId = "maxime";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "consequatur";
                                    etag = "eaque";
                                    id = "1ac802e2-ec09-4ff8-b0f8-16ff3477c13e";
                                    kind = "excepturi";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "qui";
                                }};
                                endTime = OffsetDateTime.parse("2022-09-08T07:32:05.126Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "dicta";
                                            customClickThroughUrl = "odit";
                                            defaultLandingPage = false;
                                            landingPageId = "corporis";
                                        }};
                                        enabled = false;
                                        exitId = "rerum";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "alias";
                                            customClickThroughUrl = "error";
                                            defaultLandingPage = false;
                                            landingPageId = "vel";
                                        }};
                                        enabled = false;
                                        exitId = "accusantium";
                                    }}),
                                }};
                                sequence = 664197;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-08-07T09:12:40.710Z");
                                weight = 555679;
                            }}),
                            add(new CreativeAssignment() {{
                                active = false;
                                applyEventTags = false;
                                clickThroughUrl = new ClickThroughUrl() {{
                                    computedClickThroughUrl = "veritatis";
                                    customClickThroughUrl = "ullam";
                                    defaultLandingPage = false;
                                    landingPageId = "quae";
                                }};
                                companionCreativeOverrides = new org.openapis.openapi.models.shared.CompanionClickThroughOverride[]{{
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "incidunt";
                                            customClickThroughUrl = "quam";
                                            defaultLandingPage = false;
                                            landingPageId = "magni";
                                        }};
                                        creativeId = "deserunt";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "delectus";
                                            customClickThroughUrl = "omnis";
                                            defaultLandingPage = false;
                                            landingPageId = "sed";
                                        }};
                                        creativeId = "nesciunt";
                                    }}),
                                    add(new CompanionClickThroughOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "maxime";
                                            customClickThroughUrl = "quis";
                                            defaultLandingPage = false;
                                            landingPageId = "cupiditate";
                                        }};
                                        creativeId = "aliquam";
                                    }}),
                                }};
                                creativeGroupAssignments = new org.openapis.openapi.models.shared.CreativeGroupAssignment[]{{
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "maiores";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "velit";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_TWO;
                                    }}),
                                    add(new CreativeGroupAssignment() {{
                                        creativeGroupId = "amet";
                                        creativeGroupNumber = CreativeGroupAssignmentCreativeGroupNumberEnum.CREATIVE_GROUP_ONE;
                                    }}),
                                }};
                                creativeId = "ipsa";
                                creativeIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "quisquam";
                                    etag = "tenetur";
                                    id = "876ffb90-1c6e-4cbb-8e24-3cf789ffafed";
                                    kind = "deserunt";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "velit";
                                }};
                                endTime = OffsetDateTime.parse("2022-01-21T01:13:08.281Z");
                                richMediaExitOverrides = new org.openapis.openapi.models.shared.RichMediaExitOverride[]{{
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "saepe";
                                            customClickThroughUrl = "eum";
                                            defaultLandingPage = false;
                                            landingPageId = "repudiandae";
                                        }};
                                        enabled = false;
                                        exitId = "accusantium";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "officia";
                                            customClickThroughUrl = "impedit";
                                            defaultLandingPage = false;
                                            landingPageId = "quasi";
                                        }};
                                        enabled = false;
                                        exitId = "blanditiis";
                                    }}),
                                    add(new RichMediaExitOverride() {{
                                        clickThroughUrl = new ClickThroughUrl() {{
                                            computedClickThroughUrl = "eius";
                                            customClickThroughUrl = "quisquam";
                                            defaultLandingPage = false;
                                            landingPageId = "eos";
                                        }};
                                        enabled = false;
                                        exitId = "nobis";
                                    }}),
                                }};
                                sequence = 620054;
                                sslCompliant = false;
                                startTime = OffsetDateTime.parse("2022-07-15T22:38:27.632Z");
                                weight = 300651;
                            }}),
                        }};
                        creativeOptimizationConfigurationId = "reprehenderit";
                        type = CreativeRotationTypeEnum.CREATIVE_ROTATION_TYPE_RANDOM;
                        weightCalculationStrategy = CreativeRotationWeightCalculationStrategyEnum.WEIGHT_STRATEGY_HIGHEST_CTR;
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.THURSDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(266946),
                            add(21358),
                            add(897058),
                        }};
                        userLocalTime = false;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "architecto";
                        overrideInheritedEventTag = false;
                    }};;
                    deliverySchedule = new DeliverySchedule() {{
                        frequencyCap = new FrequencyCap() {{
                            duration = "molestias";
                            impressions = "dolore";
                        }};;
                        hardCutoff = false;
                        impressionRatio = "sunt";
                        priority = DeliverySchedulePriorityEnum.AD_PRIORITY16;
                    }};;
                    dynamicClickTracker = false;
                    endTime = OffsetDateTime.parse("2022-11-10T23:49:36.434Z");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "veniam";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "ipsam";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "eaque";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "exercitationem";
                        }}),
                    }};
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "KI";
                                countryDartId = "ad";
                                dartId = "nisi";
                                kind = "tenetur";
                                metroCode = "quis";
                                metroDmaId = "quibusdam";
                                name = "Miss Laurie Streich";
                                regionCode = "perferendis";
                                regionDartId = "id";
                            }}),
                            add(new City() {{
                                countryCode = "VG";
                                countryDartId = "sed";
                                dartId = "possimus";
                                kind = "repellat";
                                metroCode = "repudiandae";
                                metroDmaId = "architecto";
                                name = "Meredith Pfeffer";
                                regionCode = "iure";
                                regionDartId = "explicabo";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "PY";
                                dartId = "dolorum";
                                kind = "velit";
                                name = "Dwayne Mraz MD";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "TL";
                                dartId = "harum";
                                kind = "cumque";
                                name = "Miss Mamie Lowe";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "MH";
                                dartId = "magni";
                                kind = "tempora";
                                name = "Rodney Prohaska";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "RS";
                                dartId = "delectus";
                                kind = "minus";
                                name = "Julian Ziemann";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "AR";
                                countryDartId = "illo";
                                dartId = "aut";
                                dmaId = "doloribus";
                                kind = "nostrum";
                                metroCode = "at";
                                name = "Tony Streich";
                            }}),
                            add(new Metro() {{
                                countryCode = "NF";
                                countryDartId = "quae";
                                dartId = "quos";
                                dmaId = "aperiam";
                                kind = "non";
                                metroCode = "voluptates";
                                name = "Suzanne Schaefer";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "inventore";
                                countryCode = "HU";
                                countryDartId = "laudantium";
                                id = "a363c887-3e48-4438-8b1f-6b8ca275a60a";
                                kind = "aut";
                            }}),
                            add(new PostalCode() {{
                                code = "dolore";
                                countryCode = "SI";
                                countryDartId = "aliquam";
                                id = "95cc6991-71b5-41c1-bdb1-cf4b888ebdfc";
                                kind = "incidunt";
                            }}),
                            add(new PostalCode() {{
                                code = "quod";
                                countryCode = "SG";
                                countryDartId = "porro";
                                id = "a99bc7fc-0b2d-4ce1-8873-e42b006d6788";
                                kind = "nihil";
                            }}),
                            add(new PostalCode() {{
                                code = "atque";
                                countryCode = "PE";
                                countryDartId = "deserunt";
                                id = "8581a582-08c5-44fe-ba9c-95f2eac5565d";
                                kind = "nesciunt";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "KR";
                                countryDartId = "minus";
                                dartId = "asperiores";
                                kind = "recusandae";
                                name = "Hugh Carroll III";
                                regionCode = "necessitatibus";
                            }}),
                        }};
                    }};;
                    id = "sed";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "deleniti";
                        etag = "sunt";
                        id = "3fa4a41c-480d-43f2-932a-f03102d514f4";
                        kind = "optio";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "ex";
                    }};;
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "repellat";
                    }};;
                    kind = "quae";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "expedita";
                                kind = "hic";
                                languageCode = "excepturi";
                                name = "Irene Breitenberg";
                            }}),
                            add(new Language() {{
                                id = "animi";
                                kind = "dolore";
                                languageCode = "tenetur";
                                name = "Tamara O'Kon";
                            }}),
                            add(new Language() {{
                                id = "eveniet";
                                kind = "earum";
                                languageCode = "velit";
                                name = "Ray Prosacco";
                            }}),
                        }};
                    }};;
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "ipsam";
                    }};;
                    name = "Leticia Hyatt";
                    placementAssignments = new org.openapis.openapi.models.shared.PlacementAssignment[]{{
                        add(new PlacementAssignment() {{
                            active = false;
                            placementId = "ut";
                            placementIdDimensionValue = new DimensionValue() {{
                                dimensionName = "quaerat";
                                etag = "architecto";
                                id = "8e3bb91c-8d97-45e0-a841-9d8f84f144f3";
                                kind = "saepe";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "esse";
                            }};
                            sslRequired = false;
                        }}),
                    }};
                    remarketingListExpression = new ListTargetingExpression() {{
                        expression = "debitis";
                    }};;
                    size = new Size() {{
                        height = 817454;
                        iab = false;
                        id = "quisquam";
                        kind = "cumque";
                        width = 302878;
                    }};;
                    sslCompliant = false;
                    sslRequired = false;
                    startTime = OffsetDateTime.parse("2021-09-17T06:37:53.473Z");
                    subaccountId = "ad";
                    targetingTemplateId = "reiciendis";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "porro";
                                dartId = "laborum";
                                kind = "nobis";
                                majorVersion = "quibusdam";
                                minorVersion = "omnis";
                                name = "Roberta Nolan";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "necessitatibus";
                                kind = "accusantium";
                                name = "Sue Krajcik";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "BW";
                                countryDartId = "iusto";
                                id = "expedita";
                                kind = "eos";
                                name = "Antonio Beer";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "accusantium";
                                kind = "distinctio";
                                majorVersion = "sapiente";
                                minorVersion = "quam";
                                name = "Tom Wintheiser";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "iusto";
                                    desktop = false;
                                    kind = "quod";
                                    mobile = false;
                                    name = "Glen Franey";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "voluptas";
                                kind = "doloribus";
                                majorVersion = "animi";
                                minorVersion = "recusandae";
                                name = "Elaine Tromp";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "laboriosam";
                                    desktop = false;
                                    kind = "voluptatem";
                                    mobile = false;
                                    name = "Dr. Johnny Cassin Sr.";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "rerum";
                                desktop = false;
                                kind = "in";
                                mobile = false;
                                name = "Paulette Dibbert";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "reiciendis";
                                kind = "itaque";
                                name = "Monique Bartoletti";
                            }}),
                            add(new PlatformType() {{
                                id = "quos";
                                kind = "possimus";
                                name = "Darren McKenzie V";
                            }}),
                        }};
                    }};;
                    type = AdTypeEnum.AD_SERVING_STANDARD_AD;
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "unde";
                key = "alias";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "commodi";
                uploadProtocol = "labore";
            }};            

            DfareportingAdsUpdateResponse res = sdk.ads.dfareportingAdsUpdate(req, new DfareportingAdsUpdateSecurity("expedita", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ad != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
