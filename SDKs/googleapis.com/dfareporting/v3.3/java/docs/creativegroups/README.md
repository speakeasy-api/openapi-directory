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

            DfareportingCreativeGroupsGetRequest req = new DfareportingCreativeGroupsGetRequest("similique", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "dolor";
                fields = "nemo";
                key = "quis";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "delectus";
                uploadProtocol = "doloremque";
            }};            

            DfareportingCreativeGroupsGetResponse res = sdk.creativeGroups.dfareportingCreativeGroupsGet(req, new DfareportingCreativeGroupsGetSecurity("laboriosam", "nulla") {{
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

            DfareportingCreativeGroupsInsertRequest req = new DfareportingCreativeGroupsInsertRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeGroup = new CreativeGroup() {{
                    accountId = "enim";
                    advertiserId = "nam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dignissimos";
                        etag = "consequuntur";
                        id = "f0f54856-8a04-424e-80a1-d6eb9434645d";
                        kind = "ipsa";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "aut";
                    }};;
                    groupNumber = 562402;
                    id = "quaerat";
                    kind = "repellat";
                    name = "Pete O'Conner";
                    subaccountId = "cumque";
                }};;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "ipsam";
                key = "quod";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "illo";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingCreativeGroupsInsertResponse res = sdk.creativeGroups.dfareportingCreativeGroupsInsert(req, new DfareportingCreativeGroupsInsertSecurity("debitis", "enim") {{
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

            DfareportingCreativeGroupsListRequest req = new DfareportingCreativeGroupsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                advertiserIds = new String[]{{
                    add("atque"),
                }};
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "ad";
                groupNumber = 649269L;
                ids = new String[]{{
                    add("quos"),
                    add("explicabo"),
                    add("distinctio"),
                    add("praesentium"),
                }};
                key = "ullam";
                maxResults = 982059L;
                oauthToken = "corrupti";
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "placeat";
                searchString = "explicabo";
                sortField = DfareportingCreativeGroupsListSortFieldEnum.NAME;
                sortOrder = DfareportingCreativeGroupsListSortOrderEnum.DESCENDING;
                uploadType = "expedita";
                uploadProtocol = "laborum";
            }};            

            DfareportingCreativeGroupsListResponse res = sdk.creativeGroups.dfareportingCreativeGroupsList(req, new DfareportingCreativeGroupsListSecurity("atque", "assumenda") {{
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

            DfareportingCreativeGroupsPatchRequest req = new DfareportingCreativeGroupsPatchRequest("laborum", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "fugit";
                    advertiserId = "nihil";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "illum";
                        etag = "nulla";
                        id = "597ff471-1aa1-4bc7-8b86-cecc74f77b48";
                        kind = "aliquam";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "soluta";
                    }};;
                    groupNumber = 842539;
                    id = "iure";
                    kind = "mollitia";
                    name = "Darla Aufderhar";
                    subaccountId = "architecto";
                }};;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "ratione";
                key = "soluta";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "laudantium";
                uploadProtocol = "sit";
            }};            

            DfareportingCreativeGroupsPatchResponse res = sdk.creativeGroups.dfareportingCreativeGroupsPatch(req, new DfareportingCreativeGroupsPatchSecurity("perspiciatis", "quaerat") {{
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

            DfareportingCreativeGroupsUpdateRequest req = new DfareportingCreativeGroupsUpdateRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeGroup = new CreativeGroup() {{
                    accountId = "adipisci";
                    advertiserId = "eveniet";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsa";
                        etag = "laboriosam";
                        id = "0459bebb-ad02-4f25-86bc-f152558daa95";
                        kind = "nam";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "suscipit";
                    }};;
                    groupNumber = 783702;
                    id = "nulla";
                    kind = "consequatur";
                    name = "Maureen Halvorson";
                    subaccountId = "consectetur";
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "fuga";
                key = "labore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "cum";
                uploadProtocol = "magnam";
            }};            

            DfareportingCreativeGroupsUpdateResponse res = sdk.creativeGroups.dfareportingCreativeGroupsUpdate(req, new DfareportingCreativeGroupsUpdateSecurity("nihil", "officiis") {{
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
