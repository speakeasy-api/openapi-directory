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

            LibraryagentShelvesBooksBorrowRequest req = new LibraryagentShelvesBooksBorrowRequest() {{
                security = new LibraryagentShelvesBooksBorrowSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new LibraryagentShelvesBooksBorrowPathParams() {{
                    name = "non";
                }};
                queryParams = new LibraryagentShelvesBooksBorrowQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "eum";
                    alt = "json";
                    callback = "minus";
                    fields = "saepe";
                    key = "laboriosam";
                    oauthToken = "ut";
                    prettyPrint = true;
                    quotaUser = "ad";
                    uploadType = "architecto";
                    uploadProtocol = "consequatur";
                }};
            }};

            LibraryagentShelvesBooksBorrowResponse res = sdk.shelves.libraryagentShelvesBooksBorrow(req);

            if (res.googleExampleLibraryagentV1Book.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->