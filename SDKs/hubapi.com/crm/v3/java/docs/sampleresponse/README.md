# sampleResponse

## Overview

Operations related to card detail responses sent to HubSpot by an app.

### Available Operations

* [getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse](#getcrmv3extensionscardssampleresponsegetcardssampleresponse) - Get sample card detail response

## getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse

Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse res = sdk.sampleResponse.getCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse();

            if (res.integratorCardPayloadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
