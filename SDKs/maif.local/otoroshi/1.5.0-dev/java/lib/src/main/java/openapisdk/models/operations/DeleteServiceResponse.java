package openapisdk.models.operations;



public class DeleteServiceResponse {
    public String contentType;
    public DeleteServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteServiceResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}