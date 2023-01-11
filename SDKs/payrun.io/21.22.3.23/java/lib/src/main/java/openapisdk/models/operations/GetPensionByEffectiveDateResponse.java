package openapisdk.models.operations;



public class GetPensionByEffectiveDateResponse {
    public String contentType;
    public GetPensionByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPensionByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Pension pension;
    public GetPensionByEffectiveDateResponse withPension(openapisdk.models.shared.Pension pension) {
        this.pension = pension;
        return this;
    }
    public Long statusCode;
    public GetPensionByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}