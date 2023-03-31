<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BooksBookshelvesGetSecurity;
import org.openapis.openapi.models.operations.BooksBookshelvesGetPathParams;
import org.openapis.openapi.models.operations.BooksBookshelvesGetQueryParams;
import org.openapis.openapi.models.operations.BooksBookshelvesGetRequest;
import org.openapis.openapi.models.operations.BooksBookshelvesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksBookshelvesGetRequest req = new BooksBookshelvesGetRequest() {{
                security = new BooksBookshelvesGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BooksBookshelvesGetPathParams() {{
                    shelf = "corrupti";
                    userId = "provident";
                }};
                queryParams = new BooksBookshelvesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    source = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            BooksBookshelvesGetResponse res = sdk.bookshelves.booksBookshelvesGet(req);

            if (res.bookshelf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->