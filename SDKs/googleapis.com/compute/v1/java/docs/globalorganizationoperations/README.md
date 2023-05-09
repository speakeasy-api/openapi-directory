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

            ComputeGlobalOrganizationOperationsDeleteRequest req = new ComputeGlobalOrganizationOperationsDeleteRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "quis";
                key = "enim";
                oauthToken = "corporis";
                parentId = "iste";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "autem";
                uploadProtocol = "voluptate";
                userIp = "nesciunt";
            }};            

            ComputeGlobalOrganizationOperationsDeleteResponse res = sdk.globalOrganizationOperations.computeGlobalOrganizationOperationsDelete(req, new ComputeGlobalOrganizationOperationsDeleteSecurity() {{
                option1 = new ComputeGlobalOrganizationOperationsDeleteSecurityOption1("magni", "animi") {{
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

            ComputeGlobalOrganizationOperationsGetRequest req = new ComputeGlobalOrganizationOperationsGetRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "commodi";
                key = "autem";
                oauthToken = "praesentium";
                parentId = "magni";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "expedita";
                uploadProtocol = "in";
                userIp = "eaque";
            }};            

            ComputeGlobalOrganizationOperationsGetResponse res = sdk.globalOrganizationOperations.computeGlobalOrganizationOperationsGet(req, new ComputeGlobalOrganizationOperationsGetSecurity() {{
                option1 = new ComputeGlobalOrganizationOperationsGetSecurityOption1("delectus", "blanditiis") {{
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "a";
                filter = "tempore";
                key = "laboriosam";
                maxResults = 934707L;
                oauthToken = "occaecati";
                orderBy = "dicta";
                pageToken = "quidem";
                parentId = "omnis";
                prettyPrint = false;
                quotaUser = "laborum";
                returnPartialSuccess = false;
                uploadType = "molestias";
                uploadProtocol = "a";
                userIp = "dignissimos";
            }};            

            ComputeGlobalOrganizationOperationsListResponse res = sdk.globalOrganizationOperations.computeGlobalOrganizationOperationsList(req, new ComputeGlobalOrganizationOperationsListSecurity() {{
                option1 = new ComputeGlobalOrganizationOperationsListSecurityOption1("labore", "laudantium") {{
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
