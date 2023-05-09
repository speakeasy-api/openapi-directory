# usersFindAndModifyUsers

### Available Operations

* [deleteUsersUserId](#deleteusersuserid) - Removes a single user
* [getUsers](#getusers) - Returns a paginated list of users
* [getUsersUserId](#getusersuserid) - Return a single user
* [patchUsersUserId](#patchusersuserid) - Updates user fields
* [postUsersUserId](#postusersuserid) - Updates a single user or adds the user if they don't exist

## deleteUsersUserId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersUserIdRequest;
import org.openapis.openapi.models.operations.DeleteUsersUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteUsersUserIdRequest req = new DeleteUsersUserIdRequest("harum");            

            DeleteUsersUserIdResponse res = sdk.usersFindAndModifyUsers.deleteUsersUserId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

- Results are paginated and the default is value is 100 if no limit is provided


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                limit = 788740L;
                pageNumber = 947371L;
                query = "amet";
                sort = "tempore";
            }};            

            GetUsersResponse res = sdk.usersFindAndModifyUsers.getUsers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersUserId

- Results are returned for the market provided within the basic authentication credentials


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersUserIdRequest;
import org.openapis.openapi.models.operations.GetUsersUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "numquam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetUsersUserIdRequest req = new GetUsersUserIdRequest("enim");            

            GetUsersUserIdResponse res = sdk.usersFindAndModifyUsers.getUsersUserId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUsersUserId

Updates user fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUsersUserIdRequest;
import org.openapis.openapi.models.operations.PatchUsersUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem", "sapiente") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PatchUsersUserIdRequest req = new PatchUsersUserIdRequest("totam") {{
                customData = "nihil";
                email = "Merlin42@gmail.com";
                name = "Glen Oberbrunner";
                type = "incidunt";
                username = "Chyna_McGlynn74";
            }};            

            PatchUsersUserIdResponse res = sdk.usersFindAndModifyUsers.patchUsersUserId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUserId

Updates a single user or adds the user if they don't exist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUserIdRequest;
import org.openapis.openapi.models.operations.PostUsersUserIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "laborum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostUsersUserIdRequest req = new PostUsersUserIdRequest("totam") {{
                customData = "incidunt";
                email = "Chandler.Raynor46@gmail.com";
                name = "Marty Deckow";
                type = "magni";
                username = "Jefferey_Cassin";
            }};            

            PostUsersUserIdResponse res = sdk.usersFindAndModifyUsers.postUsersUserId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
