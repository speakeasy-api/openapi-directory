package openapisdk.models.operations;



public class ExtrasImageAttachmentsPartialUpdateResponse {
    public String contentType;
    public ExtrasImageAttachmentsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageAttachment imageAttachment;
    public ExtrasImageAttachmentsPartialUpdateResponse withImageAttachment(openapisdk.models.shared.ImageAttachment imageAttachment) {
        this.imageAttachment = imageAttachment;
        return this;
    }
    public Long statusCode;
    public ExtrasImageAttachmentsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}