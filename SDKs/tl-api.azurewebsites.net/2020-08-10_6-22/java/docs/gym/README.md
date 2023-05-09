# gym

### Available Operations

* [gymGet](#gymget) - Get gym details
This will return all properties related to gym entity
            

## gymGet

Get gym details
This will return all properties related to gym entity
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GymGetRequest;
import org.openapis.openapi.models.operations.GymGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GymGetRequest req = new GymGetRequest(896039);            

            GymGetResponse res = sdk.gym.gymGet(req);

            if (res.defaultResponseDTOOfGymDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
