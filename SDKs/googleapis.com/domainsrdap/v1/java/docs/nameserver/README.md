# nameserver

### Available Operations

* [domainsrdapNameserverGet](#domainsrdapnameserverget) - The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

## domainsrdapNameserverGet

The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapNameserverGetRequest;
import org.openapis.openapi.models.operations.DomainsrdapNameserverGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapNameserverGetRequest req = new DomainsrdapNameserverGetRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            DomainsrdapNameserverGetResponse res = sdk.nameserver.domainsrdapNameserverGet(req);

            if (res.rdapResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
