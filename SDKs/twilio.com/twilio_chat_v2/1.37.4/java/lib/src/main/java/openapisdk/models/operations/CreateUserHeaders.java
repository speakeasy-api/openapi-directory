package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.UserEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public CreateUserHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.UserEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}