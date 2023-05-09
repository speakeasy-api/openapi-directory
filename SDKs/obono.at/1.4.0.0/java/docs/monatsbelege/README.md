# monatsbelege

### Available Operations

* [getMonatsbelege](#getmonatsbelege) - Returns a list of `Monatsbelege`.

## getMonatsbelege

Returns a list of `Monatsbelege`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonatsbelegeRequest;
import org.openapis.openapi.models.operations.GetMonatsbelegeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMonatsbelegeRequest req = new GetMonatsbelegeRequest("pariatur") {{
                month = 265389L;
                year = 508969L;
            }};            

            GetMonatsbelegeResponse res = sdk.monatsbelege.getMonatsbelege(req);

            if (res.monatsbelegs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
