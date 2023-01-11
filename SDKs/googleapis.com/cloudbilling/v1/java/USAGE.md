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

            CloudbillingBillingAccountsCreateRequest req = new CloudbillingBillingAccountsCreateRequest() {{
                security = new CloudbillingBillingAccountsCreateSecurity() {{
                    option1 = new CloudbillingBillingAccountsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new CloudbillingBillingAccountsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new BillingAccountInput() {{
                    displayName = "rerum";
                    masterBillingAccount = "dicta";
                }};
            }};

            CloudbillingBillingAccountsCreateResponse res = sdk.billingAccounts.cloudbillingBillingAccountsCreate(req);

            if (res.billingAccount.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->