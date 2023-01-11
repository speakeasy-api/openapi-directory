package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServiceCreateServiceRequest {
    @SpeakeasyMetadata("form:name=AclEnabled")
    public Boolean aclEnabled;
    public CreateServiceCreateServiceRequest withAclEnabled(Boolean aclEnabled) {
        this.aclEnabled = aclEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateServiceCreateServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityDebouncingEnabled")
    public Boolean reachabilityDebouncingEnabled;
    public CreateServiceCreateServiceRequest withReachabilityDebouncingEnabled(Boolean reachabilityDebouncingEnabled) {
        this.reachabilityDebouncingEnabled = reachabilityDebouncingEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityDebouncingWindow")
    public Long reachabilityDebouncingWindow;
    public CreateServiceCreateServiceRequest withReachabilityDebouncingWindow(Long reachabilityDebouncingWindow) {
        this.reachabilityDebouncingWindow = reachabilityDebouncingWindow;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityWebhooksEnabled")
    public Boolean reachabilityWebhooksEnabled;
    public CreateServiceCreateServiceRequest withReachabilityWebhooksEnabled(Boolean reachabilityWebhooksEnabled) {
        this.reachabilityWebhooksEnabled = reachabilityWebhooksEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public CreateServiceCreateServiceRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhooksFromRestEnabled")
    public Boolean webhooksFromRestEnabled;
    public CreateServiceCreateServiceRequest withWebhooksFromRestEnabled(Boolean webhooksFromRestEnabled) {
        this.webhooksFromRestEnabled = webhooksFromRestEnabled;
        return this;
    }
}