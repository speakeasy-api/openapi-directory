<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistorySecurity;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryPathParams;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryQueryParams;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryRequest;
import org.openapis.openapi.models.operations.CloudassetProjectsBatchGetAssetsHistoryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetProjectsBatchGetAssetsHistoryRequest req = new CloudassetProjectsBatchGetAssetsHistoryRequest() {{
                security = new CloudassetProjectsBatchGetAssetsHistorySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetProjectsBatchGetAssetsHistoryPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new CloudassetProjectsBatchGetAssetsHistoryQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    assetNames = new String[]{{
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    callback = "vel";
                    contentType = "RESOURCE";
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
            }};            

            CloudassetProjectsBatchGetAssetsHistoryResponse res = sdk.projects.cloudassetProjectsBatchGetAssetsHistory(req);

            if (res.batchGetAssetsHistoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->