package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKvPairRequest {
    public UpdateKvPairPathParams pathParams;
    public UpdateKvPairRequest withPathParams(UpdateKvPairPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyValuePairUpdate request;
    public UpdateKvPairRequest withRequest(openapisdk.models.shared.KeyValuePairUpdate request) {
        this.request = request;
        return this;
    }
}