# currencies

### Available Operations

* [getCurrencies](#getcurrencies) - List currencies
* [getCurrenciesId](#getcurrenciesid) - Get currency

## getCurrencies

Lists currencies supported by PocketSmith.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrenciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCurrenciesResponse res = sdk.currencies.getCurrencies();

            if (res.currencies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCurrenciesId

Gets a particular currency by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCurrenciesIdRequest;
import org.openapis.openapi.models.operations.GetCurrenciesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCurrenciesIdRequest req = new GetCurrenciesIdRequest("mollitia");            

            GetCurrenciesIdResponse res = sdk.currencies.getCurrenciesId(req);

            if (res.currency != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
