package openapisdk.models.operations;



public class DeleteThirdPartyTransactionTagResponse {
    public String contentType;
    public DeleteThirdPartyTransactionTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteThirdPartyTransactionTagResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteThirdPartyTransactionTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}