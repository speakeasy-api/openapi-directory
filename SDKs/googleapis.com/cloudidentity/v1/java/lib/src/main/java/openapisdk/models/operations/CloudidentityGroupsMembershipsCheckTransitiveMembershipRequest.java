package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest {
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams pathParams;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest withPathParams(CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams queryParams;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest withQueryParams(CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity security;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest withSecurity(CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity security) {
        this.security = security;
        return this;
    }
}