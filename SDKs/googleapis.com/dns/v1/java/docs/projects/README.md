# projects

### Available Operations

* [dnsProjectsGet](#dnsprojectsget) - Fetches the representation of an existing Project.

## dnsProjectsGet

Fetches the representation of an existing Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DnsProjectsGetRequest;
import org.openapis.openapi.models.operations.DnsProjectsGetResponse;
import org.openapis.openapi.models.operations.DnsProjectsGetSecurity;
import org.openapis.openapi.models.operations.DnsProjectsGetSecurityOption1;
import org.openapis.openapi.models.operations.DnsProjectsGetSecurityOption2;
import org.openapis.openapi.models.operations.DnsProjectsGetSecurityOption3;
import org.openapis.openapi.models.operations.DnsProjectsGetSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DnsProjectsGetRequest req = new DnsProjectsGetRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "dolor";
                clientOperationId = "nostrum";
                fields = "qui";
                key = "tenetur";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "ullam";
                uploadProtocol = "velit";
            }};            

            DnsProjectsGetResponse res = sdk.projects.dnsProjectsGet(req, new DnsProjectsGetSecurity() {{
                option1 = new DnsProjectsGetSecurityOption1("adipisci", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
