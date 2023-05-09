# rootSession

## Overview

User session management.

### Available Operations

* [createSession](#createsession) - Create user session
* [deleteSession](#deletesession) - Delete user session

## createSession

Open a user session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSessionRequest;
import org.openapis.openapi.models.operations.CreateSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("blanditiis", "nihil") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateSessionRequest req = new CreateSessionRequest() {{
                organizationId = "atque";
                realm = "rerum";
            }};            

            CreateSessionResponse res = sdk.rootSession.createSession(req);

            if (res.sessionSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSession

Close a user session and invalidate the session token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSessionRequest;
import org.openapis.openapi.models.operations.DeleteSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deserunt", "atque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteSessionRequest req = new DeleteSessionRequest("nostrum");            

            DeleteSessionResponse res = sdk.rootSession.deleteSession(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
