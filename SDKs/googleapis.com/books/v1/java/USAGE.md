<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BooksBookshelvesGetSecurity;
import org.openapis.openapi.models.operations.BooksBookshelvesGetRequest;
import org.openapis.openapi.models.operations.BooksBookshelvesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksBookshelvesGetRequest req = new BooksBookshelvesGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                shelf = "vel";
                source = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
                userId = "iure";
            }}            

            BooksBookshelvesGetResponse res = sdk.bookshelves.booksBookshelvesGet(req, new BooksBookshelvesGetSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookshelf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->