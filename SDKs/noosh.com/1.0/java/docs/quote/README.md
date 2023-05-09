# quote

### Available Operations

* [getQuote](#getquote) - Get a specific quote of project
* [getQuoteList](#getquotelist) - List the quotes
* [getQuoteStateList](#getquotestatelist) - List the quote states
* [getV1WorkgroupsWorkgroupIdQuotes](#getv1workgroupsworkgroupidquotes) - List the quotes of workgroup level
* [putQuoteJson](#putquotejson) - Accept / Reject a Quote
* [putQuoteRaw](#putquoteraw) - Accept / Reject a Quote

## getQuote

Get a specific quote of project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteRequest;
import org.openapis.openapi.models.operations.GetQuoteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteRequest req = new GetQuoteRequest("nam", "eaque", "pariatur");            

            GetQuoteResponse res = sdk.quote.getQuote(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteList

List the quotes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteListRequest;
import org.openapis.openapi.models.operations.GetQuoteListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteListRequest req = new GetQuoteListRequest("nemo", "voluptatibus") {{
                quoteStateIdUseFiltersEqualQuoteStateId111111 = "perferendis";
            }};            

            GetQuoteListResponse res = sdk.quote.getQuoteList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteStateList

List the quote states

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteStateListRequest;
import org.openapis.openapi.models.operations.GetQuoteStateListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteStateListRequest req = new GetQuoteStateListRequest("fugiat");            

            GetQuoteStateListResponse res = sdk.quote.getQuoteStateList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1WorkgroupsWorkgroupIdQuotes

List the quotes of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1WorkgroupsWorkgroupIdQuotesRequest;
import org.openapis.openapi.models.operations.GetV1WorkgroupsWorkgroupIdQuotesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1WorkgroupsWorkgroupIdQuotesRequest req = new GetV1WorkgroupsWorkgroupIdQuotesRequest("amet") {{
                quoteStateIdUseFiltersEqualQuoteStateId111111 = "aut";
            }};            

            GetV1WorkgroupsWorkgroupIdQuotesResponse res = sdk.quote.getV1WorkgroupsWorkgroupIdQuotes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQuoteJson

Accept / Reject a Quote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQuoteJsonRequest;
import org.openapis.openapi.models.operations.PutQuoteJsonResponse;
import org.openapis.openapi.models.shared.QuotePutPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutQuoteJsonRequest req = new PutQuoteJsonRequest("cumque", "corporis", "hic") {{
                quotePutPersistVO = new QuotePutPersistVO() {{
                    action = "sample action";
                    poNumber = "sample po_number";
                    quoteId = 1L;
                    stateChangeComments = "sample state_change_comments";
                }};;
            }};            

            PutQuoteJsonResponse res = sdk.quote.putQuoteJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQuoteRaw

Accept / Reject a Quote

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQuoteRawRequest;
import org.openapis.openapi.models.operations.PutQuoteRawResponse;
import org.openapis.openapi.models.shared.QuotePutPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutQuoteRawRequest req = new PutQuoteRawRequest("libero", "nobis", "dolores") {{
                requestBody = "quis".getBytes();
            }};            

            PutQuoteRawResponse res = sdk.quote.putQuoteRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
