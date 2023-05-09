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

            DfareportingPlacementGroupsGetRequest req = new DfareportingPlacementGroupsGetRequest("odit", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "magni";
                key = "molestiae";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "aliquid";
                uploadProtocol = "quibusdam";
            }};            

            DfareportingPlacementGroupsGetResponse res = sdk.placementGroups.dfareportingPlacementGroupsGet(req, new DfareportingPlacementGroupsGetSecurity("quidem", "molestias") {{
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

            DfareportingPlacementGroupsInsertRequest req = new DfareportingPlacementGroupsInsertRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "labore";
                    advertiserId = "perspiciatis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "officiis";
                        etag = "consectetur";
                        id = "984511cc-75e4-4f0c-804b-5bb758cc9456";
                        kind = "quia";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "alias";
                    }};;
                    archived = false;
                    campaignId = "consequatur";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "suscipit";
                        etag = "occaecati";
                        id = "685fcd1a-173d-484b-be24-f29834afb073";
                        kind = "corporis";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "expedita";
                    }};;
                    childPlacementIds = new String[]{{
                        add("magni"),
                        add("molestias"),
                    }};
                    comment = "corporis";
                    contentCategoryId = "facere";
                    createInfo = new LastModifiedInfo() {{
                        time = "labore";
                    }};;
                    directorySiteId = "est";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "odit";
                        etag = "unde";
                        id = "aaa1e169-156f-47d2-ae20-9505bf03a93e";
                        kind = "provident";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "incidunt";
                    }};;
                    externalId = "rem";
                    id = "sit";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "cumque";
                        etag = "fuga";
                        id = "37fb1078-9032-4ac3-b317-2e2dd79ec74b";
                        kind = "error";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "necessitatibus";
                    }};;
                    kind = "corrupti";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "deleniti";
                    }};;
                    name = "Wilfred Quitzon";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                    placementStrategyId = "facere";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2020-09-19");
                        flighted = false;
                        floodlightActivityId = "maxime";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-19");
                                pricingComment = "quisquam";
                                rateOrCostNanos = "quas";
                                startDate = LocalDate.parse("2022-09-07");
                                units = "ducimus";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPC;
                        startDate = LocalDate.parse("2022-07-24");
                        testingStartDate = LocalDate.parse("2022-01-05");
                    }};;
                    primaryPlacementId = "doloremque";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "culpa";
                        etag = "voluptate";
                        id = "40fb4ab4-41c3-4a09-a763-995d808bbe79";
                        kind = "dolore";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "minima";
                    }};;
                    siteId = "exercitationem";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "recusandae";
                        etag = "nobis";
                        id = "c550a1c4-26b5-49c8-b66f-dcc135582c1b";
                        kind = "quos";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "ad";
                    }};;
                    subaccountId = "accusamus";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "fugiat";
                key = "omnis";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "error";
                uploadProtocol = "consectetur";
            }};            

            DfareportingPlacementGroupsInsertResponse res = sdk.placementGroups.dfareportingPlacementGroupsInsert(req, new DfareportingPlacementGroupsInsertSecurity("fugit", "necessitatibus") {{
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

            DfareportingPlacementGroupsListRequest req = new DfareportingPlacementGroupsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                advertiserIds = new String[]{{
                    add("culpa"),
                }};
                alt = AltEnum.JSON;
                archived = false;
                callback = "nesciunt";
                campaignIds = new String[]{{
                    add("nulla"),
                    add("voluptatum"),
                    add("veritatis"),
                }};
                contentCategoryIds = new String[]{{
                    add("dolore"),
                }};
                directorySiteIds = new String[]{{
                    add("alias"),
                }};
                fields = "voluptatum";
                ids = new String[]{{
                    add("sapiente"),
                    add("at"),
                    add("qui"),
                    add("consectetur"),
                }};
                key = "eius";
                maxEndDate = "dicta";
                maxResults = 120583L;
                maxStartDate = "deleniti";
                minEndDate = "perspiciatis";
                minStartDate = "rem";
                oauthToken = "recusandae";
                pageToken = "quam";
                placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                placementStrategyIds = new String[]{{
                    add("nihil"),
                    add("unde"),
                    add("eveniet"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementGroupsListPricingTypesEnum[]{{
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_CLICKS),
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_CPM_ACTIVEVIEW),
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_IMPRESSIONS),
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_FLAT_RATE_CLICKS),
                }};
                quotaUser = "officia";
                searchString = "saepe";
                siteIds = new String[]{{
                    add("mollitia"),
                    add("libero"),
                    add("tempore"),
                }};
                sortField = DfareportingPlacementGroupsListSortFieldEnum.ID;
                sortOrder = DfareportingPlacementGroupsListSortOrderEnum.DESCENDING;
                uploadType = "ut";
                uploadProtocol = "voluptas";
            }};            

            DfareportingPlacementGroupsListResponse res = sdk.placementGroups.dfareportingPlacementGroupsList(req, new DfareportingPlacementGroupsListSecurity("neque", "eum") {{
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

            DfareportingPlacementGroupsPatchRequest req = new DfareportingPlacementGroupsPatchRequest("repudiandae", "excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "velit";
                    advertiserId = "quis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "inventore";
                        etag = "harum";
                        id = "b9763172-0b77-4a5a-9365-a79f15271f01";
                        kind = "quo";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "illum";
                    }};;
                    archived = false;
                    campaignId = "neque";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "commodi";
                        etag = "veritatis";
                        id = "fed8dc5e-ffb4-453e-9089-e871fdb4d697";
                        kind = "tempore";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "at";
                    }};;
                    childPlacementIds = new String[]{{
                        add("quisquam"),
                        add("molestias"),
                        add("corrupti"),
                    }};
                    comment = "corporis";
                    contentCategoryId = "repudiandae";
                    createInfo = new LastModifiedInfo() {{
                        time = "incidunt";
                    }};;
                    directorySiteId = "neque";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "iusto";
                        etag = "adipisci";
                        id = "4a5d72d9-edd7-485b-a5e7-afe55297ba62";
                        kind = "laudantium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "repellat";
                    }};;
                    externalId = "aliquam";
                    id = "modi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "eveniet";
                        etag = "dolorem";
                        id = "a23394a6-8cc8-40d3-8ff7-2164d0a91fe9";
                        kind = "illum";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "autem";
                    }};;
                    kind = "minima";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "nemo";
                    }};;
                    name = "Hannah Lang";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "consequatur";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2021-05-27");
                        flighted = false;
                        floodlightActivityId = "vel";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-09-27");
                                pricingComment = "temporibus";
                                rateOrCostNanos = "debitis";
                                startDate = LocalDate.parse("2022-04-11");
                                units = "ipsum";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-08-16");
                                pricingComment = "aspernatur";
                                rateOrCostNanos = "sed";
                                startDate = LocalDate.parse("2022-12-01");
                                units = "officia";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2021-10-01");
                        testingStartDate = LocalDate.parse("2022-06-23");
                    }};;
                    primaryPlacementId = "deserunt";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptates";
                        etag = "in";
                        id = "b1a5b908-d4e3-4049-9aa3-5d4a839f03ba";
                        kind = "quidem";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "reprehenderit";
                    }};;
                    siteId = "nam";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "occaecati";
                        etag = "quasi";
                        id = "8f031398-4507-4e0e-b9c7-e23ecb060465";
                        kind = "fugit";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "magni";
                    }};;
                    subaccountId = "ipsum";
                }};;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "nulla";
                fields = "autem";
                key = "quo";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "reprehenderit";
                uploadProtocol = "vero";
            }};            

            DfareportingPlacementGroupsPatchResponse res = sdk.placementGroups.dfareportingPlacementGroupsPatch(req, new DfareportingPlacementGroupsPatchSecurity("unde", "quibusdam") {{
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

            DfareportingPlacementGroupsUpdateRequest req = new DfareportingPlacementGroupsUpdateRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                placementGroup = new PlacementGroup() {{
                    accountId = "earum";
                    advertiserId = "molestiae";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "hic";
                        etag = "ipsa";
                        id = "02d1986a-a99d-43a1-9323-29e45837e8f2";
                        kind = "officia";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "laboriosam";
                    }};;
                    archived = false;
                    campaignId = "tempore";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "harum";
                        etag = "inventore";
                        id = "0e255fdc-480d-46e3-b086-75cbf186856a";
                        kind = "ducimus";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "deleniti";
                    }};;
                    childPlacementIds = new String[]{{
                        add("eligendi"),
                    }};
                    comment = "facere";
                    contentCategoryId = "doloribus";
                    createInfo = new LastModifiedInfo() {{
                        time = "omnis";
                    }};;
                    directorySiteId = "assumenda";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatem";
                        etag = "a";
                        id = "c282c666-af3c-43f5-989b-ea5d264e41e2";
                        kind = "porro";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "corrupti";
                    }};;
                    externalId = "numquam";
                    id = "corrupti";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "consequuntur";
                        etag = "consequuntur";
                        id = "e513f6d9-d2ad-437c-b099-077c10b68792";
                        kind = "veritatis";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "amet";
                    }};;
                    kind = "eveniet";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "autem";
                    }};;
                    name = "Dianna Fritsch";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "quae";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        endDate = LocalDate.parse("2022-10-08");
                        flighted = false;
                        floodlightActivityId = "porro";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-07-10");
                                pricingComment = "sit";
                                rateOrCostNanos = "labore";
                                startDate = LocalDate.parse("2021-06-04");
                                units = "ipsum";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_CLICKS;
                        startDate = LocalDate.parse("2021-11-14");
                        testingStartDate = LocalDate.parse("2022-12-04");
                    }};;
                    primaryPlacementId = "explicabo";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nihil";
                        etag = "laboriosam";
                        id = "e7b21bad-90d2-4743-bd6c-2a10e6c2978e";
                        kind = "quo";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "enim";
                    }};;
                    siteId = "commodi";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "officia";
                        etag = "veniam";
                        id = "b09227fc-c479-496c-977b-bc57f38928a8";
                        kind = "laboriosam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "eaque";
                    }};;
                    subaccountId = "quo";
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "eum";
                key = "iusto";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "sequi";
                uploadProtocol = "voluptates";
            }};            

            DfareportingPlacementGroupsUpdateResponse res = sdk.placementGroups.dfareportingPlacementGroupsUpdate(req, new DfareportingPlacementGroupsUpdateSecurity("tempora", "similique") {{
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
