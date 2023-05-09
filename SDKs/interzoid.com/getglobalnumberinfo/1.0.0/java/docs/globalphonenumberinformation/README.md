# globalPhoneNumberInformation

### Available Operations

* [getglobalnumberinfo](#getglobalnumberinfo) - Get demographic information for a global telephone number

## getglobalnumberinfo

Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetglobalnumberinfoRequest;
import org.openapis.openapi.models.operations.GetglobalnumberinfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetglobalnumberinfoRequest req = new GetglobalnumberinfoRequest("distinctio", "quibusdam");            

            GetglobalnumberinfoResponse res = sdk.globalPhoneNumberInformation.getglobalnumberinfo(req);

            if (res.getglobalnumberinfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
