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

            DfareportingFloodlightActivityGroupsGetRequest req = new DfareportingFloodlightActivityGroupsGetRequest("tempora", "minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "voluptatibus";
                key = "odio";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "pariatur";
                uploadProtocol = "excepturi";
            }};            

            DfareportingFloodlightActivityGroupsGetResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsGet(req, new DfareportingFloodlightActivityGroupsGetSecurity("enim", "culpa") {{
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

            DfareportingFloodlightActivityGroupsInsertRequest req = new DfareportingFloodlightActivityGroupsInsertRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "nisi";
                    advertiserId = "molestias";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "impedit";
                        etag = "quasi";
                        id = "387271e1-8ea9-4e45-918c-2cc57fbd60b1";
                        kind = "fuga";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "molestias";
                    }};;
                    floodlightConfigurationId = "eveniet";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quibusdam";
                        etag = "eos";
                        id = "9a9d4eea-8565-48c2-94f4-c88be4f278fd";
                        kind = "unde";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "ea";
                    }};;
                    id = "molestiae";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "accusamus";
                        etag = "labore";
                        id = "6c51d2ff-aa58-4dce-b234-c955b9bdf219";
                        kind = "alias";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nobis";
                    }};;
                    kind = "vero";
                    name = "Damon Pollich";
                    subaccountId = "magni";
                    tagString = "dignissimos";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "magni";
                key = "suscipit";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quisquam";
                uploadProtocol = "debitis";
            }};            

            DfareportingFloodlightActivityGroupsInsertResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsInsert(req, new DfareportingFloodlightActivityGroupsInsertSecurity("ipsa", "quia") {{
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

            DfareportingFloodlightActivityGroupsListRequest req = new DfareportingFloodlightActivityGroupsListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                advertiserId = "numquam";
                alt = AltEnum.JSON;
                callback = "quod";
                fields = "nisi";
                floodlightConfigurationId = "excepturi";
                ids = new String[]{{
                    add("tenetur"),
                    add("vel"),
                    add("corrupti"),
                    add("voluptates"),
                }};
                key = "modi";
                maxResults = 315747L;
                oauthToken = "cumque";
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "animi";
                searchString = "quibusdam";
                sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum.DESCENDING;
                type = DfareportingFloodlightActivityGroupsListTypeEnum.SALE;
                uploadType = "optio";
                uploadProtocol = "voluptate";
            }};            

            DfareportingFloodlightActivityGroupsListResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsList(req, new DfareportingFloodlightActivityGroupsListSecurity("nostrum", "incidunt") {{
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

            DfareportingFloodlightActivityGroupsPatchRequest req = new DfareportingFloodlightActivityGroupsPatchRequest("enim", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "quaerat";
                    advertiserId = "nesciunt";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aperiam";
                        etag = "optio";
                        id = "6632b439-1fdf-401c-be91-e8f7bc69d460";
                        kind = "est";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dignissimos";
                    }};;
                    floodlightConfigurationId = "debitis";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quo";
                        etag = "saepe";
                        id = "b26d10f1-ef26-431c-bc0f-0f873f9d5c25";
                        kind = "doloribus";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "non";
                    }};;
                    id = "repudiandae";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "quae";
                        etag = "tempore";
                        id = "4a4a4253-c302-4571-9f42-c7e7dc548be0";
                        kind = "excepturi";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "numquam";
                    }};;
                    kind = "architecto";
                    name = "Mathew Nader III";
                    subaccountId = "impedit";
                    tagString = "officia";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "harum";
                key = "dolorum";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "ipsam";
                uploadProtocol = "provident";
            }};            

            DfareportingFloodlightActivityGroupsPatchResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsPatch(req, new DfareportingFloodlightActivityGroupsPatchSecurity("omnis", "rem") {{
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

            DfareportingFloodlightActivityGroupsUpdateRequest req = new DfareportingFloodlightActivityGroupsUpdateRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "perspiciatis";
                    advertiserId = "fugit";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "placeat";
                        etag = "sapiente";
                        id = "d0c77c53-e7e7-4d4e-a6e8-b90bac384e23";
                        kind = "sint";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "in";
                    }};;
                    floodlightConfigurationId = "ipsa";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sequi";
                        etag = "maiores";
                        id = "ec31c508-24d1-489a-b6a6-b2d27eb707aa";
                        kind = "iure";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "placeat";
                    }};;
                    id = "voluptatum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "doloribus";
                        etag = "officiis";
                        id = "46e6177d-b9db-43b7-8ffb-b6970ee770e3";
                        kind = "autem";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "occaecati";
                    }};;
                    kind = "iusto";
                    name = "Boyd Koelpin";
                    subaccountId = "doloremque";
                    tagString = "vel";
                    type = FloodlightActivityGroupTypeEnum.SALE;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "sit";
                key = "quibusdam";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "blanditiis";
                uploadProtocol = "ducimus";
            }};            

            DfareportingFloodlightActivityGroupsUpdateResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsUpdate(req, new DfareportingFloodlightActivityGroupsUpdateSecurity("inventore", "modi") {{
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
