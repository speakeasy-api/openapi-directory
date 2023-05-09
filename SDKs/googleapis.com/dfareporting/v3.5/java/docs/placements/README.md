# placements

### Available Operations

* [dfareportingPlacementsGeneratetags](#dfareportingplacementsgeneratetags) - Generates tags for a placement.
* [dfareportingPlacementsGet](#dfareportingplacementsget) - Gets one placement by ID.
* [dfareportingPlacementsInsert](#dfareportingplacementsinsert) - Inserts a new placement.
* [dfareportingPlacementsList](#dfareportingplacementslist) - Retrieves a list of placements, possibly filtered. This method supports paging.
* [dfareportingPlacementsPatch](#dfareportingplacementspatch) - Updates an existing placement. This method supports patch semantics.
* [dfareportingPlacementsUpdate](#dfareportingplacementsupdate) - Updates an existing placement.

## dfareportingPlacementsGeneratetags

Generates tags for a placement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsSecurity;
import org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsTagFormatsEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementsGeneratetagsRequest req = new DfareportingPlacementsGeneratetagsRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "id";
                campaignId = "eum";
                fields = "rem";
                key = "eligendi";
                oauthToken = "optio";
                placementIds = new String[]{{
                    add("sit"),
                    add("illum"),
                    add("ratione"),
                }};
                prettyPrint = false;
                quotaUser = "alias";
                tagFormats = new org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsTagFormatsEnum[]{{
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST4),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_INTERNAL_REDIRECT),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT),
                }};
                uploadType = "aliquid";
                uploadProtocol = "quaerat";
            }};            

            DfareportingPlacementsGeneratetagsResponse res = sdk.placements.dfareportingPlacementsGeneratetags(req, new DfareportingPlacementsGeneratetagsSecurity("temporibus", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementsGenerateTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementsGet

Gets one placement by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementsGetRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementsGetResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementsGetRequest req = new DfareportingPlacementsGetRequest("deserunt", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "illum";
                key = "iste";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "nemo";
                uploadProtocol = "adipisci";
            }};            

            DfareportingPlacementsGetResponse res = sdk.placements.dfareportingPlacementsGet(req, new DfareportingPlacementsGetSecurity("tempore", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementsInsert

Inserts a new placement.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompanionSetting;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingData;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataTagWrappingModeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.Placement;
import org.openapis.openapi.models.shared.PlacementCompatibilityEnum;
import org.openapis.openapi.models.shared.PlacementPaymentSourceEnum;
import org.openapis.openapi.models.shared.PlacementStatusEnum;
import org.openapis.openapi.models.shared.PlacementTagFormatsEnum;
import org.openapis.openapi.models.shared.PlacementVpaidAdapterChoiceEnum;
import org.openapis.openapi.models.shared.PricingSchedule;
import org.openapis.openapi.models.shared.PricingScheduleCapCostOptionEnum;
import org.openapis.openapi.models.shared.PricingSchedulePricingPeriod;
import org.openapis.openapi.models.shared.PricingSchedulePricingTypeEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.SkippableSetting;
import org.openapis.openapi.models.shared.TagSetting;
import org.openapis.openapi.models.shared.TagSettingKeywordOptionEnum;
import org.openapis.openapi.models.shared.TranscodeSetting;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.VideoSettings;
import org.openapis.openapi.models.shared.VideoSettingsOrientationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementsInsertRequest req = new DfareportingPlacementsInsertRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "perferendis";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 39766;
                            iab = false;
                            id = "excepturi";
                            kind = "quod";
                            width = 428511;
                        }}),
                    }};
                    advertiserId = "ea";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "error";
                        etag = "explicabo";
                        id = "de7b3562-201a-46aa-b4ae-7b1a5b908d4e";
                        kind = "consectetur";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "aliquam";
                    }};;
                    archived = false;
                    campaignId = "perspiciatis";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quae";
                        etag = "dolorum";
                        id = "a35d4a83-9f03-4bab-b7b9-18f031398450";
                        kind = "reprehenderit";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "accusantium";
                    }};;
                    comment = "voluptates";
                    compatibility = PlacementCompatibilityEnum.DISPLAY_INTERSTITIAL;
                    contentCategoryId = "occaecati";
                    createInfo = new LastModifiedInfo() {{
                        time = "impedit";
                    }};;
                    directorySiteId = "quam";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "saepe";
                        etag = "odit";
                        id = "3ecb0604-652e-423a-bd6c-657e9de8f7f0";
                        kind = "consequatur";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "fugiat";
                    }};;
                    externalId = "veritatis";
                    id = "occaecati";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "rem";
                        etag = "ex";
                        id = "aa99d3a1-d323-429e-8583-7e8f2ad6bb10";
                        kind = "debitis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "nostrum";
                    }};;
                    keyName = "ipsam";
                    kind = "reiciendis";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "repellendus";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 765623;
                        postImpressionActivitiesDuration = 304316;
                    }};;
                    name = "Larry Shanahan";
                    partnerWrappingData = new MeasurementPartnerWrappingData() {{
                        linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum.MEASUREMENT_PARTNER_LINKED;
                        measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum.NONE;
                        tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum.NONE;
                        wrappedTag = "totam";
                    }};;
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "dignissimos";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "exercitationem";
                        etag = "quod";
                        id = "bf186856-a7e8-42cd-b9d0-fc282c666af3";
                        kind = "optio";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "a";
                    }};;
                    placementStrategyId = "quis";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        endDate = LocalDate.parse("2021-10-26");
                        flighted = false;
                        floodlightActivityId = "distinctio";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-05-03");
                                pricingComment = "possimus";
                                rateOrCostNanos = "dolores";
                                startDate = LocalDate.parse("2022-09-27");
                                units = "voluptates";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-22");
                                pricingComment = "necessitatibus";
                                rateOrCostNanos = "ratione";
                                startDate = LocalDate.parse("2020-12-13");
                                units = "corrupti";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-06-15");
                                pricingComment = "consequuntur";
                                rateOrCostNanos = "consequuntur";
                                startDate = LocalDate.parse("2022-01-03");
                                units = "ab";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-01-04");
                                pricingComment = "autem";
                                rateOrCostNanos = "nulla";
                                startDate = LocalDate.parse("2021-04-07");
                                units = "magni";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2022-04-29");
                        testingStartDate = LocalDate.parse("2022-03-15");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "dolorem";
                    }};;
                    siteId = "eaque";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "error";
                        etag = "occaecati";
                        id = "077c10b6-8792-4163-a67d-48860543c0a3";
                        kind = "sit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "excepturi";
                    }};;
                    size = new Size() {{
                        height = 787941;
                        iab = false;
                        id = "ipsum";
                        kind = "quod";
                        width = 975750;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_REJECTED;
                    subaccountId = "porro";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_ILAYER),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "nihil";
                        includeClickThroughUrls = false;
                        includeClickTracking = false;
                        keywordOption = TagSettingKeywordOptionEnum.IGNORE;
                    }};;
                    videoActiveViewOptOut = false;
                    videoSettings = new VideoSettings() {{
                        companionSettings = new CompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 489970;
                                    iab = false;
                                    id = "libero";
                                    kind = "qui";
                                    width = 76658;
                                }}),
                                add(new Size() {{
                                    height = 704284;
                                    iab = false;
                                    id = "dolorum";
                                    kind = "quibusdam";
                                    width = 590737;
                                }}),
                                add(new Size() {{
                                    height = 4464;
                                    iab = false;
                                    id = "illum";
                                    kind = "aspernatur";
                                    width = 471925;
                                }}),
                                add(new Size() {{
                                    height = 283463;
                                    iab = false;
                                    id = "velit";
                                    kind = "doloribus";
                                    width = 857388;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "ex";
                        }};;
                        durationSeconds = 764953;
                        kind = "magni";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "animi";
                            iconClickTrackingUrl = "sunt";
                            iconViewTrackingUrl = "voluptatem";
                            program = "saepe";
                            resourceUrl = "ea";
                            size = new Size() {{
                                height = 810244;
                                iab = false;
                                id = "odit";
                                kind = "natus";
                                width = 461676;
                            }};;
                            xPosition = "atque";
                            yPosition = "saepe";
                        }};;
                        orientation = VideoSettingsOrientationEnum.PORTRAIT;
                        skippableSettings = new SkippableSetting() {{
                            kind = "eos";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 318150;
                                offsetSeconds = 413095;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 639855;
                                offsetSeconds = 331724;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(30787),
                                add(575649),
                                add(162520),
                            }};
                            kind = "magni";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.FLASH;
                    wrappingOptOut = false;
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "numquam";
                key = "dignissimos";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "nisi";
                uploadProtocol = "optio";
            }};            

            DfareportingPlacementsInsertResponse res = sdk.placements.dfareportingPlacementsInsert(req, new DfareportingPlacementsInsertSecurity("sint", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementsList

Retrieves a list of placements, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementsListCompatibilitiesEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementsListPaymentSourceEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementsListPricingTypesEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementsListRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementsListResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementsListSecurity;
import org.openapis.openapi.models.operations.DfareportingPlacementsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementsListRequest req = new DfareportingPlacementsListRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                advertiserIds = new String[]{{
                    add("ullam"),
                    add("esse"),
                    add("sapiente"),
                    add("ratione"),
                }};
                alt = AltEnum.MEDIA;
                archived = false;
                callback = "perspiciatis";
                campaignIds = new String[]{{
                    add("quos"),
                }};
                compatibilities = new org.openapis.openapi.models.operations.DfareportingPlacementsListCompatibilitiesEnum[]{{
                    add(DfareportingPlacementsListCompatibilitiesEnum.APP_INTERSTITIAL),
                    add(DfareportingPlacementsListCompatibilitiesEnum.APP),
                    add(DfareportingPlacementsListCompatibilitiesEnum.DISPLAY),
                }};
                contentCategoryIds = new String[]{{
                    add("quo"),
                }};
                directorySiteIds = new String[]{{
                    add("atque"),
                    add("illum"),
                }};
                fields = "eum";
                groupIds = new String[]{{
                    add("facere"),
                    add("ea"),
                }};
                ids = new String[]{{
                    add("voluptates"),
                }};
                key = "tempora";
                maxEndDate = "similique";
                maxResults = 639727L;
                maxStartDate = "exercitationem";
                minEndDate = "laboriosam";
                minStartDate = "quos";
                oauthToken = "aliquam";
                pageToken = "vel";
                paymentSource = DfareportingPlacementsListPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                placementStrategyIds = new String[]{{
                    add("odio"),
                    add("omnis"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementsListPricingTypesEnum[]{{
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPM_ACTIVEVIEW),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_CLICKS),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPA),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_CLICKS),
                }};
                quotaUser = "eaque";
                searchString = "officiis";
                siteIds = new String[]{{
                    add("eaque"),
                    add("dolor"),
                }};
                sizeIds = new String[]{{
                    add("quis"),
                    add("vel"),
                    add("praesentium"),
                    add("sequi"),
                }};
                sortField = DfareportingPlacementsListSortFieldEnum.ID;
                sortOrder = DfareportingPlacementsListSortOrderEnum.DESCENDING;
                uploadType = "et";
                uploadProtocol = "assumenda";
            }};            

            DfareportingPlacementsListResponse res = sdk.placements.dfareportingPlacementsList(req, new DfareportingPlacementsListSecurity("molestias", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementsPatch

Updates an existing placement. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompanionSetting;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingData;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataTagWrappingModeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.Placement;
import org.openapis.openapi.models.shared.PlacementCompatibilityEnum;
import org.openapis.openapi.models.shared.PlacementPaymentSourceEnum;
import org.openapis.openapi.models.shared.PlacementStatusEnum;
import org.openapis.openapi.models.shared.PlacementTagFormatsEnum;
import org.openapis.openapi.models.shared.PlacementVpaidAdapterChoiceEnum;
import org.openapis.openapi.models.shared.PricingSchedule;
import org.openapis.openapi.models.shared.PricingScheduleCapCostOptionEnum;
import org.openapis.openapi.models.shared.PricingSchedulePricingPeriod;
import org.openapis.openapi.models.shared.PricingSchedulePricingTypeEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.SkippableSetting;
import org.openapis.openapi.models.shared.TagSetting;
import org.openapis.openapi.models.shared.TagSettingKeywordOptionEnum;
import org.openapis.openapi.models.shared.TranscodeSetting;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.VideoSettings;
import org.openapis.openapi.models.shared.VideoSettingsOrientationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementsPatchRequest req = new DfareportingPlacementsPatchRequest("at", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                placement = new Placement() {{
                    accountId = "nobis";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 519464;
                            iab = false;
                            id = "recusandae";
                            kind = "atque";
                            width = 645115;
                        }}),
                    }};
                    advertiserId = "a";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "culpa";
                        etag = "cum";
                        id = "c986e241-e43b-4234-a417-d13e3f62aa9a";
                        kind = "recusandae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "fuga";
                    }};;
                    archived = false;
                    campaignId = "necessitatibus";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "molestias";
                        etag = "animi";
                        id = "b4a9c492-c5e8-4ba5-94aa-4a508bd380c2";
                        kind = "excepturi";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "deserunt";
                    }};;
                    comment = "rem";
                    compatibility = PlacementCompatibilityEnum.IN_STREAM_AUDIO;
                    contentCategoryId = "illum";
                    createInfo = new LastModifiedInfo() {{
                        time = "iure";
                    }};;
                    directorySiteId = "beatae";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quidem";
                        etag = "assumenda";
                        id = "daa30b7b-9144-49ae-a9c0-88d418bb7180";
                        kind = "ut";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "modi";
                    }};;
                    externalId = "dolores";
                    id = "ratione";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "pariatur";
                        etag = "ipsam";
                        id = "43935f37-7ac5-4c9b-be93-b6a3c523105e";
                        kind = "iusto";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "dolor";
                    }};;
                    keyName = "quaerat";
                    kind = "impedit";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "deserunt";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 719556;
                        postImpressionActivitiesDuration = 2518;
                    }};;
                    name = "Benny Rempel Sr.";
                    partnerWrappingData = new MeasurementPartnerWrappingData() {{
                        linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum.MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING;
                        measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum.TRACKING;
                        wrappedTag = "beatae";
                    }};;
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "atque";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "unde";
                        etag = "ut";
                        id = "4a8e9085-075b-4c25-b825-3343fb0a4e66";
                        kind = "earum";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "tempora";
                    }};;
                    placementStrategyId = "nihil";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        endDate = LocalDate.parse("2022-06-28");
                        flighted = false;
                        floodlightActivityId = "fugiat";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-29");
                                pricingComment = "recusandae";
                                rateOrCostNanos = "qui";
                                startDate = LocalDate.parse("2022-06-23");
                                units = "veritatis";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2022-06-19");
                        testingStartDate = LocalDate.parse("2020-09-17");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "aliquid";
                    }};;
                    siteId = "in";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cupiditate";
                        etag = "facilis";
                        id = "6b2f2535-9b85-45d0-95b6-2c8b83a38a8a";
                        kind = "laudantium";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quo";
                    }};;
                    size = new Size() {{
                        height = 111971;
                        iab = false;
                        id = "modi";
                        kind = "labore";
                        width = 160942;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PENDING_REVIEW;
                    subaccountId = "aut";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_ILAYER),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_TRACKING_JAVASCRIPT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST4),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "nam";
                        includeClickThroughUrls = false;
                        includeClickTracking = false;
                        keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                    }};;
                    videoActiveViewOptOut = false;
                    videoSettings = new VideoSettings() {{
                        companionSettings = new CompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 906213;
                                    iab = false;
                                    id = "ab";
                                    kind = "repudiandae";
                                    width = 772602;
                                }}),
                                add(new Size() {{
                                    height = 997706;
                                    iab = false;
                                    id = "laudantium";
                                    kind = "quo";
                                    width = 240080;
                                }}),
                                add(new Size() {{
                                    height = 262638;
                                    iab = false;
                                    id = "cupiditate";
                                    kind = "modi";
                                    width = 415924;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "harum";
                        }};;
                        durationSeconds = 697355;
                        kind = "dolorum";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "ducimus";
                            iconClickTrackingUrl = "id";
                            iconViewTrackingUrl = "accusantium";
                            program = "ullam";
                            resourceUrl = "deserunt";
                            size = new Size() {{
                                height = 519797;
                                iab = false;
                                id = "expedita";
                                kind = "magnam";
                                width = 647066;
                            }};;
                            xPosition = "perspiciatis";
                            yPosition = "voluptates";
                        }};;
                        orientation = VideoSettingsOrientationEnum.PORTRAIT;
                        skippableSettings = new SkippableSetting() {{
                            kind = "veniam";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 698696;
                                offsetSeconds = 228036;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 432505;
                                offsetSeconds = 510281;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(806850),
                                add(772419),
                                add(686795),
                            }};
                            kind = "consectetur";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.FLASH;
                    wrappingOptOut = false;
                }};;
                accessToken = "dolor";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "magni";
                key = "dignissimos";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "necessitatibus";
                uploadProtocol = "occaecati";
            }};            

            DfareportingPlacementsPatchResponse res = sdk.placements.dfareportingPlacementsPatch(req, new DfareportingPlacementsPatchSecurity("vel", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementsUpdate

Updates an existing placement.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompanionSetting;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.LookbackConfiguration;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingData;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerWrappingDataTagWrappingModeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.Placement;
import org.openapis.openapi.models.shared.PlacementCompatibilityEnum;
import org.openapis.openapi.models.shared.PlacementPaymentSourceEnum;
import org.openapis.openapi.models.shared.PlacementStatusEnum;
import org.openapis.openapi.models.shared.PlacementTagFormatsEnum;
import org.openapis.openapi.models.shared.PlacementVpaidAdapterChoiceEnum;
import org.openapis.openapi.models.shared.PricingSchedule;
import org.openapis.openapi.models.shared.PricingScheduleCapCostOptionEnum;
import org.openapis.openapi.models.shared.PricingSchedulePricingPeriod;
import org.openapis.openapi.models.shared.PricingSchedulePricingTypeEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.SkippableSetting;
import org.openapis.openapi.models.shared.TagSetting;
import org.openapis.openapi.models.shared.TagSettingKeywordOptionEnum;
import org.openapis.openapi.models.shared.TranscodeSetting;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.VideoSettings;
import org.openapis.openapi.models.shared.VideoSettingsOrientationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementsUpdateRequest req = new DfareportingPlacementsUpdateRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "nihil";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 36715;
                            iab = false;
                            id = "veniam";
                            kind = "eius";
                            width = 107835;
                        }}),
                        add(new Size() {{
                            height = 11921;
                            iab = false;
                            id = "neque";
                            kind = "nesciunt";
                            width = 306537;
                        }}),
                        add(new Size() {{
                            height = 460782;
                            iab = false;
                            id = "pariatur";
                            kind = "molestiae";
                            width = 549074;
                        }}),
                        add(new Size() {{
                            height = 990714;
                            iab = false;
                            id = "repellat";
                            kind = "odit";
                            width = 285032;
                        }}),
                    }};
                    advertiserId = "cupiditate";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ab";
                        etag = "vitae";
                        id = "45fab9e5-9a4a-4f33-a664-eaa6bf2ff14e";
                        kind = "praesentium";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "beatae";
                    }};;
                    archived = false;
                    campaignId = "expedita";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "velit";
                        etag = "nemo";
                        id = "2accedac-c522-4781-8eca-016bc41ea134";
                        kind = "explicabo";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quaerat";
                    }};;
                    comment = "architecto";
                    compatibility = PlacementCompatibilityEnum.DISPLAY;
                    contentCategoryId = "tempora";
                    createInfo = new LastModifiedInfo() {{
                        time = "similique";
                    }};;
                    directorySiteId = "dolores";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "veniam";
                        etag = "debitis";
                        id = "f71de57a-11d6-414a-8317-692ea48673d5";
                        kind = "qui";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "rerum";
                    }};;
                    externalId = "corrupti";
                    id = "qui";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "quas";
                        etag = "similique";
                        id = "9030660f-024c-479b-8cc6-4c2b3a32c488";
                        kind = "mollitia";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "debitis";
                    }};;
                    keyName = "ex";
                    kind = "magni";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "reiciendis";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 422353;
                        postImpressionActivitiesDuration = 665401;
                    }};;
                    name = "Jon Heller";
                    partnerWrappingData = new MeasurementPartnerWrappingData() {{
                        linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum.MEASUREMENT_PARTNER_LINK_FAILURE;
                        measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum.VPAID_FILTERING;
                        wrappedTag = "eos";
                    }};;
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "deleniti";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "amet";
                        etag = "aut";
                        id = "16ca34bb-87d4-4f62-927a-607d16062945";
                        kind = "beatae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "cumque";
                    }};;
                    placementStrategyId = "neque";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_CUMULATIVE;
                        endDate = LocalDate.parse("2021-11-01");
                        flighted = false;
                        floodlightActivityId = "cumque";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-01-30");
                                pricingComment = "consectetur";
                                rateOrCostNanos = "quos";
                                startDate = LocalDate.parse("2021-04-06");
                                units = "quia";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-03-30");
                                pricingComment = "quos";
                                rateOrCostNanos = "in";
                                startDate = LocalDate.parse("2022-01-18");
                                units = "voluptatem";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-09-14");
                                pricingComment = "natus";
                                rateOrCostNanos = "adipisci";
                                startDate = LocalDate.parse("2022-02-14");
                                units = "provident";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2021-12-20");
                        testingStartDate = LocalDate.parse("2022-08-06");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "minima";
                    }};;
                    siteId = "mollitia";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sequi";
                        etag = "eos";
                        id = "83279b71-9d1c-4ea6-b3d8-6e3b35e49a31";
                        kind = "consectetur";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "iusto";
                    }};;
                    size = new Size() {{
                        height = 478678;
                        iab = false;
                        id = "quas";
                        kind = "optio";
                        width = 896616;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_ACCEPTED;
                    subaccountId = "numquam";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_STANDARD),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "accusamus";
                        includeClickThroughUrls = false;
                        includeClickTracking = false;
                        keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                    }};;
                    videoActiveViewOptOut = false;
                    videoSettings = new VideoSettings() {{
                        companionSettings = new CompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 653394;
                                    iab = false;
                                    id = "sint";
                                    kind = "ducimus";
                                    width = 326482;
                                }}),
                                add(new Size() {{
                                    height = 27636;
                                    iab = false;
                                    id = "labore";
                                    kind = "corporis";
                                    width = 688036;
                                }}),
                                add(new Size() {{
                                    height = 625774;
                                    iab = false;
                                    id = "quod";
                                    kind = "asperiores";
                                    width = 411308;
                                }}),
                                add(new Size() {{
                                    height = 206874;
                                    iab = false;
                                    id = "nam";
                                    kind = "sed";
                                    width = 94986;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "nemo";
                        }};;
                        durationSeconds = 121704;
                        kind = "quos";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "commodi";
                            iconClickTrackingUrl = "id";
                            iconViewTrackingUrl = "nam";
                            program = "corporis";
                            resourceUrl = "voluptates";
                            size = new Size() {{
                                height = 228441;
                                iab = false;
                                id = "laborum";
                                kind = "alias";
                                width = 179463;
                            }};;
                            xPosition = "qui";
                            yPosition = "autem";
                        }};;
                        orientation = VideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SkippableSetting() {{
                            kind = "tempora";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 242110;
                                offsetSeconds = 67438;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 322574;
                                offsetSeconds = 825786;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(343530),
                            }};
                            kind = "ex";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.HTML5;
                    wrappingOptOut = false;
                }};;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "repudiandae";
                key = "voluptas";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "reiciendis";
                uploadProtocol = "quo";
            }};            

            DfareportingPlacementsUpdateResponse res = sdk.placements.dfareportingPlacementsUpdate(req, new DfareportingPlacementsUpdateSecurity("in", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
