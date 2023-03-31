<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowSecurity;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowPathParams;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowQueryParams;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowRequest;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new LibraryagentShelvesBooksBorrowQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
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