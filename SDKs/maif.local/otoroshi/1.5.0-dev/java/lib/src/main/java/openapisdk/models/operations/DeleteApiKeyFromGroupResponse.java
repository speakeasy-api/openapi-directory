package openapisdk.models.operations;



public class DeleteApiKeyFromGroupResponse {
    public String contentType;
    public DeleteApiKeyFromGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteApiKeyFromGroupResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteApiKeyFromGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}