# globalOrganizationOperations

### Available Operations

* [computeGlobalOrganizationOperationsDelete](#computeglobalorganizationoperationsdelete) - Deletes the specified Operations resource.
* [computeGlobalOrganizationOperationsGet](#computeglobalorganizationoperationsget) - Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.
* [computeGlobalOrganizationOperationsList](#computeglobalorganizationoperationslist) - Retrieves a list of Operation resources contained within the specified organization.

## computeGlobalOrganizationOperationsDelete

Deletes the specified Operations resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOrganizationOperationsDeleteRequest req = new ComputeGlobalOrganizationOperationsDeleteRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "quas";
                key = "repellat";
                oauthToken = "placeat";
                parentId = "eligendi";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "veniam";
                uploadProtocol = "perspiciatis";
                userIp = "commodi";
            }};            

            ComputeGlobalOrganizationOperationsDeleteResponse res = sdk.globalOrganizationOperations.computeGlobalOrganizationOperationsDelete(req, new ComputeGlobalOrganizationOperationsDeleteSecurity() {{
                option1 = new ComputeGlobalOrganizationOperationsDeleteSecurityOption1("dolores", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeGlobalOrganizationOperationsGet

Retrieves the specified Operations resource. Gets a list of operations by making a `list()` request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsGetRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsGetResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsGetSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOrganizationOperationsGetRequest req = new ComputeGlobalOrganizationOperationsGetRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestiae";
                key = "aliquid";
                oauthToken = "voluptate";
                parentId = "eum";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "velit";
                uploadProtocol = "tempora";
                userIp = "aspernatur";
            }};            

            ComputeGlobalOrganizationOperationsGetResponse res = sdk.globalOrganizationOperations.computeGlobalOrganizationOperationsGet(req, new ComputeGlobalOrganizationOperationsGetSecurity() {{
                option1 = new ComputeGlobalOrganizationOperationsGetSecurityOption1("ad", "incidunt") {{
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

## computeGlobalOrganizationOperationsList

Retrieves a list of Operation resources contained within the specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsListRequest;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsListResponse;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsListSecurity;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeGlobalOrganizationOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeGlobalOrganizationOperationsListRequest req = new ComputeGlobalOrganizationOperationsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "asperiores";
                filter = "distinctio";
                key = "minima";
                maxResults = 584483L;
                oauthToken = "molestiae";
                orderBy = "et";
                pageToken = "accusamus";
                parentId = "excepturi";
                prettyPrint = false;
                quotaUser = "deleniti";
                returnPartialSuccess = false;
                uploadType = "inventore";
                uploadProtocol = "perspiciatis";
                userIp = "perferendis";
            }};            

            ComputeGlobalOrganizationOperationsListResponse res = sdk.globalOrganizationOperations.computeGlobalOrganizationOperationsList(req, new ComputeGlobalOrganizationOperationsListSecurity() {{
                option1 = new ComputeGlobalOrganizationOperationsListSecurityOption1("corporis", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
