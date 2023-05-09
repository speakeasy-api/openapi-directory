# boxConsolidationController

### Available Operations

* [epConsolidate](#epconsolidate)
* [mainApp1](#mainapp1)

## epConsolidate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EpConsolidateRequest;
import org.openapis.openapi.models.operations.EpConsolidateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EpConsolidateRequest req = new EpConsolidateRequest("esse");            

            EpConsolidateResponse res = sdk.boxConsolidationController.epConsolidate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mainApp1

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MainApp1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MainApp1Response res = sdk.boxConsolidationController.mainApp1();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
