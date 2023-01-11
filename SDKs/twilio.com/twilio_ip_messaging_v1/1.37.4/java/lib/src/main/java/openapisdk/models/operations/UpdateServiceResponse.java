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
    public openapisdk.models.shared.IpMessagingV1Service ipMessagingV1Service;
    public UpdateServiceResponse withIpMessagingV1Service(openapisdk.models.shared.IpMessagingV1Service ipMessagingV1Service) {
        this.ipMessagingV1Service = ipMessagingV1Service;
        return this;
    }
}