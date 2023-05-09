# domain

### Available Operations

* [domainsrdapDomainGet](#domainsrdapdomainget) - Look up RDAP information for a domain by name.

## domainsrdapDomainGet

Look up RDAP information for a domain by name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsrdapDomainGetRequest;
import org.openapis.openapi.models.operations.DomainsrdapDomainGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsrdapDomainGetRequest req = new DomainsrdapDomainGetRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
            }};            

            DomainsrdapDomainGetResponse res = sdk.domain.domainsrdapDomainGet(req);

            if (res.httpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
