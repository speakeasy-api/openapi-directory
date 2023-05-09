# logs

### Available Operations

* [getOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent

## getOrganizationWebhooksLogs

Return the log of webhook POSTs sent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksLogsRequest;
import org.openapis.openapi.models.operations.GetOrganizationWebhooksLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationWebhooksLogsRequest req = new GetOrganizationWebhooksLogsRequest("atque") {{
                endingBefore = "labore";
                perPage = 569477L;
                startingAfter = "sunt";
                t0 = "quo";
                t1 = "dolore";
                timespan = 6955.15;
                url = "quaerat";
            }};            

            GetOrganizationWebhooksLogsResponse res = sdk.logs.getOrganizationWebhooksLogs(req);

            if (res.getOrganizationWebhooksLogs200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
