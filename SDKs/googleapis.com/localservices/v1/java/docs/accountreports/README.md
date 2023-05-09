# accountReports

### Available Operations

* [localservicesAccountReportsSearch](#localservicesaccountreportssearch) - Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

## localservicesAccountReportsSearch

Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### Example Usage

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
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                endDateDay = 392785L;
                endDateMonth = 925597L;
                endDateYear = 836079L;
                fields = "ab";
                key = "quis";
                oauthToken = "veritatis";
                pageSize = 648172L;
                pageToken = "perferendis";
                prettyPrint = false;
                query = "ipsam";
                quotaUser = "repellendus";
                startDateDay = 957156L;
                startDateMonth = 778157L;
                startDateYear = 140350L;
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            LocalservicesAccountReportsSearchResponse res = sdk.accountReports.localservicesAccountReportsSearch(req, new LocalservicesAccountReportsSearchSecurity("maiores", "molestiae") {{
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
