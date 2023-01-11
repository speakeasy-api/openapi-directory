package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTerminationsPartialUpdateRequest {
    public CircuitsCircuitTerminationsPartialUpdatePathParams pathParams;
    public CircuitsCircuitTerminationsPartialUpdateRequest withPathParams(CircuitsCircuitTerminationsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCircuitTerminationInput request;
    public CircuitsCircuitTerminationsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableCircuitTerminationInput request) {
        this.request = request;
        return this;
    }
}