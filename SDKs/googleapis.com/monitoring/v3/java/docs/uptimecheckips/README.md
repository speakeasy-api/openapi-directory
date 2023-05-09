# uptimeCheckIps

### Available Operations

* [monitoringUptimeCheckIpsList](#monitoringuptimecheckipslist) - Returns the list of IP addresses that checkers run from

## monitoringUptimeCheckIpsList

Returns the list of IP addresses that checkers run from

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MonitoringUptimeCheckIpsListRequest;
import org.openapis.openapi.models.operations.MonitoringUptimeCheckIpsListResponse;
import org.openapis.openapi.models.operations.MonitoringUptimeCheckIpsListSecurity;
import org.openapis.openapi.models.operations.MonitoringUptimeCheckIpsListSecurityOption1;
import org.openapis.openapi.models.operations.MonitoringUptimeCheckIpsListSecurityOption2;
import org.openapis.openapi.models.operations.MonitoringUptimeCheckIpsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MonitoringUptimeCheckIpsListRequest req = new MonitoringUptimeCheckIpsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "illo";
                fields = "aut";
                key = "doloribus";
                oauthToken = "nostrum";
                pageSize = 869848L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "pariatur";
                uploadProtocol = "vel";
            }};            

            MonitoringUptimeCheckIpsListResponse res = sdk.uptimeCheckIps.monitoringUptimeCheckIpsList(req, new MonitoringUptimeCheckIpsListSecurity() {{
                option1 = new MonitoringUptimeCheckIpsListSecurityOption1("sapiente", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listUptimeCheckIpsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
