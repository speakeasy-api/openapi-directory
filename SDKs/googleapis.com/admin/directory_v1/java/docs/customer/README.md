# customer

### Available Operations

* [adminCustomerDevicesChromeosCommandsGet](#admincustomerdeviceschromeoscommandsget) - Gets command data a specific command issued to the device.
* [adminCustomerDevicesChromeosIssueCommand](#admincustomerdeviceschromeosissuecommand) - Issues a command for the device to execute.

## adminCustomerDevicesChromeosCommandsGet

Gets command data a specific command issued to the device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosCommandsGetRequest;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosCommandsGetResponse;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosCommandsGetSecurity;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosCommandsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosCommandsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomerDevicesChromeosCommandsGetRequest req = new AdminCustomerDevicesChromeosCommandsGetRequest("fugit", "fuga", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "nisi";
                key = "fugit";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "ratione";
                uploadProtocol = "explicabo";
            }};            

            AdminCustomerDevicesChromeosCommandsGetResponse res = sdk.customer.adminCustomerDevicesChromeosCommandsGet(req, new AdminCustomerDevicesChromeosCommandsGetSecurity() {{
                option1 = new AdminCustomerDevicesChromeosCommandsGetSecurityOption1("saepe", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.directoryChromeosdevicesCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adminCustomerDevicesChromeosIssueCommand

Issues a command for the device to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosIssueCommandRequest;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosIssueCommandResponse;
import org.openapis.openapi.models.operations.AdminCustomerDevicesChromeosIssueCommandSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DirectoryChromeosdevicesIssueCommandRequest;
import org.openapis.openapi.models.shared.DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminCustomerDevicesChromeosIssueCommandRequest req = new AdminCustomerDevicesChromeosIssueCommandRequest("atque", "et") {{
                dollarXgafv = XgafvEnum.ONE;
                directoryChromeosdevicesIssueCommandRequest = new DirectoryChromeosdevicesIssueCommandRequest() {{
                    commandType = DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum.CAPTURE_LOGS;
                    payload = "accusamus";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "nam";
                key = "vero";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "saepe";
                uploadProtocol = "vel";
            }};            

            AdminCustomerDevicesChromeosIssueCommandResponse res = sdk.customer.adminCustomerDevicesChromeosIssueCommand(req, new AdminCustomerDevicesChromeosIssueCommandSecurity("harum", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directoryChromeosdevicesIssueCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
