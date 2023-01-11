package openapisdk.models.operations;



public class DeleteRtiTransactionTagResponse {
    public String contentType;
    public DeleteRtiTransactionTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteRtiTransactionTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteRtiTransactionTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}