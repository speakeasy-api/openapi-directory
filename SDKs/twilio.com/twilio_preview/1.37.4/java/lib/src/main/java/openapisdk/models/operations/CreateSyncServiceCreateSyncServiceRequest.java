package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSyncServiceCreateSyncServiceRequest {
    @SpeakeasyMetadata("form:name=AclEnabled")
    public Boolean aclEnabled;
    public CreateSyncServiceCreateSyncServiceRequest withAclEnabled(Boolean aclEnabled) {
        this.aclEnabled = aclEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateSyncServiceCreateSyncServiceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityWebhooksEnabled")
    public Boolean reachabilityWebhooksEnabled;
    public CreateSyncServiceCreateSyncServiceRequest withReachabilityWebhooksEnabled(Boolean reachabilityWebhooksEnabled) {
        this.reachabilityWebhooksEnabled = reachabilityWebhooksEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=WebhookUrl")
    public String webhookUrl;
    public CreateSyncServiceCreateSyncServiceRequest withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}