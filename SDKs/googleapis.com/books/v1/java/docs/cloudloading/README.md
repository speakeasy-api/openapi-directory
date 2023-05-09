# cloudloading

### Available Operations

* [booksCloudloadingAddBook](#bookscloudloadingaddbook) - Add a user-upload volume and triggers processing.
* [booksCloudloadingDeleteBook](#bookscloudloadingdeletebook) - Remove the book and its contents
* [booksCloudloadingUpdateBook](#bookscloudloadingupdatebook) - Updates a user-upload volume.

## booksCloudloadingAddBook

Add a user-upload volume and triggers processing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksCloudloadingAddBookRequest;
import org.openapis.openapi.models.operations.BooksCloudloadingAddBookResponse;
import org.openapis.openapi.models.operations.BooksCloudloadingAddBookSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksCloudloadingAddBookRequest req = new BooksCloudloadingAddBookRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                driveDocumentId = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                mimeType = "perferendis";
                name = "Faye Cormier";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadClientToken = "saepe";
                uploadProtocol = "fuga";
            }};            

            BooksCloudloadingAddBookResponse res = sdk.cloudloading.booksCloudloadingAddBook(req, new BooksCloudloadingAddBookSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.booksCloudloadingResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## booksCloudloadingDeleteBook

Remove the book and its contents

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksCloudloadingDeleteBookRequest;
import org.openapis.openapi.models.operations.BooksCloudloadingDeleteBookResponse;
import org.openapis.openapi.models.operations.BooksCloudloadingDeleteBookSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksCloudloadingDeleteBookRequest req = new BooksCloudloadingDeleteBookRequest("iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "ipsa";
                key = "reiciendis";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "dolores";
            }};            

            BooksCloudloadingDeleteBookResponse res = sdk.cloudloading.booksCloudloadingDeleteBook(req, new BooksCloudloadingDeleteBookSecurity("dolorem", "corporis") {{
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

## booksCloudloadingUpdateBook

Updates a user-upload volume.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksCloudloadingUpdateBookRequest;
import org.openapis.openapi.models.operations.BooksCloudloadingUpdateBookResponse;
import org.openapis.openapi.models.operations.BooksCloudloadingUpdateBookSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BooksCloudloadingResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksCloudloadingUpdateBookRequest req = new BooksCloudloadingUpdateBookRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                booksCloudloadingResource = new BooksCloudloadingResource() {{
                    author = "nobis";
                    processingState = "enim";
                    title = "Miss";
                    volumeId = "nemo";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            BooksCloudloadingUpdateBookResponse res = sdk.cloudloading.booksCloudloadingUpdateBook(req, new BooksCloudloadingUpdateBookSecurity("dolorem", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.booksCloudloadingResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
