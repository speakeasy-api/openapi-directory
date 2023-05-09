# reportTypes

### Available Operations

* [youtubereportingReportTypesList](#youtubereportingreporttypeslist) - Lists report types.

## youtubereportingReportTypesList

Lists report types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingReportTypesListRequest;
import org.openapis.openapi.models.operations.YoutubereportingReportTypesListResponse;
import org.openapis.openapi.models.operations.YoutubereportingReportTypesListSecurity;
import org.openapis.openapi.models.operations.YoutubereportingReportTypesListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingReportTypesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingReportTypesListRequest req = new YoutubereportingReportTypesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "alias";
                includeSystemManaged = false;
                key = "fugit";
                oauthToken = "dolorum";
                onBehalfOfContentOwner = "excepturi";
                pageSize = 270008L;
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "labore";
                uploadProtocol = "delectus";
            }};            

            YoutubereportingReportTypesListResponse res = sdk.reportTypes.youtubereportingReportTypesList(req, new YoutubereportingReportTypesListSecurity() {{
                option1 = new YoutubereportingReportTypesListSecurityOption1("eum", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listReportTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
