# promooffer

### Available Operations

* [booksPromoofferAccept](#bookspromoofferaccept) - Accepts the promo offer.
* [booksPromoofferDismiss](#bookspromoofferdismiss) - Marks the promo offer as dismissed.
* [booksPromoofferGet](#bookspromoofferget) - Returns a list of promo offers available to the user

## booksPromoofferAccept

Accepts the promo offer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksPromoofferAcceptRequest;
import org.openapis.openapi.models.operations.BooksPromoofferAcceptResponse;
import org.openapis.openapi.models.operations.BooksPromoofferAcceptSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksPromoofferAcceptRequest req = new BooksPromoofferAcceptRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                androidId = "dicta";
                callback = "maiores";
                device = "natus";
                fields = "velit";
                key = "voluptatibus";
                manufacturer = "voluptas";
                model = "asperiores";
                oauthToken = "aperiam";
                offerId = "ea";
                prettyPrint = false;
                product = "quaerat";
                quotaUser = "consequuntur";
                serial = "repellendus";
                uploadType = "officia";
                uploadProtocol = "maxime";
                volumeId = "dignissimos";
            }};            

            BooksPromoofferAcceptResponse res = sdk.promooffer.booksPromoofferAccept(req, new BooksPromoofferAcceptSecurity("officia", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksPromoofferDismiss

Marks the promo offer as dismissed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksPromoofferDismissRequest;
import org.openapis.openapi.models.operations.BooksPromoofferDismissResponse;
import org.openapis.openapi.models.operations.BooksPromoofferDismissSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksPromoofferDismissRequest req = new BooksPromoofferDismissRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                androidId = "porro";
                callback = "quod";
                device = "labore";
                fields = "ab";
                key = "adipisci";
                manufacturer = "fuga";
                model = "id";
                oauthToken = "suscipit";
                offerId = "velit";
                prettyPrint = false;
                product = "culpa";
                quotaUser = "est";
                serial = "recusandae";
                uploadType = "totam";
                uploadProtocol = "fugiat";
            }};            

            BooksPromoofferDismissResponse res = sdk.promooffer.booksPromoofferDismiss(req, new BooksPromoofferDismissSecurity("vel", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksPromoofferGet

Returns a list of promo offers available to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksPromoofferGetRequest;
import org.openapis.openapi.models.operations.BooksPromoofferGetResponse;
import org.openapis.openapi.models.operations.BooksPromoofferGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksPromoofferGetRequest req = new BooksPromoofferGetRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.JSON;
                androidId = "possimus";
                callback = "facilis";
                device = "cum";
                fields = "commodi";
                key = "in";
                manufacturer = "corporis";
                model = "reiciendis";
                oauthToken = "assumenda";
                prettyPrint = false;
                product = "nemo";
                quotaUser = "recusandae";
                serial = "aliquid";
                uploadType = "aperiam";
                uploadProtocol = "cum";
            }};            

            BooksPromoofferGetResponse res = sdk.promooffer.booksPromoofferGet(req, new BooksPromoofferGetSecurity("consectetur", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.offers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
