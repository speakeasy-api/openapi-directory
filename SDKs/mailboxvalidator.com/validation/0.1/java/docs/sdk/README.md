# SDK

## Overview

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format. Refer to https://www.mailboxvalidator.com for further information.

### Available Operations

* [getV1ValidationSingle](#getv1validationsingle) - The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

## getV1ValidationSingle

The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1ValidationSingleFormatEnum;
import org.openapis.openapi.models.operations.GetV1ValidationSingleRequest;
import org.openapis.openapi.models.operations.GetV1ValidationSingleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1ValidationSingleRequest req = new GetV1ValidationSingleRequest("quibusdam", "unde") {{
                format = GetV1ValidationSingleFormatEnum.XML;
            }};            

            GetV1ValidationSingleResponse res = sdk.sdk.getV1ValidationSingle(req);

            if (res.getV1ValidationSingle200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
