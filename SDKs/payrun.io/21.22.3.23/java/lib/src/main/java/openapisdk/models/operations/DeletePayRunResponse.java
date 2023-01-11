package openapisdk.models.operations;



public class DeletePayRunResponse {
    public String contentType;
    public DeletePayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeletePayRunResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeletePayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}