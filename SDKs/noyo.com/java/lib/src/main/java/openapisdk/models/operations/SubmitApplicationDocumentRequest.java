package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitApplicationDocumentRequest {
    public SubmitApplicationDocumentPathParams pathParams;
    public SubmitApplicationDocumentRequest withPathParams(SubmitApplicationDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationDocumentEditRequest request;
    public SubmitApplicationDocumentRequest withRequest(openapisdk.models.shared.ApplicationDocumentEditRequest request) {
        this.request = request;
        return this;
    }
}