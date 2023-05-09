# mBus

### Available Operations

* [mBusPostForm](#mbuspostform) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [mBusPostJson](#mbuspostjson) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
* [mBusPostRaw](#mbuspostraw) - M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

## mBusPostForm

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MBusPostFormResponse;
import org.openapis.openapi.models.shared.MBusData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.MBusData req = new MBusData() {{
                date = OffsetDateTime.parse("2022-11-12T00:45:12.094Z");
                telegram = "vel";
            }};            

            MBusPostFormResponse res = sdk.mBus.mBusPostForm(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mBusPostJson

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MBusPostJsonResponse;
import org.openapis.openapi.models.shared.MBusData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.MBusData req = new MBusData() {{
                date = OffsetDateTime.parse("2022-02-08T20:43:00.221Z");
                telegram = "ratione";
            }};            

            MBusPostJsonResponse res = sdk.mBus.mBusPostJson(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mBusPostRaw

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MBusPostRawResponse;
import org.openapis.openapi.models.shared.MBusData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "ex".getBytes()            

            MBusPostRawResponse res = sdk.mBus.mBusPostRaw(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
