# placeActionTypeMetadata

### Available Operations

* [mybusinessplaceactionsPlaceActionTypeMetadataList](#mybusinessplaceactionsplaceactiontypemetadatalist) - Returns the list of available place action types for a location or country.

## mybusinessplaceactionsPlaceActionTypeMetadataList

Returns the list of available place action types for a location or country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsPlaceActionTypeMetadataListRequest req = new MybusinessplaceactionsPlaceActionTypeMetadataListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                filter = "sapiente";
                key = "architecto";
                languageCode = "mollitia";
                oauthToken = "dolorem";
                pageSize = 635059L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            MybusinessplaceactionsPlaceActionTypeMetadataListResponse res = sdk.placeActionTypeMetadata.mybusinessplaceactionsPlaceActionTypeMetadataList(req);

            if (res.listPlaceActionTypeMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
