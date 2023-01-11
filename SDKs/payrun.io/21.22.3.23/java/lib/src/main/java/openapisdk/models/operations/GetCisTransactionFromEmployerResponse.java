package openapisdk.models.operations;



public class GetCisTransactionFromEmployerResponse {
    public openapisdk.models.shared.CisTransaction cisTransaction;
    public GetCisTransactionFromEmployerResponse withCisTransaction(openapisdk.models.shared.CisTransaction cisTransaction) {
        this.cisTransaction = cisTransaction;
        return this;
    }
    public String contentType;
    public GetCisTransactionFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisTransactionFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCisTransactionFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}