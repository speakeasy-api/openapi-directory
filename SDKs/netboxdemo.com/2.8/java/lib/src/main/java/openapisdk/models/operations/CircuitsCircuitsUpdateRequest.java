package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitsUpdateRequest {
    public CircuitsCircuitsUpdatePathParams pathParams;
    public CircuitsCircuitsUpdateRequest withPathParams(CircuitsCircuitsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCircuitInput request;
    public CircuitsCircuitsUpdateRequest withRequest(openapisdk.models.shared.WritableCircuitInput request) {
        this.request = request;
        return this;
    }
}