# liveWebsiteTrackingParameters

## Overview

Live Website Tracking Parameters

### Available Operations

* [postV2LiveWebsiteTrackingParametersJson](#postv2livewebsitetrackingparametersjson) - Create an Live Website Tracking Parameter

## postV2LiveWebsiteTrackingParametersJson

Creates a Live Website Tracking parameter to identify a person


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2LiveWebsiteTrackingParametersJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2LiveWebsiteTrackingParametersJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2LiveWebsiteTrackingParametersJsonRequestBody req = new PostV2LiveWebsiteTrackingParametersJsonRequestBody(945302L);            

            PostV2LiveWebsiteTrackingParametersJsonResponse res = sdk.liveWebsiteTrackingParameters.postV2LiveWebsiteTrackingParametersJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
