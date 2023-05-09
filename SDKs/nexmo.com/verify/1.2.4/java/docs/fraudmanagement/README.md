# fraudManagement

## Overview

Fraud Management

### Available Operations

* [networkUnblock](#networkunblock) - Request a network unblock

## networkUnblock

Request to unblock a network that has been blocked due to potential fraud detection
<div class="Vlt-callout Vlt-callout--critical">
  <div class="Vlt-callout__content">
    <h4>Network Unblock is switched off by default.</h4>
    Please contact Sales to enable the Network Unblock API for your account.
  </div>
</div>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkUnblockResponse;
import org.openapis.openapi.models.shared.NetworkUnblock;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.NetworkUnblock req = new NetworkUnblock() {{
                network = "32526";
                unblockDuration = 3600L;
            }};            

            NetworkUnblockResponse res = sdk.fraudManagement.networkUnblock(req);

            if (res.networkUnblockResponseOk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
