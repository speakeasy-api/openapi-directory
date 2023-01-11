package openapisdk.models.operations;



public class CloudidentityInboundSsoAssignmentsGetRequest {
    public CloudidentityInboundSsoAssignmentsGetPathParams pathParams;
    public CloudidentityInboundSsoAssignmentsGetRequest withPathParams(CloudidentityInboundSsoAssignmentsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityInboundSsoAssignmentsGetQueryParams queryParams;
    public CloudidentityInboundSsoAssignmentsGetRequest withQueryParams(CloudidentityInboundSsoAssignmentsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityInboundSsoAssignmentsGetSecurity security;
    public CloudidentityInboundSsoAssignmentsGetRequest withSecurity(CloudidentityInboundSsoAssignmentsGetSecurity security) {
        this.security = security;
        return this;
    }
}