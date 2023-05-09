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

            DfareportingCreativeGroupsGetRequest req = new DfareportingCreativeGroupsGetRequest("veniam", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "maxime";
                key = "dolores";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "molestiae";
                uploadProtocol = "aliquid";
            }};            

            DfareportingCreativeGroupsGetResponse res = sdk.creativeGroups.dfareportingCreativeGroupsGet(req, new DfareportingCreativeGroupsGetSecurity("voluptate", "eum") {{
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

            DfareportingCreativeGroupsInsertRequest req = new DfareportingCreativeGroupsInsertRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "tempora";
                    advertiserId = "aspernatur";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ad";
                        etag = "incidunt";
                        id = "038bfb59-71e9-4819-8557-389cedbac7fd";
                        kind = "culpa";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "occaecati";
                    }};;
                    groupNumber = 351328;
                    id = "unde";
                    kind = "labore";
                    name = "Cecil Howell";
                    subaccountId = "magni";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "quas";
                key = "aut";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "explicabo";
                uploadProtocol = "rerum";
            }};            

            DfareportingCreativeGroupsInsertResponse res = sdk.creativeGroups.dfareportingCreativeGroupsInsert(req, new DfareportingCreativeGroupsInsertSecurity("iste", "occaecati") {{
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

            DfareportingCreativeGroupsListRequest req = new DfareportingCreativeGroupsListRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                advertiserIds = new String[]{{
                    add("voluptatibus"),
                    add("id"),
                }};
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "accusantium";
                groupNumber = 432280L;
                ids = new String[]{{
                    add("commodi"),
                }};
                key = "molestias";
                maxResults = 542601L;
                oauthToken = "explicabo";
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "ipsam";
                searchString = "nemo";
                sortField = DfareportingCreativeGroupsListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeGroupsListSortOrderEnum.DESCENDING;
                uploadType = "libero";
                uploadProtocol = "ab";
            }};            

            DfareportingCreativeGroupsListResponse res = sdk.creativeGroups.dfareportingCreativeGroupsList(req, new DfareportingCreativeGroupsListSecurity("alias", "accusantium") {{
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

            DfareportingCreativeGroupsPatchRequest req = new DfareportingCreativeGroupsPatchRequest("doloremque", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeGroup = new CreativeGroup() {{
                    accountId = "necessitatibus";
                    advertiserId = "reiciendis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "incidunt";
                        etag = "provident";
                        id = "21ec2053-b749-4366-ac8e-e0f2bf19588d";
                        kind = "eius";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "vero";
                    }};;
                    groupNumber = 13836;
                    id = "sequi";
                    kind = "reiciendis";
                    name = "Nadine Ullrich";
                    subaccountId = "quia";
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "earum";
                key = "ipsum";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "consequatur";
                uploadProtocol = "harum";
            }};            

            DfareportingCreativeGroupsPatchResponse res = sdk.creativeGroups.dfareportingCreativeGroupsPatch(req, new DfareportingCreativeGroupsPatchSecurity("nobis", "numquam") {{
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

            DfareportingCreativeGroupsUpdateRequest req = new DfareportingCreativeGroupsUpdateRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeGroup = new CreativeGroup() {{
                    accountId = "doloribus";
                    advertiserId = "quos";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "commodi";
                        etag = "blanditiis";
                        id = "fd52405c-b331-4d49-af4f-127fb0e0bf1f";
                        kind = "deleniti";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "inventore";
                    }};;
                    groupNumber = 442416;
                    id = "sint";
                    kind = "dignissimos";
                    name = "Drew Adams";
                    subaccountId = "impedit";
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "mollitia";
                key = "repudiandae";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            DfareportingCreativeGroupsUpdateResponse res = sdk.creativeGroups.dfareportingCreativeGroupsUpdate(req, new DfareportingCreativeGroupsUpdateSecurity("alias", "consequuntur") {{
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
