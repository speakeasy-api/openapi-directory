<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowRequest;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowResponse;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksBorrowSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LibraryagentShelvesBooksBorrowRequest req = new LibraryagentShelvesBooksBorrowRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            LibraryagentShelvesBooksBorrowResponse res = sdk.shelves.libraryagentShelvesBooksBorrow(req, new LibraryagentShelvesBooksBorrowSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleExampleLibraryagentV1Book != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->