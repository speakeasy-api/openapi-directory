# verificationCodes

### Available Operations

* [directoryVerificationCodesGenerate](#directoryverificationcodesgenerate) - Generates new backup verification codes for the user.
* [directoryVerificationCodesInvalidate](#directoryverificationcodesinvalidate) - Invalidates the current backup verification codes for the user.
* [directoryVerificationCodesList](#directoryverificationcodeslist) - Returns the current set of valid backup verification codes for the specified user.

## directoryVerificationCodesGenerate

Generates new backup verification codes for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesGenerateRequest;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesGenerateResponse;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesGenerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryVerificationCodesGenerateRequest req = new DirectoryVerificationCodesGenerateRequest("unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "minus";
                key = "minima";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "vitae";
                uploadProtocol = "veritatis";
            }};            

            DirectoryVerificationCodesGenerateResponse res = sdk.verificationCodes.directoryVerificationCodesGenerate(req, new DirectoryVerificationCodesGenerateSecurity("facere", "earum") {{
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

## directoryVerificationCodesInvalidate

Invalidates the current backup verification codes for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesInvalidateRequest;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesInvalidateResponse;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesInvalidateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryVerificationCodesInvalidateRequest req = new DirectoryVerificationCodesInvalidateRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "pariatur";
                key = "enim";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "est";
                uploadProtocol = "quaerat";
            }};            

            DirectoryVerificationCodesInvalidateResponse res = sdk.verificationCodes.directoryVerificationCodesInvalidate(req, new DirectoryVerificationCodesInvalidateSecurity("facere", "vitae") {{
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

## directoryVerificationCodesList

Returns the current set of valid backup verification codes for the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesListRequest;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesListResponse;
import org.openapis.openapi.models.operations.DirectoryVerificationCodesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryVerificationCodesListRequest req = new DirectoryVerificationCodesListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "expedita";
                fields = "quia";
                key = "vitae";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "ipsa";
                uploadProtocol = "distinctio";
            }};            

            DirectoryVerificationCodesListResponse res = sdk.verificationCodes.directoryVerificationCodesList(req, new DirectoryVerificationCodesListSecurity("placeat", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.verificationCodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
