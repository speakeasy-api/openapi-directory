<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryRequest;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryResponse;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetProjectsBatchGetAssetsHistoryRequest req = new CloudassetProjectsBatchGetAssetsHistoryRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                assetNames = new String[]{{
                    add("nulla"),
                    add("corrupti"),
                    add("illum"),
                }};
                callback = "vel";
                contentType = CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum.RESOURCE;
                fields = "deserunt";
                key = "suscipit";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "magnam";
                readTimeWindowEndTime = "debitis";
                readTimeWindowStartTime = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            CloudassetProjectsBatchGetAssetsHistoryResponse res = sdk.projects.cloudassetProjectsBatchGetAssetsHistory(req, new CloudassetProjectsBatchGetAssetsHistorySecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchGetAssetsHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->