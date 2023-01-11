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

            MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest req = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest() {{
                pathParams = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams() {{
                    parent = "numquam";
                }};
                queryParams = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "magnam";
                    alt = "json";
                    callback = "aspernatur";
                    fields = "alias";
                    filter = "beatae";
                    key = "eveniet";
                    oauthToken = "ab";
                    pageSize = 6524872019109703649;
                    pageToken = "deleniti";
                    prettyPrint = false;
                    quotaUser = "nam";
                    uploadType = "sunt";
                    uploadProtocol = "aut";
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