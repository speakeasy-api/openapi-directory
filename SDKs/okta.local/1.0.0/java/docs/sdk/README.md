# SDK

## Overview

The [Okta User API](/docs/api/rest/users.html) provides operations to manage users in your organization.

### Available Operations

* [clearUserSessions](#clearusersessions) - Clear User Sessions
* [findUser](#finduser) - Find User
* [getAssignedAppLinks](#getassignedapplinks) - Get Assigned App Links
* [getCurrentUser](#getcurrentuser) - Get Current User
* [getGroupsForUser](#getgroupsforuser) - Get Groups for User
* [getUser](#getuser) - Get User
* [resetFactors](#resetfactors) - Reset Factors

## clearUserSessions

Clear User Sessions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearUserSessionsRequest;
import org.openapis.openapi.models.operations.ClearUserSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearUserSessionsRequest req = new ClearUserSessionsRequest("distinctio") {{
                requestBody = "quibusdam".getBytes();
            }};            

            ClearUserSessionsResponse res = sdk.sdk.clearUserSessions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findUser

Find User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindUserRequest;
import org.openapis.openapi.models.operations.FindUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindUserRequest req = new FindUserRequest() {{
                requestBody = "unde".getBytes();
                q = "user";
            }};            

            FindUserResponse res = sdk.sdk.findUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssignedAppLinks

Get Assigned App Links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssignedAppLinksRequest;
import org.openapis.openapi.models.operations.GetAssignedAppLinksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssignedAppLinksRequest req = new GetAssignedAppLinksRequest("nulla") {{
                requestBody = "corrupti".getBytes();
            }};            

            GetAssignedAppLinksResponse res = sdk.sdk.getAssignedAppLinks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCurrentUser

Get Current User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrentUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "illum".getBytes()            

            GetCurrentUserResponse res = sdk.sdk.getCurrentUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupsForUser

Get Groups for User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsForUserRequest;
import org.openapis.openapi.models.operations.GetGroupsForUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsForUserRequest req = new GetGroupsForUserRequest("vel") {{
                requestBody = "error".getBytes();
            }};            

            GetGroupsForUserResponse res = sdk.sdk.getGroupsForUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Get User

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequest req = new GetUserRequest("deserunt") {{
                requestBody = "suscipit".getBytes();
            }};            

            GetUserResponse res = sdk.sdk.getUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetFactors

Reset Factors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetFactorsRequest;
import org.openapis.openapi.models.operations.ResetFactorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetFactorsRequest req = new ResetFactorsRequest("iure") {{
                requestBody = "magnam".getBytes();
            }};            

            ResetFactorsResponse res = sdk.sdk.resetFactors(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
