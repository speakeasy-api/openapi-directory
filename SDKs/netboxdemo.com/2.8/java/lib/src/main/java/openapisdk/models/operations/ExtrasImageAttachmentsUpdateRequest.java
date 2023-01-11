package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasImageAttachmentsUpdateRequest {
    public ExtrasImageAttachmentsUpdatePathParams pathParams;
    public ExtrasImageAttachmentsUpdateRequest withPathParams(ExtrasImageAttachmentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageAttachmentInput request;
    public ExtrasImageAttachmentsUpdateRequest withRequest(openapisdk.models.shared.ImageAttachmentInput request) {
        this.request = request;
        return this;
    }
}