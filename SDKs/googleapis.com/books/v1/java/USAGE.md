<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    shelf = "quia";
                    userId = "laboriosam";
                }};
                queryParams = new BooksBookshelvesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "media";
                    callback = "est";
                    fields = "incidunt";
                    key = "aut";
                    oauthToken = "corrupti";
                    prettyPrint = true;
                    quotaUser = "tenetur";
                    source = "nemo";
                    uploadType = "beatae";
                    uploadProtocol = "iste";
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