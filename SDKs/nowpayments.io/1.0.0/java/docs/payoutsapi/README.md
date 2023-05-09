# payoutsAPI

### Available Operations

* [verifyPayout](#verifypayout) - Verify payout

## verifyPayout

This method is required to verify payouts by using your 2fa code.  
You’ll have 10 attempts to verify the payout. If it is not verified after 10 attempts, the payout will remain in ‘creating’ status.  
Payout will be processed only when it is verified.

Make sure to have your 2fa authentication enabled in your NOWPayments Account (in Account Settings).  
When 2fa is disabled, the code automatically goes to your registration email.  
The code sent by email is valid for one hour.

Next is a description of the required request fields:

- :batch-withdrawal-id - payout id you received in `2. Create payout` method
- verification_code - 2fa code you received with your Google Auth app or via email
    

In order to establish an automatic verification of payouts, you should switch 2FA through the application.  
There are several libraries for different frameworks aimed on generating a 2FA codes based on a secret key from your account settings.  
e.g: Speakeasy for JavaScript.  
We do not recommend to change any default settings.  

```
const 2faVerificationCode = speakeasy.totp({
      your_2fa_secret_key,
      encoding: 'base32',
})
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyPayoutRequest;
import org.openapis.openapi.models.operations.VerifyPayoutRequestBody;
import org.openapis.openapi.models.operations.VerifyPayoutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyPayoutRequest req = new VerifyPayoutRequest("5000000191") {{
                requestBody = new VerifyPayoutRequestBody() {{
                    verificationCode = "123456";
                }};;
                xApiKey = "{{your_api_key}}";
            }};            

            VerifyPayoutResponse res = sdk.payoutsAPI.verifyPayout(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
