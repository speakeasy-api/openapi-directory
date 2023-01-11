package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitProjectReportsRequest {
    public SubmitProjectReportsPathParams pathParams;
    public SubmitProjectReportsRequest withPathParams(SubmitProjectReportsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SubmitProjectReportsRequestBody request;
    public SubmitProjectReportsRequest withRequest(SubmitProjectReportsRequestBody request) {
        this.request = request;
        return this;
    }
}