# accessToken

### Available Operations

* [accessTokenPutForm](#accesstokenputform) - Creates a Access Token to write on a Card (e.g. NFC)
* [accessTokenPutJson](#accesstokenputjson) - Creates a Access Token to write on a Card (e.g. NFC)
* [accessTokenPutRaw](#accesstokenputraw) - Creates a Access Token to write on a Card (e.g. NFC)

## accessTokenPutForm

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessTokenPutFormResponse;
import org.openapis.openapi.models.shared.AccessTokenToPut;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccessTokenToPut req = new AccessTokenToPut() {{
                cardId = 715190L;
                userId = 844266L;
            }};            

            AccessTokenPutFormResponse res = sdk.accessToken.accessTokenPutForm(req);

            if (res.accessTokenPutForm200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessTokenPutJson

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessTokenPutJsonResponse;
import org.openapis.openapi.models.shared.AccessTokenToPut;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccessTokenToPut req = new AccessTokenToPut() {{
                cardId = 602763L;
                userId = 857946L;
            }};            

            AccessTokenPutJsonResponse res = sdk.accessToken.accessTokenPutJson(req);

            if (res.accessTokenPutJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accessTokenPutRaw

Creates a Access Token to write on a Card (e.g. NFC)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccessTokenPutRawResponse;
import org.openapis.openapi.models.shared.AccessTokenToPut;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "corrupti".getBytes()            

            AccessTokenPutRawResponse res = sdk.accessToken.accessTokenPutRaw(req);

            if (res.accessTokenPutRaw200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
