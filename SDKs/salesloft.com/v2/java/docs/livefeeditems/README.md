# liveFeedItems

## Overview

Live Feed Items

### Available Operations

* [postV2ThirdPartyLiveFeedItems](#postv2thirdpartylivefeeditems) - Create a live feed item

## postV2ThirdPartyLiveFeedItems

Creates a live feed item that can be sent to users. May only be used by whitelisted Frontend Integrations. Reference the Salesloft App Directory and Frontend Integrations sections for additional details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2ThirdPartyLiveFeedItemsRequestBody;
import org.openapis.openapi.models.operations.PostV2ThirdPartyLiveFeedItemsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2ThirdPartyLiveFeedItemsRequestBody req = new PostV2ThirdPartyLiveFeedItemsRequestBody("ex", "deleniti", "itaque", 680270L, "architecto", "omnis");            

            PostV2ThirdPartyLiveFeedItemsResponse res = sdk.liveFeedItems.postV2ThirdPartyLiveFeedItems(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
