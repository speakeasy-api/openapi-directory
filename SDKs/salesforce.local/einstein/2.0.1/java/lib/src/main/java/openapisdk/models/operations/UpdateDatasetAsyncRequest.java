package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatasetAsyncRequest {
    public UpdateDatasetAsyncPathParams pathParams;
    public UpdateDatasetAsyncRequest withPathParams(UpdateDatasetAsyncPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateDatasetAsyncRequestBody request;
    public UpdateDatasetAsyncRequest withRequest(UpdateDatasetAsyncRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateDatasetAsyncSecurity security;
    public UpdateDatasetAsyncRequest withSecurity(UpdateDatasetAsyncSecurity security) {
        this.security = security;
        return this;
    }
}