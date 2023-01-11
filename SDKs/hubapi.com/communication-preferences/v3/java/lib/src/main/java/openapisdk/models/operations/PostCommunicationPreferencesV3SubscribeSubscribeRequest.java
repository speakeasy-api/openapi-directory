package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommunicationPreferencesV3SubscribeSubscribeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PublicUpdateSubscriptionStatusRequest request;
    public PostCommunicationPreferencesV3SubscribeSubscribeRequest withRequest(openapisdk.models.shared.PublicUpdateSubscriptionStatusRequest request) {
        this.request = request;
        return this;
    }
    public PostCommunicationPreferencesV3SubscribeSubscribeSecurity security;
    public PostCommunicationPreferencesV3SubscribeSubscribeRequest withSecurity(PostCommunicationPreferencesV3SubscribeSubscribeSecurity security) {
        this.security = security;
        return this;
    }
}