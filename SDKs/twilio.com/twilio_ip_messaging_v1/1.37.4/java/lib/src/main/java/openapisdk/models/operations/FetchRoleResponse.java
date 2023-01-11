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
    public openapisdk.models.shared.IpMessagingV1ServiceRole ipMessagingV1ServiceRole;
    public FetchRoleResponse withIpMessagingV1ServiceRole(openapisdk.models.shared.IpMessagingV1ServiceRole ipMessagingV1ServiceRole) {
        this.ipMessagingV1ServiceRole = ipMessagingV1ServiceRole;
        return this;
    }
}