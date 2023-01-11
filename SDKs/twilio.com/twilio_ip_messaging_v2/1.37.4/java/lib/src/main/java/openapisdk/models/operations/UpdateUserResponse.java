package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceUser ipMessagingV2ServiceUser;
    public UpdateUserResponse withIpMessagingV2ServiceUser(openapisdk.models.shared.IpMessagingV2ServiceUser ipMessagingV2ServiceUser) {
        this.ipMessagingV2ServiceUser = ipMessagingV2ServiceUser;
        return this;
    }
}