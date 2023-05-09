# search

### Available Operations

* [getOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization

## getOrganizationClientsSearch

Return the client details in an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsSearchRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsSearchRequest req = new GetOrganizationClientsSearchRequest("eius", "doloribus") {{
                endingBefore = "consequuntur";
                perPage = 393452L;
                startingAfter = "iste";
            }};            

            GetOrganizationClientsSearchResponse res = sdk.search.getOrganizationClientsSearch(req);

            if (res.getOrganizationClientsSearch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
