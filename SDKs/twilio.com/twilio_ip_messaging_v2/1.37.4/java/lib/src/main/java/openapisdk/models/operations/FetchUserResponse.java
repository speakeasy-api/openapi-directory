package openapisdk.models.operations;



public class FetchUserResponse {
    public String contentType;
    public FetchUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceUser ipMessagingV2ServiceUser;
    public FetchUserResponse withIpMessagingV2ServiceUser(openapisdk.models.shared.IpMessagingV2ServiceUser ipMessagingV2ServiceUser) {
        this.ipMessagingV2ServiceUser = ipMessagingV2ServiceUser;
        return this;
    }
}