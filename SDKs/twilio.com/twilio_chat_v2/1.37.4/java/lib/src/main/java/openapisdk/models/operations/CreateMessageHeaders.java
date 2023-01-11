package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.MessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateMessageHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.MessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}