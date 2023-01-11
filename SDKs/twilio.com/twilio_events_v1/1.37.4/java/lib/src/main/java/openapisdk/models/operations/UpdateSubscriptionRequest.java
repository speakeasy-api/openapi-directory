package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionRequest {
    public String serverURL;
    public UpdateSubscriptionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSubscriptionPathParams pathParams;
    public UpdateSubscriptionRequest withPathParams(UpdateSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSubscriptionUpdateSubscriptionRequest request;
    public UpdateSubscriptionRequest withRequest(UpdateSubscriptionUpdateSubscriptionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSubscriptionSecurity security;
    public UpdateSubscriptionRequest withSecurity(UpdateSubscriptionSecurity security) {
        this.security = security;
        return this;
    }
}