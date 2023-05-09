# click

## Overview

**Operations:** Get List

### Available Operations

* [getClicks](#getclicks) - Get clicks

## getClicks

Retrieve the raw click data for your account. Clicks are retrieved by creation date in descending order. 

 If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClicksRequest;
import org.openapis.openapi.models.operations.GetClicksResponse;
import org.openapis.openapi.models.operations.GetClicksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClicksRequest req = new GetClicksRequest() {{
                continueFrom = "in";
                limit = 100226L;
            }};            

            GetClicksResponse res = sdk.click.getClicks(req, new GetClicksSecurity("architecto") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getClicksModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
