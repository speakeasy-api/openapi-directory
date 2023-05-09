# cityDataStandardization

### Available Operations

* [getcitystandard](#getcitystandard) - Gets a city name standard for US and international cities

## getcitystandard

Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcitystandardRequest;
import org.openapis.openapi.models.operations.GetcitystandardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcitystandardRequest req = new GetcitystandardRequest("distinctio", "quibusdam");            

            GetcitystandardResponse res = sdk.cityDataStandardization.getcitystandard(req);

            if (res.getcitystandard200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
