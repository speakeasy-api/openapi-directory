# maliciousUrlScanner

### Available Operations

* [maliciousUrlScanner](#maliciousurlscanner) - Malicious URL Scanner

## maliciousUrlScanner

Malicious URL Scanner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MaliciousUrlScannerRequest;
import org.openapis.openapi.models.operations.MaliciousUrlScannerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MaliciousUrlScannerRequest req = new MaliciousUrlScannerRequest("https%3A%2F%2Fgoogle.com", "asd24#sdfs322#");            

            MaliciousUrlScannerResponse res = sdk.maliciousUrlScanner.maliciousUrlScanner(req);

            if (res.maliciousUrlScanner200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
