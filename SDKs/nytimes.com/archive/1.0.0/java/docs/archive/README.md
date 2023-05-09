# archive

### Available Operations

* [getYearMonthJson](#getyearmonthjson) - Archive API

## getYearMonthJson

The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetYearMonthJsonRequest;
import org.openapis.openapi.models.operations.GetYearMonthJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetYearMonthJsonRequest req = new GetYearMonthJsonRequest(602763, 857946);            

            GetYearMonthJsonResponse res = sdk.archive.getYearMonthJson(req);

            if (res.getYearMonthJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
