<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetOutputEnum;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetResponse;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSamplingLevelEnum;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGaGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGaGetRequest req = new AnalyticsDataGaGetRequest("corrupti", "provident", "distinctio", "quibusdam") {{
                alt = AltEnum.JSON;
                dimensions = "unde";
                fields = "nulla";
                filters = "corrupti";
                includeEmptyRows = false;
                key = "illum";
                maxResults = 423655L;
                oauthToken = "error";
                output = AnalyticsDataGaGetOutputEnum.JSON;
                prettyPrint = false;
                quotaUser = "suscipit";
                samplingLevel = AnalyticsDataGaGetSamplingLevelEnum.FASTER;
                segment = "magnam";
                sort = "debitis";
                startIndex = 56713L;
                userIp = "delectus";
            }};            

            AnalyticsDataGaGetResponse res = sdk.data.analyticsDataGaGet(req, new AnalyticsDataGaGetSecurity() {{
                option1 = new AnalyticsDataGaGetSecurityOption1("tempora", "suscipit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.gaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->