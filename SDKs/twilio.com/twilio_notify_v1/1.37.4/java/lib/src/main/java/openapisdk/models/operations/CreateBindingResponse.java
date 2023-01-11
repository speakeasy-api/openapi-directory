package openapisdk.models.operations;



public class CreateBindingResponse {
    public String contentType;
    public CreateBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NotifyV1ServiceBinding notifyV1ServiceBinding;
    public CreateBindingResponse withNotifyV1ServiceBinding(openapisdk.models.shared.NotifyV1ServiceBinding notifyV1ServiceBinding) {
        this.notifyV1ServiceBinding = notifyV1ServiceBinding;
        return this;
    }
}