# events

### Available Operations

* [getQueryJson](#getqueryjson) - Geographic API

## getQueryJson

Geographic API

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryJsonFacetsEnum;
import org.openapis.openapi.models.operations.GetQueryJsonRequest;
import org.openapis.openapi.models.operations.GetQueryJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryJsonRequest req = new GetQueryJsonRequest() {{
                dateRange = "suscipit";
                elevation = 477665L;
                facets = GetQueryJsonFacetsEnum.ONE;
                filter = "placeat";
                latitude = "voluptatum";
                limit = 479977L;
                longitude = "excepturi";
                name = "Mrs. Sophie Smith MD";
                offset = 20218L;
                query = "ipsam";
                sort = "repellendus";
                sw = "sapiente";
            }};            

            GetQueryJsonResponse res = sdk.events.getQueryJson(req);

            if (res.getQueryJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
