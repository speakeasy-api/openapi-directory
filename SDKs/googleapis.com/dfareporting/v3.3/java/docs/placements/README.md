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

            DfareportingPlacementsGeneratetagsRequest req = new DfareportingPlacementsGeneratetagsRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "quam";
                campaignId = "nobis";
                fields = "qui";
                key = "totam";
                oauthToken = "recusandae";
                placementIds = new String[]{{
                    add("deserunt"),
                    add("a"),
                    add("culpa"),
                }};
                prettyPrint = false;
                quotaUser = "cum";
                tagFormats = new org.openapis.openapi.models.operations.DfareportingPlacementsGeneratetagsTagFormatsEnum[]{{
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_TRACKING_IFRAME),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_TRACKING),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT),
                    add(DfareportingPlacementsGeneratetagsTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY),
                }};
                uploadType = "consequuntur";
                uploadProtocol = "aliquam";
            }};            

            DfareportingPlacementsGeneratetagsResponse res = sdk.placements.dfareportingPlacementsGeneratetags(req, new DfareportingPlacementsGeneratetagsSecurity("dicta", "earum") {{
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

            DfareportingPlacementsGetRequest req = new DfareportingPlacementsGetRequest("magnam", "dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "ut";
                fields = "explicabo";
                key = "dolore";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "illum";
                uploadProtocol = "vitae";
            }};            

            DfareportingPlacementsGetResponse res = sdk.placements.dfareportingPlacementsGet(req, new DfareportingPlacementsGetSecurity("adipisci", "debitis") {{
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

            DfareportingPlacementsInsertRequest req = new DfareportingPlacementsInsertRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "nisi";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 629486;
                            iab = false;
                            id = "culpa";
                            kind = "cupiditate";
                            width = 633887;
                        }}),
                    }};
                    advertiserId = "recusandae";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "labore";
                        etag = "fuga";
                        id = "e8ab4a9c-492c-45e8-ba5d-4aa4a508bd38";
                        kind = "eaque";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "sed";
                    }};;
                    archived = false;
                    campaignId = "excepturi";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "animi";
                        etag = "deserunt";
                        id = "8dd71bdd-aa30-4b7b-9144-9ae69c088d41";
                        kind = "deleniti";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "libero";
                    }};;
                    comment = "quam";
                    compatibility = PlacementCompatibilityEnum.DISPLAY;
                    contentCategoryId = "totam";
                    createInfo = new LastModifiedInfo() {{
                        time = "accusantium";
                    }};;
                    directorySiteId = "ut";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repellat";
                        etag = "modi";
                        id = "23d54393-5f37-47ac-9c9b-7e93b6a3c523";
                        kind = "quasi";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quis";
                    }};;
                    externalId = "recusandae";
                    id = "iusto";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "impedit";
                        etag = "dolor";
                        id = "4cab0ecb-812a-4661-8894-4a8e9085075b";
                        kind = "quisquam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "exercitationem";
                    }};;
                    keyName = "dolorem";
                    kind = "praesentium";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "sed";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 346632;
                        postImpressionActivitiesDuration = 188076;
                    }};;
                    name = "Hazel Dooley";
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "similique";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "modi";
                        etag = "itaque";
                        id = "66ea4757-8d17-41e2-9418-18fc679b6b2f";
                        kind = "sunt";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dolorem";
                    }};;
                    placementStrategyId = "corporis";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        disregardOverdelivery = false;
                        endDate = LocalDate.parse("2021-11-28");
                        flighted = false;
                        floodlightActivityId = "ipsam";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-13");
                                pricingComment = "et";
                                rateOrCostNanos = "ad";
                                startDate = LocalDate.parse("2022-03-16");
                                units = "quia";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-05-08");
                                pricingComment = "cum";
                                rateOrCostNanos = "praesentium";
                                startDate = LocalDate.parse("2022-04-28");
                                units = "amet";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2021-12-01");
                        testingStartDate = LocalDate.parse("2021-12-23");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "molestias";
                    }};;
                    siteId = "quo";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "vitae";
                        etag = "modi";
                        id = "4200c2ca-eb1a-4e1e-8f8c-34946bba7a05";
                        kind = "deserunt";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "expedita";
                    }};;
                    size = new Size() {{
                        height = 301497;
                        iab = false;
                        id = "deserunt";
                        kind = "perspiciatis";
                        width = 914673;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.ACKNOWLEDGE_ACCEPTANCE;
                    subaccountId = "veniam";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_JAVASCRIPT),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_CLICK_COMMANDS),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_TRACKING),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "rem";
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
                                    height = 686795;
                                    iab = false;
                                    id = "consectetur";
                                    kind = "vel";
                                    width = 221298;
                                }}),
                                add(new Size() {{
                                    height = 167570;
                                    iab = false;
                                    id = "odio";
                                    kind = "magni";
                                    width = 494136;
                                }}),
                                add(new Size() {{
                                    height = 436752;
                                    iab = false;
                                    id = "sit";
                                    kind = "necessitatibus";
                                    width = 581946;
                                }}),
                                add(new Size() {{
                                    height = 425090;
                                    iab = false;
                                    id = "autem";
                                    kind = "earum";
                                    width = 576380;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "nihil";
                        }};;
                        kind = "voluptates";
                        orientation = VideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SkippableSetting() {{
                            kind = "veniam";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 261243;
                                offsetSeconds = 107835;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 11921;
                                offsetSeconds = 206518;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(306537),
                            }};
                            kind = "esse";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.BOTH;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "repellat";
                key = "odit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "ab";
                uploadProtocol = "vitae";
            }};            

            DfareportingPlacementsInsertResponse res = sdk.placements.dfareportingPlacementsInsert(req, new DfareportingPlacementsInsertSecurity("magnam", "ullam") {{
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

            DfareportingPlacementsListRequest req = new DfareportingPlacementsListRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                advertiserIds = new String[]{{
                    add("voluptates"),
                    add("veniam"),
                    add("perspiciatis"),
                }};
                alt = AltEnum.PROTO;
                archived = false;
                callback = "incidunt";
                campaignIds = new String[]{{
                    add("a"),
                    add("ipsum"),
                    add("amet"),
                }};
                compatibilities = new org.openapis.openapi.models.operations.DfareportingPlacementsListCompatibilitiesEnum[]{{
                    add(DfareportingPlacementsListCompatibilitiesEnum.APP),
                    add(DfareportingPlacementsListCompatibilitiesEnum.APP),
                }};
                contentCategoryIds = new String[]{{
                    add("accusamus"),
                    add("deserunt"),
                }};
                directorySiteIds = new String[]{{
                    add("autem"),
                    add("rerum"),
                    add("sapiente"),
                }};
                fields = "dolores";
                groupIds = new String[]{{
                    add("doloribus"),
                    add("quasi"),
                    add("quaerat"),
                    add("recusandae"),
                }};
                ids = new String[]{{
                    add("quod"),
                    add("beatae"),
                    add("expedita"),
                }};
                key = "velit";
                maxEndDate = "nemo";
                maxResults = 167502L;
                maxStartDate = "dolorum";
                minEndDate = "porro";
                minStartDate = "placeat";
                oauthToken = "recusandae";
                pageToken = "repellendus";
                paymentSource = DfareportingPlacementsListPaymentSourceEnum.PLACEMENT_PUBLISHER_PAID;
                placementStrategyIds = new String[]{{
                    add("minus"),
                    add("ad"),
                    add("consequuntur"),
                    add("qui"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementsListPricingTypesEnum[]{{
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS),
                    add(DfareportingPlacementsListPricingTypesEnum.PRICING_TYPE_CPM),
                }};
                quotaUser = "numquam";
                searchString = "recusandae";
                siteIds = new String[]{{
                    add("fuga"),
                    add("aperiam"),
                    add("architecto"),
                    add("vel"),
                }};
                sizeIds = new String[]{{
                    add("quo"),
                    add("aliquam"),
                    add("inventore"),
                }};
                sortField = DfareportingPlacementsListSortFieldEnum.NAME;
                sortOrder = DfareportingPlacementsListSortOrderEnum.DESCENDING;
                uploadType = "quae";
                uploadProtocol = "consectetur";
            }};            

            DfareportingPlacementsListResponse res = sdk.placements.dfareportingPlacementsList(req, new DfareportingPlacementsListSecurity("quaerat", "explicabo") {{
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

            DfareportingPlacementsPatchRequest req = new DfareportingPlacementsPatchRequest("fugiat", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                placement = new Placement() {{
                    accountId = "perferendis";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 630023;
                            iab = false;
                            id = "dolores";
                            kind = "veniam";
                            width = 892527;
                        }}),
                        add(new Size() {{
                            height = 993712;
                            iab = false;
                            id = "iusto";
                            kind = "quasi";
                            width = 856048;
                        }}),
                    }};
                    advertiserId = "debitis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "minima";
                        etag = "ducimus";
                        id = "a11d614a-4317-4692-aa48-673d522b828a";
                        kind = "error";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "amet";
                    }};;
                    archived = false;
                    campaignId = "accusantium";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eum";
                        etag = "commodi";
                        id = "0f024c79-b4cc-464c-ab3a-32c488ade62f";
                        kind = "autem";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "dolorum";
                    }};;
                    comment = "quaerat";
                    compatibility = PlacementCompatibilityEnum.APP;
                    contentCategoryId = "molestias";
                    createInfo = new LastModifiedInfo() {{
                        time = "id";
                    }};;
                    directorySiteId = "voluptas";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "corporis";
                        etag = "eveniet";
                        id = "2083016c-a34b-4b87-94f6-2127a607d160";
                        kind = "aliquid";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "sint";
                    }};;
                    externalId = "quaerat";
                    id = "nostrum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "beatae";
                        etag = "magnam";
                        id = "c3db9ca9-f38b-4d2b-a878-703493f49aa8";
                        kind = "labore";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "minima";
                    }};;
                    keyName = "mollitia";
                    kind = "sequi";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "eos";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 514602;
                        postImpressionActivitiesDuration = 236482;
                    }};;
                    name = "Heidi Mosciski";
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_AGENCY_PAID;
                    placementGroupId = "error";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quibusdam";
                        etag = "ab";
                        id = "cea673d8-6e3b-435e-89a3-135778ce54ca";
                        kind = "porro";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "perferendis";
                    }};;
                    placementStrategyId = "accusamus";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        disregardOverdelivery = false;
                        endDate = LocalDate.parse("2021-01-15");
                        flighted = false;
                        floodlightActivityId = "sint";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-12-21");
                                pricingComment = "labore";
                                rateOrCostNanos = "corporis";
                                startDate = LocalDate.parse("2021-10-01");
                                units = "quod";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-10-07");
                                pricingComment = "neque";
                                rateOrCostNanos = "nam";
                                startDate = LocalDate.parse("2022-11-27");
                                units = "nemo";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPM;
                        startDate = LocalDate.parse("2022-03-03");
                        testingStartDate = LocalDate.parse("2021-07-21");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "corporis";
                    }};;
                    siteId = "voluptates";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "amet";
                        etag = "laborum";
                        id = "02261431-5d15-4682-99e6-1afc7186ff20";
                        kind = "tempore";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "fuga";
                    }};;
                    size = new Size() {{
                        height = 468910;
                        iab = false;
                        id = "dolor";
                        kind = "possimus";
                        width = 966259;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.PAYMENT_ACCEPTED;
                    subaccountId = "accusantium";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST3),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_STANDARD),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY),
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "aliquid";
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
                                    height = 808156;
                                    iab = false;
                                    id = "quae";
                                    kind = "ex";
                                    width = 263290;
                                }}),
                                add(new Size() {{
                                    height = 69878;
                                    iab = false;
                                    id = "distinctio";
                                    kind = "facilis";
                                    width = 982300;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "aut";
                        }};;
                        kind = "nostrum";
                        orientation = VideoSettingsOrientationEnum.LANDSCAPE;
                        skippableSettings = new SkippableSetting() {{
                            kind = "fugit";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 498330;
                                offsetSeconds = 92895;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 741743;
                                offsetSeconds = 180369;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(111040),
                                add(104097),
                            }};
                            kind = "repellendus";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.BOTH;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "at";
                key = "quibusdam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "sunt";
                uploadProtocol = "rem";
            }};            

            DfareportingPlacementsPatchResponse res = sdk.placements.dfareportingPlacementsPatch(req, new DfareportingPlacementsPatchSecurity("magni", "ducimus") {{
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

            DfareportingPlacementsUpdateRequest req = new DfareportingPlacementsUpdateRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                placement = new Placement() {{
                    accountId = "minus";
                    adBlockingOptOut = false;
                    additionalSizes = new org.openapis.openapi.models.shared.Size[]{{
                        add(new Size() {{
                            height = 810982;
                            iab = false;
                            id = "ratione";
                            kind = "magni";
                            width = 125769;
                        }}),
                        add(new Size() {{
                            height = 112517;
                            iab = false;
                            id = "ex";
                            kind = "sint";
                            width = 494081;
                        }}),
                        add(new Size() {{
                            height = 699707;
                            iab = false;
                            id = "inventore";
                            kind = "quas";
                            width = 535663;
                        }}),
                    }};
                    advertiserId = "voluptatem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "reiciendis";
                        etag = "cumque";
                        id = "bb2b93c1-5f67-40bd-9784-831653eeb3b6";
                        kind = "vero";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quaerat";
                    }};;
                    archived = false;
                    campaignId = "dicta";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quisquam";
                        etag = "adipisci";
                        id = "10998366-3c66-4dcb-b7df-6cb09c8b408e";
                        kind = "eaque";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dicta";
                    }};;
                    comment = "adipisci";
                    compatibility = PlacementCompatibilityEnum.APP;
                    contentCategoryId = "in";
                    createInfo = new LastModifiedInfo() {{
                        time = "magnam";
                    }};;
                    directorySiteId = "repellendus";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "saepe";
                        etag = "non";
                        id = "fee101d9-780a-410c-87b9-5040d6c8b2a5";
                        kind = "a";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "perferendis";
                    }};;
                    externalId = "aspernatur";
                    id = "sed";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "sit";
                        etag = "esse";
                        id = "e4048f90-009e-4d29-8278-eb4ae9d64161";
                        kind = "recusandae";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "sunt";
                    }};;
                    keyName = "corporis";
                    kind = "quae";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "alias";
                    }};;
                    lookbackConfiguration = new LookbackConfiguration() {{
                        clickDuration = 188719;
                        postImpressionActivitiesDuration = 149418;
                    }};;
                    name = "Melody Daugherty V";
                    paymentApproved = false;
                    paymentSource = PlacementPaymentSourceEnum.PLACEMENT_PUBLISHER_PAID;
                    placementGroupId = "omnis";
                    placementGroupIdDimensionValue = new DimensionValue() {{
                        dimensionName = "consequuntur";
                        etag = "tempora";
                        id = "771f5669-e5b7-4ec7-a266-49d84eb9e4cf";
                        kind = "at";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "odit";
                    }};;
                    placementStrategyId = "molestiae";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        disregardOverdelivery = false;
                        endDate = LocalDate.parse("2022-12-03");
                        flighted = false;
                        floodlightActivityId = "expedita";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-01-01");
                                pricingComment = "harum";
                                rateOrCostNanos = "atque";
                                startDate = LocalDate.parse("2022-02-20");
                                units = "aliquid";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-02-12");
                                pricingComment = "veniam";
                                rateOrCostNanos = "cum";
                                startDate = LocalDate.parse("2022-01-23");
                                units = "corrupti";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2020-10-23");
                                pricingComment = "sapiente";
                                rateOrCostNanos = "praesentium";
                                startDate = LocalDate.parse("2022-10-25");
                                units = "asperiores";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2022-04-12");
                        testingStartDate = LocalDate.parse("2022-04-01");
                    }};;
                    primary = false;
                    publisherUpdateInfo = new LastModifiedInfo() {{
                        time = "animi";
                    }};;
                    siteId = "autem";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "laborum";
                        etag = "omnis";
                        id = "ffc56192-9cca-4956-8a13-95918da1d48e";
                        kind = "nihil";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "officiis";
                    }};;
                    size = new Size() {{
                        height = 217880;
                        iab = false;
                        id = "quisquam";
                        kind = "asperiores";
                        width = 508834;
                    }};;
                    sslRequired = false;
                    status = PlacementStatusEnum.DRAFT;
                    subaccountId = "inventore";
                    tagFormats = new org.openapis.openapi.models.shared.PlacementTagFormatsEnum[]{{
                        add(PlacementTagFormatsEnum.PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT),
                    }};
                    tagSetting = new TagSetting() {{
                        additionalKeyValues = "amet";
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
                                    height = 618177;
                                    iab = false;
                                    id = "nesciunt";
                                    kind = "eaque";
                                    width = 537178;
                                }}),
                                add(new Size() {{
                                    height = 749851;
                                    iab = false;
                                    id = "magni";
                                    kind = "nihil";
                                    width = 672706;
                                }}),
                                add(new Size() {{
                                    height = 13700;
                                    iab = false;
                                    id = "voluptatum";
                                    kind = "animi";
                                    width = 969433;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "qui";
                        }};;
                        kind = "aspernatur";
                        orientation = VideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SkippableSetting() {{
                            kind = "voluptatum";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 263325;
                                offsetSeconds = 311724;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 230118;
                                offsetSeconds = 612689;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new TranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(203255),
                                add(848008),
                                add(925393),
                            }};
                            kind = "deleniti";
                        }};;
                    }};;
                    vpaidAdapterChoice = PlacementVpaidAdapterChoiceEnum.FLASH;
                }};;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "quisquam";
                key = "optio";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "dignissimos";
                uploadProtocol = "accusantium";
            }};            

            DfareportingPlacementsUpdateResponse res = sdk.placements.dfareportingPlacementsUpdate(req, new DfareportingPlacementsUpdateSecurity("impedit", "fugiat") {{
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
