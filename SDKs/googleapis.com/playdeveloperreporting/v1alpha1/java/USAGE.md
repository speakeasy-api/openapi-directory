<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PlaydeveloperreportingAnomaliesListSecurity;
import org.openapis.openapi.models.operations.PlaydeveloperreportingAnomaliesListPathParams;
import org.openapis.openapi.models.operations.PlaydeveloperreportingAnomaliesListQueryParams;
import org.openapis.openapi.models.operations.PlaydeveloperreportingAnomaliesListRequest;
import org.openapis.openapi.models.operations.PlaydeveloperreportingAnomaliesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaydeveloperreportingAnomaliesListRequest req = new PlaydeveloperreportingAnomaliesListRequest() {{
                security = new PlaydeveloperreportingAnomaliesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PlaydeveloperreportingAnomaliesListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new PlaydeveloperreportingAnomaliesListQueryParams() {{
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

            PlaydeveloperreportingAnomaliesListResponse res = sdk.anomalies.playdeveloperreportingAnomaliesList(req);

            if (res.googlePlayDeveloperReportingV1alpha1ListAnomaliesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->