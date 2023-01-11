package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsGetMembershipGraphRequest {
    public CloudidentityGroupsMembershipsGetMembershipGraphPathParams pathParams;
    public CloudidentityGroupsMembershipsGetMembershipGraphRequest withPathParams(CloudidentityGroupsMembershipsGetMembershipGraphPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsGetMembershipGraphQueryParams queryParams;
    public CloudidentityGroupsMembershipsGetMembershipGraphRequest withQueryParams(CloudidentityGroupsMembershipsGetMembershipGraphQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsMembershipsGetMembershipGraphSecurity security;
    public CloudidentityGroupsMembershipsGetMembershipGraphRequest withSecurity(CloudidentityGroupsMembershipsGetMembershipGraphSecurity security) {
        this.security = security;
        return this;
    }
}