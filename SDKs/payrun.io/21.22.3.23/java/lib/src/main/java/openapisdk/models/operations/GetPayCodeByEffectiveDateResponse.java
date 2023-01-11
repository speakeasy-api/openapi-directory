package openapisdk.models.operations;



public class GetPayCodeByEffectiveDateResponse {
    public String contentType;
    public GetPayCodeByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayCodeByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayCode payCode;
    public GetPayCodeByEffectiveDateResponse withPayCode(openapisdk.models.shared.PayCode payCode) {
        this.payCode = payCode;
        return this;
    }
    public Long statusCode;
    public GetPayCodeByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}