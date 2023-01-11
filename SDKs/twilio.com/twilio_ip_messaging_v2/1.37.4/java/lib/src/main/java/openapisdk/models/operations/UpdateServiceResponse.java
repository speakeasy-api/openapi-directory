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
    public openapisdk.models.shared.IpMessagingV2Service ipMessagingV2Service;
    public UpdateServiceResponse withIpMessagingV2Service(openapisdk.models.shared.IpMessagingV2Service ipMessagingV2Service) {
        this.ipMessagingV2Service = ipMessagingV2Service;
        return this;
    }
}