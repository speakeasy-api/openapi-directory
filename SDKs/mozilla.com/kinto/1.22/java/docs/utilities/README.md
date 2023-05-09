# utilities

### Available Operations

* [heartbeat](#heartbeat)
* [lbheartbeat](#lbheartbeat)
* [version](#version)
* [contribute](#contribute)
* [getOpenapiSpec](#getopenapispec)
* [serverInfo](#serverinfo)

## heartbeat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeartbeatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeartbeatResponse res = sdk.utilities.heartbeat();

            if (res.schemaNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lbheartbeat

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LbheartbeatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LbheartbeatResponse res = sdk.utilities.lbheartbeat();

            if (res.schemaNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## version

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionResponse res = sdk.utilities.version();

            if (res.schemaNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contribute

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContributeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContributeResponse res = sdk.utilities.contribute();

            if (res.schemaNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOpenapiSpec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOpenapiSpecResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOpenapiSpecResponse res = sdk.utilities.getOpenapiSpec();

            if (res.schemaNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serverInfo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServerInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServerInfoResponse res = sdk.utilities.serverInfo();

            if (res.schemaNode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
