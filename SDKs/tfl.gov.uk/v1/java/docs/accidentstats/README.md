# accidentStats

### Available Operations

* [accidentStatsGet](#accidentstatsget) - Gets all accident details for accidents occuring in the specified year

## accidentStatsGet

Gets all accident details for accidents occuring in the specified year

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccidentStatsGetRequest;
import org.openapis.openapi.models.operations.AccidentStatsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccidentStatsGetRequest req = new AccidentStatsGetRequest(592845);            

            AccidentStatsGetResponse res = sdk.accidentStats.accidentStatsGet(req);

            if (res.tflApiPresentationEntitiesAccidentStatsAccidentDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
