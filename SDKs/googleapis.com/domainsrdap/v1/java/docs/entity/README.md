# entity

### Available Operations

* [domainsrdapEntityGet](#domainsrdapentityget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapEntityGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapEntityGetRequest;
import org.openapis.openapi.models.operations.DomainsrdapEntityGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapEntityGetRequest req = new DomainsrdapEntityGetRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            DomainsrdapEntityGetResponse res = sdk.entity.domainsrdapEntityGet(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
