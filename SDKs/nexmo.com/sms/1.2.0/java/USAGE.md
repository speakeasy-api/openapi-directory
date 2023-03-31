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