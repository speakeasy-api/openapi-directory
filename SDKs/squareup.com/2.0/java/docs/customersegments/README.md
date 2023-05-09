# customerSegments

### Available Operations

* [listCustomerSegments](#listcustomersegments) - ListCustomerSegments
* [retrieveCustomerSegment](#retrievecustomersegment) - RetrieveCustomerSegment

## listCustomerSegments

Retrieves the list of customer segments of a business.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerSegmentsRequest;
import org.openapis.openapi.models.operations.ListCustomerSegmentsResponse;
import org.openapis.openapi.models.operations.ListCustomerSegmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomerSegmentsRequest req = new ListCustomerSegmentsRequest() {{
                cursor = "dolores";
                limit = 106767L;
            }};            

            ListCustomerSegmentsResponse res = sdk.customerSegments.listCustomerSegments(req, new ListCustomerSegmentsSecurity("rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomerSegmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCustomerSegment

Retrieves a specific customer segment as identified by the `segment_id` value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCustomerSegmentRequest;
import org.openapis.openapi.models.operations.RetrieveCustomerSegmentResponse;
import org.openapis.openapi.models.operations.RetrieveCustomerSegmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCustomerSegmentRequest req = new RetrieveCustomerSegmentRequest("repellendus");            

            RetrieveCustomerSegmentResponse res = sdk.customerSegments.retrieveCustomerSegment(req, new RetrieveCustomerSegmentSecurity("ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveCustomerSegmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
