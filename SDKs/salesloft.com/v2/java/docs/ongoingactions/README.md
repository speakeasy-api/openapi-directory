# ongoingActions

## Overview

Ongoing Actions

### Available Operations

* [postV2OngoingActionsJson](#postv2ongoingactionsjson) - Create an ongoing action

## postV2OngoingActionsJson

Creates an ongoing action. An ongoing action is an action that is not yet completed,
but progress has been made towards the completion. The user should not need to do
anything for an ongoing action to be completed. An ongoing action can be later completed
by creating an activity.

Ongoing actions are marked as status=pending_activity.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2OngoingActionsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2OngoingActionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2OngoingActionsJsonRequestBody req = new PostV2OngoingActionsJsonRequestBody() {{
                actionId = 937285L;
            }};            

            PostV2OngoingActionsJsonResponse res = sdk.ongoingActions.postV2OngoingActionsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
