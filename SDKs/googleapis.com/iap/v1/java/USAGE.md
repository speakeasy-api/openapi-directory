<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateResponse;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BrandInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsCreateRequest req = new IapProjectsBrandsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                brandInput = new BrandInput() {{
                    applicationTitle = "distinctio";
                    supportEmail = "quibusdam";
                }};;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            IapProjectsBrandsCreateResponse res = sdk.projects.iapProjectsBrandsCreate(req, new IapProjectsBrandsCreateSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.brand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->