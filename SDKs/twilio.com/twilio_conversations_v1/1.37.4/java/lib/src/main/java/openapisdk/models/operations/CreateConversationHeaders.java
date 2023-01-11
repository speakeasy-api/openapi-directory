package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ConversationEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateConversationHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ConversationEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}