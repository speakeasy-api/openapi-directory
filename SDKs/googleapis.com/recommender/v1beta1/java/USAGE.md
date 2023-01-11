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
                    parent = "dolorum";
                }};
                queryParams = new RecommenderProjectsLocationsInsightTypesInsightsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "optio";
                    alt = "proto";
                    callback = "doloribus";
                    fields = "voluptatem";
                    filter = "fuga";
                    key = "occaecati";
                    oauthToken = "dolores";
                    pageSize = 4471734478483745457;
                    pageToken = "voluptatibus";
                    prettyPrint = true;
                    quotaUser = "labore";
                    uploadType = "quo";
                    uploadProtocol = "voluptatum";
                }};
            }};

            RecommenderProjectsLocationsInsightTypesInsightsListResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsList(req);

            if (res.googleCloudRecommenderV1beta1ListInsightsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->