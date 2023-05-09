# bookshelves

### Available Operations

* [booksBookshelvesGet](#booksbookshelvesget) - Retrieves metadata for a specific bookshelf for the specified user.
* [booksBookshelvesList](#booksbookshelveslist) - Retrieves a list of public bookshelves for the specified user.
* [booksBookshelvesVolumesList](#booksbookshelvesvolumeslist) - Retrieves volumes in a specific bookshelf for the specified user.

## booksBookshelvesGet

Retrieves metadata for a specific bookshelf for the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksBookshelvesGetRequest;
import org.openapis.openapi.models.operations.BooksBookshelvesGetResponse;
import org.openapis.openapi.models.operations.BooksBookshelvesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksBookshelvesGetRequest req = new BooksBookshelvesGetRequest("ipsa", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "excepturi";
                source = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            BooksBookshelvesGetResponse res = sdk.bookshelves.booksBookshelvesGet(req, new BooksBookshelvesGetSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookshelf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksBookshelvesList

Retrieves a list of public bookshelves for the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksBookshelvesListRequest;
import org.openapis.openapi.models.operations.BooksBookshelvesListResponse;
import org.openapis.openapi.models.operations.BooksBookshelvesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksBookshelvesListRequest req = new BooksBookshelvesListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                source = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            BooksBookshelvesListResponse res = sdk.bookshelves.booksBookshelvesList(req, new BooksBookshelvesListSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookshelves != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksBookshelvesVolumesList

Retrieves volumes in a specific bookshelf for the specified user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksBookshelvesVolumesListRequest;
import org.openapis.openapi.models.operations.BooksBookshelvesVolumesListResponse;
import org.openapis.openapi.models.operations.BooksBookshelvesVolumesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksBookshelvesVolumesListRequest req = new BooksBookshelvesVolumesListRequest("esse", "totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                maxResults = 143353L;
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                showPreorders = false;
                source = "optio";
                startIndex = 521848L;
                uploadType = "beatae";
                uploadProtocol = "commodi";
            }};            

            BooksBookshelvesVolumesListResponse res = sdk.bookshelves.booksBookshelvesVolumesList(req, new BooksBookshelvesVolumesListSecurity("molestiae", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
