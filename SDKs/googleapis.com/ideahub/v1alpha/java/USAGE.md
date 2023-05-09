<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdeahubIdeasListRequest;
import org.openapis.openapi.models.operations.IdeahubIdeasListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdeahubIdeasListRequest req = new IdeahubIdeasListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                filter = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                orderBy = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                parent = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            IdeahubIdeasListResponse res = sdk.ideas.ideahubIdeasList(req);

            if (res.googleSearchIdeahubV1alphaListIdeasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->