package openapisdk.models.operations;



public class DeleteCisTransactionResponse {
    public String contentType;
    public DeleteCisTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteCisTransactionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteCisTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}