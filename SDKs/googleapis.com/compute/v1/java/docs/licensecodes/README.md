# licenseCodes

### Available Operations

* [computeLicenseCodesGet](#computelicensecodesget) - Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesTestIamPermissions](#computelicensecodestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

## computeLicenseCodesGet

Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetRequest;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetResponse;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurity;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicenseCodesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicenseCodesGetRequest req = new ComputeLicenseCodesGetRequest("molestiae", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "dolorem";
                key = "eum";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "odio";
                uploadProtocol = "unde";
                userIp = "sapiente";
            }};            

            ComputeLicenseCodesGetResponse res = sdk.licenseCodes.computeLicenseCodesGet(req, new ComputeLicenseCodesGetSecurity() {{
                option1 = new ComputeLicenseCodesGetSecurityOption1("ab", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.licenseCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeLicenseCodesTestIamPermissions

Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeLicenseCodesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeLicenseCodesTestIamPermissionsRequest req = new ComputeLicenseCodesTestIamPermissionsRequest("quia", "voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("accusantium"),
                        add("et"),
                        add("quo"),
                        add("alias"),
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "veritatis";
                key = "reiciendis";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "blanditiis";
                uploadProtocol = "nulla";
                userIp = "minus";
            }};            

            ComputeLicenseCodesTestIamPermissionsResponse res = sdk.licenseCodes.computeLicenseCodesTestIamPermissions(req, new ComputeLicenseCodesTestIamPermissionsSecurity() {{
                option1 = new ComputeLicenseCodesTestIamPermissionsSecurityOption1("nemo", "voluptates") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
