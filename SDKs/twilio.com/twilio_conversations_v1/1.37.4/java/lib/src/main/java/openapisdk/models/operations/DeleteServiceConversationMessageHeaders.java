package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServiceConversationMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public DeleteServiceConversationMessageHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}