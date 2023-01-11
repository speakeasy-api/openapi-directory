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

            GmailpostmastertoolsDomainsListRequest req = new GmailpostmastertoolsDomainsListRequest() {{
                security = new GmailpostmastertoolsDomainsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GmailpostmastertoolsDomainsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "doloremque";
                    alt = "proto";
                    callback = "voluptas";
                    fields = "earum";
                    key = "est";
                    oauthToken = "aut";
                    pageSize = 3340249865416084418;
                    pageToken = "est";
                    prettyPrint = true;
                    quotaUser = "non";
                    uploadType = "expedita";
                    uploadProtocol = "est";
                }};
            }};

            GmailpostmastertoolsDomainsListResponse res = sdk.domains.gmailpostmastertoolsDomainsList(req);

            if (res.listDomainsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->