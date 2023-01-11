package openapisdk.models.operations;



public class GetThirdPartyTransactionResponse {
    public String contentType;
    public GetThirdPartyTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetThirdPartyTransactionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetThirdPartyTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object thirdPartyTransaction;
    public GetThirdPartyTransactionResponse withThirdPartyTransaction(Object thirdPartyTransaction) {
        this.thirdPartyTransaction = thirdPartyTransaction;
        return this;
    }
}