# savedColumns

### Available Operations

* [doubleclicksearchSavedColumnsList](#doubleclicksearchsavedcolumnslist) - Retrieve the list of saved columns for a specified advertiser.

## doubleclicksearchSavedColumnsList

Retrieve the list of saved columns for a specified advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchSavedColumnsListRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchSavedColumnsListResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchSavedColumnsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchSavedColumnsListRequest req = new DoubleclicksearchSavedColumnsListRequest("vel", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "dicta";
                key = "dolor";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "ex";
                uploadProtocol = "nulla";
            }};            

            DoubleclicksearchSavedColumnsListResponse res = sdk.savedColumns.doubleclicksearchSavedColumnsList(req, new DoubleclicksearchSavedColumnsListSecurity("excepturi", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.savedColumnList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
