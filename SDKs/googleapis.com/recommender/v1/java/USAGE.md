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
                    parent = "non";
                }};
                queryParams = new RecommenderProjectsLocationsInsightTypesInsightsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "rem";
                    alt = "json";
                    callback = "et";
                    fields = "adipisci";
                    filter = "velit";
                    key = "minima";
                    oauthToken = "voluptatem";
                    pageSize = 2716786617242449872;
                    pageToken = "ipsum";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "quo";
                    uploadProtocol = "fugit";
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