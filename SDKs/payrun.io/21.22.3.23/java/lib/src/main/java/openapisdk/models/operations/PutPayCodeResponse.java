package openapisdk.models.operations;



public class PutPayCodeResponse {
    public String contentType;
    public PutPayCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutPayCodeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayCode payCode;
    public PutPayCodeResponse withPayCode(openapisdk.models.shared.PayCode payCode) {
        this.payCode = payCode;
        return this;
    }
    public Long statusCode;
    public PutPayCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}