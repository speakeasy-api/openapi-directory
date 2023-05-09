# keysApi

### Available Operations

* [keysApiCurrent](#keysapicurrent)
* [keysApiCustom](#keysapicustom)
* [keysApiExpiry](#keysapiexpiry)
* [keysApiFind](#keysapifind)

## keysApiCurrent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeysApiCurrentRequest;
import org.openapis.openapi.models.operations.KeysApiCurrentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeysApiCurrentRequest req = new KeysApiCurrentRequest("provident");            

            KeysApiCurrentResponse res = sdk.keysApi.keysApiCurrent(req);

            if (res.keysApiCurrent200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keysApiCustom

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeysApiCustomRequest;
import org.openapis.openapi.models.operations.KeysApiCustomResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeysApiCustomRequest req = new KeysApiCustomRequest("distinctio");            

            KeysApiCustomResponse res = sdk.keysApi.keysApiCustom(req);

            if (res.keysApiCustom200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keysApiExpiry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeysApiExpiryRequest;
import org.openapis.openapi.models.operations.KeysApiExpiryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeysApiExpiryRequest req = new KeysApiExpiryRequest("quibusdam");            

            KeysApiExpiryResponse res = sdk.keysApi.keysApiExpiry(req);

            if (res.keysApiExpiry200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## keysApiFind

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeysApiFindRequest;
import org.openapis.openapi.models.operations.KeysApiFindResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeysApiFindRequest req = new KeysApiFindRequest("unde");            

            KeysApiFindResponse res = sdk.keysApi.keysApiFind(req);

            if (res.keysApiFind200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
