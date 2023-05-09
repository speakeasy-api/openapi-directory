<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.callbacks.SendAnSmsDeliveryReceiptResponse;
import org.openapis.openapi.models.operations.SendAnSmsFormatEnum;
import org.openapis.openapi.models.operations.SendAnSmsRequest;
import org.openapis.openapi.models.operations.SendAnSmsResponse;
import org.openapis.openapi.models.shared.DeliveryReceipt;
import org.openapis.openapi.models.shared.NewMessage;
import org.openapis.openapi.models.shared.NewMessageMessageClassEnum;
import org.openapis.openapi.models.shared.NewMessageTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendAnSmsRequest req = new SendAnSmsRequest(                new NewMessage("abcd1234", "AcmeInc", "447700900000") {{
                                accountRef = "customer1234";
                                apiSecret = "abcdef0123456789";
                                body = "0011223344556677";
                                callback = "https://example.com/sms-dlr";
                                clientRef = "my-personal-reference";
                                contentId = "1107457532145798767";
                                entityId = "1101456324675322134";
                                messageClass = NewMessageMessageClassEnum.TWO;
                                protocolId = 127L;
                                sig = "provident";
                                statusReportReq = false;
                                text = "Hello World!";
                                ttl = 900000L;
                                type = NewMessageTypeEnum.TEXT;
                                udh = "06050415811581";
                            }};, SendAnSmsFormatEnum.JSON);            

            SendAnSmsResponse res = sdk.sendAnSms(req);

            if (res.sendAnSms200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->