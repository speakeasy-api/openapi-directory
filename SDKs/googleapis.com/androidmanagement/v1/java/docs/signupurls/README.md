# signupUrls

### Available Operations

* [androidmanagementSignupUrlsCreate](#androidmanagementsignupurlscreate) - Creates an enterprise signup URL.

## androidmanagementSignupUrlsCreate

Creates an enterprise signup URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidmanagementSignupUrlsCreateRequest;
import org.openapis.openapi.models.operations.AndroidmanagementSignupUrlsCreateResponse;
import org.openapis.openapi.models.operations.AndroidmanagementSignupUrlsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidmanagementSignupUrlsCreateRequest req = new AndroidmanagementSignupUrlsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "ad";
                callbackUrl = "saepe";
                fields = "suscipit";
                key = "deserunt";
                oauthToken = "provident";
                prettyPrint = false;
                projectId = "minima";
                quotaUser = "repellendus";
                uploadType = "totam";
                uploadProtocol = "similique";
            }};            

            AndroidmanagementSignupUrlsCreateResponse res = sdk.signupUrls.androidmanagementSignupUrlsCreate(req, new AndroidmanagementSignupUrlsCreateSecurity("alias", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.signupUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
