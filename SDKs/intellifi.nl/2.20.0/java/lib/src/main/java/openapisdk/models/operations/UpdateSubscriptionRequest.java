package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionRequest {
    public UpdateSubscriptionPathParams pathParams;
    public UpdateSubscriptionRequest withPathParams(UpdateSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscriptionInput request;
    public UpdateSubscriptionRequest withRequest(openapisdk.models.shared.SubscriptionInput request) {
        this.request = request;
        return this;
    }
}