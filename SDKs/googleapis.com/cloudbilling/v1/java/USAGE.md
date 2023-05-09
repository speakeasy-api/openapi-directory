<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateRequest;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateResponse;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurity;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudbillingBillingAccountsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingAccountInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudbillingBillingAccountsCreateRequest req = new CloudbillingBillingAccountsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                billingAccountInput = new BillingAccountInput() {{
                    displayName = "provident";
                    masterBillingAccount = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            CloudbillingBillingAccountsCreateResponse res = sdk.billingAccounts.cloudbillingBillingAccountsCreate(req, new CloudbillingBillingAccountsCreateSecurity() {{
                option1 = new CloudbillingBillingAccountsCreateSecurityOption1("iure", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.billingAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->