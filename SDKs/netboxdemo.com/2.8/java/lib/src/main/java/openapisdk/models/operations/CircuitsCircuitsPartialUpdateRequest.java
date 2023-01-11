package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsCircuitsPartialUpdateRequest {
    public CircuitsCircuitsPartialUpdatePathParams pathParams;
    public CircuitsCircuitsPartialUpdateRequest withPathParams(CircuitsCircuitsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCircuitInput request;
    public CircuitsCircuitsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableCircuitInput request) {
        this.request = request;
        return this;
    }
}