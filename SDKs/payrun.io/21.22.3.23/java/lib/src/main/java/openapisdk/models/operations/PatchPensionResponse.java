package openapisdk.models.operations;



public class PatchPensionResponse {
    public String contentType;
    public PatchPensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchPensionResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Pension pension;
    public PatchPensionResponse withPension(openapisdk.models.shared.Pension pension) {
        this.pension = pension;
        return this;
    }
    public Long statusCode;
    public PatchPensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}