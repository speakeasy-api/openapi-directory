# user

### Available Operations

* [userGet](#userget) - Get all Users detail
This will return all properties related to User entity
            
* [userRegisterUser](#userregisteruser) - Register a new User
            
* [userUpdateUser](#userupdateuser) - Update an exsisting User
            

## userGet

Get all Users detail
This will return all properties related to User entity
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UserGetResponse res = sdk.user.userGet();

            if (res.userDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userRegisterUser

Register a new User
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserRegisterUserRequest;
import org.openapis.openapi.models.operations.UserRegisterUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UserRegisterUserRequest req = new UserRegisterUserRequest() {{
                accountNumber = "dolorum";
                externalEntityNumber = "deleniti";
                guardian = 864282;
                gymNumber = "provident";
                introduceBy = 750844;
                name = "Toby Hahn";
                number = "dolorem";
                typeId = 209843;
                userId = 222443;
            }};            

            UserRegisterUserResponse res = sdk.user.userRegisterUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userUpdateUser

Update an exsisting User
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserUpdateUserRequest;
import org.openapis.openapi.models.operations.UserUpdateUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UserUpdateUserRequest req = new UserUpdateUserRequest() {{
                accountNumber = "ipsum";
                externalEntityNumber = "hic";
                guardian = 569574;
                gymNumber = "cum";
                introduceBy = 452109;
                name = "Johanna Farrell";
                number = "veritatis";
                typeId = 58029;
                userId = 56418;
            }};            

            UserUpdateUserResponse res = sdk.user.userUpdateUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
