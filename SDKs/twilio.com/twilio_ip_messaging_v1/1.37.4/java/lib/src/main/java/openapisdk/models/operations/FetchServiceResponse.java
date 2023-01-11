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
    public openapisdk.models.shared.IpMessagingV1Service ipMessagingV1Service;
    public FetchServiceResponse withIpMessagingV1Service(openapisdk.models.shared.IpMessagingV1Service ipMessagingV1Service) {
        this.ipMessagingV1Service = ipMessagingV1Service;
        return this;
    }
}