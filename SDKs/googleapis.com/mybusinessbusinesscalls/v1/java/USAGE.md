<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest;
import org.openapis.openapi.models.operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest req = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest() {{
                pathParams = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    filter = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    pageSize = 623564;
                    pageToken = "deserunt";
                    prettyPrint = false;
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse res = sdk.locations.mybusinessbusinesscallsLocationsBusinesscallsinsightsList(req);

            if (res.listBusinessCallsInsightsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->