# stats

## Overview

Stats on Near Earth Object data sets

### Available Operations

* [retrieveCurrentNeoStatistics](#retrievecurrentneostatistics) - Get the Near Earth Object data set totals

## retrieveCurrentNeoStatistics

retrieveCurrentNeoStatistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCurrentNeoStatisticsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCurrentNeoStatisticsResponse res = sdk.stats.retrieveCurrentNeoStatistics();

            if (res.statistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
