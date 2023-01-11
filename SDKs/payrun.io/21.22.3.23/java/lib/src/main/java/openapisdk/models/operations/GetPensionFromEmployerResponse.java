package openapisdk.models.operations;



public class GetPensionFromEmployerResponse {
    public String contentType;
    public GetPensionFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPensionFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Pension pension;
    public GetPensionFromEmployerResponse withPension(openapisdk.models.shared.Pension pension) {
        this.pension = pension;
        return this;
    }
    public Long statusCode;
    public GetPensionFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}