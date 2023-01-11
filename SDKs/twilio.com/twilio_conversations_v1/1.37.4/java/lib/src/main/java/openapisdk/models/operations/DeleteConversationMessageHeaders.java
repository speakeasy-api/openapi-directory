package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConversationMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ConversationMessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public DeleteConversationMessageHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ConversationMessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}