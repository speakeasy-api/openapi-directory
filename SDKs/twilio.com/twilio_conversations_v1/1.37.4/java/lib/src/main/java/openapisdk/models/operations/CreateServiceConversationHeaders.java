package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceConversationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ServiceConversationEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateServiceConversationHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ServiceConversationEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}