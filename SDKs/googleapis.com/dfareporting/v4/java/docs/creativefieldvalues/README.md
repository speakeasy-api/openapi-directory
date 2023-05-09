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

            DfareportingCreativeFieldValuesDeleteRequest req = new DfareportingCreativeFieldValuesDeleteRequest("inventore", "similique", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "numquam";
                key = "rerum";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "placeat";
                uploadProtocol = "necessitatibus";
            }};            

            DfareportingCreativeFieldValuesDeleteResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesDelete(req, new DfareportingCreativeFieldValuesDeleteSecurity("quisquam", "impedit") {{
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

            DfareportingCreativeFieldValuesGetRequest req = new DfareportingCreativeFieldValuesGetRequest("ducimus", "incidunt", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "deleniti";
                key = "aliquam";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "quibusdam";
                uploadProtocol = "iure";
            }};            

            DfareportingCreativeFieldValuesGetResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesGet(req, new DfareportingCreativeFieldValuesGetSecurity("mollitia", "autem") {{
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

            DfareportingCreativeFieldValuesInsertRequest req = new DfareportingCreativeFieldValuesInsertRequest("hic", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "aliquam";
                    kind = "architecto";
                    value = "nulla";
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "soluta";
                key = "quos";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "sit";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingCreativeFieldValuesInsertResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesInsert(req, new DfareportingCreativeFieldValuesInsertSecurity("quaerat", "nesciunt") {{
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

            DfareportingCreativeFieldValuesListRequest req = new DfareportingCreativeFieldValuesListRequest("molestiae", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "labore";
                ids = new String[]{{
                    add("excepturi"),
                    add("soluta"),
                }};
                key = "voluptates";
                maxResults = 700112L;
                oauthToken = "cum";
                pageToken = "est";
                prettyPrint = false;
                quotaUser = "fugiat";
                searchString = "perferendis";
                sortField = DfareportingCreativeFieldValuesListSortFieldEnum.ID;
                sortOrder = DfareportingCreativeFieldValuesListSortOrderEnum.DESCENDING;
                uploadType = "sunt";
                uploadProtocol = "quis";
            }};            

            DfareportingCreativeFieldValuesListResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesList(req, new DfareportingCreativeFieldValuesListSecurity("corrupti", "iure") {{
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

            DfareportingCreativeFieldValuesPatchRequest req = new DfareportingCreativeFieldValuesPatchRequest("quidem", "quod", "a") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "ipsam";
                    kind = "eos";
                    value = "exercitationem";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "fuga";
                key = "fuga";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "nam";
                uploadProtocol = "itaque";
            }};            

            DfareportingCreativeFieldValuesPatchResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesPatch(req, new DfareportingCreativeFieldValuesPatchSecurity("suscipit", "porro") {{
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

            DfareportingCreativeFieldValuesUpdateRequest req = new DfareportingCreativeFieldValuesUpdateRequest("nulla", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeFieldValue = new CreativeFieldValue() {{
                    id = "in";
                    kind = "enim";
                    value = "vel";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "ut";
                key = "est";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "adipisci";
                uploadProtocol = "ratione";
            }};            

            DfareportingCreativeFieldValuesUpdateResponse res = sdk.creativeFieldValues.dfareportingCreativeFieldValuesUpdate(req, new DfareportingCreativeFieldValuesUpdateSecurity("cum", "magnam") {{
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
