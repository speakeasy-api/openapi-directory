package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMessageHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.MessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public DeleteMessageHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.MessageEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}