# shelves

### Available Operations

* [libraryagentShelvesBooksBorrow](#libraryagentshelvesbooksborrow) - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
* [libraryagentShelvesBooksGet](#libraryagentshelvesbooksget) - Gets a book. Returns NOT_FOUND if the book does not exist.
* [libraryagentShelvesBooksList](#libraryagentshelvesbookslist) - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
* [libraryagentShelvesBooksReturn](#libraryagentshelvesbooksreturn) - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
* [libraryagentShelvesList](#libraryagentshelveslist) - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.

## libraryagentShelvesBooksBorrow

Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.

### Example Usage

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

            LibraryagentShelvesBooksBorrowRequest req = new LibraryagentShelvesBooksBorrowRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            LibraryagentShelvesBooksBorrowResponse res = sdk.shelves.libraryagentShelvesBooksBorrow(req, new LibraryagentShelvesBooksBorrowSecurity("excepturi", "nisi") {{
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

## libraryagentShelvesBooksGet

Gets a book. Returns NOT_FOUND if the book does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksGetRequest;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksGetResponse;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LibraryagentShelvesBooksGetRequest req = new LibraryagentShelvesBooksGetRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            LibraryagentShelvesBooksGetResponse res = sdk.shelves.libraryagentShelvesBooksGet(req, new LibraryagentShelvesBooksGetSecurity("odit", "at") {{
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

## libraryagentShelvesBooksList

Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksListRequest;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksListResponse;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LibraryagentShelvesBooksListRequest req = new LibraryagentShelvesBooksListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                pageSize = 678880L;
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            LibraryagentShelvesBooksListResponse res = sdk.shelves.libraryagentShelvesBooksList(req, new LibraryagentShelvesBooksListSecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleExampleLibraryagentV1ListBooksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## libraryagentShelvesBooksReturn

Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksReturnRequest;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksReturnResponse;
import org.openapis.openapi.models.operations.LibraryagentShelvesBooksReturnSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LibraryagentShelvesBooksReturnRequest req = new LibraryagentShelvesBooksReturnRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "cum";
                uploadProtocol = "esse";
            }};            

            LibraryagentShelvesBooksReturnResponse res = sdk.shelves.libraryagentShelvesBooksReturn(req, new LibraryagentShelvesBooksReturnSecurity("ipsum", "excepturi") {{
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

## libraryagentShelvesList

Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LibraryagentShelvesListRequest;
import org.openapis.openapi.models.operations.LibraryagentShelvesListResponse;
import org.openapis.openapi.models.operations.LibraryagentShelvesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LibraryagentShelvesListRequest req = new LibraryagentShelvesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                pageSize = 616934L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "saepe";
                uploadProtocol = "fuga";
            }};            

            LibraryagentShelvesListResponse res = sdk.shelves.libraryagentShelvesList(req, new LibraryagentShelvesListSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleExampleLibraryagentV1ListShelvesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
