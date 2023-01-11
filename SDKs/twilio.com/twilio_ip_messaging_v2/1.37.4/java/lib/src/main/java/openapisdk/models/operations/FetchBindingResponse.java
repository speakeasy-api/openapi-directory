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
    public openapisdk.models.shared.IpMessagingV2ServiceBinding ipMessagingV2ServiceBinding;
    public FetchBindingResponse withIpMessagingV2ServiceBinding(openapisdk.models.shared.IpMessagingV2ServiceBinding ipMessagingV2ServiceBinding) {
        this.ipMessagingV2ServiceBinding = ipMessagingV2ServiceBinding;
        return this;
    }
}