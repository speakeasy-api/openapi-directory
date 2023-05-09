# countryNameStandardization

### Available Operations

* [getcountrystandard](#getcountrystandard) - Gets country name standard

## getcountrystandard

Gets a pre-selected country name standard for various permutations of a given country name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcountrystandardRequest;
import org.openapis.openapi.models.operations.GetcountrystandardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcountrystandardRequest req = new GetcountrystandardRequest("distinctio", "quibusdam");            

            GetcountrystandardResponse res = sdk.countryNameStandardization.getcountrystandard(req);

            if (res.getcountrystandard200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
