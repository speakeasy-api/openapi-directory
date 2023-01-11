package openapisdk.models.operations;



public class UpdateRoleResponse {
    public String contentType;
    public UpdateRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceRole ipMessagingV2ServiceRole;
    public UpdateRoleResponse withIpMessagingV2ServiceRole(openapisdk.models.shared.IpMessagingV2ServiceRole ipMessagingV2ServiceRole) {
        this.ipMessagingV2ServiceRole = ipMessagingV2ServiceRole;
        return this;
    }
}