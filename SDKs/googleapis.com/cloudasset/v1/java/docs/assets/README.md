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

            CloudassetAssetsListRequest req = new CloudassetAssetsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                assetTypes = new String[]{{
                    add("quis"),
                }};
                callback = "veritatis";
                contentType = CloudassetAssetsListContentTypeEnum.ACCESS_POLICY;
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                pageSize = 957156L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                readTime = "at";
                relationshipTypes = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            CloudassetAssetsListResponse res = sdk.assets.cloudassetAssetsList(req, new CloudassetAssetsListSecurity("porro", "dolorum") {{
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
