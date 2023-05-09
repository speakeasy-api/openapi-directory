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

            DfareportingCreativeFieldValuesDeleteRequest req = new DfareportingCreativeFieldValuesDeleteRequest("temporibus", "et", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "repellat";
                key = "placeat";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "veniam";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingCreativeFieldValuesDeleteResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesDelete(req, new DfareportingCreativeFieldValuesDeleteSecurity("commodi", "dolores") {{
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

            DfareportingCreativeFieldValuesGetRequest req = new DfareportingCreativeFieldValuesGetRequest("dicta", "molestiae", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "aliquid";
                key = "voluptate";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "velit";
                uploadProtocol = "tempora";
            }};            

            DfareportingCreativeFieldValuesGetResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesGet(req, new DfareportingCreativeFieldValuesGetSecurity("aspernatur", "ad") {{
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

            DfareportingCreativeFieldValuesInsertRequest req = new DfareportingCreativeFieldValuesInsertRequest("incidunt", "alias") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "atque";
                    kind = "tempore";
                    value = "asperiores";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "molestiae";
                key = "et";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "deleniti";
                uploadProtocol = "inventore";
            }};            

            DfareportingCreativeFieldValuesInsertResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesInsert(req, new DfareportingCreativeFieldValuesInsertSecurity("perspiciatis", "perferendis") {{
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

            DfareportingCreativeFieldValuesListRequest req = new DfareportingCreativeFieldValuesListRequest("corporis", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "optio";
                ids = new String[]{{
                    add("at"),
                    add("nam"),
                    add("id"),
                    add("cumque"),
                }};
                key = "in";
                maxResults = 950894L;
                oauthToken = "quibusdam";
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "dolor";
                searchString = "occaecati";
                sortField = DfareportingCreativeFieldValuesListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum.DESCENDING;
                uploadType = "labore";
                uploadProtocol = "pariatur";
            }};            

            DfareportingCreativeFieldValuesListResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesList(req, new DfareportingCreativeFieldValuesListSecurity("vel", "laboriosam") {{
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

            DfareportingCreativeFieldValuesPatchRequest req = new DfareportingCreativeFieldValuesPatchRequest("soluta", "minus", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "officiis";
                    kind = "aliquam";
                    value = "quas";
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "explicabo";
                key = "rerum";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "enim";
                uploadProtocol = "tempora";
            }};            

            DfareportingCreativeFieldValuesPatchResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesPatch(req, new DfareportingCreativeFieldValuesPatchSecurity("libero", "iure") {{
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

            DfareportingCreativeFieldValuesUpdateRequest req = new DfareportingCreativeFieldValuesUpdateRequest("voluptatibus", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "explicabo";
                    kind = "accusantium";
                    value = "eum";
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "atque";
                key = "explicabo";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "nemo";
                uploadProtocol = "sequi";
            }};            

            DfareportingCreativeFieldValuesUpdateResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesUpdate(req, new DfareportingCreativeFieldValuesUpdateSecurity("optio", "libero") {{
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
