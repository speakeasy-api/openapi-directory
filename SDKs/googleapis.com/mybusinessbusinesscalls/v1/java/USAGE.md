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
                    parent = "sit";
                }};
                queryParams = new MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    filter = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    pageSize = 1543572285742637646;
                    pageToken = "nihil";
                    prettyPrint = true;
                    quotaUser = "dicta";
                    uploadType = "debitis";
                    uploadProtocol = "voluptatum";
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