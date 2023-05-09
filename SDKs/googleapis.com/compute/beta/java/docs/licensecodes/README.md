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

            ComputeLicenseCodesGetRequest req = new ComputeLicenseCodesGetRequest("perferendis", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "libero";
                key = "dolorem";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "ducimus";
                uploadProtocol = "harum";
                userIp = "fugiat";
            }};            

            ComputeLicenseCodesGetResponse res = sdk.licenseCodes.computeLicenseCodesGet(req, new ComputeLicenseCodesGetSecurity() {{
                option1 = new ComputeLicenseCodesGetSecurityOption1("sed", "aut") {{
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

            ComputeLicenseCodesTestIamPermissionsRequest req = new ComputeLicenseCodesTestIamPermissionsRequest("ut", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ipsum"),
                        add("dolore"),
                        add("accusantium"),
                        add("nam"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "dolorum";
                uploadProtocol = "eius";
                userIp = "praesentium";
            }};            

            ComputeLicenseCodesTestIamPermissionsResponse res = sdk.licenseCodes.computeLicenseCodesTestIamPermissions(req, new ComputeLicenseCodesTestIamPermissionsSecurity() {{
                option1 = new ComputeLicenseCodesTestIamPermissionsSecurityOption1("corporis", "inventore") {{
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
