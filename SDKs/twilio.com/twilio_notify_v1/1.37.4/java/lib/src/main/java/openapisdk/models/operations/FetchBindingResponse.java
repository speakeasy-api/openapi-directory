package openapisdk.models.operations;



public class FetchBindingResponse {
    public String contentType;
    public FetchBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NotifyV1ServiceBinding notifyV1ServiceBinding;
    public FetchBindingResponse withNotifyV1ServiceBinding(openapisdk.models.shared.NotifyV1ServiceBinding notifyV1ServiceBinding) {
        this.notifyV1ServiceBinding = notifyV1ServiceBinding;
        return this;
    }
}