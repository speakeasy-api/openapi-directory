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

            DfareportingPlacementsGeneratetagsRequest req = new DfareportingPlacementsGeneratetagsRequest("animi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "illum";
                campaignId = "iure";
                fields = "beatae";
                key = "quidem";
                oauthToken = "assumenda";
                placementIds = new String[]{{
                    add("mollitia"),
                    add("mollitia"),
                    add("ipsum"),
                    add("quae"),
                }};
                prettyPrint = false;
                quotaUser = "cum";
                tagFormats = new org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsTagFormatsEnum[]{{
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_TRACKING_IFRAME),
                }};
                uploadType = "beatae";
                uploadProtocol = "labore";
            }};            

            DfareportingPlacementsGeneratetagsResponse res = sdk.placements.dfareportingPlacementsGeneratetags(req, new DfareportingPlacementsGeneratetagsSecurity("modi", "omnis") {{
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

            DfareportingPlacementsGetRequest req = new DfareportingPlacementsGetRequest("officia", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "deleniti";
                key = "totam";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "vitae";
                uploadProtocol = "deleniti";
            }};            

            DfareportingPlacementsGetResponse res = sdk.placements.dfareportingPlacementsGet(req, new DfareportingPlacementsGetSecurity("tempore", "libero") {{
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

            DfareportingPlacementsInsertRequest req = new DfareportingPlacementsInsertRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                placement = new Placement() {{
                    accountId = "totam";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 284045;
                            iab = false;
                            id = "repellat";
                            kind = "modi";
                            width = 175795;
                        }}),
                    }};
                    advertiserId = "ratione";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "pariatur";
                        etag = "ipsam";
                        id = "43935f37-7ac5-4c9b-be93-b6a3c523105e";
                        kind = "iusto";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "dolor";
                    }};;
                    archived = false;
                    campaignId = "quaerat";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "impedit";
                        etag = "deserunt";
                        id = "b0ecb812-a661-4489-84a8-e9085075bc25";
                        kind = "dolorem";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "sed";
                    }};;
                    comment = "exercitationem";
                    compatibility = PlacementCompatibilityEnum.DISPLAY_INTERSTITIAL;
                    contentCategoryId = "nesciunt";
                    createInfo = new LastModifiedInfo() {{
                        time = "tempora";
                    }};;
                    directorySiteId = "nesciunt";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "asperiores";
                        etag = "nobis";
                        id = "0a4e66ea-4757-48d1-b1e2-941818fc679b";
                        kind = "eum";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quia";
                    }};;
                    externalId = "delectus";
                    id = "sunt";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "veniam";
                        etag = "dolorem";
                        id = "59b855d0-15b6-42c8-b83a-38a8a88c1442";
                        kind = "voluptatem";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "optio";
                    }};;
                    keyName = "aspernatur";
                    kind = "maxime";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "deserunt";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 920481;
                        postImpressionActivitiesDuration = 721053;
                    }};;
                    name = "Dr. Hattie Ullrich";
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_PUBLISHER_PAID;
                    placementGroupId = "laudantium";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quo";
                        etag = "adipisci";
                        id = "4946bba7-a05a-48b4-a9ec-5b3688cca363";
                        kind = "magni";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "magni";
                    }};;
                    placementStrategyId = "dignissimos";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        endDate = LocalDate.parse("2022-02-07");
                        flighted = false;
                        floodlightActivityId = "occaecati";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-01-24");
                                pricingComment = "sint";
                                rateOrCostNanos = "nihil";
                                startDate = LocalDate.parse("2022-11-21");
                                units = "veniam";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-22");
                                pricingComment = "aut";
                                rateOrCostNanos = "neque";
                                startDate = LocalDate.parse("2022-09-11");
                                units = "esse";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPM_ACTIVEVIEW;
                        startDate = LocalDate.parse("2022-06-14");
                        testingStartDate = LocalDate.parse("2020-01-07");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "odit";
                    }};;
                    siteId = "ut";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cupiditate";
                        etag = "ab";
                        id = "145fab9e-59a4-4af3-b666-4eaa6bf2ff14";
                        kind = "recusandae";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quod";
                    }};;
                    size = new Size() {{
                        height = 109378;
                        iab = false;
                        id = "expedita";
                        kind = "velit";
                        width = 362786;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_ACCEPTED;
                    subaccountId = "dolorum";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST4),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "maxime";
                        includeClickThroughUrls = false;
                        includeClickTracking = false;
                        keywordOption = TagSettingKeywordOptionEnum.GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
                    }};;
                    videoActiveViewOptOut = false;
                    videoSettings = new VideoSettings() {{
                        companionSettings = new CompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 164223;
                                    iab = false;
                                    id = "qui";
                                    kind = "reprehenderit";
                                    width = 543775;
                                }}),
                                add(new Size() {{
                                    height = 103010;
                                    iab = false;
                                    id = "numquam";
                                    kind = "recusandae";
                                    width = 784985;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "fuga";
                        }};;
                        kind = "aperiam";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "architecto";
                            iconClickTrackingUrl = "vel";
                            iconViewTrackingUrl = "cum";
                            program = "quo";
                            resourceUrl = "aliquam";
                            size = new Size() {{
                                height = 80559;
                                iab = false;
                                id = "repudiandae";
                                kind = "harum";
                                width = 63649;
                            }};;
                            xPosition = "consectetur";
                            yPosition = "quaerat";
                        }};;
                        orientation = VideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SkippableSetting() {{
                            kind = "fugiat";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 307887;
                                offsetSeconds = 103309;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 19336;
                                offsetSeconds = 273823;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(174723),
                                add(332909),
                                add(892527),
                            }};
                            kind = "asperiores";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.FLASH;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "minima";
                key = "ducimus";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "architecto";
                uploadProtocol = "fugiat";
            }};            

            DfareportingPlacementsInsertResponse res = sdk.placements.dfareportingPlacementsInsert(req, new DfareportingPlacementsInsertSecurity("eum", "vitae") {{
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

            DfareportingPlacementsListRequest req = new DfareportingPlacementsListRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                advertiserIds = new String[]{{
                    add("dicta"),
                }};
                alt = AltEnum.MEDIA;
                archived = false;
                callback = "laboriosam";
                campaignIds = new String[]{{
                    add("dolores"),
                    add("repudiandae"),
                    add("fuga"),
                }};
                compatibilities = new org.openapis.openapi.models.operations.DfareportingPlacementsListCompatibilitiesEnum[]{{
                    add(DfareportingPlacementsListCompatibilitiesEnum.APP_INTERSTITIAL),
                    add(DfareportingPlacementsListCompatibilitiesEnum.APP),
                }};
                contentCategoryIds = new String[]{{
                    add("nesciunt"),
                    add("vero"),
                }};
                directorySiteIds = new String[]{{
                    add("qui"),
                    add("sunt"),
                }};
                fields = "rerum";
                groupIds = new String[]{{
                    add("qui"),
                    add("quas"),
                    add("similique"),
                }};
                ids = new String[]{{
                    add("doloremque"),
                    add("amet"),
                    add("accusantium"),
                }};
                key = "eum";
                maxEndDate = "commodi";
                maxResults = 41429L;
                maxStartDate = "asperiores";
                minEndDate = "doloremque";
                minStartDate = "fugit";
                oauthToken = "quaerat";
                pageToken = "eligendi";
                paymentSource = DfareportingPlacementsListPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                placementStrategyIds = new String[]{{
                    add("quidem"),
                    add("ut"),
                    add("optio"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementsListPricingTypesEnum[]{{
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPA),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPC),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_CLICKS),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPC),
                }};
                quotaUser = "libero";
                searchString = "sequi";
                siteIds = new String[]{{
                    add("ratione"),
                    add("odit"),
                    add("optio"),
                }};
                sizeIds = new String[]{{
                    add("voluptatum"),
                    add("deleniti"),
                }};
                sortField = DfareportingPlacementsListSortFieldEnum.NAME;
                sortOrder = DfareportingPlacementsListSortOrderEnum.DESCENDING;
                uploadType = "debitis";
                uploadProtocol = "ex";
            }};            

            DfareportingPlacementsListResponse res = sdk.placements.dfareportingPlacementsList(req, new DfareportingPlacementsListSecurity("magni", "reiciendis") {{
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

            DfareportingPlacementsPatchRequest req = new DfareportingPlacementsPatchRequest("autem", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "quaerat";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 561434;
                            iab = false;
                            id = "id";
                            kind = "voluptas";
                            width = 359732;
                        }}),
                        add(new Size() {{
                            height = 911982;
                            iab = false;
                            id = "eos";
                            kind = "aperiam";
                            width = 534039;
                        }}),
                    }};
                    advertiserId = "amet";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aut";
                        etag = "quasi";
                        id = "6ca34bb8-7d4f-4621-a7a6-07d160629451";
                        kind = "magnam";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "neque";
                    }};;
                    archived = false;
                    campaignId = "pariatur";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "distinctio";
                        etag = "cupiditate";
                        id = "ca9f38bd-2be8-4787-8349-3f49aa8465a3";
                        kind = "eos";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "adipisci";
                    }};;
                    comment = "fugit";
                    compatibility = PlacementCompatibilityEnum.APP;
                    contentCategoryId = "natus";
                    createInfo = new LastModifiedInfo() {{
                        time = "facilis";
                    }};;
                    directorySiteId = "quam";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "beatae";
                        etag = "error";
                        id = "d1cea673-d86e-43b3-9e49-a3135778ce54";
                        kind = "minus";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "porro";
                    }};;
                    externalId = "libero";
                    id = "perferendis";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "accusamus";
                        etag = "ratione";
                        id = "ea975045-bacf-463b-a151-86ab5e3a0226";
                        kind = "architecto";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "velit";
                    }};;
                    keyName = "ab";
                    kind = "ad";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "assumenda";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 78738;
                        postImpressionActivitiesDuration = 343530;
                    }};;
                    name = "Lena Cummings";
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_PUBLISHER_PAID;
                    placementGroupId = "voluptas";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "architecto";
                        etag = "officia";
                        id = "fc7186ff-20b7-4a73-9f40-ca0d7657c164";
                        kind = "ab";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "facilis";
                    }};;
                    placementStrategyId = "maiores";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-08-31");
                        flighted = false;
                        floodlightActivityId = "fugit";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-04-05");
                                pricingComment = "eos";
                                rateOrCostNanos = "quaerat";
                                startDate = LocalDate.parse("2022-11-24");
                                units = "repellendus";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-11-07");
                                pricingComment = "consequatur";
                                rateOrCostNanos = "aliquid";
                                startDate = LocalDate.parse("2020-06-21");
                                units = "beatae";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_CLICKS;
                        startDate = LocalDate.parse("2022-06-22");
                        testingStartDate = LocalDate.parse("2022-07-02");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "fugit";
                    }};;
                    siteId = "quidem";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "minus";
                        etag = "cupiditate";
                        id = "c3221697-b188-40fc-bb2b-93c15f670bd1";
                        kind = "nihil";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "numquam";
                    }};;
                    size = new Size() {{
                        height = 504097;
                        iab = false;
                        id = "sequi";
                        kind = "sunt";
                        width = 427184;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_REJECTED;
                    subaccountId = "dolor";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_JAVASCRIPT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "ex";
                        includeClickThroughUrls = false;
                        includeClickTracking = false;
                        keywordOption = TagSettingKeywordOptionEnum.GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
                    }};;
                    videoActiveViewOptOut = false;
                    videoSettings = new VideoSettings() {{
                        companionSettings = new CompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 310285;
                                    iab = false;
                                    id = "dicta";
                                    kind = "quisquam";
                                    width = 237731;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "quasi";
                        }};;
                        kind = "alias";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "occaecati";
                            iconClickTrackingUrl = "perspiciatis";
                            iconViewTrackingUrl = "deleniti";
                            program = "dolor";
                            resourceUrl = "eum";
                            size = new Size() {{
                                height = 431481;
                                iab = false;
                                id = "dolorem";
                                kind = "placeat";
                                width = 427526;
                            }};;
                            xPosition = "commodi";
                            yPosition = "quibusdam";
                        }};;
                        orientation = VideoSettingsOrientationEnum.PORTRAIT;
                        skippableSettings = new SkippableSetting() {{
                            kind = "libero";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 712109;
                                offsetSeconds = 440603;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 861631;
                                offsetSeconds = 967589;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(785292),
                                add(742738),
                            }};
                            kind = "aperiam";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.HTML5;
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "modi";
                key = "aperiam";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "eaque";
                uploadProtocol = "nihil";
            }};            

            DfareportingPlacementsPatchResponse res = sdk.placements.dfareportingPlacementsPatch(req, new DfareportingPlacementsPatchSecurity("dicta", "adipisci") {{
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

            DfareportingPlacementsUpdateRequest req = new DfareportingPlacementsUpdateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                placement = new Placement() {{
                    accountId = "magnam";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 903335;
                            iab = false;
                            id = "non";
                            kind = "a";
                            width = 914093;
                        }}),
                        add(new Size() {{
                            height = 878742;
                            iab = false;
                            id = "quae";
                            kind = "doloremque";
                            width = 89357;
                        }}),
                        add(new Size() {{
                            height = 819341;
                            iab = false;
                            id = "unde";
                            kind = "esse";
                            width = 509797;
                        }}),
                        add(new Size() {{
                            height = 46924;
                            iab = false;
                            id = "laborum";
                            kind = "dicta";
                            width = 43445;
                        }}),
                    }};
                    advertiserId = "minus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eius";
                        etag = "odio";
                        id = "b95040d6-c8b2-4a5f-8022-07e4048f9000";
                        kind = "iste";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "illum";
                    }};;
                    archived = false;
                    campaignId = "consequuntur";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "occaecati";
                        etag = "doloremque";
                        id = "278eb4ae-9d64-4161-a915-00323b2c09b9";
                        kind = "consequuntur";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "voluptate";
                    }};;
                    comment = "odio";
                    compatibility = PlacementCompatibilityEnum.DISPLAY;
                    contentCategoryId = "earum";
                    createInfo = new LastModifiedInfo() {{
                        time = "nemo";
                    }};;
                    directorySiteId = "laboriosam";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aliquid";
                        etag = "iste";
                        id = "e5b7ec76-2664-49d8-8eb9-e4cfd2276e0b";
                        kind = "rem";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "repellat";
                    }};;
                    externalId = "harum";
                    id = "atque";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "iure";
                        etag = "nulla";
                        id = "6fa5b6e8-dbf8-412f-83b1-ca6a9ffc5619";
                        kind = "odit";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "placeat";
                    }};;
                    keyName = "cumque";
                    kind = "officia";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "occaecati";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 366609;
                        postImpressionActivitiesDuration = 386441;
                    }};;
                    name = "Lee Boyle";
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "excepturi";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "illo";
                        etag = "quas";
                        id = "da1d48e7-8e3c-4f8e-9143-da9308b27a08";
                        kind = "animi";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "qui";
                    }};;
                    placementStrategyId = "aspernatur";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-06-22");
                        flighted = false;
                        floodlightActivityId = "quaerat";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-07-17");
                                pricingComment = "nesciunt";
                                rateOrCostNanos = "illum";
                                startDate = LocalDate.parse("2021-05-26");
                                units = "iure";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2022-03-31");
                        testingStartDate = LocalDate.parse("2020-09-18");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "eveniet";
                    }};;
                    siteId = "incidunt";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dignissimos";
                        etag = "accusantium";
                        id = "cd2147b6-e615-42cf-81d0-d8c3a4b9a5bf";
                        kind = "molestias";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "veniam";
                    }};;
                    size = new Size() {{
                        height = 865276;
                        iab = false;
                        id = "voluptatibus";
                        kind = "vero";
                        width = 588995;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_REJECTED;
                    subaccountId = "incidunt";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_TRACKING_JAVASCRIPT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "voluptates";
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
                                    height = 7471;
                                    iab = false;
                                    id = "natus";
                                    kind = "molestiae";
                                    width = 881035;
                                }}),
                                add(new Size() {{
                                    height = 836804;
                                    iab = false;
                                    id = "animi";
                                    kind = "autem";
                                    width = 142900;
                                }}),
                                add(new Size() {{
                                    height = 203992;
                                    iab = false;
                                    id = "magnam";
                                    kind = "numquam";
                                    width = 147815;
                                }}),
                                add(new Size() {{
                                    height = 913809;
                                    iab = false;
                                    id = "beatae";
                                    kind = "id";
                                    width = 601082;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "consequuntur";
                        }};;
                        kind = "ratione";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "quam";
                            iconClickTrackingUrl = "recusandae";
                            iconViewTrackingUrl = "iste";
                            program = "cupiditate";
                            resourceUrl = "blanditiis";
                            size = new Size() {{
                                height = 253929;
                                iab = false;
                                id = "porro";
                                kind = "quas";
                                width = 6292;
                            }};;
                            xPosition = "facilis";
                            yPosition = "ut";
                        }};;
                        orientation = VideoSettingsOrientationEnum.LANDSCAPE;
                        skippableSettings = new SkippableSetting() {{
                            kind = "sint";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 905154;
                                offsetSeconds = 538900;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 570783;
                                offsetSeconds = 104080;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(175216),
                                add(210325),
                                add(752959),
                            }};
                            kind = "veritatis";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.HTML5;
                }};;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "facere";
                key = "vel";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "enim";
                uploadProtocol = "ex";
            }};            

            DfareportingPlacementsUpdateResponse res = sdk.placements.dfareportingPlacementsUpdate(req, new DfareportingPlacementsUpdateSecurity("rem", "cupiditate") {{
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
