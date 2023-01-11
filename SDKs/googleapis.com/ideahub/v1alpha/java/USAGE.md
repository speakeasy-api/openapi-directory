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
                    dollarXgafv = "2";
                    accessToken = "ut";
                    alt = "json";
                    callback = "tempore";
                    fields = "vel";
                    filter = "natus";
                    key = "excepturi";
                    oauthToken = "officia";
                    orderBy = "inventore";
                    pageSize = 4520202096699653600;
                    pageToken = "ipsam";
                    parent = "unde";
                    prettyPrint = false;
                    quotaUser = "earum";
                    uploadType = "placeat";
                    uploadProtocol = "sed";
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