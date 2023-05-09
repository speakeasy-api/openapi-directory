# assets

### Available Operations

* [cloudassetAssetsList](#cloudassetassetslist) - Lists assets with time and resource types and returns paged results in response.

## cloudassetAssetsList

Lists assets with time and resource types and returns paged results in response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetAssetsListContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetAssetsListRequest;
import org.openapis.openapi.models.operations.CloudassetAssetsListResponse;
import org.openapis.openapi.models.operations.CloudassetAssetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAssetsListRequest req = new CloudassetAssetsListRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                assetTypes = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                callback = "ab";
                contentType = CloudassetAssetsListContentTypeEnum.RESOURCE;
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                pageSize = 368241L;
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                readTime = "quo";
                uploadType = "odit";
                uploadProtocol = "at";
            }};            

            CloudassetAssetsListResponse res = sdk.assets.cloudassetAssetsList(req, new CloudassetAssetsListSecurity("at", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
