# workspaces

### Available Operations

* [deleteWorkspace](#deleteworkspace) - Delete workspace
* [getWorkspace](#getworkspace) - Get workspace

## deleteWorkspace

Deletes the workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteWorkspaceRequest req = new DeleteWorkspaceRequest("totam");            

            DeleteWorkspaceResponse res = sdk.workspaces.deleteWorkspace(req);

            if (res.deleteWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkspace

Returns workspace information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkspaceRequest;
import org.openapis.openapi.models.operations.GetWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetWorkspaceRequest req = new GetWorkspaceRequest("dolorum");            

            GetWorkspaceResponse res = sdk.workspaces.getWorkspace(req);

            if (res.getWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
