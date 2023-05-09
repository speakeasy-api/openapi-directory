# detailedLeadReports

### Available Operations

* [localservicesDetailedLeadReportsSearch](#localservicesdetailedleadreportssearch) - Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

## localservicesDetailedLeadReportsSearch

Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocalservicesDetailedLeadReportsSearchRequest;
import org.openapis.openapi.models.operations.LocalservicesDetailedLeadReportsSearchResponse;
import org.openapis.openapi.models.operations.LocalservicesDetailedLeadReportsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LocalservicesDetailedLeadReportsSearchRequest req = new LocalservicesDetailedLeadReportsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                endDateDay = 780529L;
                endDateMonth = 678880L;
                endDateYear = 118274L;
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                pageSize = 143353L;
                pageToken = "deleniti";
                prettyPrint = false;
                query = "hic";
                quotaUser = "optio";
                startDateDay = 521848L;
                startDateMonth = 105907L;
                startDateYear = 414662L;
                uploadType = "molestiae";
                uploadProtocol = "modi";
            }};            

            LocalservicesDetailedLeadReportsSearchResponse res = sdk.detailedLeadReports.localservicesDetailedLeadReportsSearch(req, new LocalservicesDetailedLeadReportsSearchSecurity("qui", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
