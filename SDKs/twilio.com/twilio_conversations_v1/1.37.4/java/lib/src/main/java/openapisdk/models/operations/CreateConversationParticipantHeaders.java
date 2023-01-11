package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConversationParticipantHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateConversationParticipantHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}