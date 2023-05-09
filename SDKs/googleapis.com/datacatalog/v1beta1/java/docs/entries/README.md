# entries

### Available Operations

* [datacatalogEntriesLookup](#datacatalogentrieslookup) - Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

## datacatalogEntriesLookup

Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

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
                key = "ipsum";
                linkedResource = "excepturi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                sqlResource = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            DatacatalogEntriesLookupResponse res = sdk.entries.datacatalogEntriesLookup(req, new DatacatalogEntriesLookupSecurity("iste", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatacatalogV1beta1Entry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
