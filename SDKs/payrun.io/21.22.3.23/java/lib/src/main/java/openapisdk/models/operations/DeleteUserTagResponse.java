package openapisdk.models.operations;



public class DeleteUserTagResponse {
    public String contentType;
    public DeleteUserTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteUserTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteUserTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}