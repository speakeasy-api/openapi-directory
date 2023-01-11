package openapisdk.models.operations;



public class ExtrasImageAttachmentsCreateResponse {
    public String contentType;
    public ExtrasImageAttachmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageAttachment imageAttachment;
    public ExtrasImageAttachmentsCreateResponse withImageAttachment(openapisdk.models.shared.ImageAttachment imageAttachment) {
        this.imageAttachment = imageAttachment;
        return this;
    }
    public Long statusCode;
    public ExtrasImageAttachmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}