package openapisdk.models.operations;



public class FetchServiceResponse {
    public String contentType;
    public FetchServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NotifyV1Service notifyV1Service;
    public FetchServiceResponse withNotifyV1Service(openapisdk.models.shared.NotifyV1Service notifyV1Service) {
        this.notifyV1Service = notifyV1Service;
        return this;
    }
}