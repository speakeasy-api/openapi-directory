# applePay

### Available Operations

* [registerDomain](#registerdomain) - RegisterDomain

## registerDomain

Activates a domain for use with Apple Pay on the Web and Square. A validation
is performed on this domain by Apple to ensure that it is properly set up as
an Apple Pay enabled domain.

This endpoint provides an easy way for platform developers to bulk activate
Apple Pay on the Web with Square for merchants using their platform.

To learn more about Web Apple Pay, see
[Add the Apple Pay on the Web Button](https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDomainResponse;
import org.openapis.openapi.models.operations.RegisterDomainSecurity;
import org.openapis.openapi.models.shared.RegisterDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RegisterDomainRequest req = new RegisterDomainRequest("distinctio");            

            RegisterDomainResponse res = sdk.applePay.registerDomain(req, new RegisterDomainSecurity("quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.registerDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
