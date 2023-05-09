# timeCard

### Available Operations

* [getMyTimeCard](#getmytimecard) - Get a specific my time cards
* [getMyTimeCardList](#getmytimecardlist) - List my time cards
* [getReceivedTimeCard](#getreceivedtimecard) - List a specific received time cards
* [getReceivedTimeCardList](#getreceivedtimecardlist) - List received time cards

## getMyTimeCard

Get a specific my time cards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMyTimeCardRequest;
import org.openapis.openapi.models.operations.GetMyTimeCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMyTimeCardRequest req = new GetMyTimeCardRequest("quas", "itaque");            

            GetMyTimeCardResponse res = sdk.timeCard.getMyTimeCard(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMyTimeCardList

List my time cards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMyTimeCardListRequest;
import org.openapis.openapi.models.operations.GetMyTimeCardListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMyTimeCardListRequest req = new GetMyTimeCardListRequest("consequatur");            

            GetMyTimeCardListResponse res = sdk.timeCard.getMyTimeCardList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReceivedTimeCard

List a specific received time cards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReceivedTimeCardRequest;
import org.openapis.openapi.models.operations.GetReceivedTimeCardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReceivedTimeCardRequest req = new GetReceivedTimeCardRequest("est", "repellendus");            

            GetReceivedTimeCardResponse res = sdk.timeCard.getReceivedTimeCard(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReceivedTimeCardList

List received time cards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReceivedTimeCardListRequest;
import org.openapis.openapi.models.operations.GetReceivedTimeCardListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReceivedTimeCardListRequest req = new GetReceivedTimeCardListRequest("porro");            

            GetReceivedTimeCardListResponse res = sdk.timeCard.getReceivedTimeCardList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
