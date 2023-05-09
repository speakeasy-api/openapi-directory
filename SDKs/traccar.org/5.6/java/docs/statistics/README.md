# statistics

## Overview

Retrieving server statistics

### Available Operations

* [getStatistics](#getstatistics) - Fetch server Statistics

## getStatistics

Fetch server Statistics

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatisticsRequest;
import org.openapis.openapi.models.operations.GetStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod", "odio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetStatisticsRequest req = new GetStatisticsRequest(OffsetDateTime.parse("2021-08-01T18:14:10.863Z"), OffsetDateTime.parse("2021-07-04T12:52:28.765Z"));            

            GetStatisticsResponse res = sdk.statistics.getStatistics(req);

            if (res.statistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
