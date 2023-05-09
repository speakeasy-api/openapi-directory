# users

## Overview

The `users` resource contains the user accounts that can log into the Brain Management Console.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


### Available Operations

* [addUser](#adduser) - Create user
* [deleteUser](#deleteuser) - Delete user
* [getUserById](#getuserbyid) - Get user
* [getUsers](#getusers) - Get all users
* [updateUser](#updateuser) - Update existing user

## addUser

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddUserResponse;
import org.openapis.openapi.models.operations.AddUserSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UserInput req = new UserInput() {{
                email = "user@intellifi.nl";
                firstName = "Foo";
                isAdmin = false;
                isLocked = false;
                lastName = "Bar";
                password = "password1";
            }};            

            AddUserResponse res = sdk.users.addUser(req, new AddUserSecurity("necessitatibus") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserRequest req = new DeleteUserRequest("distinctio");            

            DeleteUserResponse res = sdk.users.deleteUser(req, new DeleteUserSecurity("asperiores") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserById

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserByIdRequest;
import org.openapis.openapi.models.operations.GetUserByIdResponse;
import org.openapis.openapi.models.operations.GetUserByIdSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserByIdRequest req = new GetUserByIdRequest("nihil");            

            GetUserByIdResponse res = sdk.users.getUserById(req, new GetUserByIdSecurity("ipsum") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.operations.GetUsersSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                after = OffsetDateTime.parse("2022-05-03T23:26:05.435Z");
                afterId = "saepe";
                before = "eius";
                beforeId = "aspernatur";
                email = "Daphne.Rosenbaum90@gmail.com";
                firstName = "Geraldine";
                from = "deserunt";
                fromId = "provident";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                isAdmin = false;
                isLocked = false;
                lastName = "Hane";
                limit = 831049L;
                populate = "totam";
                resultsOnly = false;
                select = "similique";
                sort = "alias";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 8726.51;
                until = "quaerat";
                untilId = "tempora";
            }};            

            GetUsersResponse res = sdk.users.getUsers(req, new GetUsersSecurity("vel") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.getUsers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

Can only be used by an **administrative** user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.operations.UpdateUserSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserRequest req = new UpdateUserRequest(                new UserInput() {{
                                email = "user@intellifi.nl";
                                firstName = "Foo";
                                isAdmin = false;
                                isLocked = false;
                                lastName = "Bar";
                                password = "password1";
                            }};, "quod");            

            UpdateUserResponse res = sdk.users.updateUser(req, new UpdateUserSecurity("officiis") {{
                cookieSid = "YOUR_API_KEY_HERE";
            }});

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
