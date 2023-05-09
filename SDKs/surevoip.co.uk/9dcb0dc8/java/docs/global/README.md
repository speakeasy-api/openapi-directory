# global

### Available Operations

* [get](#get) - List global resources

## get

List global resources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentTypeEnum;
import org.openapis.openapi.models.operations.GetHypermediaEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dicta", "nam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRequest req = new GetRequest() {{
                contentType = GetContentTypeEnum.TEXT_XML;
                hypermedia = GetHypermediaEnum.NO;
            }};            

            GetResponse res = sdk.global.get(req);

            if (res.get200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
