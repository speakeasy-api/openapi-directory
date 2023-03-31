<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PolyAssetsGetPathParams;
import org.openapis.openapi.models.operations.PolyAssetsGetQueryParams;
import org.openapis.openapi.models.operations.PolyAssetsGetRequest;
import org.openapis.openapi.models.operations.PolyAssetsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolyAssetsGetRequest req = new PolyAssetsGetRequest() {{
                pathParams = new PolyAssetsGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new PolyAssetsGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            PolyAssetsGetResponse res = sdk.assets.polyAssetsGet(req);

            if (res.asset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->