# applicationDetailService

### Available Operations

* [testingApplicationDetailServiceGetApkDetails](#testingapplicationdetailservicegetapkdetails) - Gets the details of an Android application APK.

## testingApplicationDetailServiceGetApkDetails

Gets the details of an Android application APK.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                fileReference = new FileReference() {{
                    gcsPath = "debitis";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            TestingApplicationDetailServiceGetApkDetailsResponse res = sdk.applicationDetailService.testingApplicationDetailServiceGetApkDetails(req, new TestingApplicationDetailServiceGetApkDetailsSecurity("excepturi", "nisi") {{
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
