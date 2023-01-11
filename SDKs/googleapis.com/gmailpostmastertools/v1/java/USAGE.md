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
                    accessToken = "sunt";
                    alt = "json";
                    callback = "quas";
                    fields = "ea";
                    key = "quia";
                    oauthToken = "placeat";
                    pageSize = 777152332639024857;
                    pageToken = "suscipit";
                    prettyPrint = false;
                    quotaUser = "voluptas";
                    uploadType = "est";
                    uploadProtocol = "repellendus";
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