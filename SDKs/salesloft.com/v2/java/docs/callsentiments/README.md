# callSentiments

## Overview

Call Sentiments

### Available Operations

* [getV2CallSentimentsJson](#getv2callsentimentsjson) - List call sentiments

## getV2CallSentimentsJson

Fetches multiple call sentiment records. The records can be sorted according to
the respective parameters. Call sentiments must be configured in application. This will
change in the future, but please contact us if you have a pressing use case.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CallSentimentsJsonRequest;
import org.openapis.openapi.models.operations.GetV2CallSentimentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CallSentimentsJsonRequest req = new GetV2CallSentimentsJsonRequest() {{
                includePagingCounts = false;
                limitPagingCounts = false;
                name = "Kurt Abernathy";
                page = 368584L;
                perPage = 410492L;
                sortBy = "aspernatur";
                sortDirection = "vel";
            }};            

            GetV2CallSentimentsJsonResponse res = sdk.callSentiments.getV2CallSentimentsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
