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
    public openapisdk.models.shared.IpMessagingV2Service ipMessagingV2Service;
    public FetchServiceResponse withIpMessagingV2Service(openapisdk.models.shared.IpMessagingV2Service ipMessagingV2Service) {
        this.ipMessagingV2Service = ipMessagingV2Service;
        return this;
    }
}