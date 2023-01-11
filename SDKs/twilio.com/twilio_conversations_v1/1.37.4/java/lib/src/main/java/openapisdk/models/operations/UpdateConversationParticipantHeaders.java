package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConversationParticipantHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public UpdateConversationParticipantHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ConversationParticipantEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}