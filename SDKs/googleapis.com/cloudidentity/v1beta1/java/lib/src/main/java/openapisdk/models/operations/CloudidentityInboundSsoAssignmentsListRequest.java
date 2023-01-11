package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsListRequest {
    public CloudidentityInboundSsoAssignmentsListQueryParams queryParams;
    public CloudidentityInboundSsoAssignmentsListRequest withQueryParams(CloudidentityInboundSsoAssignmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityInboundSsoAssignmentsListSecurity security;
    public CloudidentityInboundSsoAssignmentsListRequest withSecurity(CloudidentityInboundSsoAssignmentsListSecurity security) {
        this.security = security;
        return this;
    }
}