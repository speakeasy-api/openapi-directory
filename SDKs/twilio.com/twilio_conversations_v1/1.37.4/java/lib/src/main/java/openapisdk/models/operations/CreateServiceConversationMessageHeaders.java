package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateServiceConversationMessageHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}