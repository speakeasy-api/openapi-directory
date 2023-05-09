# autnum

### Available Operations

* [domainsrdapAutnumGet](#domainsrdapautnumget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapAutnumGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapAutnumGetRequest;
import org.openapis.openapi.models.operations.DomainsrdapAutnumGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapAutnumGetRequest req = new DomainsrdapAutnumGetRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            DomainsrdapAutnumGetResponse res = sdk.autnum.domainsrdapAutnumGet(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
