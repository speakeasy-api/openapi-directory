# SDK

## Overview

The [Redact API](/redact/overview) helps organisations meet their privacy compliance obligations. It provides controlled, on-demand redaction of private information from transactional records in the long-term storage. Note, Redact API does not have the capability to redact the short-lived server logs that are retained for a few weeks. For SMS customers that need immediate redaction, Vonage suggests using [Advanced Auto-redact](/redact/overview#auto-redact-vs-redact-api).

### Available Operations

* [redactMessage](#redactmessage) - Redact a specific message

## redactMessage

Redact a specific message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RedactMessageResponse;
import org.openapis.openapi.models.operations.RedactMessageSecurity;
import org.openapis.openapi.models.shared.RedactTransaction;
import org.openapis.openapi.models.shared.RedactTransactionProductEnum;
import org.openapis.openapi.models.shared.RedactTransactionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RedactTransaction req = new RedactTransaction("209ab3c7536542b91e8b5aef032f6861", RedactTransactionProductEnum.SMS, RedactTransactionTypeEnum.OUTBOUND);            

            RedactMessageResponse res = sdk.sdk.redactMessage(req, new RedactMessageSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
