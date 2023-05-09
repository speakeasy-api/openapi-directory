# collectionstatuses

### Available Operations

* [contentCollectionstatusesGet](#contentcollectionstatusesget) - Gets the status of a collection from your Merchant Center account.
* [contentCollectionstatusesList](#contentcollectionstatuseslist) - Lists the statuses of the collections in your Merchant Center account.

## contentCollectionstatusesGet

Gets the status of a collection from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCollectionstatusesGetRequest;
import org.openapis.openapi.models.operations.ContentCollectionstatusesGetResponse;
import org.openapis.openapi.models.operations.ContentCollectionstatusesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCollectionstatusesGetRequest req = new ContentCollectionstatusesGetRequest("consequuntur", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "adipisci";
                fields = "eveniet";
                key = "occaecati";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "id";
                uploadProtocol = "quis";
            }};            

            ContentCollectionstatusesGetResponse res = sdk.collectionstatuses.contentCollectionstatusesGet(req, new ContentCollectionstatusesGetSecurity("reprehenderit", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collectionStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentCollectionstatusesList

Lists the statuses of the collections in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCollectionstatusesListRequest;
import org.openapis.openapi.models.operations.ContentCollectionstatusesListResponse;
import org.openapis.openapi.models.operations.ContentCollectionstatusesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCollectionstatusesListRequest req = new ContentCollectionstatusesListRequest("illo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "vero";
                key = "doloremque";
                oauthToken = "iure";
                pageSize = 59944L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "molestiae";
                uploadProtocol = "eveniet";
            }};            

            ContentCollectionstatusesListResponse res = sdk.collectionstatuses.contentCollectionstatusesList(req, new ContentCollectionstatusesListSecurity("qui", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCollectionStatusesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
