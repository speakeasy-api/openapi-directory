package openapisdk.models.operations;



public class DeleteGlobalJwtVerifierResponse {
    public String contentType;
    public DeleteGlobalJwtVerifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteGlobalJwtVerifierResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteGlobalJwtVerifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}