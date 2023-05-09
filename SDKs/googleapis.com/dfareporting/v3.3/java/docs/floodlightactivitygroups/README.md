# floodlightActivityGroups

### Available Operations

* [dfareportingFloodlightActivityGroupsGet](#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [dfareportingFloodlightActivityGroupsInsert](#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [dfareportingFloodlightActivityGroupsList](#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivityGroupsPatch](#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [dfareportingFloodlightActivityGroupsUpdate](#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

## dfareportingFloodlightActivityGroupsGet

Gets one floodlight activity group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsGetRequest req = new DfareportingFloodlightActivityGroupsGetRequest("natus", "labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "rem";
                key = "a";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "est";
                uploadProtocol = "delectus";
            }};            

            DfareportingFloodlightActivityGroupsGetResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsGet(req, new DfareportingFloodlightActivityGroupsGetSecurity("magni", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsInsert

Inserts a new floodlight activity group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityGroup;
import org.openapis.openapi.models.shared.FloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsInsertRequest req = new DfareportingFloodlightActivityGroupsInsertRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "quia";
                    advertiserId = "porro";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sapiente";
                        etag = "consequuntur";
                        id = "bf4f3ded-356d-47e1-8b21-cd98196d55af";
                        kind = "autem";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "mollitia";
                    }};;
                    floodlightConfigurationId = "sunt";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quod";
                        etag = "labore";
                        id = "b79ae336-81c2-43c3-9a7c-0e17cb12c5ba";
                        kind = "laudantium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "corporis";
                    }};;
                    id = "a";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "necessitatibus";
                        etag = "explicabo";
                        id = "2cd5cba6-fbfe-4c93-aaf6-813d65bfecec";
                        kind = "odit";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "at";
                    }};;
                    kind = "ea";
                    name = "Patrick Jast";
                    subaccountId = "delectus";
                    tagString = "minus";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "molestiae";
                key = "ipsa";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "aliquid";
                uploadProtocol = "sit";
            }};            

            DfareportingFloodlightActivityGroupsInsertResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsInsert(req, new DfareportingFloodlightActivityGroupsInsertSecurity("vero", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsList

Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListSecurity;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsListTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsListRequest req = new DfareportingFloodlightActivityGroupsListRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                advertiserId = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "fugiat";
                floodlightConfigurationId = "autem";
                ids = new String[]{{
                    add("quisquam"),
                }};
                key = "illo";
                maxResults = 271266L;
                oauthToken = "quisquam";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "excepturi";
                searchString = "aut";
                sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum.ID;
                sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum.ASCENDING;
                type = DfareportingFloodlightActivityGroupsListTypeEnum.COUNTER;
                uploadType = "recusandae";
                uploadProtocol = "neque";
            }};            

            DfareportingFloodlightActivityGroupsListResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsList(req, new DfareportingFloodlightActivityGroupsListSecurity("nihil", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsPatch

Updates an existing floodlight activity group. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityGroup;
import org.openapis.openapi.models.shared.FloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsPatchRequest req = new DfareportingFloodlightActivityGroupsPatchRequest("eaque", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "reprehenderit";
                    advertiserId = "voluptate";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "reiciendis";
                        etag = "et";
                        id = "a5491abe-9751-4b10-ad23-e03e69815aae";
                        kind = "omnis";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "earum";
                    }};;
                    floodlightConfigurationId = "nobis";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repellendus";
                        etag = "necessitatibus";
                        id = "9e729c9d-4f2d-48a4-8640-ca60db73a2f9";
                        kind = "dolorem";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "labore";
                    }};;
                    id = "autem";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "in";
                        etag = "at";
                        id = "c0d8da56-1220-426a-b8f2-77485c1976af";
                        kind = "error";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "aut";
                    }};;
                    kind = "nulla";
                    name = "Ms. Ron O'Reilly";
                    subaccountId = "hic";
                    tagString = "maxime";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "dolores";
                key = "quam";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "neque";
                uploadProtocol = "ipsa";
            }};            

            DfareportingFloodlightActivityGroupsPatchResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsPatch(req, new DfareportingFloodlightActivityGroupsPatchSecurity("officiis", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingFloodlightActivityGroupsUpdate

Updates an existing floodlight activity group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingFloodlightActivityGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.FloodlightActivityGroup;
import org.openapis.openapi.models.shared.FloodlightActivityGroupTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingFloodlightActivityGroupsUpdateRequest req = new DfareportingFloodlightActivityGroupsUpdateRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "in";
                    advertiserId = "minus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptas";
                        etag = "quibusdam";
                        id = "0cbcfdcd-334b-46f6-a3bc-ecab50aee5e0";
                        kind = "pariatur";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quas";
                    }};;
                    floodlightConfigurationId = "cum";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sint";
                        etag = "laborum";
                        id = "f6ad0548-6e7b-4413-8be2-d176dc1c43d4";
                        kind = "doloremque";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "aliquid";
                    }};;
                    id = "illo";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "nulla";
                        etag = "inventore";
                        id = "71157cbe-5ee4-4f72-9184-0772f32e3b49";
                        kind = "pariatur";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "officiis";
                    }};;
                    kind = "alias";
                    name = "Billy Franey";
                    subaccountId = "distinctio";
                    tagString = "suscipit";
                    type = FloodlightActivityGroupTypeEnum.SALE;
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "quas";
                key = "assumenda";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "facere";
                uploadProtocol = "necessitatibus";
            }};            

            DfareportingFloodlightActivityGroupsUpdateResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsUpdate(req, new DfareportingFloodlightActivityGroupsUpdateSecurity("fugiat", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.floodlightActivityGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
