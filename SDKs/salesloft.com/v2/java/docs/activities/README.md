# activities

## Overview

Activities

### Available Operations

* [postV2ActivitiesJson](#postv2activitiesjson) - Create an activity

## postV2ActivitiesJson

Creates an activity. An activity will mark the associated action as completed. Currently,
only certain action types can have an activity explicitly created for them.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2ActivitiesJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2ActivitiesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2ActivitiesJsonRequestBody req = new PostV2ActivitiesJsonRequestBody() {{
                actionId = 864282L;
                taskId = 589910L;
            }};            

            PostV2ActivitiesJsonResponse res = sdk.activities.postV2ActivitiesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
