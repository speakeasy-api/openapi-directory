# server

## Overview

Server information

### Available Operations

* [getServer](#getserver) - Fetch Server information
* [putServer](#putserver) - Update Server information

## getServer

Fetch Server information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "quae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetServerResponse res = sdk.server.getServer();

            if (res.server != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putServer

Update Server information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutServerResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Server;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut", "quas") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Server req = new Server() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("consequatur", "est");
                    put("repellendus", "porro");
                    put("doloribus", "ut");
                    put("facilis", "cupiditate");
                }};
                bingKey = "qui";
                coordinateFormat = "quae";
                deviceReadonly = false;
                forceSettings = false;
                id = 512393L;
                latitude = 4856.28;
                limitCommands = false;
                longitude = 5804.47;
                map = "voluptatibus";
                mapUrl = "quisquam";
                poiLayer = "vero";
                readonly = false;
                registration = false;
                twelveHourFormat = false;
                version = "omnis";
                zoom = 338159L;
            }};            

            PutServerResponse res = sdk.server.putServer(req);

            if (res.server != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
