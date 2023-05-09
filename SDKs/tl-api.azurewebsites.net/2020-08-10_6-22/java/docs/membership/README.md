# membership

### Available Operations

* [membershipGet](#membershipget) - Get all of the members details
This will return all properties related to member entity
            
* [membershipPost](#membershippost) - Add new Member
            

## membershipGet

Get all of the members details
This will return all properties related to member entity
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipGetResponse;
import org.openapis.openapi.models.operations.MembershipGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MembershipGetResponse res = sdk.membership.membershipGet(new MembershipGetSecurity("sint") {{
                bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.memberDTOS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## membershipPost

Add new Member
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MembershipPostResponse;
import org.openapis.openapi.models.shared.MemberDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.MemberDTO req = new MemberDTO() {{
                name = "Raquel Wilderman";
            }};            

            MembershipPostResponse res = sdk.membership.membershipPost(req);

            if (res.membershipPost200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
