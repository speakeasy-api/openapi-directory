# actions

## Overview

Actions show the results and progress of asynchronous requests to the API.

### Available Operations

* [getActions](#getactions) - Get all Actions
* [getActionsId](#getactionsid) - Get an Action

## getActions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionsRequest;
import org.openapis.openapi.models.operations.GetActionsResponse;
import org.openapis.openapi.models.operations.GetActionsSortParameterSortEnum;
import org.openapis.openapi.models.operations.GetActionsStatusParameterStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActionsRequest req = new GetActionsRequest() {{
                id = 844266L;
                sort = GetActionsSortParameterSortEnum.PROGRESS_ASC;
                status = GetActionsStatusParameterStatusEnum.ERROR;
            }};            

            GetActionsResponse res = sdk.actions.getActions(req);

            if (res.actionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getActionsId

Returns a specific Action object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionsIdRequest;
import org.openapis.openapi.models.operations.GetActionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActionsIdRequest req = new GetActionsIdRequest(544883L);            

            GetActionsIdResponse res = sdk.actions.getActionsId(req);

            if (res.actionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
