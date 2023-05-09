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

            DfareportingPlacementGroupsGetRequest req = new DfareportingPlacementGroupsGetRequest("quis", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "reiciendis";
                key = "minus";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "blanditiis";
                uploadProtocol = "voluptates";
            }};            

            DfareportingPlacementGroupsGetResponse res = sdk.placementGroups.dfareportingPlacementGroupsGet(req, new DfareportingPlacementGroupsGetSecurity("saepe", "animi") {{
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

            DfareportingPlacementGroupsInsertRequest req = new DfareportingPlacementGroupsInsertRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "quis";
                    advertiserId = "dolores";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dignissimos";
                        etag = "unde";
                        id = "2bcd440e-a98b-4ecc-a048-6de0d56d73b0";
                        kind = "quae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "nemo";
                    }};;
                    archived = false;
                    campaignId = "accusantium";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "neque";
                        etag = "voluptates";
                        id = "8dc626ff-77c6-4567-9f5b-70e3e4cfcc6a";
                        kind = "cupiditate";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "necessitatibus";
                    }};;
                    childPlacementIds = new String[]{{
                        add("veniam"),
                        add("qui"),
                        add("aliquid"),
                        add("sed"),
                    }};
                    comment = "modi";
                    contentCategoryId = "at";
                    createInfo = new LastModifiedInfo() {{
                        time = "aperiam";
                    }};;
                    directorySiteId = "alias";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aut";
                        etag = "quae";
                        id = "4ef45cea-11ac-453e-bb65-87f340414c5b";
                        kind = "sint";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quod";
                    }};;
                    externalId = "voluptates";
                    id = "debitis";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "non";
                        etag = "quae";
                        id = "0ae9f92c-af1b-4025-b1d1-4718c6fa2fad";
                        kind = "consequatur";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "accusantium";
                    }};;
                    kind = "commodi";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "porro";
                    }};;
                    name = "Mable Marquardt";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "magni";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_CUMULATIVE;
                        endDate = LocalDate.parse("2020-06-05");
                        flighted = false;
                        floodlightActivityId = "dicta";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2020-08-25");
                                pricingComment = "eius";
                                rateOrCostNanos = "nesciunt";
                                startDate = LocalDate.parse("2022-02-08");
                                units = "quae";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-05-24");
                                pricingComment = "fuga";
                                rateOrCostNanos = "laudantium";
                                startDate = LocalDate.parse("2021-01-24");
                                units = "est";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2022-03-23");
                        testingStartDate = LocalDate.parse("2022-10-08");
                    }};;
                    primaryPlacementId = "ipsum";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "exercitationem";
                        etag = "inventore";
                        id = "c3dd1eb8-f7f7-45f4-b23f-1c0a586c3ae7";
                        kind = "temporibus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "soluta";
                    }};;
                    siteId = "voluptas";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "odio";
                        etag = "reiciendis";
                        id = "eef5e142-d95b-41db-acef-f7c4b156e927";
                        kind = "corrupti";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "voluptate";
                    }};;
                    subaccountId = "ipsam";
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "esse";
                key = "laboriosam";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "nihil";
                uploadProtocol = "labore";
            }};            

            DfareportingPlacementGroupsInsertResponse res = sdk.placementGroups.dfareportingPlacementGroupsInsert(req, new DfareportingPlacementGroupsInsertSecurity("laboriosam", "praesentium") {{
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

            DfareportingPlacementGroupsListRequest req = new DfareportingPlacementGroupsListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                advertiserIds = new String[]{{
                    add("ducimus"),
                    add("perspiciatis"),
                    add("cupiditate"),
                    add("facilis"),
                }};
                alt = AltEnum.MEDIA;
                archived = false;
                callback = "perspiciatis";
                campaignIds = new String[]{{
                    add("ex"),
                    add("maxime"),
                }};
                contentCategoryIds = new String[]{{
                    add("quidem"),
                }};
                directorySiteIds = new String[]{{
                    add("tenetur"),
                }};
                fields = "mollitia";
                ids = new String[]{{
                    add("quidem"),
                }};
                key = "soluta";
                maxEndDate = "eos";
                maxResults = 61375L;
                maxStartDate = "culpa";
                minEndDate = "labore";
                minStartDate = "consequatur";
                oauthToken = "voluptates";
                pageToken = "reprehenderit";
                placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                placementStrategyIds = new String[]{{
                    add("id"),
                    add("accusamus"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementGroupsListPricingTypesEnum[]{{
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_CPC),
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_CPM),
                }};
                quotaUser = "nisi";
                searchString = "eius";
                siteIds = new String[]{{
                    add("iusto"),
                }};
                sortField = DfareportingPlacementGroupsListSortFieldEnum.ID;
                sortOrder = DfareportingPlacementGroupsListSortOrderEnum.ASCENDING;
                uploadType = "nostrum";
                uploadProtocol = "esse";
            }};            

            DfareportingPlacementGroupsListResponse res = sdk.placementGroups.dfareportingPlacementGroupsList(req, new DfareportingPlacementGroupsListSecurity("nobis", "voluptatem") {{
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

            DfareportingPlacementGroupsPatchRequest req = new DfareportingPlacementGroupsPatchRequest("ab", "culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                placementGroup = new PlacementGroup() {{
                    accountId = "voluptate";
                    advertiserId = "placeat";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "perferendis";
                        etag = "rem";
                        id = "fd3921c2-5793-40d6-b093-a3efa46d366d";
                        kind = "delectus";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "inventore";
                    }};;
                    archived = false;
                    campaignId = "consequatur";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "architecto";
                        etag = "vitae";
                        id = "a091b3ec-8b53-4862-9e1a-9d14fe72e521";
                        kind = "asperiores";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "ipsa";
                    }};;
                    childPlacementIds = new String[]{{
                        add("ipsa"),
                    }};
                    comment = "consectetur";
                    contentCategoryId = "possimus";
                    createInfo = new LastModifiedInfo() {{
                        time = "asperiores";
                    }};;
                    directorySiteId = "quo";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "adipisci";
                        etag = "non";
                        id = "8397fffa-6d1d-4320-90fc-157ac9fe1961";
                        kind = "eligendi";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "perspiciatis";
                    }};;
                    externalId = "nam";
                    id = "vero";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "aliquam";
                        etag = "architecto";
                        id = "c869dd7d-9719-4d07-b200-a58ffd2967df";
                        kind = "laudantium";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "facere";
                    }};;
                    kind = "laudantium";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "praesentium";
                    }};;
                    name = "Kristine Lesch";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "tempore";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_CUMULATIVE;
                        endDate = LocalDate.parse("2022-10-27");
                        flighted = false;
                        floodlightActivityId = "perferendis";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-04-21");
                                pricingComment = "quisquam";
                                rateOrCostNanos = "veniam";
                                startDate = LocalDate.parse("2021-01-31");
                                units = "possimus";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-16");
                                pricingComment = "ut";
                                rateOrCostNanos = "eligendi";
                                startDate = LocalDate.parse("2022-07-18");
                                units = "corporis";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-09-01");
                                pricingComment = "quasi";
                                rateOrCostNanos = "consequuntur";
                                startDate = LocalDate.parse("2021-02-15");
                                units = "mollitia";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-09-16");
                                pricingComment = "vero";
                                rateOrCostNanos = "atque";
                                startDate = LocalDate.parse("2022-01-26");
                                units = "quisquam";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_CLICKS;
                        startDate = LocalDate.parse("2022-01-14");
                        testingStartDate = LocalDate.parse("2020-08-06");
                    }};;
                    primaryPlacementId = "saepe";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "animi";
                        etag = "deleniti";
                        id = "e7a88311-662c-4da6-977c-1d86066237d4";
                        kind = "explicabo";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "molestiae";
                    }};;
                    siteId = "blanditiis";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "laboriosam";
                        etag = "aliquid";
                        id = "db8a749e-3984-4511-8c75-e4f0c004b5bb";
                        kind = "molestiae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quos";
                    }};;
                    subaccountId = "minus";
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "exercitationem";
                key = "voluptas";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "alias";
                uploadProtocol = "consequatur";
            }};            

            DfareportingPlacementGroupsPatchResponse res = sdk.placementGroups.dfareportingPlacementGroupsPatch(req, new DfareportingPlacementGroupsPatchSecurity("suscipit", "occaecati") {{
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

            DfareportingPlacementGroupsUpdateRequest req = new DfareportingPlacementGroupsUpdateRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                placementGroup = new PlacementGroup() {{
                    accountId = "nemo";
                    advertiserId = "a";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "maxime";
                        etag = "possimus";
                        id = "1a173d84-bbe2-44f2-9834-afb0735cb628";
                        kind = "corporis";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "labore";
                    }};;
                    archived = false;
                    campaignId = "est";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "odit";
                        etag = "unde";
                        id = "aaa1e169-156f-47d2-ae20-9505bf03a93e";
                        kind = "provident";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "incidunt";
                    }};;
                    childPlacementIds = new String[]{{
                        add("sit"),
                        add("cumque"),
                        add("fuga"),
                    }};
                    comment = "ratione";
                    contentCategoryId = "in";
                    createInfo = new LastModifiedInfo() {{
                        time = "voluptatibus";
                    }};;
                    directorySiteId = "nam";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ab";
                        etag = "ipsa";
                        id = "789032ac-3331-472e-add7-9ec74ba7e88d";
                        kind = "at";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "ipsum";
                    }};;
                    externalId = "commodi";
                    id = "delectus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "facere";
                        etag = "inventore";
                        id = "ccc341c8-6573-4474-b0a7-40fb4ab441c3";
                        kind = "deserunt";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "sint";
                    }};;
                    kind = "saepe";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "esse";
                    }};;
                    name = "Thelma Metz";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                    placementStrategyId = "rem";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_NONE;
                        endDate = LocalDate.parse("2021-07-15");
                        flighted = false;
                        floodlightActivityId = "nam";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-05-20");
                                pricingComment = "dolore";
                                rateOrCostNanos = "eius";
                                startDate = LocalDate.parse("2022-08-25");
                                units = "recusandae";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-06-12");
                                pricingComment = "nemo";
                                rateOrCostNanos = "minima";
                                startDate = LocalDate.parse("2022-05-01");
                                units = "beatae";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-02-22");
                                pricingComment = "qui";
                                rateOrCostNanos = "nisi";
                                startDate = LocalDate.parse("2022-04-10");
                                units = "cupiditate";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-06-01");
                                pricingComment = "dolor";
                                rateOrCostNanos = "commodi";
                                startDate = LocalDate.parse("2022-01-03");
                                units = "facere";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_FLAT_RATE_CLICKS;
                        startDate = LocalDate.parse("2022-09-09");
                        testingStartDate = LocalDate.parse("2022-09-02");
                    }};;
                    primaryPlacementId = "nemo";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatum";
                        etag = "quia";
                        id = "c1b855e8-89d9-4ef9-b2e9-000a13ad8124";
                        kind = "fugit";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "voluptatum";
                    }};;
                    siteId = "voluptates";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sapiente";
                        etag = "at";
                        id = "23411898-e738-479e-bbe8-baebabb79453";
                        kind = "eum";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "excepturi";
                    }};;
                    subaccountId = "ipsa";
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "harum";
                key = "quidem";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "eum";
                uploadProtocol = "adipisci";
            }};            

            DfareportingPlacementGroupsUpdateResponse res = sdk.placementGroups.dfareportingPlacementGroupsUpdate(req, new DfareportingPlacementGroupsUpdateSecurity("architecto", "iure") {{
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
