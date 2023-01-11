package openapisdk.models.operations;



public class ExtrasImageAttachmentsUpdateResponse {
    public String contentType;
    public ExtrasImageAttachmentsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageAttachment imageAttachment;
    public ExtrasImageAttachmentsUpdateResponse withImageAttachment(openapisdk.models.shared.ImageAttachment imageAttachment) {
        this.imageAttachment = imageAttachment;
        return this;
    }
    public Long statusCode;
    public ExtrasImageAttachmentsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}