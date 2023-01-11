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
                    parent = "sit";
                }};
                queryParams = new PlaydeveloperreportingAnomaliesListQueryParams() {{
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

            PlaydeveloperreportingAnomaliesListResponse res = sdk.anomalies.playdeveloperreportingAnomaliesList(req);

            if (res.googlePlayDeveloperReportingV1beta1ListAnomaliesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->