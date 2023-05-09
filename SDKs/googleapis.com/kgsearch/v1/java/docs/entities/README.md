# entities

### Available Operations

* [kgsearchEntitiesSearch](#kgsearchentitiessearch) - Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

## kgsearchEntitiesSearch

Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KgsearchEntitiesSearchRequest;
import org.openapis.openapi.models.operations.KgsearchEntitiesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KgsearchEntitiesSearchRequest req = new KgsearchEntitiesSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "temporibus";
                ids = new String[]{{
                    add("quis"),
                }};
                indent = false;
                key = "veritatis";
                languages = new String[]{{
                    add("perferendis"),
                    add("ipsam"),
                    add("repellendus"),
                }};
                limit = 957156L;
                oauthToken = "quo";
                prefix = false;
                prettyPrint = false;
                query = "odit";
                quotaUser = "at";
                types = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            KgsearchEntitiesSearchResponse res = sdk.entities.kgsearchEntitiesSearch(req);

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
