# chains

### Available Operations

* [mybusinessChainsGet](#mybusinesschainsget) - Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
* [mybusinessChainsSearch](#mybusinesschainssearch) - Searches the chain based on chain name.

## mybusinessChainsGet

Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessChainsGetRequest;
import org.openapis.openapi.models.operations.MybusinessChainsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessChainsGetRequest req = new MybusinessChainsGetRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "impedit";
                key = "quibusdam";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "culpa";
                uploadProtocol = "dolor";
            }};            

            MybusinessChainsGetResponse res = sdk.chains.mybusinessChainsGet(req);

            if (res.chain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessChainsSearch

Searches the chain based on chain name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessChainsSearchRequest;
import org.openapis.openapi.models.operations.MybusinessChainsSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessChainsSearchRequest req = new MybusinessChainsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                chainDisplayName = "tempora";
                fields = "dolor";
                key = "consequatur";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "sit";
                resultCount = 265039L;
                uploadType = "fugit";
                uploadProtocol = "ab";
            }};            

            MybusinessChainsSearchResponse res = sdk.chains.mybusinessChainsSearch(req);

            if (res.searchChainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
