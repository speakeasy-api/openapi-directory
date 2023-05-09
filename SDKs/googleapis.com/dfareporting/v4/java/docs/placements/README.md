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

            DfareportingPlacementsGeneratetagsRequest req = new DfareportingPlacementsGeneratetagsRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "corporis";
                campaignId = "voluptates";
                fields = "amet";
                key = "laborum";
                oauthToken = "alias";
                placementIds = new String[]{{
                    add("qui"),
                }};
                prettyPrint = false;
                quotaUser = "autem";
                tagFormats = new org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsTagFormatsEnum[]{{
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT),
                }};
                uploadType = "velit";
                uploadProtocol = "ab";
            }};            

            DfareportingPlacementsGeneratetagsResponse res = sdk.placements.dfareportingPlacementsGeneratetags(req, new DfareportingPlacementsGeneratetagsSecurity("ad", "assumenda") {{
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

            DfareportingPlacementsGetRequest req = new DfareportingPlacementsGetRequest("inventore", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "occaecati";
                key = "repudiandae";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "officia";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingPlacementsGetResponse res = sdk.placements.dfareportingPlacementsGet(req, new DfareportingPlacementsGetSecurity("quo", "in") {{
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
import org.openapis.openapi.models.shared.PlacementActiveStatusEnum;
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

            DfareportingPlacementsInsertRequest req = new DfareportingPlacementsInsertRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "suscipit";
                    activeStatus = PlacementActiveStatusEnum.PLACEMENT_STATUS_PERMANENTLY_ARCHIVED;
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 175757;
                            iab = false;
                            id = "alias";
                            kind = "tempore";
                            width = 458911;
                        }}),
                        add(new Size() {{
                            height = 683060;
                            iab = false;
                            id = "nihil";
                            kind = "dolor";
                            width = 823722;
                        }}),
                        add(new Size() {{
                            height = 966259;
                            iab = false;
                            id = "labore";
                            kind = "accusantium";
                            width = 776031;
                        }}),
                        add(new Size() {{
                            height = 660602;
                            iab = false;
                            id = "alias";
                            kind = "at";
                            width = 490750;
                        }}),
                    }};
                    advertiserId = "aliquid";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ad";
                        etag = "reprehenderit";
                        id = "c1641bbf-0552-471b-a511-dd606dd1b282";
                        kind = "ducimus";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quidem";
                    }};;
                    campaignId = "minus";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cupiditate";
                        etag = "placeat";
                        id = "3221697b-1880-4fcb-b2b9-3c15f670bd17";
                        kind = "blanditiis";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "blanditiis";
                    }};;
                    comment = "sequi";
                    compatibility = PlacementCompatibilityEnum.DISPLAY;
                    contentCategoryId = "vel";
                    createInfo = new LastModifiedInfo() {{
                        time = "exercitationem";
                    }};;
                    directorySiteId = "dolor";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "debitis";
                        etag = "necessitatibus";
                        id = "b3b6e241-c310-4998-b663-c66dcbb7df6c";
                        kind = "soluta";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "molestias";
                    }};;
                    externalId = "nobis";
                    id = "totam";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "distinctio";
                        etag = "modi";
                        id = "08e07137-74de-44fe-a101-d9780a10c47b";
                        kind = "provident";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "perferendis";
                    }};;
                    keyName = "aliquam";
                    kind = "accusantium";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "possimus";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 428285;
                        postImpressionActivitiesDuration = 796063;
                    }};;
                    name = "Ed Cronin";
                    partnerWrappingData = new MeasurementPartnerWrappingData() {{
                        linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum.MEASUREMENT_PARTNER_MODE_CHANGE_PENDING;
                        measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum.NONE;
                        tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum.NONE;
                        wrappedTag = "aspernatur";
                    }};;
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "sit";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "esse";
                        etag = "accusamus";
                        id = "4048f900-09ed-4290-a78e-b4ae9d64161e";
                        kind = "iste";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "corporis";
                    }};;
                    placementStrategyId = "quae";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-11-07");
                        flighted = false;
                        floodlightActivityId = "amet";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-03-30");
                                pricingComment = "voluptatem";
                                rateOrCostNanos = "cupiditate";
                                startDate = LocalDate.parse("2021-10-16");
                                units = "consequuntur";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-07-18");
                                pricingComment = "odio";
                                rateOrCostNanos = "dicta";
                                startDate = LocalDate.parse("2021-11-26");
                                units = "laboriosam";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-05-23");
                                pricingComment = "voluptates";
                                rateOrCostNanos = "nemo";
                                startDate = LocalDate.parse("2022-02-06");
                                units = "saepe";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_CLICKS;
                        startDate = LocalDate.parse("2022-08-10");
                        testingStartDate = LocalDate.parse("2022-07-25");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "ea";
                    }};;
                    siteId = "labore";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "perspiciatis";
                        etag = "possimus";
                        id = "84eb9e4c-fd22-476e-8b88-fb87d6fa5b6e";
                        kind = "corrupti";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "libero";
                    }};;
                    size = new Size() {{
                        height = 960693;
                        iab = false;
                        id = "praesentium";
                        kind = "dicta";
                        width = 184758;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.DRAFT;
                    subaccountId = "blanditiis";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "inventore";
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
                                    height = 418932;
                                    iab = false;
                                    id = "laborum";
                                    kind = "omnis";
                                    width = 973823;
                                }}),
                                add(new Size() {{
                                    height = 993218;
                                    iab = false;
                                    id = "impedit";
                                    kind = "quis";
                                    width = 392658;
                                }}),
                                add(new Size() {{
                                    height = 110837;
                                    iab = false;
                                    id = "unde";
                                    kind = "odit";
                                    width = 609454;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "placeat";
                        }};;
                        durationSeconds = 765419;
                        kind = "officia";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "occaecati";
                            iconClickTrackingUrl = "nemo";
                            iconViewTrackingUrl = "laboriosam";
                            program = "eaque";
                            resourceUrl = "fuga";
                            size = new Size() {{
                                height = 97735;
                                iab = false;
                                id = "adipisci";
                                kind = "occaecati";
                                width = 349551;
                            }};;
                            xPosition = "excepturi";
                            yPosition = "illo";
                        }};;
                        orientation = VideoSettingsOrientationEnum.LANDSCAPE;
                        publisherSpecificationId = "facere";
                        skippableSettings = new SkippableSetting() {{
                            kind = "fuga";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 70999;
                                offsetSeconds = 853602;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 298797;
                                offsetSeconds = 541662;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(469633),
                                add(559410),
                                add(888545),
                                add(217880),
                            }};
                            kind = "quisquam";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.BOTH;
                    wrappingOptOut = false;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "ab";
                key = "dolore";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "officia";
                uploadProtocol = "natus";
            }};            

            DfareportingPlacementsInsertResponse res = sdk.placements.dfareportingPlacementsInsert(req, new DfareportingPlacementsInsertSecurity("nesciunt", "eaque") {{
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
import org.openapis.openapi.models.operations.DfareportingPlacementsListActiveStatusEnum;
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

            DfareportingPlacementsListRequest req = new DfareportingPlacementsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                activeStatus = new org.openapis.openapi.models.operations.DfareportingPlacementsListActiveStatusEnum[]{{
                    add(DfareportingPlacementsListActiveStatusEnum.PLACEMENT_STATUS_ARCHIVED),
                    add(DfareportingPlacementsListActiveStatusEnum.PLACEMENT_STATUS_UNKNOWN),
                }};
                advertiserIds = new String[]{{
                    add("animi"),
                    add("reiciendis"),
                    add("qui"),
                }};
                alt = AltEnum.JSON;
                callback = "et";
                campaignIds = new String[]{{
                    add("eius"),
                    add("quaerat"),
                    add("amet"),
                }};
                compatibilities = new org.openapis.openapi.models.operations.DfareportingPlacementsListCompatibilitiesEnum[]{{
                    add(DfareportingPlacementsListCompatibilitiesEnum.IN_STREAM_VIDEO),
                    add(DfareportingPlacementsListCompatibilitiesEnum.DISPLAY_INTERSTITIAL),
                    add(DfareportingPlacementsListCompatibilitiesEnum.IN_STREAM_AUDIO),
                }};
                contentCategoryIds = new String[]{{
                    add("deleniti"),
                    add("iure"),
                    add("quis"),
                    add("eum"),
                }};
                directorySiteIds = new String[]{{
                    add("quisquam"),
                    add("optio"),
                    add("eveniet"),
                    add("incidunt"),
                }};
                fields = "dignissimos";
                groupIds = new String[]{{
                    add("impedit"),
                }};
                ids = new String[]{{
                    add("fugit"),
                    add("veritatis"),
                    add("non"),
                    add("reprehenderit"),
                }};
                key = "quidem";
                maxEndDate = "eum";
                maxResults = 926748L;
                maxStartDate = "suscipit";
                minEndDate = "dicta";
                minStartDate = "ipsam";
                oauthToken = "aspernatur";
                pageToken = "placeat";
                paymentSource = DfareportingPlacementsListPaymentSourceEnum.PLACEMENT_PUBLISHER_PAID;
                placementStrategyIds = new String[]{{
                    add("et"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementsListPricingTypesEnum[]{{
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPM),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPM_ACTIVEVIEW),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_CLICKS),
                }};
                quotaUser = "dolor";
                searchString = "culpa";
                siteIds = new String[]{{
                    add("facilis"),
                    add("natus"),
                }};
                sizeIds = new String[]{{
                    add("exercitationem"),
                    add("quidem"),
                    add("repellat"),
                }};
                sortField = DfareportingPlacementsListSortFieldEnum.NAME;
                sortOrder = DfareportingPlacementsListSortOrderEnum.ASCENDING;
                uploadType = "veniam";
                uploadProtocol = "pariatur";
            }};            

            DfareportingPlacementsListResponse res = sdk.placements.dfareportingPlacementsList(req, new DfareportingPlacementsListSecurity("voluptatibus", "vero") {{
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
import org.openapis.openapi.models.shared.PlacementActiveStatusEnum;
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

            DfareportingPlacementsPatchRequest req = new DfareportingPlacementsPatchRequest("provident", "iure") {{
                dollarXgafv = XgafvEnum.ONE;
                placement = new Placement() {{
                    accountId = "repellat";
                    activeStatus = PlacementActiveStatusEnum.PLACEMENT_STATUS_ARCHIVED;
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 731307;
                            iab = false;
                            id = "et";
                            kind = "voluptates";
                            width = 567195;
                        }}),
                        add(new Size() {{
                            height = 811561;
                            iab = false;
                            id = "consequatur";
                            kind = "natus";
                            width = 474164;
                        }}),
                    }};
                    advertiserId = "accusamus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "temporibus";
                        etag = "animi";
                        id = "623442e1-a923-47e9-984c-80b479e89192";
                        kind = "dolorem";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "veritatis";
                    }};;
                    campaignId = "deleniti";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cumque";
                        etag = "officia";
                        id = "8d69c568-9214-4fa2-8207-e4fae038cd7f";
                        kind = "ab";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "minus";
                    }};;
                    comment = "ratione";
                    compatibility = PlacementCompatibilityEnum.IN_STREAM_VIDEO;
                    contentCategoryId = "est";
                    createInfo = new LastModifiedInfo() {{
                        time = "nam";
                    }};;
                    directorySiteId = "dolorum";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repellat";
                        etag = "dignissimos";
                        id = "fc2ccba4-bef0-4df6-8eae-db2ee70be069";
                        kind = "repellat";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "consectetur";
                    }};;
                    externalId = "suscipit";
                    id = "est";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "pariatur";
                        etag = "illum";
                        id = "704080e0-a3fc-473a-9a03-4b11499243af";
                        kind = "mollitia";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "occaecati";
                    }};;
                    keyName = "totam";
                    kind = "in";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "est";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 262267;
                        postImpressionActivitiesDuration = 498291;
                    }};;
                    name = "Miss Juana Koepp";
                    partnerWrappingData = new MeasurementPartnerWrappingData() {{
                        linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum.MEASUREMENT_PARTNER_UNLINKED;
                        measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum.NONE;
                        tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum.MONITORING_READ_ONLY;
                        wrappedTag = "accusamus";
                    }};;
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "fugit";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "amet";
                        etag = "voluptatem";
                        id = "1068539c-e093-42d1-8acd-15d8cc306b78";
                        kind = "nisi";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "dolorem";
                    }};;
                    placementStrategyId = "at";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-04-23");
                        flighted = false;
                        floodlightActivityId = "fugiat";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-09-20");
                                pricingComment = "similique";
                                rateOrCostNanos = "quae";
                                startDate = LocalDate.parse("2022-05-07");
                                units = "dolore";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPM;
                        startDate = LocalDate.parse("2021-08-09");
                        testingStartDate = LocalDate.parse("2022-08-06");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "voluptatibus";
                    }};;
                    siteId = "voluptas";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "reprehenderit";
                        etag = "odio";
                        id = "a48519c3-3749-4028-8882-6bb03c7fd225";
                        kind = "debitis";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "in";
                    }};;
                    size = new Size() {{
                        height = 545793;
                        iab = false;
                        id = "iusto";
                        kind = "architecto";
                        width = 635909;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.ACKNOWLEDGE_REJECTION;
                    subaccountId = "atque";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_CLICK_COMMANDS),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERNAL_REDIRECT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "explicabo";
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
                                    height = 666998;
                                    iab = false;
                                    id = "repellat";
                                    kind = "quaerat";
                                    width = 98864;
                                }}),
                                add(new Size() {{
                                    height = 326786;
                                    iab = false;
                                    id = "voluptatum";
                                    kind = "id";
                                    width = 773381;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "magni";
                        }};;
                        durationSeconds = 832596;
                        kind = "doloremque";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "sapiente";
                            iconClickTrackingUrl = "sit";
                            iconViewTrackingUrl = "repellat";
                            program = "nemo";
                            resourceUrl = "quos";
                            size = new Size() {{
                                height = 758860;
                                iab = false;
                                id = "adipisci";
                                kind = "libero";
                                width = 519896;
                            }};;
                            xPosition = "in";
                            yPosition = "tempore";
                        }};;
                        orientation = VideoSettingsOrientationEnum.ANY;
                        publisherSpecificationId = "molestiae";
                        skippableSettings = new SkippableSetting() {{
                            kind = "eaque";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 272310;
                                offsetSeconds = 14298;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 822093;
                                offsetSeconds = 12119;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(569711),
                                add(550648),
                                add(900756),
                                add(601560),
                            }};
                            kind = "fugiat";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.HTML5;
                    wrappingOptOut = false;
                }};;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "officiis";
                key = "adipisci";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "voluptatibus";
                uploadProtocol = "corporis";
            }};            

            DfareportingPlacementsPatchResponse res = sdk.placements.dfareportingPlacementsPatch(req, new DfareportingPlacementsPatchSecurity("nostrum", "molestiae") {{
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
import org.openapis.openapi.models.shared.PlacementActiveStatusEnum;
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

            DfareportingPlacementsUpdateRequest req = new DfareportingPlacementsUpdateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "nemo";
                    activeStatus = PlacementActiveStatusEnum.PLACEMENT_STATUS_ARCHIVED;
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 916797;
                            iab = false;
                            id = "cum";
                            kind = "consequatur";
                            width = 178911;
                        }}),
                        add(new Size() {{
                            height = 518523;
                            iab = false;
                            id = "ea";
                            kind = "pariatur";
                            width = 2726;
                        }}),
                        add(new Size() {{
                            height = 715120;
                            iab = false;
                            id = "maxime";
                            kind = "aliquam";
                            width = 236280;
                        }}),
                        add(new Size() {{
                            height = 688930;
                            iab = false;
                            id = "veritatis";
                            kind = "quas";
                            width = 660769;
                        }}),
                    }};
                    advertiserId = "expedita";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsum";
                        etag = "molestiae";
                        id = "8f2fcff8-1ddf-47e0-88f7-4ef54c9216e8";
                        kind = "unde";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "aliquid";
                    }};;
                    campaignId = "sequi";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quae";
                        etag = "velit";
                        id = "bb6fc2c8-d270-4109-ab66-ad6e3e1d9d3b";
                        kind = "voluptas";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "perferendis";
                    }};;
                    comment = "nesciunt";
                    compatibility = PlacementCompatibilityEnum.DISPLAY_INTERSTITIAL;
                    contentCategoryId = "quaerat";
                    createInfo = new LastModifiedInfo() {{
                        time = "mollitia";
                    }};;
                    directorySiteId = "dicta";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sunt";
                        etag = "id";
                        id = "a1d5d224-7de9-4b3d-8617-0e768a96bb39";
                        kind = "totam";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "voluptatum";
                    }};;
                    externalId = "corrupti";
                    id = "sequi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "perspiciatis";
                        etag = "rem";
                        id = "eba1bbf7-1433-456f-a349-a164249b211c";
                        kind = "recusandae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "ex";
                    }};;
                    keyName = "tempore";
                    kind = "iste";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "nemo";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 84046;
                        postImpressionActivitiesDuration = 426401;
                    }};;
                    name = "Mrs. Ashley Quigley";
                    partnerWrappingData = new MeasurementPartnerWrappingData() {{
                        linkStatus = MeasurementPartnerWrappingDataLinkStatusEnum.MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING;
                        measurementPartner = MeasurementPartnerWrappingDataMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        tagWrappingMode = MeasurementPartnerWrappingDataTagWrappingModeEnum.VPAID_BLOCKING;
                        wrappedTag = "et";
                    }};;
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "odit";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "reiciendis";
                        etag = "voluptatem";
                        id = "52632b31-cad6-492f-bc87-45005e9d3d93";
                        kind = "incidunt";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "aperiam";
                    }};;
                    placementStrategyId = "non";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        endDate = LocalDate.parse("2021-12-06");
                        flighted = false;
                        floodlightActivityId = "quo";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-12-10");
                                pricingComment = "ea";
                                rateOrCostNanos = "laboriosam";
                                startDate = LocalDate.parse("2022-01-19");
                                units = "ea";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2022-04-14");
                        testingStartDate = LocalDate.parse("2022-10-14");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "perferendis";
                    }};;
                    siteId = "est";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "fugit";
                        etag = "repudiandae";
                        id = "2aed6aaf-863c-428d-840c-69a3d906f6eb";
                        kind = "at";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "officia";
                    }};;
                    size = new Size() {{
                        height = 854904;
                        iab = false;
                        id = "quam";
                        kind = "vero";
                        width = 803994;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_REJECTED;
                    subaccountId = "neque";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERNAL_REDIRECT),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "corporis";
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
                                    height = 192181;
                                    iab = false;
                                    id = "tempora";
                                    kind = "rerum";
                                    width = 191655;
                                }}),
                                add(new Size() {{
                                    height = 462072;
                                    iab = false;
                                    id = "dolorem";
                                    kind = "accusantium";
                                    width = 496078;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "inventore";
                        }};;
                        durationSeconds = 256849;
                        kind = "itaque";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "commodi";
                            iconClickTrackingUrl = "soluta";
                            iconViewTrackingUrl = "recusandae";
                            program = "corrupti";
                            resourceUrl = "minus";
                            size = new Size() {{
                                height = 209465;
                                iab = false;
                                id = "debitis";
                                kind = "consequatur";
                                width = 595944;
                            }};;
                            xPosition = "impedit";
                            yPosition = "vel";
                        }};;
                        orientation = VideoSettingsOrientationEnum.ANY;
                        publisherSpecificationId = "quibusdam";
                        skippableSettings = new SkippableSetting() {{
                            kind = "dolorem";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 303123;
                                offsetSeconds = 172311;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 678476;
                                offsetSeconds = 808797;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(620633),
                            }};
                            kind = "provident";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.HTML5;
                    wrappingOptOut = false;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "debitis";
                key = "quam";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "sapiente";
                uploadProtocol = "inventore";
            }};            

            DfareportingPlacementsUpdateResponse res = sdk.placements.dfareportingPlacementsUpdate(req, new DfareportingPlacementsUpdateSecurity("amet", "quaerat") {{
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
