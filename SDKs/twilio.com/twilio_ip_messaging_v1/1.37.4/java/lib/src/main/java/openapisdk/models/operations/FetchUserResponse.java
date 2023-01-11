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
    public openapisdk.models.shared.IpMessagingV1ServiceUser ipMessagingV1ServiceUser;
    public FetchUserResponse withIpMessagingV1ServiceUser(openapisdk.models.shared.IpMessagingV1ServiceUser ipMessagingV1ServiceUser) {
        this.ipMessagingV1ServiceUser = ipMessagingV1ServiceUser;
        return this;
    }
}