<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetOutputEnum;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSamplingLevelEnum;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGaGetRequest req = new AnalyticsDataGaGetRequest() {{
                alt = "json";
                dimensions = "corrupti";
                endDate = "provident";
                fields = "distinctio";
                filters = "quibusdam";
                ids = "unde";
                includeEmptyRows = false;
                key = "nulla";
                maxResults = 544883;
                metrics = "illum";
                oauthToken = "vel";
                output = "json";
                prettyPrint = false;
                quotaUser = "deserunt";
                samplingLevel = "FASTER";
                segment = "iure";
                sort = "magnam";
                startDate = "debitis";
                startIndex = 56713;
                userIp = "delectus";
            }}            

            AnalyticsDataGaGetResponse res = sdk.data.analyticsDataGaGet(req, new AnalyticsDataGaGetSecurity() {{
                option1 = new AnalyticsDataGaGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.gaData.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->