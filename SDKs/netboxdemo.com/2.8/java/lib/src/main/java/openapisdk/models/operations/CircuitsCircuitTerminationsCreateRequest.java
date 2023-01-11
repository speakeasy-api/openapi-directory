package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitTerminationsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCircuitTerminationInput request;
    public CircuitsCircuitTerminationsCreateRequest withRequest(openapisdk.models.shared.WritableCircuitTerminationInput request) {
        this.request = request;
        return this;
    }
}