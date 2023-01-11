package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceUpdateServiceRequest {
    @SpeakeasyMetadata("form:name=AclEnabled")
    public Boolean aclEnabled;
    public UpdateServiceUpdateServiceRequest withAclEnabled(Boolean aclEnabled) {
        this.aclEnabled = aclEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateServiceUpdateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityDebouncingEnabled")
    public Boolean reachabilityDebouncingEnabled;
    public UpdateServiceUpdateServiceRequest withReachabilityDebouncingEnabled(Boolean reachabilityDebouncingEnabled) {
        this.reachabilityDebouncingEnabled = reachabilityDebouncingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityDebouncingWindow")
    public Long reachabilityDebouncingWindow;
    public UpdateServiceUpdateServiceRequest withReachabilityDebouncingWindow(Long reachabilityDebouncingWindow) {
        this.reachabilityDebouncingWindow = reachabilityDebouncingWindow;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityWebhooksEnabled")
    public Boolean reachabilityWebhooksEnabled;
    public UpdateServiceUpdateServiceRequest withReachabilityWebhooksEnabled(Boolean reachabilityWebhooksEnabled) {
        this.reachabilityWebhooksEnabled = reachabilityWebhooksEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public UpdateServiceUpdateServiceRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhooksFromRestEnabled")
    public Boolean webhooksFromRestEnabled;
    public UpdateServiceUpdateServiceRequest withWebhooksFromRestEnabled(Boolean webhooksFromRestEnabled) {
        this.webhooksFromRestEnabled = webhooksFromRestEnabled;
        return this;
    }
}