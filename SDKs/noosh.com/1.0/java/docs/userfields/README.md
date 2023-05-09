# userFields

### Available Operations

* [getProjectHomeUserFieldListOfClient](#getprojecthomeuserfieldlistofclient) - List projec home user fields of client workgroup
* [getProjectHomeUserFieldsList](#getprojecthomeuserfieldslist) - List projec home user fields

## getProjectHomeUserFieldListOfClient

List projec home user fields of client workgroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectHomeUserFieldListOfClientRequest;
import org.openapis.openapi.models.operations.GetProjectHomeUserFieldListOfClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectHomeUserFieldListOfClientRequest req = new GetProjectHomeUserFieldListOfClientRequest("doloribus", "ut");            

            GetProjectHomeUserFieldListOfClientResponse res = sdk.userFields.getProjectHomeUserFieldListOfClient(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectHomeUserFieldsList

List projec home user fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectHomeUserFieldsListRequest;
import org.openapis.openapi.models.operations.GetProjectHomeUserFieldsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProjectHomeUserFieldsListRequest req = new GetProjectHomeUserFieldsListRequest("facilis");            

            GetProjectHomeUserFieldsListResponse res = sdk.userFields.getProjectHomeUserFieldsList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
