package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTypesUpdateRequest {
    public CircuitsCircuitTypesUpdatePathParams pathParams;
    public CircuitsCircuitTypesUpdateRequest withPathParams(CircuitsCircuitTypesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CircuitTypeInput request;
    public CircuitsCircuitTypesUpdateRequest withRequest(openapisdk.models.shared.CircuitTypeInput request) {
        this.request = request;
        return this;
    }
}