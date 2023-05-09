# clientCredentials

### Available Operations

* [addClientSecret](#addclientsecret) - Obtain new client secret.

## addClientSecret

Obtain new client secret for Paylocity-issued client id. See Setup section for details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddClientSecretResponse;
import org.openapis.openapi.models.operations.AddClientSecretSecurity;
import org.openapis.openapi.models.shared.AddClientSecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AddClientSecret req = new AddClientSecret("veritatis");            

            AddClientSecretResponse res = sdk.clientCredentials.addClientSecret(req, new AddClientSecretSecurity("deserunt") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientCredentialsResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
