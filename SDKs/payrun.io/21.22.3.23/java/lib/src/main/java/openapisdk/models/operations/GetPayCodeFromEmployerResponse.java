package openapisdk.models.operations;



public class GetPayCodeFromEmployerResponse {
    public String contentType;
    public GetPayCodeFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayCodeFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayCode payCode;
    public GetPayCodeFromEmployerResponse withPayCode(openapisdk.models.shared.PayCode payCode) {
        this.payCode = payCode;
        return this;
    }
    public Long statusCode;
    public GetPayCodeFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}