package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasImageAttachmentsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageAttachmentInput request;
    public ExtrasImageAttachmentsCreateRequest withRequest(openapisdk.models.shared.ImageAttachmentInput request) {
        this.request = request;
        return this;
    }
}