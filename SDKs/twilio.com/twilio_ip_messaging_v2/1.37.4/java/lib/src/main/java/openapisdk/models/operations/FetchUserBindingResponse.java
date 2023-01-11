package openapisdk.models.operations;



public class FetchUserBindingResponse {
    public String contentType;
    public FetchUserBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceUserUserBinding ipMessagingV2ServiceUserUserBinding;
    public FetchUserBindingResponse withIpMessagingV2ServiceUserUserBinding(openapisdk.models.shared.IpMessagingV2ServiceUserUserBinding ipMessagingV2ServiceUserUserBinding) {
        this.ipMessagingV2ServiceUserUserBinding = ipMessagingV2ServiceUserUserBinding;
        return this;
    }
}