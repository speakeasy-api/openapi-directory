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

            DfareportingPlacementGroupsGetRequest req = new DfareportingPlacementGroupsGetRequest("eaque", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "temporibus";
                key = "consequuntur";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iusto";
                uploadProtocol = "nulla";
            }};            

            DfareportingPlacementGroupsGetResponse res = sdk.placementGroups.dfareportingPlacementGroupsGet(req, new DfareportingPlacementGroupsGetSecurity("delectus", "laudantium") {{
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

            DfareportingPlacementGroupsInsertRequest req = new DfareportingPlacementGroupsInsertRequest("sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                placementGroup = new PlacementGroup() {{
                    accountId = "laudantium";
                    advertiserId = "praesentium";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sed";
                        etag = "fuga";
                        id = "8e60be62-0cd9-4c5a-bdd0-4c3752512bea";
                        kind = "officiis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "vero";
                    }};;
                    archived = false;
                    campaignId = "atque";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptate";
                        etag = "itaque";
                        id = "cc5fdcea-8e7a-4883-9166-2cda6d77c1d8";
                        kind = "laboriosam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "nisi";
                    }};;
                    childPlacementIds = new String[]{{
                        add("odit"),
                        add("nesciunt"),
                    }};
                    comment = "esse";
                    contentCategoryId = "quibusdam";
                    createInfo = new LastModifiedInfo() {{
                        time = "tempora";
                    }};;
                    directorySiteId = "explicabo";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "magni";
                        etag = "molestiae";
                        id = "866db8a7-49e3-4984-911c-c75e4f0c004b";
                        kind = "minima";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "rerum";
                    }};;
                    externalId = "molestiae";
                    id = "ipsam";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "quos";
                        etag = "minus";
                        id = "c94562f0-0696-485f-8d1a-173d84bbe24f";
                        kind = "explicabo";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "praesentium";
                    }};;
                    kind = "sequi";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "magnam";
                    }};;
                    name = "Ms. Domingo Pfeffer";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "eligendi";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_CUMULATIVE;
                        disregardOverdelivery = false;
                        endDate = LocalDate.parse("2022-10-30");
                        flighted = false;
                        floodlightActivityId = "molestias";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-02-17");
                                pricingComment = "est";
                                rateOrCostNanos = "odit";
                                startDate = LocalDate.parse("2021-08-30");
                                units = "fuga";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-11-15");
                                pricingComment = "debitis";
                                rateOrCostNanos = "quasi";
                                startDate = LocalDate.parse("2022-05-24");
                                units = "veritatis";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2022-01-02");
                        testingStartDate = LocalDate.parse("2022-03-07");
                    }};;
                    primaryPlacementId = "aspernatur";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "recusandae";
                        etag = "repudiandae";
                        id = "209505bf-03a9-43e9-8480-ca37fb107890";
                        kind = "sequi";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "deserunt";
                    }};;
                    siteId = "porro";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "amet";
                        etag = "amet";
                        id = "3172e2dd-79ec-474b-a7e8-8ddb36fd1ccc";
                        kind = "nesciunt";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dicta";
                    }};;
                    subaccountId = "quisquam";
                }};;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "ducimus";
                key = "dolor";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "eius";
                uploadProtocol = "doloribus";
            }};            

            DfareportingPlacementGroupsInsertResponse res = sdk.placementGroups.dfareportingPlacementGroupsInsert(req, new DfareportingPlacementGroupsInsertSecurity("doloremque", "culpa") {{
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

            DfareportingPlacementGroupsListRequest req = new DfareportingPlacementGroupsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eaque";
                advertiserIds = new String[]{{
                    add("cum"),
                    add("incidunt"),
                    add("deserunt"),
                    add("distinctio"),
                }};
                alt = AltEnum.JSON;
                archived = false;
                callback = "eius";
                campaignIds = new String[]{{
                    add("impedit"),
                }};
                contentCategoryIds = new String[]{{
                    add("deserunt"),
                }};
                directorySiteIds = new String[]{{
                    add("sint"),
                }};
                fields = "saepe";
                ids = new String[]{{
                    add("commodi"),
                    add("velit"),
                }};
                key = "perspiciatis";
                maxEndDate = "omnis";
                maxResults = 328922L;
                maxStartDate = "vero";
                minEndDate = "rem";
                minStartDate = "voluptatem";
                oauthToken = "corrupti";
                pageToken = "tempore";
                placementGroupType = DfareportingPlacementGroupsListPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                placementStrategyIds = new String[]{{
                    add("odio"),
                    add("natus"),
                    add("dolore"),
                    add("eius"),
                }};
                prettyPrint = false;
                pricingTypes = new org.openapis.openapi.models.operations.DfareportingPlacementGroupsListPricingTypesEnum[]{{
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_CPA),
                    add(DfareportingPlacementGroupsListPricingTypesEnum.PRICING_TYPE_CPM_ACTIVEVIEW),
                }};
                quotaUser = "nobis";
                searchString = "quo";
                siteIds = new String[]{{
                    add("minima"),
                    add("consequatur"),
                }};
                sortField = DfareportingPlacementGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingPlacementGroupsListSortOrderEnum.ASCENDING;
                uploadType = "impedit";
                uploadProtocol = "ut";
            }};            

            DfareportingPlacementGroupsListResponse res = sdk.placementGroups.dfareportingPlacementGroupsList(req, new DfareportingPlacementGroupsListSecurity("qui", "nisi") {{
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

            DfareportingPlacementGroupsPatchRequest req = new DfareportingPlacementGroupsPatchRequest("rerum", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                placementGroup = new PlacementGroup() {{
                    accountId = "maxime";
                    advertiserId = "voluptatum";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dolor";
                        etag = "commodi";
                        id = "6fdcc135-582c-41b8-95e8-89d9ef932e90";
                        kind = "perferendis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "culpa";
                    }};;
                    archived = false;
                    campaignId = "beatae";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nesciunt";
                        etag = "deserunt";
                        id = "d8124208-efd2-4341-9898-e73879efbe8b";
                        kind = "officia";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "tempore";
                    }};;
                    childPlacementIds = new String[]{{
                        add("libero"),
                        add("tempore"),
                        add("odio"),
                    }};
                    comment = "iste";
                    contentCategoryId = "ut";
                    createInfo = new LastModifiedInfo() {{
                        time = "voluptas";
                    }};;
                    directorySiteId = "neque";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eum";
                        etag = "repudiandae";
                        id = "90351bb9-7631-4720-b77a-5a5365a79f15";
                        kind = "quia";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "ab";
                    }};;
                    externalId = "repellat";
                    id = "accusantium";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "et";
                        etag = "quo";
                        id = "0d361fed-8dc5-4eff-b453-e9089e871fdb";
                        kind = "ut";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "voluptas";
                    }};;
                    kind = "perspiciatis";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "molestiae";
                    }};;
                    name = "Bryant Strosin";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_ROADBLOCK;
                    placementStrategyId = "corrupti";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_MONTHLY;
                        disregardOverdelivery = false;
                        endDate = LocalDate.parse("2022-02-28");
                        flighted = false;
                        floodlightActivityId = "neque";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2022-09-29");
                                pricingComment = "officia";
                                rateOrCostNanos = "quis";
                                startDate = LocalDate.parse("2021-09-05");
                                units = "odit";
                            }}),
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2021-03-31");
                                pricingComment = "itaque";
                                rateOrCostNanos = "nulla";
                                startDate = LocalDate.parse("2021-08-26");
                                units = "rem";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2021-03-30");
                        testingStartDate = LocalDate.parse("2022-01-24");
                    }};;
                    primaryPlacementId = "esse";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "mollitia";
                        etag = "hic";
                        id = "e55297ba-6281-4f44-a3a2-3394a68cc80d";
                        kind = "ratione";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "delectus";
                    }};;
                    siteId = "hic";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ducimus";
                        etag = "dolores";
                        id = "164d0a91-fe9d-4965-93b8-9e0009c6692d";
                        kind = "debitis";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "nam";
                    }};;
                    subaccountId = "ipsum";
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "sed";
                key = "eaque";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "voluptas";
                uploadProtocol = "error";
            }};            

            DfareportingPlacementGroupsPatchResponse res = sdk.placementGroups.dfareportingPlacementGroupsPatch(req, new DfareportingPlacementGroupsPatchSecurity("error", "cum") {{
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

            DfareportingPlacementGroupsUpdateRequest req = new DfareportingPlacementGroupsUpdateRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                placementGroup = new PlacementGroup() {{
                    accountId = "voluptates";
                    advertiserId = "in";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "harum";
                        etag = "vitae";
                        id = "a5b908d4-e304-491a-a35d-4a839f03bab7";
                        kind = "reprehenderit";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "occaecati";
                    }};;
                    archived = false;
                    campaignId = "quasi";
                    campaignIdDimensionValue = new DimensionValue() {{
                        dimensionName = "blanditiis";
                        etag = "a";
                        id = "03139845-07e0-4e39-87e2-3ecb0604652e";
                        kind = "magni";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "similique";
                    }};;
                    childPlacementIds = new String[]{{
                        add("nulla"),
                    }};
                    comment = "autem";
                    contentCategoryId = "quo";
                    createInfo = new LastModifiedInfo() {{
                        time = "voluptas";
                    }};;
                    directorySiteId = "quis";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "reprehenderit";
                        etag = "vero";
                        id = "9de8f7f0-02d1-4986-aa99-d3a1d32329e4";
                        kind = "ullam";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "ipsum";
                    }};;
                    externalId = "voluptate";
                    id = "eveniet";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "atque";
                        etag = "reiciendis";
                        id = "2ad6bb10-e255-4fdc-880d-6e3308675cbf";
                        kind = "quae";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "voluptas";
                    }};;
                    kind = "molestias";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "nostrum";
                    }};;
                    name = "Joanna Kuphal";
                    placementGroupType = PlacementGroupPlacementGroupTypeEnum.PLACEMENT_PACKAGE;
                    placementStrategyId = "eligendi";
                    pricingSchedule = new PricingSchedule() {{
                        capCostOption = PricingScheduleCapCostOptionEnum.CAP_COST_CUMULATIVE;
                        disregardOverdelivery = false;
                        endDate = LocalDate.parse("2021-03-04");
                        flighted = false;
                        floodlightActivityId = "assumenda";
                        pricingPeriods = new org.openapis.openapi.models.shared.PricingSchedulePricingPeriod[]{{
                            add(new PricingSchedulePricingPeriod() {{
                                endDate = LocalDate.parse("2020-09-13");
                                pricingComment = "fugit";
                                rateOrCostNanos = "deleniti";
                                startDate = LocalDate.parse("2022-03-15");
                                units = "aliquid";
                            }}),
                        }};
                        pricingType = PricingSchedulePricingTypeEnum.PRICING_TYPE_CPA;
                        startDate = LocalDate.parse("2022-05-03");
                        testingStartDate = LocalDate.parse("2022-05-28");
                    }};;
                    primaryPlacementId = "optio";
                    primaryPlacementIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ratione";
                        etag = "a";
                        id = "5589bea5-d264-4e41-a2ca-84822e513f6d";
                        kind = "excepturi";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "magni";
                    }};;
                    siteId = "similique";
                    siteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "possimus";
                        etag = "dolor";
                        id = "7c309907-7c10-4b68-b921-63e67d488605";
                        kind = "dolore";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "porro";
                    }};;
                    subaccountId = "aperiam";
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "labore";
                key = "excepturi";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quod";
                uploadProtocol = "voluptatibus";
            }};            

            DfareportingPlacementGroupsUpdateResponse res = sdk.placementGroups.dfareportingPlacementGroupsUpdate(req, new DfareportingPlacementGroupsUpdateSecurity("voluptas", "porro") {{
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
