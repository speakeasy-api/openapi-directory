# virtualBillingMeterActive

### Available Operations

* [virtualBillingMeterActiveGet](#virtualbillingmeteractiveget) - Beta: Gets all active virtual meters
* [virtualBillingMeterActivePostForm](#virtualbillingmeteractivepostform) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [virtualBillingMeterActivePostJson](#virtualbillingmeteractivepostjson) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
* [virtualBillingMeterActivePostRaw](#virtualbillingmeteractivepostraw) - Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

## virtualBillingMeterActiveGet

Beta: Gets all active virtual meters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterActiveGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualBillingMeterActiveGetResponse res = sdk.virtualBillingMeterActive.virtualBillingMeterActiveGet();

            if (res.devices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## virtualBillingMeterActivePostForm

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterActivePostFormResponse;
import org.openapis.openapi.models.shared.VMeterToActivate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VMeterToActivate req = new VMeterToActivate() {{
                serialNumber = "veniam";
            }};            

            VirtualBillingMeterActivePostFormResponse res = sdk.virtualBillingMeterActive.virtualBillingMeterActivePostForm(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## virtualBillingMeterActivePostJson

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterActivePostJsonResponse;
import org.openapis.openapi.models.shared.VMeterToActivate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VMeterToActivate req = new VMeterToActivate() {{
                serialNumber = "minima";
            }};            

            VirtualBillingMeterActivePostJsonResponse res = sdk.virtualBillingMeterActive.virtualBillingMeterActivePostJson(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## virtualBillingMeterActivePostRaw

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterActivePostRawResponse;
import org.openapis.openapi.models.shared.VMeterToActivate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "recusandae".getBytes()            

            VirtualBillingMeterActivePostRawResponse res = sdk.virtualBillingMeterActive.virtualBillingMeterActivePostRaw(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
