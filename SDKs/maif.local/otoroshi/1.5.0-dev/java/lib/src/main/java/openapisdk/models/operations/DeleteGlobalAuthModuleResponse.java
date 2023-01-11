package openapisdk.models.operations;



public class DeleteGlobalAuthModuleResponse {
    public String contentType;
    public DeleteGlobalAuthModuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteGlobalAuthModuleResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteGlobalAuthModuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}