package openapisdk.models.operations;



public class UpdateServiceResponse {
    public String contentType;
    public UpdateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NotifyV1Service notifyV1Service;
    public UpdateServiceResponse withNotifyV1Service(openapisdk.models.shared.NotifyV1Service notifyV1Service) {
        this.notifyV1Service = notifyV1Service;
        return this;
    }
}