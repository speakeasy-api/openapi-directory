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

            DfareportingCreativeFieldValuesDeleteRequest req = new DfareportingCreativeFieldValuesDeleteRequest("natus", "necessitatibus", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "impedit";
                key = "facilis";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quaerat";
                uploadProtocol = "delectus";
            }};            

            DfareportingCreativeFieldValuesDeleteResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesDelete(req, new DfareportingCreativeFieldValuesDeleteSecurity("molestiae", "deserunt") {{
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

            DfareportingCreativeFieldValuesGetRequest req = new DfareportingCreativeFieldValuesGetRequest("laborum", "odit", "rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "ratione";
                key = "nisi";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "temporibus";
                uploadProtocol = "et";
            }};            

            DfareportingCreativeFieldValuesGetResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesGet(req, new DfareportingCreativeFieldValuesGetSecurity("debitis", "nisi") {{
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

            DfareportingCreativeFieldValuesInsertRequest req = new DfareportingCreativeFieldValuesInsertRequest("aliquid", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "repellat";
                    kind = "placeat";
                    value = "eligendi";
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "perspiciatis";
                fields = "commodi";
                key = "dolores";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "maxime";
                uploadProtocol = "dolores";
            }};            

            DfareportingCreativeFieldValuesInsertResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesInsert(req, new DfareportingCreativeFieldValuesInsertSecurity("molestias", "quam") {{
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

            DfareportingCreativeFieldValuesListRequest req = new DfareportingCreativeFieldValuesListRequest("molestiae", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "tempora";
                ids = new String[]{{
                    add("ad"),
                }};
                key = "incidunt";
                maxResults = 1782L;
                oauthToken = "adipisci";
                pageToken = "atque";
                prettyPrint = false;
                quotaUser = "tempore";
                searchString = "asperiores";
                sortField = DfareportingCreativeFieldValuesListSortFieldEnum.VALUE;
                sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum.ASCENDING;
                uploadType = "cupiditate";
                uploadProtocol = "molestiae";
            }};            

            DfareportingCreativeFieldValuesListResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesList(req, new DfareportingCreativeFieldValuesListSecurity("et", "accusamus") {{
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

            DfareportingCreativeFieldValuesPatchRequest req = new DfareportingCreativeFieldValuesPatchRequest("excepturi", "deleniti", "inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "perferendis";
                    kind = "corporis";
                    value = "ullam";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "perspiciatis";
                key = "optio";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            DfareportingCreativeFieldValuesPatchResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesPatch(req, new DfareportingCreativeFieldValuesPatchSecurity("cumque", "in") {{
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

            DfareportingCreativeFieldValuesUpdateRequest req = new DfareportingCreativeFieldValuesUpdateRequest("a", "quibusdam") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "dolor";
                    kind = "occaecati";
                    value = "exercitationem";
                }};;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "vel";
                key = "laboriosam";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "magni";
                uploadProtocol = "mollitia";
            }};            

            DfareportingCreativeFieldValuesUpdateResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesUpdate(req, new DfareportingCreativeFieldValuesUpdateSecurity("officiis", "aliquam") {{
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
