package openapisdk.models.operations;



public class ExecuteActionResponse {
    public String contentType;
    public ExecuteActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public ExecuteActionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public ExecuteActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}