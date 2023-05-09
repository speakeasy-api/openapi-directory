# devices

### Available Operations

* [createDeviceCode](#createdevicecode) - CreateDeviceCode
* [getDeviceCode](#getdevicecode) - GetDeviceCode
* [listDeviceCodes](#listdevicecodes) - ListDeviceCodes

## createDeviceCode

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
terminal mode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceCodeResponse;
import org.openapis.openapi.models.operations.CreateDeviceCodeSecurity;
import org.openapis.openapi.models.shared.CreateDeviceCodeRequest;
import org.openapis.openapi.models.shared.DeviceCode;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateDeviceCodeRequest req = new CreateDeviceCodeRequest(                new DeviceCode("asperiores") {{
                                code = "doloremque";
                                createdAt = "id";
                                deviceId = "veniam";
                                id = "6cebcada-29ca-4791-81c9-5671663c530b";
                                locationId = "minima";
                                name = "Ms. Alma Harber";
                                pairBy = "culpa";
                                pairedAt = "non";
                                status = "suscipit";
                                statusChangedAt = "amet";
                            }};, "deleniti");            

            CreateDeviceCodeResponse res = sdk.devices.createDeviceCode(req, new CreateDeviceCodeSecurity("exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createDeviceCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceCode

Retrieves DeviceCode with the associated ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCodeRequest;
import org.openapis.openapi.models.operations.GetDeviceCodeResponse;
import org.openapis.openapi.models.operations.GetDeviceCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceCodeRequest req = new GetDeviceCodeRequest("illo");            

            GetDeviceCodeResponse res = sdk.devices.getDeviceCode(req, new GetDeviceCodeSecurity("fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getDeviceCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceCodes

Lists all DeviceCodes associated with the merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceCodesRequest;
import org.openapis.openapi.models.operations.ListDeviceCodesResponse;
import org.openapis.openapi.models.operations.ListDeviceCodesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeviceCodesRequest req = new ListDeviceCodesRequest() {{
                cursor = "id";
                locationId = "tempore";
                productType = "fugit";
                status = "nostrum";
            }};            

            ListDeviceCodesResponse res = sdk.devices.listDeviceCodes(req, new ListDeviceCodesSecurity("magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDeviceCodesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
