# browsers

### Available Operations

* [dfareportingBrowsersList](#dfareportingbrowserslist) - Retrieves a list of browsers.

## dfareportingBrowsersList

Retrieves a list of browsers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBrowsersListRequest;
import org.openapis.openapi.models.operations.DfareportingBrowsersListResponse;
import org.openapis.openapi.models.operations.DfareportingBrowsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBrowsersListRequest req = new DfareportingBrowsersListRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "quo";
                key = "molestiae";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "impedit";
                uploadProtocol = "cupiditate";
            }};            

            DfareportingBrowsersListResponse res = sdk.browsers.dfareportingBrowsersList(req, new DfareportingBrowsersListSecurity("deleniti", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.browsersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
