package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsProvidersUpdateRequest {
    public CircuitsProvidersUpdatePathParams pathParams;
    public CircuitsProvidersUpdateRequest withPathParams(CircuitsProvidersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProviderInput request;
    public CircuitsProvidersUpdateRequest withRequest(openapisdk.models.shared.ProviderInput request) {
        this.request = request;
        return this;
    }
}