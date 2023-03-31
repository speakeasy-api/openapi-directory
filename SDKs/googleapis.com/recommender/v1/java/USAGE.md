<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListPathParams;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListQueryParams;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsInsightTypesInsightsListRequest req = new RecommenderProjectsLocationsInsightTypesInsightsListRequest() {{
                security = new RecommenderProjectsLocationsInsightTypesInsightsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RecommenderProjectsLocationsInsightTypesInsightsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new RecommenderProjectsLocationsInsightTypesInsightsListQueryParams() {{
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

            RecommenderProjectsLocationsInsightTypesInsightsListResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsList(req);

            if (res.googleCloudRecommenderV1ListInsightsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->