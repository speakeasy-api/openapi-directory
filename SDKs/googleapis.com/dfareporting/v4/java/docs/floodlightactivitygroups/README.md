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

            DfareportingFloodlightActivityGroupsGetRequest req = new DfareportingFloodlightActivityGroupsGetRequest("voluptates", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "voluptates";
                key = "provident";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "magni";
                uploadProtocol = "minus";
            }};            

            DfareportingFloodlightActivityGroupsGetResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsGet(req, new DfareportingFloodlightActivityGroupsGetSecurity("id", "earum") {{
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

            DfareportingFloodlightActivityGroupsInsertRequest req = new DfareportingFloodlightActivityGroupsInsertRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "ipsa";
                    advertiserId = "dolores";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nemo";
                        etag = "a";
                        id = "1d14718c-6fa2-4fad-8c06-c5d95472cdd1";
                        kind = "incidunt";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "porro";
                    }};;
                    floodlightConfigurationId = "eius";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nesciunt";
                        etag = "cum";
                        id = "70bca88f-a70c-4433-91c3-dd1eb8f7f75f";
                        kind = "magnam";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "aspernatur";
                    }};;
                    id = "ipsum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "doloribus";
                        etag = "quasi";
                        id = "c0a586c3-ae7d-47b6-bfee-f5e142d95b1d";
                        kind = "soluta";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "placeat";
                    }};;
                    kind = "earum";
                    name = "Jan Kshlerin";
                    subaccountId = "tempore";
                    tagString = "quae";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "odit";
                key = "ducimus";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "voluptate";
                uploadProtocol = "ipsam";
            }};            

            DfareportingFloodlightActivityGroupsInsertResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsInsert(req, new DfareportingFloodlightActivityGroupsInsertSecurity("debitis", "repudiandae") {{
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

            DfareportingFloodlightActivityGroupsListRequest req = new DfareportingFloodlightActivityGroupsListRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                advertiserId = "laudantium";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "labore";
                floodlightConfigurationId = "laboriosam";
                ids = new String[]{{
                    add("quae"),
                    add("nisi"),
                    add("amet"),
                }};
                key = "tenetur";
                maxResults = 499998L;
                oauthToken = "perspiciatis";
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "facilis";
                searchString = "iusto";
                sortField = DfareportingFloodlightActivityGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingFloodlightActivityGroupsListSortOrderEnum.ASCENDING;
                type = DfareportingFloodlightActivityGroupsListTypeEnum.COUNTER;
                uploadType = "maxime";
                uploadProtocol = "quae";
            }};            

            DfareportingFloodlightActivityGroupsListResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsList(req, new DfareportingFloodlightActivityGroupsListSecurity("quidem", "voluptatem") {{
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

            DfareportingFloodlightActivityGroupsPatchRequest req = new DfareportingFloodlightActivityGroupsPatchRequest("tenetur", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "quidem";
                    advertiserId = "soluta";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eos";
                        etag = "quae";
                        id = "a40e7c4a-e640-4642-b265-7b01a07c08fd";
                        kind = "sequi";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "magni";
                    }};;
                    floodlightConfigurationId = "inventore";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eligendi";
                        etag = "dolores";
                        id = "57930d6f-093a-43ef-a46d-366dfa1011a0";
                        kind = "unde";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "cum";
                    }};;
                    id = "dolor";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "necessitatibus";
                        etag = "porro";
                        id = "8b53862d-e1a9-4d14-be72-e521f90303df";
                        kind = "quo";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "non";
                    }};;
                    kind = "laudantium";
                    name = "Faye Kozey";
                    subaccountId = "hic";
                    tagString = "error";
                    type = FloodlightActivityGroupTypeEnum.COUNTER;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "sequi";
                key = "aspernatur";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "alias";
                uploadProtocol = "doloribus";
            }};            

            DfareportingFloodlightActivityGroupsPatchResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsPatch(req, new DfareportingFloodlightActivityGroupsPatchSecurity("quo", "quasi") {{
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

            DfareportingFloodlightActivityGroupsUpdateRequest req = new DfareportingFloodlightActivityGroupsUpdateRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                floodlightActivityGroup = new FloodlightActivityGroup() {{
                    accountId = "mollitia";
                    advertiserId = "cumque";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "molestias";
                        etag = "asperiores";
                        id = "e1961ce9-be41-4c86-9dd7-d9719d07b200";
                        kind = "deserunt";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "praesentium";
                    }};;
                    floodlightConfigurationId = "delectus";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "a";
                        etag = "temporibus";
                        id = "2967df8f-d882-4a8e-a0be-620cd9c5afdd";
                        kind = "doloremque";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "eligendi";
                    }};;
                    id = "nesciunt";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptate";
                        etag = "corporis";
                        id = "2512beae-1d87-4ecc-9fdc-ea8e7a883116";
                        kind = "laboriosam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "porro";
                    }};;
                    kind = "at";
                    name = "Duane Spencer";
                    subaccountId = "cumque";
                    tagString = "sunt";
                    type = FloodlightActivityGroupTypeEnum.SALE;
                }};;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "doloremque";
                fields = "nisi";
                key = "eum";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "esse";
                uploadProtocol = "quibusdam";
            }};            

            DfareportingFloodlightActivityGroupsUpdateResponse res = sdk.floodlightActivityGroups.dfareportingFloodlightActivityGroupsUpdate(req, new DfareportingFloodlightActivityGroupsUpdateSecurity("tempora", "explicabo") {{
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
