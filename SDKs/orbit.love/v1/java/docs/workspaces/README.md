# workspaces

### Available Operations

* [getWorkspaces](#getworkspaces) - Get all workspaces for the current user
* [getWorkspacesWorkspaceSlug](#getworkspacesworkspaceslug) - Get a workspace

## getWorkspaces

Get all workspaces for the current user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesResponse;
import org.openapis.openapi.models.operations.GetWorkspacesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesResponse res = sdk.workspaces.getWorkspaces(new GetWorkspacesSecurity("excepturi") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspacesWorkspaceSlug

Get a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceSlugRequest;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceSlugResponse;
import org.openapis.openapi.models.operations.GetWorkspacesWorkspaceSlugSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkspacesWorkspaceSlugRequest req = new GetWorkspacesWorkspaceSlugRequest("cum") {{
                includeOrbitLevelCounts = false;
            }};            

            GetWorkspacesWorkspaceSlugResponse res = sdk.workspaces.getWorkspacesWorkspaceSlug(req, new GetWorkspacesWorkspaceSlugSecurity("voluptate") {{
                bearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
