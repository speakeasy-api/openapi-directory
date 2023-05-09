# rfq

### Available Operations

* [getRfq](#getrfq) - Get a specific Rfq
* [getRfqList](#getrfqlist) - List the rfqs

## getRfq

Get a specific Rfq

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRfqRequest;
import org.openapis.openapi.models.operations.GetRfqResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRfqRequest req = new GetRfqRequest("facilis", "perspiciatis", "voluptatem");            

            GetRfqResponse res = sdk.rfq.getRfq(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRfqList

List the rfqs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRfqListRequest;
import org.openapis.openapi.models.operations.GetRfqListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRfqListRequest req = new GetRfqListRequest("porro", "consequuntur");            

            GetRfqListResponse res = sdk.rfq.getRfqList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
