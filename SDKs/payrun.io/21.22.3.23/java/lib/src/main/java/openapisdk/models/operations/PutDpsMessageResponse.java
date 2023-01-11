package openapisdk.models.operations;



public class PutDpsMessageResponse {
    public String contentType;
    public PutDpsMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DpsMessage dpsMessage;
    public PutDpsMessageResponse withDpsMessage(openapisdk.models.shared.DpsMessage dpsMessage) {
        this.dpsMessage = dpsMessage;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutDpsMessageResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutDpsMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}