# bypassActivationLockAttempts

### Available Operations

* [createNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [getNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status

## createNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSmBypassActivationLockAttemptRequest;
import org.openapis.openapi.models.operations.CreateNetworkSmBypassActivationLockAttemptRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSmBypassActivationLockAttemptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSmBypassActivationLockAttemptRequest req = new CreateNetworkSmBypassActivationLockAttemptRequest(                new CreateNetworkSmBypassActivationLockAttemptRequestBody(                new String[]{{
                                                add("dicta"),
                                                add("magnam"),
                                                add("doloremque"),
                                            }});, "cum");            

            CreateNetworkSmBypassActivationLockAttemptResponse res = sdk.bypassActivationLockAttempts.createNetworkSmBypassActivationLockAttempt(req);

            if (res.createNetworkSmBypassActivationLockAttempt201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSmBypassActivationLockAttemptRequest;
import org.openapis.openapi.models.operations.GetNetworkSmBypassActivationLockAttemptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSmBypassActivationLockAttemptRequest req = new GetNetworkSmBypassActivationLockAttemptRequest("eius", "maiores");            

            GetNetworkSmBypassActivationLockAttemptResponse res = sdk.bypassActivationLockAttempts.getNetworkSmBypassActivationLockAttempt(req);

            if (res.getNetworkSmBypassActivationLockAttempt200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
