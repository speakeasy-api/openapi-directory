<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DrivelabelsLabelsGetRequest req = new DrivelabelsLabelsGetRequest() {{
                pathParams = new DrivelabelsLabelsGetPathParams() {{
                    name = "sit";
                }};
                queryParams = new DrivelabelsLabelsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    languageCode = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                    useAdminAccess = true;
                    view = "LABEL_VIEW_BASIC";
                }};
            }};

            DrivelabelsLabelsGetResponse res = sdk.labels.drivelabelsLabelsGet(req);

            if (res.googleAppsDriveLabelsV2Label.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->