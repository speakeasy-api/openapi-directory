package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationDocumentRequest {
    public CreateApplicationDocumentPathParams pathParams;
    public CreateApplicationDocumentRequest withPathParams(CreateApplicationDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationDocumentCreateRequest request;
    public CreateApplicationDocumentRequest withRequest(openapisdk.models.shared.ApplicationDocumentCreateRequest request) {
        this.request = request;
        return this;
    }
}