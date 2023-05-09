# deprecatedServices

## Overview

Deprecated services

### Available Operations

* [~~merchantCancellation~~](#merchantcancellation) - /merchant/cancellation :warning: **Deprecated**

## ~~merchantCancellation~~

Cancel a booking
**Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MerchantCancellationRequest;
import org.openapis.openapi.models.operations.MerchantCancellationRequestBody;
import org.openapis.openapi.models.operations.MerchantCancellationRequestBodyCancelItems;
import org.openapis.openapi.models.operations.MerchantCancellationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MerchantCancellationRequest req = new MerchantCancellationRequest("en-US") {{
                requestBody = new MerchantCancellationRequestBody() {{
                    cancelItems = new org.openapis.openapi.models.operations.MerchantCancellationRequestBodyCancelItems[]{{
                        add(new MerchantCancellationRequestBodyCancelItems() {{
                            cancelCode = "82";
                            cancelDescription = "magni";
                            distributorItemRef = "JdpItin001";
                            itemId = 330056L;
                        }}),
                    }};
                    distributorRef = "Jdp122";
                    itineraryId = 1234655L;
                }};;
            }};            

            MerchantCancellationResponse res = sdk.deprecatedServices.merchantCancellation(req);

            if (res.merchantCancellation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
