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
                    parent = "aut";
                }};
                queryParams = new PlaydeveloperreportingAnomaliesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "repellat";
                    alt = "proto";
                    callback = "consectetur";
                    fields = "est";
                    filter = "pariatur";
                    key = "sed";
                    oauthToken = "non";
                    pageSize = 941072917466028862;
                    pageToken = "et";
                    prettyPrint = true;
                    quotaUser = "corrupti";
                    uploadType = "est";
                    uploadProtocol = "in";
                }};
            }};

            PlaydeveloperreportingAnomaliesListResponse res = sdk.anomalies.playdeveloperreportingAnomaliesList(req);

            if (res.googlePlayDeveloperReportingV1beta1ListAnomaliesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->