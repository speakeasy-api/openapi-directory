<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            DomainsrdapAutnumGetRequest req = new DomainsrdapAutnumGetRequest() {{
                pathParams = new DomainsrdapAutnumGetPathParams() {{
                    autnumId = "molestiae";
                }};
                queryParams = new DomainsrdapAutnumGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "pariatur";
                    alt = "proto";
                    callback = "sed";
                    fields = "dolores";
                    key = "quae";
                    oauthToken = "aut";
                    prettyPrint = true;
                    quotaUser = "reprehenderit";
                    uploadType = "eaque";
                    uploadProtocol = "nesciunt";
                }};
            }};

            DomainsrdapAutnumGetResponse res = sdk.autnum.domainsrdapAutnumGet(req);

            if (res.rdapResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->