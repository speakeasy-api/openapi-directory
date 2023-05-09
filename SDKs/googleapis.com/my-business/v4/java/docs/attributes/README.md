# attributes

### Available Operations

* [mybusinessAttributesList](#mybusinessattributeslist) - Returns the list of available attributes that would be available for a location with the given primary category and country.

## mybusinessAttributesList

Returns the list of available attributes that would be available for a location with the given primary category and country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessAttributesListRequest;
import org.openapis.openapi.models.operations.MybusinessAttributesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessAttributesListRequest req = new MybusinessAttributesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "eum";
                categoryId = "voluptas";
                country = "Namibia";
                fields = "id";
                key = "ab";
                languageCode = "error";
                name = "Pat O'Keefe";
                oauthToken = "ad";
                pageSize = 536923L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "repellendus";
                uploadProtocol = "ex";
            }};            

            MybusinessAttributesListResponse res = sdk.attributes.mybusinessAttributesList(req);

            if (res.listAttributeMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
