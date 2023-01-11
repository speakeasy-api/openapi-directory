package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCircuitInput request;
    public CircuitsCircuitsCreateRequest withRequest(openapisdk.models.shared.WritableCircuitInput request) {
        this.request = request;
        return this;
    }
}