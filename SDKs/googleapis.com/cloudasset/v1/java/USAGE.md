<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudassetAssetsListSecurity;
import org.openapis.openapi.models.operations.CloudassetAssetsListPathParams;
import org.openapis.openapi.models.operations.CloudassetAssetsListContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetAssetsListQueryParams;
import org.openapis.openapi.models.operations.CloudassetAssetsListRequest;
import org.openapis.openapi.models.operations.CloudassetAssetsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetAssetsListRequest req = new CloudassetAssetsListRequest() {{
                security = new CloudassetAssetsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetAssetsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudassetAssetsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    assetTypes = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    callback = "vel";
                    contentType = "ACCESS_POLICY";
                    fields = "deserunt";
                    key = "suscipit";
                    oauthToken = "iure";
                    pageSize = 297534;
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
            }};            

            CloudassetAssetsListResponse res = sdk.assets.cloudassetAssetsList(req);

            if (res.listAssetsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->