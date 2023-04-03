<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption1;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption2;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurity;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyRequest;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysKeysLookupKeyRequest req = new ApikeysKeysLookupKeyRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                keyString = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }}            

            ApikeysKeysLookupKeyResponse res = sdk.keys.apikeysKeysLookupKey(req, new ApikeysKeysLookupKeySecurity() {{
                option1 = new ApikeysKeysLookupKeySecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.v2LookupKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->