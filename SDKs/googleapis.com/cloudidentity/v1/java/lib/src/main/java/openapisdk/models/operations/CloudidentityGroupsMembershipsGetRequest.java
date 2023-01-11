package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsGetRequest {
    public CloudidentityGroupsMembershipsGetPathParams pathParams;
    public CloudidentityGroupsMembershipsGetRequest withPathParams(CloudidentityGroupsMembershipsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsGetQueryParams queryParams;
    public CloudidentityGroupsMembershipsGetRequest withQueryParams(CloudidentityGroupsMembershipsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsMembershipsGetSecurity security;
    public CloudidentityGroupsMembershipsGetRequest withSecurity(CloudidentityGroupsMembershipsGetSecurity security) {
        this.security = security;
        return this;
    }
}