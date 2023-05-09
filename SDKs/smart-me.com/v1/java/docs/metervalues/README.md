# meterValues

### Available Operations

* [meterValuesGet](#metervaluesget) - Gets the Values for a Meter at a given Date. 
            The first Value found before the given Date is returned.

## meterValuesGet

Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeterValuesGetRequest;
import org.openapis.openapi.models.operations.MeterValuesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeterValuesGetRequest req = new MeterValuesGetRequest(OffsetDateTime.parse("2022-12-11T06:00:38.230Z"), "id");            

            MeterValuesGetResponse res = sdk.meterValues.meterValuesGet(req);

            if (res.deviceInPast != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
