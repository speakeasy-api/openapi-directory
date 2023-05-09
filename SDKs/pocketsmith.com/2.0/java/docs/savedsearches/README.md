# savedSearches

### Available Operations

* [getUsersIdSavedSearches](#getusersidsavedsearches) - List saved searches in user

## getUsersIdSavedSearches

Lists saved searches belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdSavedSearchesRequest;
import org.openapis.openapi.models.operations.GetUsersIdSavedSearchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdSavedSearchesRequest req = new GetUsersIdSavedSearchesRequest(976762L);            

            GetUsersIdSavedSearchesResponse res = sdk.savedSearches.getUsersIdSavedSearches(req);

            if (res.savedSearches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
