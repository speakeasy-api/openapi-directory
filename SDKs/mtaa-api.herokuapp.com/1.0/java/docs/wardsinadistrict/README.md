# wardsInADistrict

### Available Operations

* [wardsInADistrict](#wardsinadistrict) - Returns all wards in a district

## wardsInADistrict

Returns all wards in a  specified district and district postcode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WardsInADistrictRequest;
import org.openapis.openapi.models.operations.WardsInADistrictResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WardsInADistrictRequest req = new WardsInADistrictRequest("error", "deserunt", "suscipit");            

            WardsInADistrictResponse res = sdk.wardsInADistrict.wardsInADistrict(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
