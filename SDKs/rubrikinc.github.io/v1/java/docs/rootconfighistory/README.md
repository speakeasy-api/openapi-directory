# rootConfigHistory

## Overview

Configuration update history.

### Available Operations

* [queryConfigurationHistoryUpdates](#queryconfigurationhistoryupdates) - View a list of filtered configuration updates
* [retrieveConfigurationValues](#retrieveconfigurationvalues) - View a list of configurations and their values on a given date

## queryConfigurationHistoryUpdates

View a list of cluster configuration options that have updated within a specified time window.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryConfigurationHistoryUpdatesRequest;
import org.openapis.openapi.models.operations.QueryConfigurationHistoryUpdatesResponse;
import org.openapis.openapi.models.operations.QueryConfigurationHistoryUpdatesSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eaque", "a") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryConfigurationHistoryUpdatesRequest req = new QueryConfigurationHistoryUpdatesRequest() {{
                afterTime = OffsetDateTime.parse("2022-12-21T19:37:25.645Z");
                apiUser = "aut";
                beforeTime = OffsetDateTime.parse("2021-06-17T11:25:30.782Z");
                limit = 304582;
                name = "Eloise Block MD";
                namespace = "laborum";
                nodeId = "placeat";
                offset = 245367;
                source = QueryConfigurationHistoryUpdatesSourceEnum.UPGRADE;
            }};            

            QueryConfigurationHistoryUpdatesResponse res = sdk.rootConfigHistory.queryConfigurationHistoryUpdates(req);

            if (res.configurationUpdateSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveConfigurationValues

View a list of configurations and their values on a given date.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveConfigurationValuesRequest;
import org.openapis.openapi.models.operations.RetrieveConfigurationValuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("autem", "nobis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RetrieveConfigurationValuesRequest req = new RetrieveConfigurationValuesRequest("quas", OffsetDateTime.parse("2020-06-02T16:42:54.630Z")) {{
                limit = 379034;
                name = "Ryan Glover";
                nodeId = "provident";
                offset = 55374;
            }};            

            RetrieveConfigurationValuesResponse res = sdk.rootConfigHistory.retrieveConfigurationValues(req);

            if (res.configurationSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
