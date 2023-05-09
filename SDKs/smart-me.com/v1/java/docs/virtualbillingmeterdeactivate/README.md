# virtualBillingMeterDeactivate

### Available Operations

* [virtualBillingMeterDeactivatePostForm](#virtualbillingmeterdeactivatepostform) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [virtualBillingMeterDeactivatePostJson](#virtualbillingmeterdeactivatepostjson) - Beta: Virtual Meter API: Deactivates a Virtual Meter.
* [virtualBillingMeterDeactivatePostRaw](#virtualbillingmeterdeactivatepostraw) - Beta: Virtual Meter API: Deactivates a Virtual Meter.

## virtualBillingMeterDeactivatePostForm

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterDeactivatePostFormResponse;
import org.openapis.openapi.models.shared.VMeterToDeactivate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VMeterToDeactivate req = new VMeterToDeactivate() {{
                id = "fd20e457-e185-48b6-a89f-be3a5aa8e482";
            }};            

            VirtualBillingMeterDeactivatePostFormResponse res = sdk.virtualBillingMeterDeactivate.virtualBillingMeterDeactivatePostForm(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## virtualBillingMeterDeactivatePostJson

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterDeactivatePostJsonResponse;
import org.openapis.openapi.models.shared.VMeterToDeactivate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.VMeterToDeactivate req = new VMeterToDeactivate() {{
                id = "4d0ab407-5088-4e51-8620-65e904f3b119";
            }};            

            VirtualBillingMeterDeactivatePostJsonResponse res = sdk.virtualBillingMeterDeactivate.virtualBillingMeterDeactivatePostJson(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## virtualBillingMeterDeactivatePostRaw

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualBillingMeterDeactivatePostRawResponse;
import org.openapis.openapi.models.shared.VMeterToDeactivate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "labore".getBytes()            

            VirtualBillingMeterDeactivatePostRawResponse res = sdk.virtualBillingMeterDeactivate.virtualBillingMeterDeactivatePostRaw(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
