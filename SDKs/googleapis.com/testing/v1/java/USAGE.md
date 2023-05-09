<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsRequest;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsResponse;
import org.openapis.openapi.models.operations.TestingApplicationDetailServiceGetApkDetailsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FileReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TestingApplicationDetailServiceGetApkDetailsRequest req = new TestingApplicationDetailServiceGetApkDetailsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                fileReference = new FileReference() {{
                    gcsPath = "provident";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            TestingApplicationDetailServiceGetApkDetailsResponse res = sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req, new TestingApplicationDetailServiceGetApkDetailsSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getApkDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->