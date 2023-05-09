# outlets

### Available Operations

* [outletsGetAllOutlets](#outletsgetalloutlets) - List all ticket outlets
* [outletsGetOutletsByGeolocation](#outletsgetoutletsbygeolocation) - List ticket outlets near a specific location

## outletsGetAllOutlets

List all ticket outlets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OutletsGetAllOutletsRequest;
import org.openapis.openapi.models.operations.OutletsGetAllOutletsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OutletsGetAllOutletsRequest req = new OutletsGetAllOutletsRequest() {{
                devid = "culpa";
                maxResults = 988374;
                signature = "sapiente";
                token = "architecto";
            }};            

            OutletsGetAllOutletsResponse res = sdk.outlets.outletsGetAllOutlets(req);

            if (res.v3OutletResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## outletsGetOutletsByGeolocation

List ticket outlets near a specific location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OutletsGetOutletsByGeolocationRequest;
import org.openapis.openapi.models.operations.OutletsGetOutletsByGeolocationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OutletsGetOutletsByGeolocationRequest req = new OutletsGetOutletsByGeolocationRequest(6527.9, 2088.76) {{
                devid = "culpa";
                maxDistance = 1613.09;
                maxResults = 995300;
                signature = "mollitia";
                token = "occaecati";
            }};            

            OutletsGetOutletsByGeolocationResponse res = sdk.outlets.outletsGetOutletsByGeolocation(req);

            if (res.v3OutletGeolocationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
