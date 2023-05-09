# projectStatus

### Available Operations

* [getProjectStatus](#getprojectstatus) - List the project status
* [getProjectStatusOfClient](#getprojectstatusofclient) - List the project status of client

## getProjectStatus

List the project status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStatusRequest;
import org.openapis.openapi.models.operations.GetProjectStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectStatusRequest req = new GetProjectStatusRequest("ipsam");            

            GetProjectStatusResponse res = sdk.projectStatus.getProjectStatus(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectStatusOfClient

List the project status of client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStatusOfClientRequest;
import org.openapis.openapi.models.operations.GetProjectStatusOfClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectStatusOfClientRequest req = new GetProjectStatusOfClientRequest("voluptate", "autem");            

            GetProjectStatusOfClientResponse res = sdk.projectStatus.getProjectStatusOfClient(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
