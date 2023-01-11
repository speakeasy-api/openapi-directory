package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NotifyV1Service notifyV1Service;
    public CreateServiceResponse withNotifyV1Service(openapisdk.models.shared.NotifyV1Service notifyV1Service) {
        this.notifyV1Service = notifyV1Service;
        return this;
    }
}