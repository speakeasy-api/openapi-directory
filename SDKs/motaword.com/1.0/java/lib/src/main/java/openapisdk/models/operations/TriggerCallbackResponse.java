package openapisdk.models.operations;



public class TriggerCallbackResponse {
    public openapisdk.models.shared.CallbackResult callbackResult;
    public TriggerCallbackResponse withCallbackResult(openapisdk.models.shared.CallbackResult callbackResult) {
        this.callbackResult = callbackResult;
        return this;
    }
    public String contentType;
    public TriggerCallbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TriggerCallbackResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TriggerCallbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}