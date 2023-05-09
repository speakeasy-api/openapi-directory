# operations

### Available Operations

* [cloudsearchOperationsGet](#cloudsearchoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [cloudsearchOperationsLroList](#cloudsearchoperationslrolist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## cloudsearchOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetRequest;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetResponse;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurityOption3;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurityOption4;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurityOption5;
import org.openapis.openapi.models.operations.CloudsearchOperationsGetSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchOperationsGetRequest req = new CloudsearchOperationsGetRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "sed";
                key = "reiciendis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "facilis";
                uploadProtocol = "voluptate";
            }};            

            CloudsearchOperationsGetResponse res = sdk.operations.cloudsearchOperationsGet(req, new CloudsearchOperationsGetSecurity() {{
                option1 = new CloudsearchOperationsGetSecurityOption1("expedita", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchOperationsLroList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListRequest;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListResponse;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurity;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurityOption3;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurityOption4;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurityOption5;
import org.openapis.openapi.models.operations.CloudsearchOperationsLroListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchOperationsLroListRequest req = new CloudsearchOperationsLroListRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "commodi";
                filter = "quidem";
                key = "explicabo";
                oauthToken = "voluptas";
                pageSize = 604118L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "sapiente";
                uploadProtocol = "debitis";
            }};            

            CloudsearchOperationsLroListResponse res = sdk.operations.cloudsearchOperationsLroList(req, new CloudsearchOperationsLroListSecurity() {{
                option1 = new CloudsearchOperationsLroListSecurityOption1("illo", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
