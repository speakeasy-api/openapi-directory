<!-- Start SDK Example Usage -->
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

            CloudassetAssetsListRequest req = new CloudassetAssetsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                assetTypes = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                callback = "vel";
                contentType = CloudassetAssetsListContentTypeEnum.ACCESS_POLICY;
                fields = "deserunt";
                key = "suscipit";
                oauthToken = "iure";
                pageSize = 297534L;
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                readTime = "delectus";
                relationshipTypes = new String[]{{
                    add("suscipit"),
                    add("molestiae"),
                }};
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            CloudassetAssetsListResponse res = sdk.assets.cloudassetAssetsList(req, new CloudassetAssetsListSecurity("voluptatum", "iusto") {{
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
<!-- End SDK Example Usage -->