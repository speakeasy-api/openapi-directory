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

            IdeahubIdeasListRequest req = new IdeahubIdeasListRequest() {{
                queryParams = new IdeahubIdeasListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    filter = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    orderBy = "fugit";
                    pageSize = 1543572285742637646;
                    pageToken = "nihil";
                    parent = "rerum";
                    prettyPrint = false;
                    quotaUser = "debitis";
                    uploadType = "voluptatum";
                    uploadProtocol = "et";
                }};
            }};

            IdeahubIdeasListResponse res = sdk.ideas.ideahubIdeasList(req);

            if (res.googleSearchIdeahubV1alphaListIdeasResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->