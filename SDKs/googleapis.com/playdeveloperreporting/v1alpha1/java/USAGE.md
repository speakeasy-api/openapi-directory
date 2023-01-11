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

            PlaydeveloperreportingAnomaliesListRequest req = new PlaydeveloperreportingAnomaliesListRequest() {{
                pathParams = new PlaydeveloperreportingAnomaliesListPathParams() {{
                    parent = "dolorem";
                }};
                queryParams = new PlaydeveloperreportingAnomaliesListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "exercitationem";
                    alt = "json";
                    callback = "enim";
                    fields = "quaerat";
                    filter = "atque";
                    key = "ab";
                    oauthToken = "architecto";
                    pageSize = 8074191434310262846;
                    pageToken = "quas";
                    prettyPrint = false;
                    quotaUser = "eum";
                    uploadType = "ratione";
                    uploadProtocol = "officiis";
                }};
            }};

            PlaydeveloperreportingAnomaliesListResponse res = sdk.anomalies.playdeveloperreportingAnomaliesList(req);

            if (res.googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->