package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDriversIdRequest {
    public PutDriversIdPathParams pathParams;
    public PutDriversIdRequest withPathParams(PutDriversIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Driver request;
    public PutDriversIdRequest withRequest(openapisdk.models.shared.Driver request) {
        this.request = request;
        return this;
    }
}