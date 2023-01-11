package openapisdk.models.operations;



public class SignalEvaluateResponse {
    public String contentType;
    public SignalEvaluateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public SignalEvaluateResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> signalEvaluateResponse;
    public SignalEvaluateResponse withSignalEvaluateResponse(java.util.Map<String, Object> signalEvaluateResponse) {
        this.signalEvaluateResponse = signalEvaluateResponse;
        return this;
    }
    public Long statusCode;
    public SignalEvaluateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}