package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTypesPartialUpdateRequest {
    public CircuitsCircuitTypesPartialUpdatePathParams pathParams;
    public CircuitsCircuitTypesPartialUpdateRequest withPathParams(CircuitsCircuitTypesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CircuitTypeInput request;
    public CircuitsCircuitTypesPartialUpdateRequest withRequest(openapisdk.models.shared.CircuitTypeInput request) {
        this.request = request;
        return this;
    }
}