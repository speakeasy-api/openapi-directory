package openapisdk.models.operations;



public class DeleteClientValidatorResponse {
    public String contentType;
    public DeleteClientValidatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteClientValidatorResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteClientValidatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}