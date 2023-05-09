# roles

## Overview

Role Information

### Available Operations

* [getV2CustomRolesJson](#getv2customrolesjson) - List custom roles
* [getV2CustomRolesIdJson](#getv2customrolesidjson) - Fetch a custom role

## getV2CustomRolesJson

Fetches multiple custom role records. The records can be filtered, and sorted according to
the respective parameters. A custom role is any role that is not Admin or User.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CustomRolesJsonRequest;
import org.openapis.openapi.models.operations.GetV2CustomRolesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CustomRolesJsonRequest req = new GetV2CustomRolesJsonRequest() {{
                ids = new String[]{{
                    add("repellat"),
                    add("alias"),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 362189L;
                perPage = 597303L;
                sortBy = "nihil";
                sortDirection = "mollitia";
            }};            

            GetV2CustomRolesJsonResponse res = sdk.roles.getV2CustomRolesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CustomRolesIdJson

Fetches a custom role, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CustomRolesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CustomRolesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CustomRolesIdJsonRequest req = new GetV2CustomRolesIdJsonRequest("voluptas");            

            GetV2CustomRolesIdJsonResponse res = sdk.roles.getV2CustomRolesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
