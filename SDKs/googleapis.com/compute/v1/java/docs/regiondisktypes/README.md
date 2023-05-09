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

            ComputeRegionDiskTypesGetRequest req = new ComputeRegionDiskTypesGetRequest("magnam", "odit", "repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "numquam";
                key = "ipsum";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "architecto";
                uploadProtocol = "occaecati";
                userIp = "non";
            }};            

            ComputeRegionDiskTypesGetResponse res = sdk.regionDiskTypes.computeRegionDiskTypesGet(req, new ComputeRegionDiskTypesGetSecurity() {{
                option1 = new ComputeRegionDiskTypesGetSecurityOption1("esse", "nostrum") {{
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

            ComputeRegionDiskTypesListRequest req = new ComputeRegionDiskTypesListRequest("facere", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "maiores";
                filter = "ea";
                key = "qui";
                maxResults = 987482L;
                oauthToken = "corrupti";
                orderBy = "pariatur";
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "magnam";
                returnPartialSuccess = false;
                uploadType = "sunt";
                uploadProtocol = "perferendis";
                userIp = "illum";
            }};            

            ComputeRegionDiskTypesListResponse res = sdk.regionDiskTypes.computeRegionDiskTypesList(req, new ComputeRegionDiskTypesListSecurity() {{
                option1 = new ComputeRegionDiskTypesListSecurityOption1("illo", "occaecati") {{
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
