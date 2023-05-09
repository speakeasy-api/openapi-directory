# serviceNow

### Available Operations

* [snowExportAssetsCSV](#snowexportassetscsv) - Export an asset inventory as CSV for ServiceNow integration
* [snowExportAssetsJSON](#snowexportassetsjson) - Exports the asset inventory as JSON
* [snowExportServicesCSV](#snowexportservicescsv) - Export a service inventory as CSV for ServiceNow integration

## snowExportAssetsCSV

Export an asset inventory as CSV for ServiceNow integration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SnowExportAssetsCSVResponse;
import org.openapis.openapi.models.operations.SnowExportAssetsCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SnowExportAssetsCSVResponse res = sdk.serviceNow.snowExportAssetsCSV(new SnowExportAssetsCSVSecurity("autem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.snowExportAssetsCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## snowExportAssetsJSON

Exports the asset inventory as JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SnowExportAssetsJSONResponse;
import org.openapis.openapi.models.operations.SnowExportAssetsJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SnowExportAssetsJSONResponse res = sdk.serviceNow.snowExportAssetsJSON(new SnowExportAssetsJSONSecurity("ipsam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.assetServiceNows != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## snowExportServicesCSV

Export a service inventory as CSV for ServiceNow integration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SnowExportServicesCSVResponse;
import org.openapis.openapi.models.operations.SnowExportServicesCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SnowExportServicesCSVResponse res = sdk.serviceNow.snowExportServicesCSV(new SnowExportServicesCSVSecurity("rerum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.snowExportServicesCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
