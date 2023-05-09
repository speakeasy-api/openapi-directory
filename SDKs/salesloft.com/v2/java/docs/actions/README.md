# actions

## Overview

Actions

### Available Operations

* [getV2ActionsJson](#getv2actionsjson) - List actions
* [getV2ActionsIdJson](#getv2actionsidjson) - Fetch an action

## getV2ActionsJson

Fetches multiple action records. The records can be filtered, paged, and sorted according to
the respective parameters. Only actions that are currently "in_progess" will be returned by
this endpoint.

If the requester is not an admin, this endpoint will only return actions belonging to the requester.
If the request is an admin, this endpoint will return actions for the entire team. Additionaly, an admin
may use the user_guid parameter to request actions that belong to specific users on the team.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActionsJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActionsJsonRequest req = new GetV2ActionsJsonRequest() {{
                cadenceId = new Long[]{{
                    add(18521L),
                }};
                dueOn = new String[]{{
                    add("minus"),
                }};
                ids = new Long[]{{
                    add(223924L),
                    add(874573L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                multitouchGroupId = new Long[]{{
                    add(944120L),
                    add(928082L),
                }};
                page = 608253L;
                perPage = 704415L;
                personId = new Long[]{{
                    add(31838L),
                    add(783645L),
                    add(164694L),
                }};
                sortBy = "blanditiis";
                sortDirection = "error";
                stepId = 50370L;
                type = "occaecati";
                updatedAt = new String[]{{
                    add("adipisci"),
                    add("asperiores"),
                    add("earum"),
                }};
                userGuid = new String[]{{
                    add("iste"),
                    add("dolorum"),
                }};
            }};            

            GetV2ActionsJsonResponse res = sdk.actions.getV2ActionsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2ActionsIdJson

Fetches an action, by ID only.
This endpoint will only return actions that are in_progress or pending_activity.
Once an action is complete, the request for that action will return a 404 status code.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActionsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActionsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActionsIdJsonRequest req = new GetV2ActionsIdJsonRequest("deleniti");            

            GetV2ActionsIdJsonResponse res = sdk.actions.getV2ActionsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
