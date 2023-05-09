# ip

### Available Operations

* [domainsrdapIpGet](#domainsrdapipget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapIpGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapIpGetRequest;
import org.openapis.openapi.models.operations.DomainsrdapIpGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapIpGetRequest req = new DomainsrdapIpGetRequest("esse", "totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            DomainsrdapIpGetResponse res = sdk.ip.domainsrdapIpGet(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
