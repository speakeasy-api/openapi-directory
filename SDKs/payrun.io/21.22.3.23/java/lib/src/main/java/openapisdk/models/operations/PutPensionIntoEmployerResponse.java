package openapisdk.models.operations;



public class PutPensionIntoEmployerResponse {
    public String contentType;
    public PutPensionIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutPensionIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Pension pension;
    public PutPensionIntoEmployerResponse withPension(openapisdk.models.shared.Pension pension) {
        this.pension = pension;
        return this;
    }
    public Long statusCode;
    public PutPensionIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}