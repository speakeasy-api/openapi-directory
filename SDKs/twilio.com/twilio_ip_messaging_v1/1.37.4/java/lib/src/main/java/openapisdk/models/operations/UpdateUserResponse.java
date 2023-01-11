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
    public openapisdk.models.shared.IpMessagingV1ServiceUser ipMessagingV1ServiceUser;
    public UpdateUserResponse withIpMessagingV1ServiceUser(openapisdk.models.shared.IpMessagingV1ServiceUser ipMessagingV1ServiceUser) {
        this.ipMessagingV1ServiceUser = ipMessagingV1ServiceUser;
        return this;
    }
}