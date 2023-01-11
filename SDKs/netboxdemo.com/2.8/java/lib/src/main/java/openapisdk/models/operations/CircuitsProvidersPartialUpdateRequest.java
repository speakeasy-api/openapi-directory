package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsProvidersPartialUpdateRequest {
    public CircuitsProvidersPartialUpdatePathParams pathParams;
    public CircuitsProvidersPartialUpdateRequest withPathParams(CircuitsProvidersPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProviderInput request;
    public CircuitsProvidersPartialUpdateRequest withRequest(openapisdk.models.shared.ProviderInput request) {
        this.request = request;
        return this;
    }
}