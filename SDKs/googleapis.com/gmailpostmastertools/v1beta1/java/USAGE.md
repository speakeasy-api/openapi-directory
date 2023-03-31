<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListSecurity;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListQueryParams;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListRequest;
import org.openapis.openapi.models.operations.GmailpostmastertoolsDomainsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    pageSize = 847252;
                    pageToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
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