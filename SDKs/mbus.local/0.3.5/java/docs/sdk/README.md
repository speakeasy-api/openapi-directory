# SDK

### Available Operations

* [get](#get) - Gets data from the slave identified by {address}
* [getMulti](#getmulti) - Gets data from the slave identified by {address}, and supports multiple responses from the slave
* [hat](#hat) - Gets Raspberry Pi Hat information
* [hatOff](#hatoff) - Turns off power to the M-Bus
* [hatOn](#haton) - Turns on power to the M-Bus
* [mbusApi](#mbusapi) - Returns this API specification
* [scan](#scan) - Scan the specified device for slaves

## get

Gets data from the slave identified by {address}

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.BaudrateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("48", BaudrateEnum.TWO_THOUSAND_FOUR_HUNDRED, "ttyAMA0");            

            GetResponse res = sdk.sdk.get(req);

            if (res.mbusData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMulti

Gets data from the slave identified by {address}, and supports multiple responses from the slave

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMultiRequest;
import org.openapis.openapi.models.operations.GetMultiResponse;
import org.openapis.openapi.models.shared.BaudrateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMultiRequest req = new GetMultiRequest("48", BaudrateEnum.FOUR_THOUSAND_EIGHT_HUNDRED, "ttyAMA0", 16);            

            GetMultiResponse res = sdk.sdk.getMulti(req);

            if (res.mbusData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hat

Gets Raspberry Pi Hat information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HatResponse res = sdk.sdk.hat();

            if (res.hat != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hatOff

Turns off power to the M-Bus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HatOffResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HatOffResponse res = sdk.sdk.hatOff();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## hatOn

Turns on power to the M-Bus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HatOnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HatOnResponse res = sdk.sdk.hatOn();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mbusApi

Returns this API specification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MbusApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MbusApiResponse res = sdk.sdk.mbusApi();

            if (res.yaml != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scan

Scan the specified device for slaves

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScanRequest;
import org.openapis.openapi.models.operations.ScanResponse;
import org.openapis.openapi.models.shared.BaudrateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ScanRequest req = new ScanRequest(BaudrateEnum.NINE_THOUSAND_SIX_HUNDRED, "ttyAMA0");            

            ScanResponse res = sdk.sdk.scan(req);

            if (res.slaves != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
