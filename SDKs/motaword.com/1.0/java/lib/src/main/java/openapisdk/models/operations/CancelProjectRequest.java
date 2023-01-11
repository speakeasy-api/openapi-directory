package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelProjectRequest {
    public CancelProjectPathParams pathParams;
    public CancelProjectRequest withPathParams(CancelProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CancelProjectRequestBody request;
    public CancelProjectRequest withRequest(CancelProjectRequestBody request) {
        this.request = request;
        return this;
    }
}