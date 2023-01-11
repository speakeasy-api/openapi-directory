package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceUser ipMessagingV1ServiceUser;
    public CreateUserResponse withIpMessagingV1ServiceUser(openapisdk.models.shared.IpMessagingV1ServiceUser ipMessagingV1ServiceUser) {
        this.ipMessagingV1ServiceUser = ipMessagingV1ServiceUser;
        return this;
    }
}