package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsProvidersCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProviderInput request;
    public CircuitsProvidersCreateRequest withRequest(openapisdk.models.shared.ProviderInput request) {
        this.request = request;
        return this;
    }
}