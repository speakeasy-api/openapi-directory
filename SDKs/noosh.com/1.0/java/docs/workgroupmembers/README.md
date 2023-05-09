# workgroupMembers

### Available Operations

* [getWorkgroupMemberInfo](#getworkgroupmemberinfo) - Workgroup Member Info
* [getWorkgroupMemberList](#getworkgroupmemberlist) - List the workgroup members

## getWorkgroupMemberInfo

Workgroup Member Info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkgroupMemberInfoRequest;
import org.openapis.openapi.models.operations.GetWorkgroupMemberInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkgroupMemberInfoRequest req = new GetWorkgroupMemberInfoRequest("quod", "odio");            

            GetWorkgroupMemberInfoResponse res = sdk.workgroupMembers.getWorkgroupMemberInfo(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkgroupMemberList

List the workgroup members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkgroupMemberListRequest;
import org.openapis.openapi.models.operations.GetWorkgroupMemberListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkgroupMemberListRequest req = new GetWorkgroupMemberListRequest("similique");            

            GetWorkgroupMemberListResponse res = sdk.workgroupMembers.getWorkgroupMemberList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
