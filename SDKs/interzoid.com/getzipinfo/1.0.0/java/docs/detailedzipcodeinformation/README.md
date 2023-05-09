# detailedZipCodeInformation

### Available Operations

* [getzipcodeinfo](#getzipcodeinfo) - Gets detailed zip code information

## getzipcodeinfo

For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetzipcodeinfoRequest;
import org.openapis.openapi.models.operations.GetzipcodeinfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetzipcodeinfoRequest req = new GetzipcodeinfoRequest("distinctio", "quibusdam");            

            GetzipcodeinfoResponse res = sdk.detailedZipCodeInformation.getzipcodeinfo(req);

            if (res.getzipcodeinfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
