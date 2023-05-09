# merchants

### Available Operations

* [listMerchants](#listmerchants) - ListMerchants
* [retrieveMerchant](#retrievemerchant) - RetrieveMerchant

## listMerchants

Returns `Merchant` information for a given access token.

If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token.
You can specify your personal access token to get your own merchant information or specify an OAuth token
to get the information for the  merchant that granted you access.

If you know the merchant ID, you can also use the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant)
endpoint to get the merchant information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMerchantsRequest;
import org.openapis.openapi.models.operations.ListMerchantsResponse;
import org.openapis.openapi.models.operations.ListMerchantsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMerchantsRequest req = new ListMerchantsRequest() {{
                cursor = 221000L;
            }};            

            ListMerchantsResponse res = sdk.merchants.listMerchants(req, new ListMerchantsSecurity("debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMerchantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveMerchant

Retrieve a `Merchant` object for the given `merchant_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveMerchantRequest;
import org.openapis.openapi.models.operations.RetrieveMerchantResponse;
import org.openapis.openapi.models.operations.RetrieveMerchantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveMerchantRequest req = new RetrieveMerchantRequest("consectetur");            

            RetrieveMerchantResponse res = sdk.merchants.retrieveMerchant(req, new RetrieveMerchantSecurity("aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveMerchantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
