package openapisdk.models.operations;



public class PatchPayCodeResponse {
    public String contentType;
    public PatchPayCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchPayCodeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayCode payCode;
    public PatchPayCodeResponse withPayCode(openapisdk.models.shared.PayCode payCode) {
        this.payCode = payCode;
        return this;
    }
    public Long statusCode;
    public PatchPayCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}