package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasImageAttachmentsPartialUpdateRequest {
    public ExtrasImageAttachmentsPartialUpdatePathParams pathParams;
    public ExtrasImageAttachmentsPartialUpdateRequest withPathParams(ExtrasImageAttachmentsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageAttachmentInput request;
    public ExtrasImageAttachmentsPartialUpdateRequest withRequest(openapisdk.models.shared.ImageAttachmentInput request) {
        this.request = request;
        return this;
    }
}