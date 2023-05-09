# attributes

### Available Operations

* [mybusinessbusinessinformationAttributesList](#mybusinessbusinessinformationattributeslist) - Returns the list of attributes that would be available for a location with the given primary category and country.

## mybusinessbusinessinformationAttributesList

Returns the list of attributes that would be available for a location with the given primary category and country.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAttributesListRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationAttributesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationAttributesListRequest req = new MybusinessbusinessinformationAttributesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "vero";
                categoryName = "omnis";
                fields = "quis";
                key = "ipsum";
                languageCode = "delectus";
                oauthToken = "voluptate";
                pageSize = 231701L;
                pageToken = "vero";
                parent = "tenetur";
                prettyPrint = false;
                quotaUser = "dignissimos";
                regionCode = "hic";
                showAll = false;
                uploadType = "distinctio";
                uploadProtocol = "quod";
            }};            

            MybusinessbusinessinformationAttributesListResponse res = sdk.attributes.mybusinessbusinessinformationAttributesList(req);

            if (res.listAttributeMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
