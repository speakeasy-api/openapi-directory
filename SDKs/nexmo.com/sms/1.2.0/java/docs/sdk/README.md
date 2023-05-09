# SDK

## Overview

With the SMS API you can send SMS from your account and lookup messages both messages that you've sent as well as messages sent to your virtual numbers. Numbers are specified in E.164 format. More SMS API documentation is at <https://developer.nexmo.com/messaging/sms/overview>

### Available Operations

* [sendAnSms](#sendansms) - Send an SMS

## sendAnSms

Send an outbound SMS from your Vonage account

### Example Usage

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
                                sig = "quibusdam";
                                statusReportReq = false;
                                text = "Hello World!";
                                ttl = 900000L;
                                type = NewMessageTypeEnum.TEXT;
                                udh = "06050415811581";
                            }};, SendAnSmsFormatEnum.JSON);            

            SendAnSmsResponse res = sdk.sdk.sendAnSms(req);

            if (res.sendAnSms200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
