package openapisdk.models.operations;



public class DeleteScriptResponse {
    public String contentType;
    public DeleteScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Deleted deleted;
    public DeleteScriptResponse withDeleted(openapisdk.models.shared.Deleted deleted) {
        this.deleted = deleted;
        return this;
    }
    public Long statusCode;
    public DeleteScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}