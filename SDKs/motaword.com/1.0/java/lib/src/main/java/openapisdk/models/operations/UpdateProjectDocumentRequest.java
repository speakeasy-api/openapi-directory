package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectDocumentRequest {
    public UpdateProjectDocumentPathParams pathParams;
    public UpdateProjectDocumentRequest withPathParams(UpdateProjectDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateProjectDocumentRequestBody request;
    public UpdateProjectDocumentRequest withRequest(UpdateProjectDocumentRequestBody request) {
        this.request = request;
        return this;
    }
}