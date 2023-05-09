# SDK

## Overview

The MailboxValidator Disposable Email Checker API checks if a single email address is from a disposable email provider and returns the results in either JSON or XML format. Refer to https://www.mailboxvalidator.com/api-email-disposable for further information.

### Available Operations

* [getV1EmailDisposable](#getv1emaildisposable) - The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

## getV1EmailDisposable

The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1EmailDisposableFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailDisposableRequest;
import org.openapis.openapi.models.operations.GetV1EmailDisposableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailDisposableRequest req = new GetV1EmailDisposableRequest("quibusdam", "unde") {{
                format = GetV1EmailDisposableFormatEnum.XML;
            }};            

            GetV1EmailDisposableResponse res = sdk.sdk.getV1EmailDisposable(req);

            if (res.getV1EmailDisposable200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
