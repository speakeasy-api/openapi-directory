package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeDiscoverabilityRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeDiscoverabilityRequest request;
    public ChangeDiscoverabilityRequest withRequest(openapisdk.models.shared.ChangeDiscoverabilityRequest request) {
        this.request = request;
        return this;
    }
}