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
    public openapisdk.models.shared.IpMessagingV2ServiceRole ipMessagingV2ServiceRole;
    public CreateRoleResponse withIpMessagingV2ServiceRole(openapisdk.models.shared.IpMessagingV2ServiceRole ipMessagingV2ServiceRole) {
        this.ipMessagingV2ServiceRole = ipMessagingV2ServiceRole;
        return this;
    }
}