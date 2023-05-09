# beneficiaries

### Available Operations

* [getAccountsAccountIdBeneficiaries](#getaccountsaccountidbeneficiaries) - Get Beneficiaries

## getAccountsAccountIdBeneficiaries

Get Beneficiaries by Account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdBeneficiariesRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdBeneficiariesResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdBeneficiariesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdBeneficiariesRequest req = new GetAccountsAccountIdBeneficiariesRequest("iste", "dolor") {{
                xCustomerUserAgent = "natus";
                xFapiAuthDate = "laboriosam";
                xFapiCustomerIpAddress = "hic";
                xFapiInteractionId = "saepe";
            }};            

            GetAccountsAccountIdBeneficiariesResponse res = sdk.beneficiaries.getAccountsAccountIdBeneficiaries(req, new GetAccountsAccountIdBeneficiariesSecurity("fuga", "in") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadBeneficiary5 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
