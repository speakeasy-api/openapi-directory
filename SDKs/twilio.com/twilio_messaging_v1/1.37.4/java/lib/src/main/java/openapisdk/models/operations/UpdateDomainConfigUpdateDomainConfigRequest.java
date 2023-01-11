package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainConfigUpdateDomainConfigRequest {
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public UpdateDomainConfigUpdateDomainConfigRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackUrl")
    public String fallbackUrl;
    public UpdateDomainConfigUpdateDomainConfigRequest withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSids")
    public String[] messagingServiceSids;
    public UpdateDomainConfigUpdateDomainConfigRequest withMessagingServiceSids(String[] messagingServiceSids) {
        this.messagingServiceSids = messagingServiceSids;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessagingServiceSidsAction")
    public String messagingServiceSidsAction;
    public UpdateDomainConfigUpdateDomainConfigRequest withMessagingServiceSidsAction(String messagingServiceSidsAction) {
        this.messagingServiceSidsAction = messagingServiceSidsAction;
        return this;
    }
}