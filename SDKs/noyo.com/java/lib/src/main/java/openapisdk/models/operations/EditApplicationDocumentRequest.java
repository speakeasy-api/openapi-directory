package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditApplicationDocumentRequest {
    public EditApplicationDocumentPathParams pathParams;
    public EditApplicationDocumentRequest withPathParams(EditApplicationDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationDocumentEditRequest request;
    public EditApplicationDocumentRequest withRequest(openapisdk.models.shared.ApplicationDocumentEditRequest request) {
        this.request = request;
        return this;
    }
}