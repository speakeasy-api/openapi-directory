# payorHierarchy

## Overview

<p>Payors that are part of the same organization can be linked together in a hierarchical fashion</p>
<p>Payors higher up in the tree can read and write data on behalf of payors below them</p>
<p>For example Payor A can make payouts on behalf of Payor B if Payor B is linked below Payor A</p>
<p>Payors can not access data of payors above them in the hierarchy</p>
<p>Contact Velo if you need to link payors in your organization</p>


### Available Operations

* [payorLinksV1](#payorlinksv1) - List Payor Links

## payorLinksV1

<p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayorLinksV1Request;
import org.openapis.openapi.models.operations.PayorLinksV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayorLinksV1Request req = new PayorLinksV1Request() {{
                descendantsOfPayor = "f350d8cd-b5a3-4418-9430-10421813d520";
                fields = "quas";
                parentOfPayor = "ece7e253-b668-4451-86c6-e205e16deab3";
            }};            

            PayorLinksV1Response res = sdk.payorHierarchy.payorLinksV1(req);

            if (res.payorLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
