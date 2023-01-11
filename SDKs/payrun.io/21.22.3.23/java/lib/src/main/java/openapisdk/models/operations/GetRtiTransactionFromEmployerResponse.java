package openapisdk.models.operations;



public class GetRtiTransactionFromEmployerResponse {
    public String contentType;
    public GetRtiTransactionFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetRtiTransactionFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.RtiTransactionBase rtiTransactionBase;
    public GetRtiTransactionFromEmployerResponse withRtiTransactionBase(openapisdk.models.shared.RtiTransactionBase rtiTransactionBase) {
        this.rtiTransactionBase = rtiTransactionBase;
        return this;
    }
    public Long statusCode;
    public GetRtiTransactionFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}