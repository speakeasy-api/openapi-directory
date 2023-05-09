# reports

### Available Operations

* [doubleclickbidmanagerReportsListreports](#doubleclickbidmanagerreportslistreports) - Retrieves stored reports.

## doubleclickbidmanagerReportsListreports

Retrieves stored reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerReportsListreportsRequest;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerReportsListreportsResponse;
import org.openapis.openapi.models.operations.DoubleclickbidmanagerReportsListreportsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclickbidmanagerReportsListreportsRequest req = new DoubleclickbidmanagerReportsListreportsRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "cupiditate";
                key = "aperiam";
                oauthToken = "delectus";
                pageSize = 209157L;
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "adipisci";
                uploadProtocol = "dolorum";
            }};            

            DoubleclickbidmanagerReportsListreportsResponse res = sdk.reports.doubleclickbidmanagerReportsListreports(req, new DoubleclickbidmanagerReportsListreportsSecurity("architecto", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
