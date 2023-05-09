# rootEventSeries

## Overview

Event Series.

### Available Operations

* [queryEventSeriesByIdV1](#queryeventseriesbyidv1) - Get all events and relevant information associated with an event series ID

## queryEventSeriesByIdV1

Gets all events, event series, SLA Domain, and object information that is associated with a specified event series ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryEventSeriesByIdV1Request;
import org.openapis.openapi.models.operations.QueryEventSeriesByIdV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("adipisci", "cumque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryEventSeriesByIdV1Request req = new QueryEventSeriesByIdV1Request("consequuntur");            

            QueryEventSeriesByIdV1Response res = sdk.rootEventSeries.queryEventSeriesByIdV1(req);

            if (res.eventSeriesSummaryV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
