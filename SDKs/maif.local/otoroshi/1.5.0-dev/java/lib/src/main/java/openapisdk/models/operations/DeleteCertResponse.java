package openapisdk.models.operations;



public class DeleteCertResponse {
    public String contentType;
    public DeleteCertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteCertResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteCertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}