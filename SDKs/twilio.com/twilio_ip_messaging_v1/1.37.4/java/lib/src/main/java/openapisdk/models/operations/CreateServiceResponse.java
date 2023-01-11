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
    public openapisdk.models.shared.IpMessagingV1Service ipMessagingV1Service;
    public CreateServiceResponse withIpMessagingV1Service(openapisdk.models.shared.IpMessagingV1Service ipMessagingV1Service) {
        this.ipMessagingV1Service = ipMessagingV1Service;
        return this;
    }
}