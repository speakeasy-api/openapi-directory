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
    public openapisdk.models.shared.IpMessagingV1ServiceRole ipMessagingV1ServiceRole;
    public UpdateRoleResponse withIpMessagingV1ServiceRole(openapisdk.models.shared.IpMessagingV1ServiceRole ipMessagingV1ServiceRole) {
        this.ipMessagingV1ServiceRole = ipMessagingV1ServiceRole;
        return this;
    }
}