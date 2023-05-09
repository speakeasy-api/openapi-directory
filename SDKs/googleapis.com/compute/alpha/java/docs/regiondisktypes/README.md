# regionDiskTypes

### Available Operations

* [computeRegionDiskTypesGet](#computeregiondisktypesget) - Returns the specified regional disk type.
* [computeRegionDiskTypesList](#computeregiondisktypeslist) - Retrieves a list of regional disk types available to the specified project.

## computeRegionDiskTypesGet

Returns the specified regional disk type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDiskTypesGetRequest req = new ComputeRegionDiskTypesGetRequest("quam", "cupiditate", "officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "quisquam";
                key = "porro";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "eos";
                uploadProtocol = "aliquam";
                userIp = "expedita";
            }};            

            ComputeRegionDiskTypesGetResponse res = sdk.regionDiskTypes.computeRegionDiskTypesGet(req, new ComputeRegionDiskTypesGetSecurity() {{
                option1 = new ComputeRegionDiskTypesGetSecurityOption1("accusamus", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.diskType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionDiskTypesList

Retrieves a list of regional disk types available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionDiskTypesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDiskTypesListRequest req = new ComputeRegionDiskTypesListRequest("officia", "odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "pariatur";
                filter = "eum";
                key = "odio";
                maxResults = 253367L;
                oauthToken = "porro";
                orderBy = "aliquam";
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "tempora";
                returnPartialSuccess = false;
                uploadType = "quia";
                uploadProtocol = "fugiat";
                userIp = "sint";
            }};            

            ComputeRegionDiskTypesListResponse res = sdk.regionDiskTypes.computeRegionDiskTypesList(req, new ComputeRegionDiskTypesListSecurity() {{
                option1 = new ComputeRegionDiskTypesListSecurityOption1("quaerat", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.regionDiskTypeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
