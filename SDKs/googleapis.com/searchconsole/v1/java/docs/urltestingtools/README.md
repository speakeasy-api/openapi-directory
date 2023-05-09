# urlTestingTools

### Available Operations

* [searchconsoleUrlTestingToolsMobileFriendlyTestRun](#searchconsoleurltestingtoolsmobilefriendlytestrun) - Runs Mobile-Friendly Test for a given URL.

## searchconsoleUrlTestingToolsMobileFriendlyTestRun

Runs Mobile-Friendly Test for a given URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest;
import org.openapis.openapi.models.operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RunMobileFriendlyTestRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest req = new SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                runMobileFriendlyTestRequest = new RunMobileFriendlyTestRequest() {{
                    requestScreenshot = false;
                    url = "blanditiis";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "deserunt";
                key = "nisi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "omnis";
                uploadProtocol = "molestiae";
            }};            

            SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse res = sdk.urlTestingTools.searchconsoleUrlTestingToolsMobileFriendlyTestRun(req);

            if (res.runMobileFriendlyTestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
