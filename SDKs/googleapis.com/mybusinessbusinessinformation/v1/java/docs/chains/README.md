# chains

### Available Operations

* [mybusinessbusinessinformationChainsSearch](#mybusinessbusinessinformationchainssearch) - Searches the chain based on chain name.

## mybusinessbusinessinformationChainsSearch

Searches the chain based on chain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationChainsSearchRequest;
import org.openapis.openapi.models.operations.MybusinessbusinessinformationChainsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessbusinessinformationChainsSearchRequest req = new MybusinessbusinessinformationChainsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "quasi";
                chainName = "ex";
                fields = "nulla";
                key = "excepturi";
                oauthToken = "voluptatibus";
                pageSize = 343605L;
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quisquam";
                uploadProtocol = "saepe";
            }};            

            MybusinessbusinessinformationChainsSearchResponse res = sdk.chains.mybusinessbusinessinformationChainsSearch(req);

            if (res.searchChainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
