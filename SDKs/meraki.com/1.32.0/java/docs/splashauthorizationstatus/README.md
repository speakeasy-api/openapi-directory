# splashAuthorizationStatus

### Available Operations

* [getNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [updateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## getNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.GetNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientSplashAuthorizationStatusRequest req = new GetNetworkClientSplashAuthorizationStatusRequest("impedit", "consectetur");            

            GetNetworkClientSplashAuthorizationStatusResponse res = sdk.splashAuthorizationStatus.getNetworkClientSplashAuthorizationStatus(req);

            if (res.getNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequest;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids;
import org.openapis.openapi.models.operations.UpdateNetworkClientSplashAuthorizationStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkClientSplashAuthorizationStatusRequest req = new UpdateNetworkClientSplashAuthorizationStatusRequest(                new UpdateNetworkClientSplashAuthorizationStatusRequestBody(                new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids() {{
                                                zero = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0() {{
                                                    isAuthorized = false;
                                                }};;
                                                one = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1() {{
                                                    isAuthorized = false;
                                                }};;
                                                ten = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10() {{
                                                    isAuthorized = false;
                                                }};;
                                                eleven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11() {{
                                                    isAuthorized = false;
                                                }};;
                                                twelve = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12() {{
                                                    isAuthorized = false;
                                                }};;
                                                thirteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13() {{
                                                    isAuthorized = false;
                                                }};;
                                                fourteen = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14() {{
                                                    isAuthorized = false;
                                                }};;
                                                two = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2() {{
                                                    isAuthorized = false;
                                                }};;
                                                three = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3() {{
                                                    isAuthorized = false;
                                                }};;
                                                four = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4() {{
                                                    isAuthorized = false;
                                                }};;
                                                five = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5() {{
                                                    isAuthorized = false;
                                                }};;
                                                six = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6() {{
                                                    isAuthorized = false;
                                                }};;
                                                seven = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7() {{
                                                    isAuthorized = false;
                                                }};;
                                                eight = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8() {{
                                                    isAuthorized = false;
                                                }};;
                                                nine = new UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9() {{
                                                    isAuthorized = false;
                                                }};;
                                            }};);, "perferendis", "non");            

            UpdateNetworkClientSplashAuthorizationStatusResponse res = sdk.splashAuthorizationStatus.updateNetworkClientSplashAuthorizationStatus(req);

            if (res.updateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
