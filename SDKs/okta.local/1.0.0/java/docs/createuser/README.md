# createUser

### Available Operations

* [createUserInGroup](#createuseringroup) - Create User in Group

## createUserInGroup

Create User in Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserInGroupRequest;
import org.openapis.openapi.models.operations.CreateUserInGroupRequestBody;
import org.openapis.openapi.models.operations.CreateUserInGroupRequestBodyProfile;
import org.openapis.openapi.models.operations.CreateUserInGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUserInGroupRequest req = new CreateUserInGroupRequest() {{
                requestBody = new CreateUserInGroupRequestBody() {{
                    groupIds = new String[]{{
                        add("{{groupId}}"),
                        add("{{groupId}}"),
                        add("{{groupId}}"),
                        add("{{groupId}}"),
                    }};
                    profile = new CreateUserInGroupRequestBodyProfile() {{
                        email = "isaac@{{email-suffix}}";
                        firstName = "Isaac";
                        lastName = "Brock";
                        login = "isaac@{{email-suffix}}";
                    }};;
                }};;
                activate = "false";
            }};            

            CreateUserInGroupResponse res = sdk.createUser.createUserInGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
