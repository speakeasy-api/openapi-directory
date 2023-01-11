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
    public openapisdk.models.shared.IpMessagingV2ServiceUser ipMessagingV2ServiceUser;
    public CreateUserResponse withIpMessagingV2ServiceUser(openapisdk.models.shared.IpMessagingV2ServiceUser ipMessagingV2ServiceUser) {
        this.ipMessagingV2ServiceUser = ipMessagingV2ServiceUser;
        return this;
    }
}