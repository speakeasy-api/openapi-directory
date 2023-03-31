<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateResponse;
import org.openapis.openapi.models.shared.BillingAccountInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new BillingAccountInput() {{
                    displayName = "deserunt";
                    masterBillingAccount = "suscipit";
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