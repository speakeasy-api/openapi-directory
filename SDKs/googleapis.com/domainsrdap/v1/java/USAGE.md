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
                    autnumId = "sit";
                }};
                queryParams = new DomainsrdapAutnumGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
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