package openapisdk.models.operations;



public class ExtrasImageAttachmentsReadResponse {
    public String contentType;
    public ExtrasImageAttachmentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageAttachment imageAttachment;
    public ExtrasImageAttachmentsReadResponse withImageAttachment(openapisdk.models.shared.ImageAttachment imageAttachment) {
        this.imageAttachment = imageAttachment;
        return this;
    }
    public Long statusCode;
    public ExtrasImageAttachmentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}