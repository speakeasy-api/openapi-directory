<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SendMessageSecurity;
import org.openapis.openapi.models.operations.SendMessageRequestBody5FileChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5FileFile;
import org.openapis.openapi.models.operations.SendMessageRequestBody5FileMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5FileViberServiceCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5FileViberService;
import org.openapis.openapi.models.operations.SendMessageRequestBody5File;
import org.openapis.openapi.models.operations.SendMessageRequestBody5VideoChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5VideoMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5VideoViberServiceCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5VideoViberService;
import org.openapis.openapi.models.operations.SendMessageRequestBody5VideoVideo;
import org.openapis.openapi.models.operations.SendMessageRequestBody5Video;
import org.openapis.openapi.models.operations.SendMessageRequestBody5ImageChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5ImageImage;
import org.openapis.openapi.models.operations.SendMessageRequestBody5ImageMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5ImageViberServiceAction;
import org.openapis.openapi.models.operations.SendMessageRequestBody5ImageViberServiceCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5ImageViberService;
import org.openapis.openapi.models.operations.SendMessageRequestBody5Image;
import org.openapis.openapi.models.operations.SendMessageRequestBody5TextChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5TextMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5TextViberServiceAction;
import org.openapis.openapi.models.operations.SendMessageRequestBody5TextViberServiceCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody5TextViberService;
import org.openapis.openapi.models.operations.SendMessageRequestBody5Text;
import org.openapis.openapi.models.operations.SendMessageRequestBody4FileChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4FileFile;
import org.openapis.openapi.models.operations.SendMessageRequestBody4FileMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4FileMessengerCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4FileMessenger;
import org.openapis.openapi.models.operations.SendMessageRequestBody4File;
import org.openapis.openapi.models.operations.SendMessageRequestBody4VideoChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4VideoMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4VideoMessengerCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4VideoMessenger;
import org.openapis.openapi.models.operations.SendMessageRequestBody4VideoVideo;
import org.openapis.openapi.models.operations.SendMessageRequestBody4Video;
import org.openapis.openapi.models.operations.SendMessageRequestBody4AudioAudio;
import org.openapis.openapi.models.operations.SendMessageRequestBody4AudioChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4AudioMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4AudioMessengerCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4AudioMessenger;
import org.openapis.openapi.models.operations.SendMessageRequestBody4Audio;
import org.openapis.openapi.models.operations.SendMessageRequestBody4ImageChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4ImageImage;
import org.openapis.openapi.models.operations.SendMessageRequestBody4ImageMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4ImageMessengerCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4ImageMessenger;
import org.openapis.openapi.models.operations.SendMessageRequestBody4Image;
import org.openapis.openapi.models.operations.SendMessageRequestBody4TextChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4TextMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4TextMessengerCategoryEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody4TextMessenger;
import org.openapis.openapi.models.operations.SendMessageRequestBody4Text;
import org.openapis.openapi.models.operations.SendMessageRequestBody3CustomChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3CustomMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Custom;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TemplateChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TemplateMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TemplateTemplate;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TemplateWhatsappPolicyEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TemplateWhatsapp;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Template;
import org.openapis.openapi.models.operations.SendMessageRequestBody3FileChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3FileFile;
import org.openapis.openapi.models.operations.SendMessageRequestBody3FileMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3File;
import org.openapis.openapi.models.operations.SendMessageRequestBody3VideoChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3VideoMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3VideoVideo;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Video;
import org.openapis.openapi.models.operations.SendMessageRequestBody3AudioAudio;
import org.openapis.openapi.models.operations.SendMessageRequestBody3AudioChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3AudioMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Audio;
import org.openapis.openapi.models.operations.SendMessageRequestBody3ImageChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3ImageImage;
import org.openapis.openapi.models.operations.SendMessageRequestBody3ImageMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Image;
import org.openapis.openapi.models.operations.SendMessageRequestBody3LocationChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3LocationLocation;
import org.openapis.openapi.models.operations.SendMessageRequestBody3LocationMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Location;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TextChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3TextMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody3Text;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VideoChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VideoMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VideoVideo;
import org.openapis.openapi.models.operations.SendMessageRequestBody2Video;
import org.openapis.openapi.models.operations.SendMessageRequestBody2AudioAudio;
import org.openapis.openapi.models.operations.SendMessageRequestBody2AudioChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2AudioMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2Audio;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VCardChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VCardMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VCardVcard;
import org.openapis.openapi.models.operations.SendMessageRequestBody2VCard;
import org.openapis.openapi.models.operations.SendMessageRequestBody2ImageChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2ImageImage;
import org.openapis.openapi.models.operations.SendMessageRequestBody2ImageMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody2Image;
import org.openapis.openapi.models.operations.SendMessageRequestBody1TextChannelEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody1TextMessageTypeEnum;
import org.openapis.openapi.models.operations.SendMessageRequestBody1Text;
import org.openapis.openapi.models.operations.SendMessageRequest;
import org.openapis.openapi.models.operations.SendMessageResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SchemeBearerAuth;
import org.openapis.openapi.models.shared.MessageStatusSMSChannelEnum;
import org.openapis.openapi.models.shared.MessageStatusSMSError;
import org.openapis.openapi.models.shared.MessageStatusSMSStatusEnum;
import org.openapis.openapi.models.shared.MessageStatusSMSUsageCurrencyEnum;
import org.openapis.openapi.models.shared.MessageStatusSMSUsage;
import org.openapis.openapi.models.shared.MessageStatusSMS;
import org.openapis.openapi.models.shared.MessageStatusMMSChannelEnum;
import org.openapis.openapi.models.shared.MessageStatusMMSError;
import org.openapis.openapi.models.shared.MessageStatusMMSStatusEnum;
import org.openapis.openapi.models.shared.MessageStatusMMSUsageCurrencyEnum;
import org.openapis.openapi.models.shared.MessageStatusMMSUsage;
import org.openapis.openapi.models.shared.MessageStatusMMS;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppChannelEnum;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppError;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppStatusEnum;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppUsageCurrencyEnum;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppUsage;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppWhatsappConversationOrigin;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppWhatsappConversation;
import org.openapis.openapi.models.shared.MessageStatusWhatsAppWhatsapp;
import org.openapis.openapi.models.shared.MessageStatusWhatsApp;
import org.openapis.openapi.models.shared.MessageStatusMessengerChannelEnum;
import org.openapis.openapi.models.shared.MessageStatusMessengerError;
import org.openapis.openapi.models.shared.MessageStatusMessengerStatusEnum;
import org.openapis.openapi.models.shared.MessageStatusMessengerUsageCurrencyEnum;
import org.openapis.openapi.models.shared.MessageStatusMessengerUsage;
import org.openapis.openapi.models.shared.MessageStatusMessenger;
import org.openapis.openapi.models.shared.MessageStatusViberChannelEnum;
import org.openapis.openapi.models.shared.MessageStatusViberError;
import org.openapis.openapi.models.shared.MessageStatusViberStatusEnum;
import org.openapis.openapi.models.shared.MessageStatusViberUsageCurrencyEnum;
import org.openapis.openapi.models.shared.MessageStatusViberUsage;
import org.openapis.openapi.models.shared.MessageStatusViber;
import org.openapis.openapi.models.callbacks.SendMessageMessageStatusResponse;
import org.openapis.openapi.models.callbacks.SendMessageMessageStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendMessageRequest req = new SendMessageRequest() {{
                security = new SendMessageSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new SendMessageRequestBody3Video() {{
                    channel = "whatsapp";
                    clientRef = "distinctio";
                    from = "447700900001";
                    messageType = "video";
                    to = "447700900000";
                    video = new SendMessageRequestBody3VideoVideo() {{
                        url = "https://example.com/video.mp4";
                    }};
                }};
            }};            

            SendMessageResponse res = sdk.sendMessage(req);

            if (res.sendMessage202ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->