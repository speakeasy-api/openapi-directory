# entries

### Available Operations

* [datacatalogEntriesLookup](#datacatalogentrieslookup) - Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

## datacatalogEntriesLookup

Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatacatalogEntriesLookupRequest;
import org.openapis.openapi.models.operations.DatacatalogEntriesLookupResponse;
import org.openapis.openapi.models.operations.DatacatalogEntriesLookupSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatacatalogEntriesLookupRequest req = new DatacatalogEntriesLookupRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "esse";
                fullyQualifiedName = "ipsum";
                key = "excepturi";
                linkedResource = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                sqlResource = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            DatacatalogEntriesLookupResponse res = sdk.entries.datacatalogEntriesLookup(req, new DatacatalogEntriesLookupSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1Entry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
