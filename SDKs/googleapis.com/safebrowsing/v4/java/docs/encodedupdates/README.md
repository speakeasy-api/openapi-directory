# encodedUpdates

### Available Operations

* [safebrowsingEncodedUpdatesGet](#safebrowsingencodedupdatesget)

## safebrowsingEncodedUpdatesGet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SafebrowsingEncodedUpdatesGetRequest;
import org.openapis.openapi.models.operations.SafebrowsingEncodedUpdatesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingEncodedUpdatesGetRequest req = new SafebrowsingEncodedUpdatesGetRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                clientId = "deserunt";
                clientVersion = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            SafebrowsingEncodedUpdatesGetResponse res = sdk.encodedUpdates.safebrowsingEncodedUpdatesGet(req);

            if (res.googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
