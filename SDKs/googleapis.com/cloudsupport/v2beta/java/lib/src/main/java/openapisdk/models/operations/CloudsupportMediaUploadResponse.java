package openapisdk.models.operations;



public class CloudsupportMediaUploadResponse {
    public openapisdk.models.shared.Attachment attachment;
    public CloudsupportMediaUploadResponse withAttachment(openapisdk.models.shared.Attachment attachment) {
        this.attachment = attachment;
        return this;
    }
    public String contentType;
    public CloudsupportMediaUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudsupportMediaUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}