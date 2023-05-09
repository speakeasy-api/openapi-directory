# labels

### Available Operations

* [getUsersIdLabels](#getusersidlabels) - List labels in user

## getUsersIdLabels

Lists labels belonging to a user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdLabelsRequest;
import org.openapis.openapi.models.operations.GetUsersIdLabelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdLabelsRequest req = new GetUsersIdLabelsRequest(468651L);            

            GetUsersIdLabelsResponse res = sdk.labels.getUsersIdLabels(req);

            if (res.getUsersIdLabels200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
