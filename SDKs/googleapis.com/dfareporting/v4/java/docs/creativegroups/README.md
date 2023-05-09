# creativeGroups

### Available Operations

* [dfareportingCreativeGroupsGet](#dfareportingcreativegroupsget) - Gets one creative group by ID.
* [dfareportingCreativeGroupsInsert](#dfareportingcreativegroupsinsert) - Inserts a new creative group.
* [dfareportingCreativeGroupsList](#dfareportingcreativegroupslist) - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* [dfareportingCreativeGroupsPatch](#dfareportingcreativegroupspatch) - Updates an existing creative group. This method supports patch semantics.
* [dfareportingCreativeGroupsUpdate](#dfareportingcreativegroupsupdate) - Updates an existing creative group.

## dfareportingCreativeGroupsGet

Gets one creative group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsGetRequest req = new DfareportingCreativeGroupsGetRequest("dolorum", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "temporibus";
                key = "porro";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "inventore";
                uploadProtocol = "fugit";
            }};            

            DfareportingCreativeGroupsGetResponse res = sdk.creativeGroups.dfareportingCreativeGroupsGet(req, new DfareportingCreativeGroupsGetSecurity("earum", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsInsert

Inserts a new creative group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeGroup;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsInsertRequest req = new DfareportingCreativeGroupsInsertRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeGroup = new CreativeGroup() {{
                    accountId = "eum";
                    advertiserId = "non";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nam";
                        etag = "sapiente";
                        id = "cc5469d4-015d-4fa7-9620-6bef2b0a3e42";
                        kind = "porro";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "deserunt";
                    }};;
                    groupNumber = 685610;
                    id = "perferendis";
                    kind = "illo";
                    name = "Laverne Mante";
                    subaccountId = "quo";
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "veritatis";
                key = "adipisci";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "quos";
                uploadProtocol = "ea";
            }};            

            DfareportingCreativeGroupsInsertResponse res = sdk.creativeGroups.dfareportingCreativeGroupsInsert(req, new DfareportingCreativeGroupsInsertSecurity("fugiat", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsList

Retrieves a list of creative groups, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListSecurity;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsListRequest req = new DfareportingCreativeGroupsListRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                advertiserIds = new String[]{{
                    add("sint"),
                    add("reprehenderit"),
                    add("est"),
                    add("numquam"),
                }};
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "fuga";
                groupNumber = 818058L;
                ids = new String[]{{
                    add("nam"),
                }};
                key = "asperiores";
                maxResults = 461812L;
                oauthToken = "fugiat";
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "molestiae";
                searchString = "quo";
                sortField = DfareportingCreativeGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingCreativeGroupsListSortOrderEnum.DESCENDING;
                uploadType = "modi";
                uploadProtocol = "id";
            }};            

            DfareportingCreativeGroupsListResponse res = sdk.creativeGroups.dfareportingCreativeGroupsList(req, new DfareportingCreativeGroupsListSecurity("repellendus", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsPatch

Updates an existing creative group. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeGroup;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsPatchRequest req = new DfareportingCreativeGroupsPatchRequest("unde", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "quasi";
                    advertiserId = "quibusdam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptas";
                        etag = "quasi";
                        id = "24353187-0cf6-48b0-bad4-21bd43d1f0cb";
                        kind = "eaque";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "doloremque";
                    }};;
                    groupNumber = 8199;
                    id = "perferendis";
                    kind = "dolor";
                    name = "Cesar Daugherty";
                    subaccountId = "sint";
                }};;
                accessToken = "tempore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "in";
                key = "aperiam";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aliquam";
                uploadProtocol = "voluptatibus";
            }};            

            DfareportingCreativeGroupsPatchResponse res = sdk.creativeGroups.dfareportingCreativeGroupsPatch(req, new DfareportingCreativeGroupsPatchSecurity("fuga", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeGroupsUpdate

Updates an existing creative group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeGroup;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeGroupsUpdateRequest req = new DfareportingCreativeGroupsUpdateRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "quasi";
                    advertiserId = "cumque";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "corporis";
                        etag = "odio";
                        id = "d1fedc20-50d3-48dc-bce1-85472f9ee691";
                        kind = "iure";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "error";
                    }};;
                    groupNumber = 535903;
                    id = "tempore";
                    kind = "saepe";
                    name = "Eleanor Glover";
                    subaccountId = "similique";
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "sequi";
                key = "laborum";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "corporis";
            }};            

            DfareportingCreativeGroupsUpdateResponse res = sdk.creativeGroups.dfareportingCreativeGroupsUpdate(req, new DfareportingCreativeGroupsUpdateSecurity("quo", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
