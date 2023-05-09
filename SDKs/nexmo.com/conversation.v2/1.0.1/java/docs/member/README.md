# member

## Overview

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

### Available Operations

* [getMembers](#getmembers) - List Members

## getMembers

List Members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMembersRequest;
import org.openapis.openapi.models.operations.GetMembersResponse;
import org.openapis.openapi.models.shared.OrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMembersRequest req = new GetMembersRequest("suscipit") {{
                cursor = "molestiae";
                order = OrderEnum.DESC;
                pageSize = 812169L;
            }};            

            GetMembersResponse res = sdk.member.getMembers(req);

            if (res.getMembers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
