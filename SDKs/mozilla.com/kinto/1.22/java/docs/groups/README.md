# groups

### Available Operations

* [getGroup](#getgroup)
* [getGroups](#getgroups)

## getGroup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupRequest;
import org.openapis.openapi.models.operations.GetGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupRequest req = new GetGroupRequest("occaecati", "enim") {{
                ifMatch = "accusamus";
                ifNoneMatch = "delectus";
                fields = new String[]{{
                    add("provident"),
                    add("nam"),
                    add("id"),
                }};
            }};            

            GetGroupResponse res = sdk.groups.getGroup(req);

            if (res.objectSchema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsRequest;
import org.openapis.openapi.models.operations.GetGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupsRequest req = new GetGroupsRequest("blanditiis") {{
                ifMatch = "deleniti";
                ifNoneMatch = "sapiente";
                before = 230533L;
                fields = new String[]{{
                    add("nisi"),
                    add("vel"),
                    add("natus"),
                }};
                limit = 606393L;
                since = 474867L;
                sort = new String[]{{
                    add("nihil"),
                }};
                to = 301575L;
                token = "distinctio";
                id = "a4469b6e-2141-4959-890a-fa563e2516fe";
                lastModified = 260341L;
            }};            

            GetGroupsResponse res = sdk.groups.getGroups(req);

            if (res.schema != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
