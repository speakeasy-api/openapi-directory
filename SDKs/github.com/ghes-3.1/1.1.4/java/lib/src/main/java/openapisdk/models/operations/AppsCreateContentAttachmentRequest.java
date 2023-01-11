package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateContentAttachmentRequest {
    public AppsCreateContentAttachmentPathParams pathParams;
    public AppsCreateContentAttachmentRequest withPathParams(AppsCreateContentAttachmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsCreateContentAttachmentRequestBody request;
    public AppsCreateContentAttachmentRequest withRequest(AppsCreateContentAttachmentRequestBody request) {
        this.request = request;
        return this;
    }
}