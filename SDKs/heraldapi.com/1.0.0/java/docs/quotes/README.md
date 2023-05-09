# quotes

### Available Operations

* [getQuotesQuoteId](#getquotesquoteid) - /quotes/{quote_id}

## getQuotesQuoteId

### Get a quote

Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response. 

> If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuotesQuoteIdRequest;
import org.openapis.openapi.models.operations.GetQuotesQuoteIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetQuotesQuoteIdRequest req = new GetQuotesQuoteIdRequest("21419598-90af-4a56-be25-16fe4c8b711e");            

            GetQuotesQuoteIdResponse res = sdk.quotes.getQuotesQuoteId(req);

            if (res.getQuotesQuoteId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
