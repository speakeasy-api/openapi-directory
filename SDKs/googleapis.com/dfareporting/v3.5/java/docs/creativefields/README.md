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

            DfareportingCreativeFieldsDeleteRequest req = new DfareportingCreativeFieldsDeleteRequest("provident", "soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "nisi";
                key = "aspernatur";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "asperiores";
                uploadProtocol = "temporibus";
            }};            

            DfareportingCreativeFieldsDeleteResponse res = sdk.creativeFields.dfareportingCreativeFieldsDelete(req, new DfareportingCreativeFieldsDeleteSecurity("delectus", "enim") {{
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

            DfareportingCreativeFieldsGetRequest req = new DfareportingCreativeFieldsGetRequest("ipsam", "porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "eaque";
                key = "ea";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "accusantium";
                uploadProtocol = "ea";
            }};            

            DfareportingCreativeFieldsGetResponse res = sdk.creativeFields.dfareportingCreativeFieldsGet(req, new DfareportingCreativeFieldsGetSecurity("laborum", "et") {{
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

            DfareportingCreativeFieldsInsertRequest req = new DfareportingCreativeFieldsInsertRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeField = new CreativeField() {{
                    accountId = "molestiae";
                    advertiserId = "voluptate";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "autem";
                        etag = "numquam";
                        id = "eef6d0c6-d6ed-49c7-bdd6-34571509a8e8";
                        kind = "dignissimos";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "quibusdam";
                    }};;
                    id = "adipisci";
                    kind = "minus";
                    name = "Genevieve Brakus";
                    subaccountId = "quod";
                }};;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "quisquam";
                key = "odio";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "aliquid";
                uploadProtocol = "culpa";
            }};            

            DfareportingCreativeFieldsInsertResponse res = sdk.creativeFields.dfareportingCreativeFieldsInsert(req, new DfareportingCreativeFieldsInsertSecurity("illo", "reiciendis") {{
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

            DfareportingCreativeFieldsListRequest req = new DfareportingCreativeFieldsListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                advertiserIds = new String[]{{
                    add("non"),
                    add("facere"),
                }};
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "quidem";
                ids = new String[]{{
                    add("molestiae"),
                    add("vitae"),
                }};
                key = "excepturi";
                maxResults = 528085L;
                oauthToken = "iste";
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "reiciendis";
                searchString = "magnam";
                sortField = DfareportingCreativeFieldsListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldsListSortOrderEnum.DESCENDING;
                uploadType = "tempora";
                uploadProtocol = "nobis";
            }};            

            DfareportingCreativeFieldsListResponse res = sdk.creativeFields.dfareportingCreativeFieldsList(req, new DfareportingCreativeFieldsListSecurity("expedita", "modi") {{
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

            DfareportingCreativeFieldsPatchRequest req = new DfareportingCreativeFieldsPatchRequest("adipisci", "atque") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeField = new CreativeField() {{
                    accountId = "rem";
                    advertiserId = "exercitationem";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "tempore";
                        etag = "eos";
                        id = "60591d74-5e3c-4205-9c9c-3f567e0e2527";
                        kind = "suscipit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "nobis";
                    }};;
                    id = "beatae";
                    kind = "repellendus";
                    name = "Kathryn Windler";
                    subaccountId = "laborum";
                }};;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "reiciendis";
                key = "consequatur";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "inventore";
                uploadProtocol = "laboriosam";
            }};            

            DfareportingCreativeFieldsPatchResponse res = sdk.creativeFields.dfareportingCreativeFieldsPatch(req, new DfareportingCreativeFieldsPatchSecurity("quod", "repudiandae") {{
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

            DfareportingCreativeFieldsUpdateRequest req = new DfareportingCreativeFieldsUpdateRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeField = new CreativeField() {{
                    accountId = "sequi";
                    advertiserId = "sint";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "accusamus";
                        etag = "deleniti";
                        id = "f25cd0d1-9d95-49f4-b9e3-9266cbd95f7a";
                        kind = "laborum";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "rerum";
                    }};;
                    id = "consequuntur";
                    kind = "magnam";
                    name = "Frances Dicki";
                    subaccountId = "nostrum";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "nisi";
                key = "aliquid";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "repellat";
                uploadProtocol = "placeat";
            }};            

            DfareportingCreativeFieldsUpdateResponse res = sdk.creativeFields.dfareportingCreativeFieldsUpdate(req, new DfareportingCreativeFieldsUpdateSecurity("eligendi", "quaerat") {{
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
