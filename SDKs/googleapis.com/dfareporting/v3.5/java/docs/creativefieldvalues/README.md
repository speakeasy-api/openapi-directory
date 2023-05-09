# creativeFieldValues

### Available Operations

* [dfareportingCreativeFieldValuesDelete](#dfareportingcreativefieldvaluesdelete) - Deletes an existing creative field value.
* [dfareportingCreativeFieldValuesGet](#dfareportingcreativefieldvaluesget) - Gets one creative field value by ID.
* [dfareportingCreativeFieldValuesInsert](#dfareportingcreativefieldvaluesinsert) - Inserts a new creative field value.
* [dfareportingCreativeFieldValuesList](#dfareportingcreativefieldvalueslist) - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* [dfareportingCreativeFieldValuesPatch](#dfareportingcreativefieldvaluespatch) - Updates an existing creative field value. This method supports patch semantics.
* [dfareportingCreativeFieldValuesUpdate](#dfareportingcreativefieldvaluesupdate) - Updates an existing creative field value.

## dfareportingCreativeFieldValuesDelete

Deletes an existing creative field value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldValuesDeleteRequest req = new DfareportingCreativeFieldValuesDeleteRequest("magni", "blanditiis", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                fields = "et";
                key = "error";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "qui";
                uploadProtocol = "unde";
            }};            

            DfareportingCreativeFieldValuesDeleteResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesDelete(req, new DfareportingCreativeFieldValuesDeleteSecurity("ex", "quaerat") {{
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

## dfareportingCreativeFieldValuesGet

Gets one creative field value by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesGetRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesGetResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldValuesGetRequest req = new DfareportingCreativeFieldValuesGetRequest("aliquid", "eum", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "blanditiis";
                key = "et";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "iste";
                uploadProtocol = "perferendis";
            }};            

            DfareportingCreativeFieldValuesGetResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesGet(req, new DfareportingCreativeFieldValuesGetSecurity("magnam", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldValuesInsert

Inserts a new creative field value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeFieldValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldValuesInsertRequest req = new DfareportingCreativeFieldValuesInsertRequest("sapiente", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "iste";
                    kind = "quidem";
                    value = "iusto";
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "consequatur";
                key = "voluptates";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "eos";
                uploadProtocol = "veritatis";
            }};            

            DfareportingCreativeFieldValuesInsertResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesInsert(req, new DfareportingCreativeFieldValuesInsertSecurity("vel", "placeat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldValuesList

Retrieves a list of creative field values, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesListRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesListResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesListSecurity;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldValuesListRequest req = new DfareportingCreativeFieldValuesListRequest("libero", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "cumque";
                ids = new String[]{{
                    add("ex"),
                }};
                key = "dolor";
                maxResults = 884704L;
                oauthToken = "sed";
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "unde";
                searchString = "harum";
                sortField = DfareportingCreativeFieldValuesListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum.DESCENDING;
                uploadType = "ipsa";
                uploadProtocol = "blanditiis";
            }};            

            DfareportingCreativeFieldValuesListResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesList(req, new DfareportingCreativeFieldValuesListSecurity("aliquam", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeFieldValuesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldValuesPatch

Updates an existing creative field value. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeFieldValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldValuesPatchRequest req = new DfareportingCreativeFieldValuesPatchRequest("dolorum", "omnis", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "veniam";
                    kind = "quam";
                    value = "repellendus";
                }};;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "eius";
                key = "ipsa";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "iusto";
                uploadProtocol = "laborum";
            }};            

            DfareportingCreativeFieldValuesPatchResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesPatch(req, new DfareportingCreativeFieldValuesPatchSecurity("in", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCreativeFieldValuesUpdate

Updates an existing creative field value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingCreativeFieldValuesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreativeFieldValue;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCreativeFieldValuesUpdateRequest req = new DfareportingCreativeFieldValuesUpdateRequest("quia", "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "ut";
                    kind = "eius";
                    value = "cupiditate";
                }};;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "facere";
                key = "earum";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "reiciendis";
                uploadProtocol = "ex";
            }};            

            DfareportingCreativeFieldValuesUpdateResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesUpdate(req, new DfareportingCreativeFieldValuesUpdateSecurity("tempore", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeFieldValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
