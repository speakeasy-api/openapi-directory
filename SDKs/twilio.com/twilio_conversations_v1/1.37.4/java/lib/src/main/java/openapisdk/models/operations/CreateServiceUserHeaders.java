package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.ServiceUserEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateServiceUserHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.ServiceUserEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}