# emailHistory

## Overview

Email history represents a single email that was sent using Fitbit Plus.

### Available Operations

* [fetchEmailHistories](#fetchemailhistories) - List email histories
* [fetchEmailHistory](#fetchemailhistory) - Get an email history

## fetchEmailHistories

Get a list of email histories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEmailHistoriesRequest;
import org.openapis.openapi.models.operations.FetchEmailHistoriesResponse;
import org.openapis.openapi.models.operations.FetchEmailHistoriesSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEmailHistoriesRequest req = new FetchEmailHistoriesRequest() {{
                filterEmailType = "aliquid";
                filterReceiver = "tenetur";
                filterSender = "quae";
                sort = FetchEmailHistoriesSortEnum.MINUS_SEND_TIME;
            }};            

            FetchEmailHistoriesResponse res = sdk.emailHistory.fetchEmailHistories(req);

            if (res.fetchEmailHistoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEmailHistory

Get an email history by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEmailHistoryRequest;
import org.openapis.openapi.models.operations.FetchEmailHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEmailHistoryRequest req = new FetchEmailHistoryRequest("vel");            

            FetchEmailHistoryResponse res = sdk.emailHistory.fetchEmailHistory(req);

            if (res.fetchEmailHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
