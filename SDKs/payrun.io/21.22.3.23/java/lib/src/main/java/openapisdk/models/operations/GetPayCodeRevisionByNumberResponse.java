package openapisdk.models.operations;



public class GetPayCodeRevisionByNumberResponse {
    public String contentType;
    public GetPayCodeRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPayCodeRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.PayCode payCode;
    public GetPayCodeRevisionByNumberResponse withPayCode(openapisdk.models.shared.PayCode payCode) {
        this.payCode = payCode;
        return this;
    }
    public Long statusCode;
    public GetPayCodeRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}