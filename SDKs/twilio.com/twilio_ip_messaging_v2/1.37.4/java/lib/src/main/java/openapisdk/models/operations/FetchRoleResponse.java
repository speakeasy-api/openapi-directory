package openapisdk.models.operations;



public class FetchRoleResponse {
    public String contentType;
    public FetchRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceRole ipMessagingV2ServiceRole;
    public FetchRoleResponse withIpMessagingV2ServiceRole(openapisdk.models.shared.IpMessagingV2ServiceRole ipMessagingV2ServiceRole) {
        this.ipMessagingV2ServiceRole = ipMessagingV2ServiceRole;
        return this;
    }
}