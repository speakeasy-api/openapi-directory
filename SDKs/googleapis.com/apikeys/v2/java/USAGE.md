<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption1;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurityOption2;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeySecurity;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyQueryParams;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyRequest;
import org.openapis.openapi.models.operations.ApikeysKeysLookupKeyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApikeysKeysLookupKeyRequest req = new ApikeysKeysLookupKeyRequest() {{
                security = new ApikeysKeysLookupKeySecurity() {{
                    option1 = new ApikeysKeysLookupKeySecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new ApikeysKeysLookupKeyQueryParams() {{
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
                }};
            }};            

            ApikeysKeysLookupKeyResponse res = sdk.keys.apikeysKeysLookupKey(req);

            if (res.v2LookupKeyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->