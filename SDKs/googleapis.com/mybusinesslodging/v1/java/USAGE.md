<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            MybusinesslodgingLocationsGetLodgingRequest req = new MybusinesslodgingLocationsGetLodgingRequest() {{
                pathParams = new MybusinesslodgingLocationsGetLodgingPathParams() {{
                    name = "sit";
                }};
                queryParams = new MybusinesslodgingLocationsGetLodgingQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    readMask = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
            }};

            MybusinesslodgingLocationsGetLodgingResponse res = sdk.locations.mybusinesslodgingLocationsGetLodging(req);

            if (res.lodging.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->