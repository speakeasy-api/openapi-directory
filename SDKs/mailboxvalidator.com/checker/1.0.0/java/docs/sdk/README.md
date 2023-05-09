# SDK

## Overview

The MailboxValidator Free Email Checker checks if a single email address is from a free email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-freem for further information.

### Available Operations

* [getV1EmailFree](#getv1emailfree) - The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

## getV1EmailFree

The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1EmailFreeFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailFreeRequest;
import org.openapis.openapi.models.operations.GetV1EmailFreeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailFreeRequest req = new GetV1EmailFreeRequest("quibusdam", "unde") {{
                format = GetV1EmailFreeFormatEnum.XML;
            }};            

            GetV1EmailFreeResponse res = sdk.sdk.getV1EmailFree(req);

            if (res.getV1EmailFree200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
