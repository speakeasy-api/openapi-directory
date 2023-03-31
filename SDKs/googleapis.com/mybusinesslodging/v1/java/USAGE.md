<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingPathParams;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingQueryParams;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingRequest;
import org.openapis.openapi.models.operations.MybusinesslodgingLocationsGetLodgingResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinesslodgingLocationsGetLodgingRequest req = new MybusinesslodgingLocationsGetLodgingRequest() {{
                pathParams = new MybusinesslodgingLocationsGetLodgingPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new MybusinesslodgingLocationsGetLodgingQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    readMask = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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