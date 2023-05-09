# mimeEmailPayloads

## Overview

MIME content for email

### Available Operations

* [getV2MimeEmailPayloadsIdJson](#getv2mimeemailpayloadsidjson) - Fetch the MIME content for email

## getV2MimeEmailPayloadsIdJson

Fetch the MIME content for email.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2MimeEmailPayloadsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2MimeEmailPayloadsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2MimeEmailPayloadsIdJsonRequest req = new GetV2MimeEmailPayloadsIdJsonRequest("est");            

            GetV2MimeEmailPayloadsIdJsonResponse res = sdk.mimeEmailPayloads.getV2MimeEmailPayloadsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
