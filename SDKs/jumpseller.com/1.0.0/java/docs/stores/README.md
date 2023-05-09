# stores

### Available Operations

* [getStoreInfoJson](#getstoreinfojson) - Retrieve Store Information.
* [getStoreLanguagesJson](#getstorelanguagesjson) - Retrieve Store Languages.

## getStoreInfoJson

Retrieve Store Information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreInfoJsonRequest;
import org.openapis.openapi.models.operations.GetStoreInfoJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreInfoJsonRequest req = new GetStoreInfoJsonRequest("accusamus", "tempora");            

            GetStoreInfoJsonResponse res = sdk.stores.getStoreInfoJson(req);

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStoreLanguagesJson

Retrieve Store Languages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreLanguagesJsonRequest;
import org.openapis.openapi.models.operations.GetStoreLanguagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreLanguagesJsonRequest req = new GetStoreLanguagesJsonRequest("atque", "fugit");            

            GetStoreLanguagesJsonResponse res = sdk.stores.getStoreLanguagesJson(req);

            if (res.languages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
