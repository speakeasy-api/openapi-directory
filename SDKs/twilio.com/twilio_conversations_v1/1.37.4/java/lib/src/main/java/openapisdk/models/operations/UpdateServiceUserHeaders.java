package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ServiceUserEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public UpdateServiceUserHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ServiceUserEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}