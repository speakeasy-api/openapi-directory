# placementGroups

### Available Operations

* [dfareportingPlacementGroupsGet](#dfareportingplacementgroupsget) - Gets one placement group by ID.
* [dfareportingPlacementGroupsInsert](#dfareportingplacementgroupsinsert) - Inserts a new placement group.
* [dfareportingPlacementGroupsList](#dfareportingplacementgroupslist) - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* [dfareportingPlacementGroupsPatch](#dfareportingplacementgroupspatch) - Updates an existing placement group. This method supports patch semantics.
* [dfareportingPlacementGroupsUpdate](#dfareportingplacementgroupsupdate) - Updates an existing placement group.

## dfareportingPlacementGroupsGet

Gets one placement group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementGroupsGetRequest req = new DfareportingPlacementGroupsGetRequest("dolor", "natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "dolorum";
                key = "quidem";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "nam";
                uploadProtocol = "occaecati";
            }};            

            DfareportingPlacementGroupsGetResponse res = sdk.placementGroups.dfareportingPlacementGroupsGet(req, new DfareportingPlacementGroupsGetSecurity("quasi", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementGroupsInsert

Inserts a new placement group.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.PlacementGroup;
import org.openapis.openapi.models.shared.PlacementGroupActiveStatusEnum;
import org.openapis.openapi.models.shared.PlacementGroupPlacementGroupTypeEnum;
import org.openapis.openapi.models.shared.PricingSchedule;
import org.openapis.openapi.models.shared.PricingScheduleCapCostOptionEnum;
import org.openapis.openapi.models.shared.PricingSchedulePricingPeriod;
import org.openapis.openapi.models.shared.PricingSchedulePricingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementGroupsInsertRequest req = new DfareportingPlacementGroupsInsertRequest("a") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "neque";
                    activeStatus = PlacementGroupActiveStatusEnum.PLACEMENT_STATUS_UNKNOWN;
                    advertiserId = "dolor";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "iste";
                        etag = "quos";
                        id = "4507e0e3-9c7e-423e-8b06-04652e23a3d6";
                        kind = "quo";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quis";
                    }};;
                    campaignId = "reprehenderit";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "vero";
                        etag = "unde";
                        id = "de8f7f00-2d19-486a-a99d-3a1d32329e45";
                        kind = "rem";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "voluptate";
                    }};;
                    childPlacementIds = new String[]{{
                        add("atque"),
                        add("reiciendis"),
                        add("qui"),
                        add("officia"),
                    }};
                    comment = "fugiat";
                    contentCategoryId = "laboriosam";
                    createInfo = new LastModifiedInfo() {{
                        time = "tempore";
                    }};;
                    directorySiteId = "harum";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "inventore";
                        etag = "aut";
                        id = "e255fdc4-80d6-4e33-8867-5cbf186856a7";
                        kind = "officiis";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "fugit";
                    }};;
                    externalId = "eligendi";
                    id = "facere";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "doloribus";
                        etag = "omnis";
                        id = "d0fc282c-666a-4f3c-bf55-89bea5d264e4";
                        kind = "beatae";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "ratione";
                    }};;
                    kind = "porro";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "fuga";
                    }};;
                    name = "Francis Lockman";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                    placementStrategyId = "veniam";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-01-04");
                        flighted = false;
                        floodlightActivityId = "autem";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-04-07");
                                pricingComment = "magni";
                                rateOrCostNanos = "similique";
                                startDate = LocalDate.parse("2022-04-29");
                                units = "molestiae";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-05-14");
                                pricingComment = "eaque";
                                rateOrCostNanos = "error";
                                startDate = LocalDate.parse("2022-12-08");
                                units = "iure";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-04-02");
                                pricingComment = "quae";
                                rateOrCostNanos = "sit";
                                startDate = LocalDate.parse("2022-03-24");
                                units = "deleniti";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-05-21");
                                pricingComment = "sed";
                                rateOrCostNanos = "veritatis";
                                startDate = LocalDate.parse("2022-10-10");
                                units = "eveniet";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2022-03-02");
                        testingStartDate = LocalDate.parse("2022-06-23");
                    }};;
                    primaryPlacementId = "voluptatum";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "vel";
                        etag = "quae";
                        id = "543c0a30-49c3-4cf6-8027-6e7b21bad90d";
                        kind = "aspernatur";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "ut";
                    }};;
                    siteId = "velit";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "doloribus";
                        etag = "nulla";
                        id = "6c2a10e6-c297-48ec-a56a-5b09227fcc47";
                        kind = "natus";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nisi";
                    }};;
                    subaccountId = "optio";
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "cum";
                key = "soluta";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "esse";
                uploadProtocol = "sapiente";
            }};            

            DfareportingPlacementGroupsInsertResponse res = sdk.placementGroups.dfareportingPlacementGroupsInsert(req, new DfareportingPlacementGroupsInsertSecurity("ratione", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementGroupsList

Retrieves a list of placement groups, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListActiveStatusEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListPlacementGroupTypeEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListPricingTypesEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListSecurity;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementGroupsListRequest req = new DfareportingPlacementGroupsListRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                activeStatus = new org.openapis.openapi.models.operations.DfareportingPlacementGroupsListActiveStatusEnum[]{{
                    add(DfareportingPlacementGroupsListActiveStatusEnum.PLACEMENT_STATUS_INACTIVE),
                    add(DfareportingPlacementGroupsListActiveStatusEnum.PLACEMENT_STATUS_ACTIVE),
                    add(DfareportingPlacementGroupsListActiveStatusEnum.PLACEMENT_STATUS_UNKNOWN),
                }};
                advertiserIds = new String[]{{
                    add("quo"),
                }};
                alt = AltEnum.JSON;
                callback = "atque";
                campaignIds = new String[]{{
                    add("eum"),
                    add("iusto"),
                    add("facere"),
                    add("ea"),
                }};
                contentCategoryIds = new String[]{{
                    add("voluptates"),
                }};
                directorySiteIds = new String[]{{
                    add("similique"),
                    add("officia"),
                }};
                fields = "exercitationem";
                ids = new String[]{{
                    add("quos"),
                    add("aliquam"),
                }};
                key = "vel";
                maxEndDate = "numquam";
                maxResults = 321921L;
                maxStartDate = "odio";
                minEndDate = "omnis";
                minStartDate = "quo";
                oauthToken = "maiores";
                pageToken = "maxime";
                placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                placementStrategyIds = new String[]{{
                    add("eaque"),
                    add("officiis"),
                    add("corporis"),
                    add("eaque"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementGroupsListPricingTypesEnum[]{{
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_CPM_ACTIVEVIEW),
                }};
                quotaUser = "quis";
                searchString = "vel";
                siteIds = new String[]{{
                    add("sequi"),
                    add("illo"),
                    add("reiciendis"),
                }};
                sortField = DfareportingPlacementGroupsListSortFieldEnum.ID;
                sortOrder = DfareportingPlacementGroupsListSortOrderEnum.DESCENDING;
                uploadType = "molestias";
                uploadProtocol = "itaque";
            }};            

            DfareportingPlacementGroupsListResponse res = sdk.placementGroups.dfareportingPlacementGroupsList(req, new DfareportingPlacementGroupsListSecurity("at", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementGroupsPatch

Updates an existing placement group. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.PlacementGroup;
import org.openapis.openapi.models.shared.PlacementGroupActiveStatusEnum;
import org.openapis.openapi.models.shared.PlacementGroupPlacementGroupTypeEnum;
import org.openapis.openapi.models.shared.PricingSchedule;
import org.openapis.openapi.models.shared.PricingScheduleCapCostOptionEnum;
import org.openapis.openapi.models.shared.PricingSchedulePricingPeriod;
import org.openapis.openapi.models.shared.PricingSchedulePricingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementGroupsPatchRequest req = new DfareportingPlacementGroupsPatchRequest("quam", "nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "totam";
                    activeStatus = PlacementGroupActiveStatusEnum.PLACEMENT_STATUS_PERMANENTLY_ARCHIVED;
                    advertiserId = "atque";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "deserunt";
                        etag = "a";
                        id = "abc986e2-41e4-43b2-b424-17d13e3f62aa";
                        kind = "cupiditate";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "recusandae";
                    }};;
                    campaignId = "labore";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "fuga";
                        etag = "necessitatibus";
                        id = "8ab4a9c4-92c5-4e8b-a5d4-aa4a508bd380";
                        kind = "optio";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "excepturi";
                    }};;
                    childPlacementIds = new String[]{{
                        add("deserunt"),
                        add("rem"),
                        add("fugiat"),
                    }};
                    comment = "illum";
                    contentCategoryId = "iure";
                    createInfo = new LastModifiedInfo() {{
                        time = "beatae";
                    }};;
                    directorySiteId = "quidem";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "assumenda";
                        etag = "repellendus";
                        id = "aa30b7b9-1449-4ae6-9c08-8d418bb71804";
                        kind = "repellat";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dolores";
                    }};;
                    externalId = "ratione";
                    id = "pariatur";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsam";
                        etag = "tempora";
                        id = "3935f377-ac5c-49b7-a93b-6a3c523105e7";
                        kind = "impedit";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quaerat";
                    }};;
                    kind = "impedit";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "deserunt";
                    }};;
                    name = "John Volkman";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                    placementStrategyId = "beatae";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-03-24");
                        flighted = false;
                        floodlightActivityId = "ea";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-06-16");
                                pricingComment = "unde";
                                rateOrCostNanos = "ut";
                                startDate = LocalDate.parse("2022-04-26");
                                units = "voluptatum";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPM_ACTIVEVIEW;
                        startDate = LocalDate.parse("2022-12-01");
                        testingStartDate = LocalDate.parse("2022-05-02");
                    }};;
                    primaryPlacementId = "consequatur";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nihil";
                        etag = "exercitationem";
                        id = "bc253825-3343-4fb0-a4e6-6ea47578d171";
                        kind = "recusandae";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "natus";
                    }};;
                    siteId = "eius";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "veritatis";
                        etag = "totam";
                        id = "18fc679b-6b2f-4253-99b8-55d015b62c8b";
                        kind = "praesentium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "dolorum";
                    }};;
                    subaccountId = "amet";
                }};;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "mollitia";
                key = "laudantium";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "vitae";
                uploadProtocol = "modi";
            }};            

            DfareportingPlacementGroupsPatchResponse res = sdk.placementGroups.dfareportingPlacementGroupsPatch(req, new DfareportingPlacementGroupsPatchSecurity("labore", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementGroupsUpdate

Updates an existing placement group.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.PlacementGroup;
import org.openapis.openapi.models.shared.PlacementGroupActiveStatusEnum;
import org.openapis.openapi.models.shared.PlacementGroupPlacementGroupTypeEnum;
import org.openapis.openapi.models.shared.PricingSchedule;
import org.openapis.openapi.models.shared.PricingScheduleCapCostOptionEnum;
import org.openapis.openapi.models.shared.PricingSchedulePricingPeriod;
import org.openapis.openapi.models.shared.PricingSchedulePricingTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementGroupsUpdateRequest req = new DfareportingPlacementGroupsUpdateRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "optio";
                    activeStatus = PlacementGroupActiveStatusEnum.PLACEMENT_STATUS_UNKNOWN;
                    advertiserId = "maxime";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "deserunt";
                        etag = "repudiandae";
                        id = "b1ae1ecf-8c34-4946-bba7-a05a8b4a9ec5";
                        kind = "rerum";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "eum";
                    }};;
                    campaignId = "praesentium";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "rem";
                        etag = "maxime";
                        id = "ca363272-760e-4966-a97e-054103347d78";
                        kind = "asperiores";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "odit";
                    }};;
                    childPlacementIds = new String[]{{
                        add("cupiditate"),
                        add("ab"),
                    }};
                    comment = "vitae";
                    contentCategoryId = "magnam";
                    createInfo = new LastModifiedInfo() {{
                        time = "ullam";
                    }};;
                    directorySiteId = "asperiores";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "animi";
                        etag = "soluta";
                        id = "9e59a4af-3366-464e-aa6b-f2ff14e8c1b3";
                        kind = "nemo";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "dolorum";
                    }};;
                    externalId = "porro";
                    id = "placeat";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "recusandae";
                        etag = "repellendus";
                        id = "acc52278-14ec-4a01-abc4-1ea1342d4104";
                        kind = "similique";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "veniam";
                    }};;
                    kind = "debitis";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "asperiores";
                    }};;
                    name = "Joyce Steuber";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "est";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2022-02-22");
                        flighted = false;
                        floodlightActivityId = "eum";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-05-10");
                                pricingComment = "tempora";
                                rateOrCostNanos = "velit";
                                startDate = LocalDate.parse("2022-07-21");
                                units = "laboriosam";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS;
                        startDate = LocalDate.parse("2022-01-30");
                        testingStartDate = LocalDate.parse("2022-06-07");
                    }};;
                    primaryPlacementId = "totam";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "laboriosam";
                        etag = "esse";
                        id = "3d522b82-8a90-4306-a0f0-24c79b4cc64c";
                        kind = "magni";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "sequi";
                    }};;
                    siteId = "culpa";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ratione";
                        etag = "odit";
                        id = "c488ade6-2f6a-4a55-8a65-e2083016ca34";
                        kind = "soluta";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "molestias";
                    }};;
                    subaccountId = "dignissimos";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "eum";
                key = "quia";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iusto";
                uploadProtocol = "culpa";
            }};            

            DfareportingPlacementGroupsUpdateResponse res = sdk.placementGroups.dfareportingPlacementGroupsUpdate(req, new DfareportingPlacementGroupsUpdateSecurity("ea", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
