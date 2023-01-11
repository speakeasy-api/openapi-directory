package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTerminationsUpdateRequest {
    public CircuitsCircuitTerminationsUpdatePathParams pathParams;
    public CircuitsCircuitTerminationsUpdateRequest withPathParams(CircuitsCircuitTerminationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCircuitTerminationInput request;
    public CircuitsCircuitTerminationsUpdateRequest withRequest(openapisdk.models.shared.WritableCircuitTerminationInput request) {
        this.request = request;
        return this;
    }
}