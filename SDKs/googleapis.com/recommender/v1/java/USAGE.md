<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse;
import org.openapis.openapi.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RecommenderProjectsLocationsInsightTypesInsightsListRequest req = new RecommenderProjectsLocationsInsightTypesInsightsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            RecommenderProjectsLocationsInsightTypesInsightsListResponse res = sdk.projects.recommenderProjectsLocationsInsightTypesInsightsList(req, new RecommenderProjectsLocationsInsightTypesInsightsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRecommenderV1ListInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->