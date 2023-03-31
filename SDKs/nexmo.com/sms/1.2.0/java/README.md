# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SendAnSmsFormatEnum;
import org.openapis.openapi.models.operations.SendAnSmsPathParams;
import org.openapis.openapi.models.operations.SendAnSmsRequest;
import org.openapis.openapi.models.operations.SendAnSmsResponse;
import org.openapis.openapi.models.shared.NewMessageMessageClassEnum;
import org.openapis.openapi.models.shared.NewMessageTypeEnum;
import org.openapis.openapi.models.shared.NewMessage;
import org.openapis.openapi.models.shared.DeliveryReceipt;
import org.openapis.openapi.models.callbacks.SendAnSmsDeliveryReceiptResponse;
import org.openapis.openapi.models.callbacks.SendAnSmsDeliveryReceiptRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendAnSmsRequest req = new SendAnSmsRequest() {{
                pathParams = new SendAnSmsPathParams() {{
                    format = "json";
                }};
                request = new NewMessage() {{
                    accountRef = "customer1234";
                    apiKey = "abcd1234";
                    apiSecret = "abcdef0123456789";
                    body = "0011223344556677";
                    callback = "https://example.com/sms-dlr";
                    clientRef = "my-personal-reference";
                    contentId = "1107457532145798767";
                    entityId = "1101456324675322134";
                    from = "AcmeInc";
                    messageClass = "2";
                    protocolId = 127;
                    sig = "provident";
                    statusReportReq = false;
                    text = "Hello World!";
                    to = "447700900000";
                    ttl = 900000;
                    type = "text";
                    udh = "06050415811581";
                }};
            }};            

            SendAnSmsResponse res = sdk.sendAnSms(req);

            if (res.sendAnSms200ApplicationJSONOneOf.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `sendAnSms` - Send an SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
