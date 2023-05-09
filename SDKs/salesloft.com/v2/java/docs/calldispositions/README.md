# callDispositions

## Overview

Call Dispositions

### Available Operations

* [getV2CallDispositionsJson](#getv2calldispositionsjson) - List call dispositions

## getV2CallDispositionsJson

Fetches multiple call disposition records. The records can be sorted according to
the respective parameters. Call dispositions must be configured in application. This will
change in the future, but please contact us if you have a pressing use case.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CallDispositionsJsonRequest;
import org.openapis.openapi.models.operations.GetV2CallDispositionsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CallDispositionsJsonRequest req = new GetV2CallDispositionsJsonRequest() {{
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 780427L;
                perPage = 981830L;
                sortBy = "doloribus";
                sortDirection = "iusto";
            }};            

            GetV2CallDispositionsJsonResponse res = sdk.callDispositions.getV2CallDispositionsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
