# groups

## Overview

Group Management

### Available Operations

* [getV2GroupsJson](#getv2groupsjson) - List groups
* [getV2GroupsIdJson](#getv2groupsidjson) - Fetch a group

## getV2GroupsJson

Fetches multiple group records. The records can be filtered, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2GroupsJsonRequest;
import org.openapis.openapi.models.operations.GetV2GroupsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2GroupsJsonRequest req = new GetV2GroupsJsonRequest() {{
                ids = new Long[]{{
                    add(97468L),
                    add(951875L),
                }};
                sortBy = "error";
                sortDirection = "sint";
            }};            

            GetV2GroupsJsonResponse res = sdk.groups.getV2GroupsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2GroupsIdJson

Fetches a group, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2GroupsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2GroupsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2GroupsIdJsonRequest req = new GetV2GroupsIdJsonRequest("pariatur");            

            GetV2GroupsIdJsonResponse res = sdk.groups.getV2GroupsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
