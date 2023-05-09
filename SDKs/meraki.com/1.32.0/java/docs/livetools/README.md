# liveTools

### Available Operations

* [blinkDeviceLeds](#blinkdeviceleds) - Blink the LEDs on a device
* [createDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [createDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [cycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [getDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job
* [getDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job
* [rebootDevice](#rebootdevice) - Reboot a device

## blinkDeviceLeds

Blink the LEDs on a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BlinkDeviceLedsRequest;
import org.openapis.openapi.models.operations.BlinkDeviceLedsRequestBody;
import org.openapis.openapi.models.operations.BlinkDeviceLedsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            BlinkDeviceLedsRequest req = new BlinkDeviceLedsRequest("quaerat") {{
                requestBody = new BlinkDeviceLedsRequestBody() {{
                    duration = 242481L;
                    duty = 917926L;
                    period = 944009L;
                }};;
            }};            

            BlinkDeviceLedsResponse res = sdk.liveTools.blinkDeviceLeds(req);

            if (res.blinkDeviceLeds202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingRequest;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceLiveToolsPingRequest req = new CreateDeviceLiveToolsPingRequest(                new CreateDeviceLiveToolsPingRequestBody("est") {{
                                count = 376669L;
                            }};, "explicabo");            

            CreateDeviceLiveToolsPingResponse res = sdk.liveTools.createDeviceLiveToolsPing(req);

            if (res.createDeviceLiveToolsPing201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceRequest;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceRequestBody;
import org.openapis.openapi.models.operations.CreateDeviceLiveToolsPingDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeviceLiveToolsPingDeviceRequest req = new CreateDeviceLiveToolsPingDeviceRequest("facilis") {{
                requestBody = new CreateDeviceLiveToolsPingDeviceRequestBody() {{
                    count = 438702L;
                }};;
            }};            

            CreateDeviceLiveToolsPingDeviceResponse res = sdk.liveTools.createDeviceLiveToolsPingDevice(req);

            if (res.createDeviceLiveToolsPingDevice201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cycleDeviceSwitchPorts

Cycle a set of switch ports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequest;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsRequestBody;
import org.openapis.openapi.models.operations.CycleDeviceSwitchPortsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CycleDeviceSwitchPortsRequest req = new CycleDeviceSwitchPortsRequest(                new CycleDeviceSwitchPortsRequestBody(                new String[]{{
                                                add("vitae"),
                                            }});, "perspiciatis");            

            CycleDeviceSwitchPortsResponse res = sdk.liveTools.cycleDeviceSwitchPorts(req);

            if (res.cycleDeviceSwitchPorts200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingRequest;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLiveToolsPingRequest req = new GetDeviceLiveToolsPingRequest("soluta", "veritatis");            

            GetDeviceLiveToolsPingResponse res = sdk.liveTools.getDeviceLiveToolsPing(req);

            if (res.getDeviceLiveToolsPing200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceLiveToolsPingDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceLiveToolsPingDeviceRequest req = new GetDeviceLiveToolsPingDeviceRequest("quaerat", "aspernatur");            

            GetDeviceLiveToolsPingDeviceResponse res = sdk.liveTools.getDeviceLiveToolsPingDevice(req);

            if (res.getDeviceLiveToolsPingDevice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootDevice

Reboot a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootDeviceRequest;
import org.openapis.openapi.models.operations.RebootDeviceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootDeviceRequest req = new RebootDeviceRequest("dicta");            

            RebootDeviceResponse res = sdk.liveTools.rebootDevice(req);

            if (res.rebootDevice202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
