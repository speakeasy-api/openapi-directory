# platform

### Available Operations

* [getPlatform](#getplatform) - Platform Detail
* [listPlatformRegions](#listplatformregions) - Platform Region Collection
* [listPlatforms](#listplatforms) - Platform Collection

## getPlatform

Return the content of the selected platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlatformRequest;
import org.openapis.openapi.models.operations.GetPlatformResponse;
import org.openapis.openapi.models.operations.GetPlatformSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlatformRequest req = new GetPlatformRequest("esse");            

            GetPlatformResponse res = sdk.platform.getPlatform(req, new GetPlatformSecurity("totam") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPlatform200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPlatformRegions

Return a list of regions for a platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPlatformRegionsRequest;
import org.openapis.openapi.models.operations.ListPlatformRegionsResponse;
import org.openapis.openapi.models.operations.ListPlatformRegionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPlatformRegionsRequest req = new ListPlatformRegionsRequest("porro") {{
                aliases = false;
            }};            

            ListPlatformRegionsResponse res = sdk.platform.listPlatformRegions(req, new ListPlatformRegionsSecurity("dolorum") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listPlatformRegions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPlatforms

Return a list of available platforms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPlatformsRequest;
import org.openapis.openapi.models.operations.ListPlatformsResponse;
import org.openapis.openapi.models.operations.ListPlatformsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPlatformsRequest req = new ListPlatformsRequest() {{
                aliases = false;
            }};            

            ListPlatformsResponse res = sdk.platform.listPlatforms(req, new ListPlatformsSecurity("dicta") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listPlatforms200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
