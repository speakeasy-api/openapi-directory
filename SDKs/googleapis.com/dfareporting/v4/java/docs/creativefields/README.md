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

            DfareportingCreativeFieldsDeleteRequest req = new DfareportingCreativeFieldsDeleteRequest("nihil", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "minus";
                key = "ad";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "blanditiis";
                uploadProtocol = "eligendi";
            }};            

            DfareportingCreativeFieldsDeleteResponse res = sdk.creativeFields.dfareportingCreativeFieldsDelete(req, new DfareportingCreativeFieldsDeleteSecurity("qui", "amet") {{
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

            DfareportingCreativeFieldsGetRequest req = new DfareportingCreativeFieldsGetRequest("recusandae", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "quas";
                key = "ratione";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "repellendus";
                uploadProtocol = "magnam";
            }};            

            DfareportingCreativeFieldsGetResponse res = sdk.creativeFields.dfareportingCreativeFieldsGet(req, new DfareportingCreativeFieldsGetSecurity("quis", "repudiandae") {{
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

            DfareportingCreativeFieldsInsertRequest req = new DfareportingCreativeFieldsInsertRequest("soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "fuga";
                    advertiserId = "blanditiis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nobis";
                        etag = "ea";
                        id = "74ee5cfc-18ed-4c7f-b87e-32e04b3d3ed0";
                        kind = "cumque";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "vel";
                    }};;
                    id = "reprehenderit";
                    kind = "aut";
                    name = "Courtney Greenholt";
                    subaccountId = "illum";
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "earum";
                key = "vitae";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "veniam";
                uploadProtocol = "aperiam";
            }};            

            DfareportingCreativeFieldsInsertResponse res = sdk.creativeFields.dfareportingCreativeFieldsInsert(req, new DfareportingCreativeFieldsInsertSecurity("consectetur", "repellat") {{
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

            DfareportingCreativeFieldsListRequest req = new DfareportingCreativeFieldsListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                advertiserIds = new String[]{{
                    add("distinctio"),
                    add("cumque"),
                    add("assumenda"),
                }};
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "vel";
                ids = new String[]{{
                    add("perspiciatis"),
                }};
                key = "accusantium";
                maxResults = 976202L;
                oauthToken = "occaecati";
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "quam";
                searchString = "reiciendis";
                sortField = DfareportingCreativeFieldsListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldsListSortOrderEnum.DESCENDING;
                uploadType = "nemo";
                uploadProtocol = "ab";
            }};            

            DfareportingCreativeFieldsListResponse res = sdk.creativeFields.dfareportingCreativeFieldsList(req, new DfareportingCreativeFieldsListSecurity("atque", "natus") {{
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

            DfareportingCreativeFieldsPatchRequest req = new DfareportingCreativeFieldsPatchRequest("culpa", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "officiis";
                    advertiserId = "reiciendis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatum";
                        etag = "aperiam";
                        id = "7aae03f3-3ca7-49fb-9de4-032ba26fd368";
                        kind = "expedita";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "excepturi";
                    }};;
                    id = "dolores";
                    kind = "dicta";
                    name = "Verna Satterfield";
                    subaccountId = "dicta";
                }};;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "quis";
                key = "optio";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "autem";
                uploadProtocol = "tempora";
            }};            

            DfareportingCreativeFieldsPatchResponse res = sdk.creativeFields.dfareportingCreativeFieldsPatch(req, new DfareportingCreativeFieldsPatchSecurity("beatae", "dignissimos") {{
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

            DfareportingCreativeFieldsUpdateRequest req = new DfareportingCreativeFieldsUpdateRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "veritatis";
                    advertiserId = "amet";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sequi";
                        etag = "recusandae";
                        id = "dc046bc5-163b-4bca-8922-7c42c22c5535";
                        kind = "accusantium";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "cupiditate";
                    }};;
                    id = "minima";
                    kind = "quo";
                    name = "Ernestine Predovic";
                    subaccountId = "optio";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "quo";
                fields = "vitae";
                key = "voluptates";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "molestias";
                uploadProtocol = "beatae";
            }};            

            DfareportingCreativeFieldsUpdateResponse res = sdk.creativeFields.dfareportingCreativeFieldsUpdate(req, new DfareportingCreativeFieldsUpdateSecurity("itaque", "atque") {{
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
