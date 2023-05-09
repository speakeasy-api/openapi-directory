<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupResponse;
import org.openapis.openapi.models.operations.GetGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupRequest req = new GetGroupRequest("corrupti");            

            GetGroupResponse res = sdk.groups.getGroup(req, new GetGroupSecurity("provident") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->