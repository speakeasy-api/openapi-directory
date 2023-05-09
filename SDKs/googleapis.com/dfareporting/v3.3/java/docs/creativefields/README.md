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

            DfareportingCreativeFieldsDeleteRequest req = new DfareportingCreativeFieldsDeleteRequest("ab", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "necessitatibus";
                key = "reiciendis";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "dolores";
                uploadProtocol = "illo";
            }};            

            DfareportingCreativeFieldsDeleteResponse res = sdk.creativeFields.dfareportingCreativeFieldsDelete(req, new DfareportingCreativeFieldsDeleteSecurity("recusandae", "quod") {{
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

            DfareportingCreativeFieldsGetRequest req = new DfareportingCreativeFieldsGetRequest("magni", "sit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "eius";
                key = "perspiciatis";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "aliquid";
                uploadProtocol = "officia";
            }};            

            DfareportingCreativeFieldsGetResponse res = sdk.creativeFields.dfareportingCreativeFieldsGet(req, new DfareportingCreativeFieldsGetSecurity("quisquam", "rem") {{
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

            DfareportingCreativeFieldsInsertRequest req = new DfareportingCreativeFieldsInsertRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeField = new CreativeField() {{
                    accountId = "voluptatem";
                    advertiserId = "repellat";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "magni";
                        etag = "libero";
                        id = "f19588d4-0d03-4f3d-aba2-97be3e90bc40";
                        kind = "temporibus";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quos";
                    }};;
                    id = "commodi";
                    kind = "blanditiis";
                    name = "Drew Hilll";
                    subaccountId = "perferendis";
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "dolor";
                key = "nesciunt";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "numquam";
                uploadProtocol = "provident";
            }};            

            DfareportingCreativeFieldsInsertResponse res = sdk.creativeFields.dfareportingCreativeFieldsInsert(req, new DfareportingCreativeFieldsInsertSecurity("quia", "reiciendis") {{
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

            DfareportingCreativeFieldsListRequest req = new DfareportingCreativeFieldsListRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                advertiserIds = new String[]{{
                    add("iusto"),
                }};
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "aperiam";
                ids = new String[]{{
                    add("voluptatem"),
                    add("soluta"),
                    add("hic"),
                    add("beatae"),
                }};
                key = "delectus";
                maxResults = 535151L;
                oauthToken = "fugit";
                pageToken = "inventore";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                searchString = "sint";
                sortField = DfareportingCreativeFieldsListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldsListSortOrderEnum.DESCENDING;
                uploadType = "nulla";
                uploadProtocol = "consequatur";
            }};            

            DfareportingCreativeFieldsListResponse res = sdk.creativeFields.dfareportingCreativeFieldsList(req, new DfareportingCreativeFieldsListSecurity("similique", "eligendi") {{
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

            DfareportingCreativeFieldsPatchRequest req = new DfareportingCreativeFieldsPatchRequest("impedit", "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "voluptate";
                    advertiserId = "mollitia";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repudiandae";
                        etag = "tempore";
                        id = "7b7021a5-2046-4b64-a99f-b0e67e094fdf";
                        kind = "saepe";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "exercitationem";
                    }};;
                    id = "exercitationem";
                    kind = "dolore";
                    name = "Sophie Wilkinson";
                    subaccountId = "mollitia";
                }};;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quasi";
                key = "rerum";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "recusandae";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingCreativeFieldsPatchResponse res = sdk.creativeFields.dfareportingCreativeFieldsPatch(req, new DfareportingCreativeFieldsPatchSecurity("natus", "reprehenderit") {{
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

            DfareportingCreativeFieldsUpdateRequest req = new DfareportingCreativeFieldsUpdateRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "fuga";
                    advertiserId = "nulla";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cumque";
                        etag = "aperiam";
                        id = "5d85ae2d-fb70-4fb3-8742-90d336561eca";
                        kind = "architecto";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "eveniet";
                    }};;
                    id = "doloribus";
                    kind = "praesentium";
                    name = "Miss Ricky Hand";
                    subaccountId = "ducimus";
                }};;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "necessitatibus";
                key = "nam";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "molestias";
                uploadProtocol = "impedit";
            }};            

            DfareportingCreativeFieldsUpdateResponse res = sdk.creativeFields.dfareportingCreativeFieldsUpdate(req, new DfareportingCreativeFieldsUpdateSecurity("modi", "possimus") {{
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
