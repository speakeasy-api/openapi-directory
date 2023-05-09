# creativeFields

### Available Operations

* [dfareportingCreativeFieldsDelete](#dfareportingcreativefieldsdelete) - Deletes an existing creative field.
* [dfareportingCreativeFieldsGet](#dfareportingcreativefieldsget) - Gets one creative field by ID.
* [dfareportingCreativeFieldsInsert](#dfareportingcreativefieldsinsert) - Inserts a new creative field.
* [dfareportingCreativeFieldsList](#dfareportingcreativefieldslist) - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* [dfareportingCreativeFieldsPatch](#dfareportingcreativefieldspatch) - Updates an existing creative field. This method supports patch semantics.
* [dfareportingCreativeFieldsUpdate](#dfareportingcreativefieldsupdate) - Updates an existing creative field.

## dfareportingCreativeFieldsDelete

Deletes an existing creative field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldsDeleteRequest req = new DfareportingCreativeFieldsDeleteRequest("quas", "aut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "iste";
                key = "occaecati";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "libero";
                uploadProtocol = "iure";
            }};            

            DfareportingCreativeFieldsDeleteResponse res = sdk.creativeFields.dfareportingCreativeFieldsDelete(req, new DfareportingCreativeFieldsDeleteSecurity("voluptatibus", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldsGet

Gets one creative field by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsGetRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsGetResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldsGetRequest req = new DfareportingCreativeFieldsGetRequest("qui", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestias";
                key = "atque";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "ipsam";
                uploadProtocol = "nemo";
            }};            

            DfareportingCreativeFieldsGetResponse res = sdk.creativeFields.dfareportingCreativeFieldsGet(req, new DfareportingCreativeFieldsGetSecurity("sequi", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldsInsert

Inserts a new creative field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeField;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldsInsertRequest req = new DfareportingCreativeFieldsInsertRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "alias";
                    advertiserId = "accusantium";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "doloremque";
                        etag = "autem";
                        id = "bef4921e-c205-43b7-8936-6ac8ee0f2bf1";
                        kind = "provident";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "quos";
                    }};;
                    id = "totam";
                    kind = "facere";
                    name = "Mr. Sharon Swift";
                    subaccountId = "neque";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "est";
                key = "quia";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "facilis";
                uploadProtocol = "earum";
            }};            

            DfareportingCreativeFieldsInsertResponse res = sdk.creativeFields.dfareportingCreativeFieldsInsert(req, new DfareportingCreativeFieldsInsertSecurity("ipsum", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldsList

Retrieves a list of creative fields, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsListRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsListResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsListSecurity;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldsListRequest req = new DfareportingCreativeFieldsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                advertiserIds = new String[]{{
                    add("numquam"),
                    add("consequatur"),
                    add("temporibus"),
                    add("doloribus"),
                }};
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "blanditiis";
                ids = new String[]{{
                    add("nulla"),
                    add("nemo"),
                    add("ratione"),
                    add("dolore"),
                }};
                key = "perferendis";
                maxResults = 316292L;
                oauthToken = "impedit";
                pageToken = "libero";
                prettyPrint = false;
                quotaUser = "dolor";
                searchString = "nesciunt";
                sortField = DfareportingCreativeFieldsListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldsListSortOrderEnum.DESCENDING;
                uploadType = "numquam";
                uploadProtocol = "provident";
            }};            

            DfareportingCreativeFieldsListResponse res = sdk.creativeFields.dfareportingCreativeFieldsList(req, new DfareportingCreativeFieldsListSecurity("quia", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeFieldsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldsPatch

Updates an existing creative field. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeField;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldsPatchRequest req = new DfareportingCreativeFieldsPatchRequest("modi", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "qui";
                    advertiserId = "iusto";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "a";
                        etag = "quidem";
                        id = "0e0bf1f8-2179-478d-8acc-a77aeb7b7021";
                        kind = "est";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "magni";
                    }};;
                    id = "quae";
                    kind = "quaerat";
                    name = "Luz Hudson";
                    subaccountId = "unde";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "facilis";
                fields = "doloremque";
                key = "officiis";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "necessitatibus";
                uploadProtocol = "alias";
            }};            

            DfareportingCreativeFieldsPatchResponse res = sdk.creativeFields.dfareportingCreativeFieldsPatch(req, new DfareportingCreativeFieldsPatchSecurity("provident", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldsUpdate

Updates an existing creative field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeField;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldsUpdateRequest req = new DfareportingCreativeFieldsUpdateRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeField = new CreativeField() {{
                    accountId = "tenetur";
                    advertiserId = "saepe";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "assumenda";
                        etag = "exercitationem";
                        id = "540ef53a-34a1-4b8f-a997-31adc05d85ae";
                        kind = "consequuntur";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "delectus";
                    }};;
                    id = "rerum";
                    kind = "voluptate";
                    name = "Shawna Pouros";
                    subaccountId = "odio";
                }};;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "consequatur";
                key = "illum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "ex";
                uploadProtocol = "quis";
            }};            

            DfareportingCreativeFieldsUpdateResponse res = sdk.creativeFields.dfareportingCreativeFieldsUpdate(req, new DfareportingCreativeFieldsUpdateSecurity("eum", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeField != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
