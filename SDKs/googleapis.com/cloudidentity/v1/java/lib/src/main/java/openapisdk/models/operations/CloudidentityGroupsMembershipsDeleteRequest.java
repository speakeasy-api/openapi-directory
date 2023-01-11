package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsDeleteRequest {
    public CloudidentityGroupsMembershipsDeletePathParams pathParams;
    public CloudidentityGroupsMembershipsDeleteRequest withPathParams(CloudidentityGroupsMembershipsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsDeleteQueryParams queryParams;
    public CloudidentityGroupsMembershipsDeleteRequest withQueryParams(CloudidentityGroupsMembershipsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsMembershipsDeleteSecurity security;
    public CloudidentityGroupsMembershipsDeleteRequest withSecurity(CloudidentityGroupsMembershipsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}