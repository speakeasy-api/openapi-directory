<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SafebrowsingEncodedFullHashesGetPathParams;
import org.openapis.openapi.models.operations.SafebrowsingEncodedFullHashesGetQueryParams;
import org.openapis.openapi.models.operations.SafebrowsingEncodedFullHashesGetRequest;
import org.openapis.openapi.models.operations.SafebrowsingEncodedFullHashesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingEncodedFullHashesGetRequest req = new SafebrowsingEncodedFullHashesGetRequest() {{
                pathParams = new SafebrowsingEncodedFullHashesGetPathParams() {{
                    encodedRequest = "corrupti";
                }};
                queryParams = new SafebrowsingEncodedFullHashesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    clientId = "nulla";
                    clientVersion = "corrupti";
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            SafebrowsingEncodedFullHashesGetResponse res = sdk.encodedFullHashes.safebrowsingEncodedFullHashesGet(req);

            if (res.googleSecuritySafebrowsingV4FindFullHashesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->