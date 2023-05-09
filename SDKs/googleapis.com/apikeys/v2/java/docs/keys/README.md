# keys

### Available Operations

* [apikeysKeysLookupKey](#apikeyskeyslookupkey) - Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

## apikeysKeysLookupKey

Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyRequest;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyResponse;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurity;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption1;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysKeysLookupKeyRequest req = new ApikeysKeysLookupKeyRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "tempora";
                key = "suscipit";
                keyString = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            ApikeysKeysLookupKeyResponse res = sdk.keys.apikeysKeysLookupKey(req, new ApikeysKeysLookupKeySecurity() {{
                option1 = new ApikeysKeysLookupKeySecurityOption1("excepturi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.v2LookupKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
