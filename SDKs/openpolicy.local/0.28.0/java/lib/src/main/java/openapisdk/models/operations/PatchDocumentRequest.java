package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDocumentRequest {
    public PatchDocumentPathParams pathParams;
    public PatchDocumentRequest withPathParams(PatchDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PatchesSchema[] request;
    public PatchDocumentRequest withRequest(openapisdk.models.shared.PatchesSchema[] request) {
        this.request = request;
        return this;
    }
}