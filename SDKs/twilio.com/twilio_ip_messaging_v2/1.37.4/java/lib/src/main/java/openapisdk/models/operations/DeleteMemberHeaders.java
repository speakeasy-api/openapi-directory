package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMemberHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Twilio-Webhook-Enabled")
    public openapisdk.models.shared.MemberEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled;
    public DeleteMemberHeaders withXTwilioWebhookEnabled(openapisdk.models.shared.MemberEnumWebhookEnabledTypeEnum xTwilioWebhookEnabled) {
        this.xTwilioWebhookEnabled = xTwilioWebhookEnabled;
        return this;
    }
}