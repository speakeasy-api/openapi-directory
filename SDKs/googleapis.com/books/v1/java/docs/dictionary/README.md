# dictionary

### Available Operations

* [booksDictionaryListOfflineMetadata](#booksdictionarylistofflinemetadata) - Returns a list of offline dictionary metadata available

## booksDictionaryListOfflineMetadata

Returns a list of offline dictionary metadata available

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BooksDictionaryListOfflineMetadataRequest;
import org.openapis.openapi.models.operations.BooksDictionaryListOfflineMetadataResponse;
import org.openapis.openapi.models.operations.BooksDictionaryListOfflineMetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BooksDictionaryListOfflineMetadataRequest req = new BooksDictionaryListOfflineMetadataRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "commodi";
                key = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            BooksDictionaryListOfflineMetadataResponse res = sdk.dictionary.booksDictionaryListOfflineMetadata(req, new BooksDictionaryListOfflineMetadataSecurity("quis", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.metadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
