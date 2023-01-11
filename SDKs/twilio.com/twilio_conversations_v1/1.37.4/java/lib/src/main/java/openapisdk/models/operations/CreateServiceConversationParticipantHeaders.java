package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationParticipantHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateServiceConversationParticipantHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}