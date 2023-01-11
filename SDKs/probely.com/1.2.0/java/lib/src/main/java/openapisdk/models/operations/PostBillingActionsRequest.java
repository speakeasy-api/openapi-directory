package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBillingActionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public PostBillingActionsRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}