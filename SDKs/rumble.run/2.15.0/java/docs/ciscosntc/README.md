# ciscoSNTC

### Available Operations

* [exportAssetsCiscoCSV](#exportassetsciscocsv) - Cisco serial number and model name export for Cisco Smart Net Total Care Service.

## exportAssetsCiscoCSV

Cisco serial number and model name export for Cisco Smart Net Total Care Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetsCiscoCSVRequest;
import org.openapis.openapi.models.operations.ExportAssetsCiscoCSVResponse;
import org.openapis.openapi.models.operations.ExportAssetsCiscoCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetsCiscoCSVRequest req = new ExportAssetsCiscoCSVRequest() {{
                search = "aut";
            }};            

            ExportAssetsCiscoCSVResponse res = sdk.ciscoSNTC.exportAssetsCiscoCSV(req, new ExportAssetsCiscoCSVSecurity("laudantium") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetsCiscoCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
