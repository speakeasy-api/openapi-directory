# generate

## Overview

Operations to generate a token

### Available Operations

* [postVisitorIdentificationV3TokensCreateGenerateToken](#postvisitoridentificationv3tokenscreategeneratetoken) - Generate a token

## postVisitorIdentificationV3TokensCreateGenerateToken

Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse;
import org.openapis.openapi.models.operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity;
import org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.IdentificationTokenGenerationRequest req = new IdentificationTokenGenerationRequest("quibusdam") {{
                firstName = "Leda";
                lastName = "Stiedemann";
            }};            

            PostVisitorIdentificationV3TokensCreateGenerateTokenResponse res = sdk.generate.postVisitorIdentificationV3TokensCreateGenerateToken(req, new PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity() {{
                hapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.identificationTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
