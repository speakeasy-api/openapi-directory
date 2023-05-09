# urlInspection

### Available Operations

* [searchconsoleUrlInspectionIndexInspect](#searchconsoleurlinspectionindexinspect) - Index inspection.

## searchconsoleUrlInspectionIndexInspect

Index inspection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchconsoleUrlInspectionIndexInspectRequest;
import org.openapis.openapi.models.operations.SearchconsoleUrlInspectionIndexInspectResponse;
import org.openapis.openapi.models.operations.SearchconsoleUrlInspectionIndexInspectSecurity;
import org.openapis.openapi.models.operations.SearchconsoleUrlInspectionIndexInspectSecurityOption1;
import org.openapis.openapi.models.operations.SearchconsoleUrlInspectionIndexInspectSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InspectUrlIndexRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchconsoleUrlInspectionIndexInspectRequest req = new SearchconsoleUrlInspectionIndexInspectRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                inspectUrlIndexRequest = new InspectUrlIndexRequest() {{
                    inspectionUrl = "cumque";
                    languageCode = "facere";
                    siteUrl = "ea";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "non";
                key = "occaecati";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "delectus";
                uploadProtocol = "quidem";
            }};            

            SearchconsoleUrlInspectionIndexInspectResponse res = sdk.urlInspection.searchconsoleUrlInspectionIndexInspect(req, new SearchconsoleUrlInspectionIndexInspectSecurity() {{
                option1 = new SearchconsoleUrlInspectionIndexInspectSecurityOption1("provident", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.inspectUrlIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
