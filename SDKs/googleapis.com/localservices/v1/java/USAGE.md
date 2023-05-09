<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchRequest;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchResponse;
import org.openapis.openapi.models.operations.LocalservicesAccountReportsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocalservicesAccountReportsSearchRequest req = new LocalservicesAccountReportsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                endDateDay = 602763L;
                endDateMonth = 857946L;
                endDateYear = 544883L;
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                pageSize = 645894L;
                pageToken = "suscipit";
                prettyPrint = false;
                query = "iure";
                quotaUser = "magnam";
                startDateDay = 891773L;
                startDateMonth = 56713L;
                startDateYear = 963663L;
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            LocalservicesAccountReportsSearchResponse res = sdk.accountReports.localservicesAccountReportsSearch(req, new LocalservicesAccountReportsSearchSecurity("molestiae", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->