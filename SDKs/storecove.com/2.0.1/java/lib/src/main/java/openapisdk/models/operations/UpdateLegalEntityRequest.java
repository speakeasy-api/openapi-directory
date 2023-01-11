package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLegalEntityRequest {
    public UpdateLegalEntityPathParams pathParams;
    public UpdateLegalEntityRequest withPathParams(UpdateLegalEntityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateLegalEntityRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}