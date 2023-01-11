package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTypesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CircuitTypeInput request;
    public CircuitsCircuitTypesCreateRequest withRequest(openapisdk.models.shared.CircuitTypeInput request) {
        this.request = request;
        return this;
    }
}