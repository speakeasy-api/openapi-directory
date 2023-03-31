# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### shelves

* `libraryagentShelvesBooksBorrow` - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
* `libraryagentShelvesBooksGet` - Gets a book. Returns NOT_FOUND if the book does not exist.
* `libraryagentShelvesBooksList` - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
* `libraryagentShelvesBooksReturn` - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
* `libraryagentShelvesList` - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
