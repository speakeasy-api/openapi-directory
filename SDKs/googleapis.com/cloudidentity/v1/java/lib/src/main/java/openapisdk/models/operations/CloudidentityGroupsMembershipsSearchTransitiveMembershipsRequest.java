package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest {
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams pathParams;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest withPathParams(CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams queryParams;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest withQueryParams(CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity security;
    public CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest withSecurity(CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity security) {
        this.security = security;
        return this;
    }
}