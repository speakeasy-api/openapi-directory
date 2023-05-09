# twoStepVerification

### Available Operations

* [directoryTwoStepVerificationTurnOff](#directorytwostepverificationturnoff) - Turns off 2-Step Verification for user.

## directoryTwoStepVerificationTurnOff

Turns off 2-Step Verification for user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryTwoStepVerificationTurnOffRequest;
import org.openapis.openapi.models.operations.DirectoryTwoStepVerificationTurnOffResponse;
import org.openapis.openapi.models.operations.DirectoryTwoStepVerificationTurnOffSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryTwoStepVerificationTurnOffRequest req = new DirectoryTwoStepVerificationTurnOffRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "eligendi";
                key = "recusandae";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "veritatis";
                uploadProtocol = "maiores";
            }};            

            DirectoryTwoStepVerificationTurnOffResponse res = sdk.twoStepVerification.directoryTwoStepVerificationTurnOff(req, new DirectoryTwoStepVerificationTurnOffSecurity("itaque", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
