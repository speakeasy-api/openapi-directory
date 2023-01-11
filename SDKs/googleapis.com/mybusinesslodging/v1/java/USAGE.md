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
                    name = "a";
                }};
                queryParams = new MybusinesslodgingLocationsGetLodgingQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "hic";
                    alt = "media";
                    callback = "minima";
                    fields = "officia";
                    key = "in";
                    oauthToken = "sequi";
                    prettyPrint = true;
                    quotaUser = "ipsa";
                    readMask = "iste";
                    uploadType = "omnis";
                    uploadProtocol = "debitis";
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