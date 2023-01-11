package openapisdk.models.operations;



public class CreateRoleResponse {
    public String contentType;
    public CreateRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceRole ipMessagingV1ServiceRole;
    public CreateRoleResponse withIpMessagingV1ServiceRole(openapisdk.models.shared.IpMessagingV1ServiceRole ipMessagingV1ServiceRole) {
        this.ipMessagingV1ServiceRole = ipMessagingV1ServiceRole;
        return this;
    }
}