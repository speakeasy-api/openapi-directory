package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSpotsetsIdRequest {
    public PutSpotsetsIdPathParams pathParams;
    public PutSpotsetsIdRequest withPathParams(PutSpotsetsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpotSetUpdate request;
    public PutSpotsetsIdRequest withRequest(openapisdk.models.shared.SpotSetUpdate request) {
        this.request = request;
        return this;
    }
}