package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PublicUpdateSubscriptionStatusRequest request;
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest withRequest(openapisdk.models.shared.PublicUpdateSubscriptionStatusRequest request) {
        this.request = request;
        return this;
    }
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity security;
    public PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest withSecurity(PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity security) {
        this.security = security;
        return this;
    }
}