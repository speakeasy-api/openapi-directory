package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserChannelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.UserChannelEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public DeleteUserChannelHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.UserChannelEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}