<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IapProjectsBrandsCreateSecurity;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreatePathParams;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateQueryParams;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateResponse;
import org.openapis.openapi.models.shared.BrandInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsCreateRequest req = new IapProjectsBrandsCreateRequest() {{
                security = new IapProjectsBrandsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IapProjectsBrandsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new IapProjectsBrandsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BrandInput() {{
                    applicationTitle = "suscipit";
                    supportEmail = "iure";
                }};
            }};            

            IapProjectsBrandsCreateResponse res = sdk.projects.iapProjectsBrandsCreate(req);

            if (res.brand.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->