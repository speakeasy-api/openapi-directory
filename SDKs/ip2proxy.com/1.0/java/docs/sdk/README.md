# SDK

## Overview

IP2Proxy allows instant detection of anonymous proxy, VPN, TOR exit nodes, search engine robots (SES), data center ranges (PX2-PX10), residential proxies (PX10) and VPN provider name (PX11) by IP address. It also returns the threat type of the proxy (PX9 or higher). Visit https://www.ip2location.com/web-service/ip2proxy for further information.

### Available Operations

* [get](#get) - Check if an IP address is proxy

## get

Check if an IP address is proxy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFormatEnum;
import org.openapis.openapi.models.operations.GetRequest;
import org.openapis.openapi.models.operations.GetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRequest req = new GetRequest("unde", "nulla") {{
                format = GetFormatEnum.XML;
                package_ = "illum";
            }};            

            GetResponse res = sdk.sdk.get(req);

            if (res.get200TextHTMLString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
