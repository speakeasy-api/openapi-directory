package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectDocumentRequest {
    public CreateProjectDocumentPathParams pathParams;
    public CreateProjectDocumentRequest withPathParams(CreateProjectDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateProjectDocumentRequestBody request;
    public CreateProjectDocumentRequest withRequest(CreateProjectDocumentRequestBody request) {
        this.request = request;
        return this;
    }
}