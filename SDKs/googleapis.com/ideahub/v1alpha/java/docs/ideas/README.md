# ideas

### Available Operations

* [ideahubIdeasList](#ideahubideaslist) - List ideas for a given Creator and filter and sort options.

## ideahubIdeasList

List ideas for a given Creator and filter and sort options.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                filter = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                orderBy = "iusto";
                pageSize = 568045L;
                pageToken = "nisi";
                parent = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
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
