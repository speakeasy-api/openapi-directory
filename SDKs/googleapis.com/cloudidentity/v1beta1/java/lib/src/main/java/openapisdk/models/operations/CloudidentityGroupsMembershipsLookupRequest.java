package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsLookupRequest {
    public CloudidentityGroupsMembershipsLookupPathParams pathParams;
    public CloudidentityGroupsMembershipsLookupRequest withPathParams(CloudidentityGroupsMembershipsLookupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityGroupsMembershipsLookupQueryParams queryParams;
    public CloudidentityGroupsMembershipsLookupRequest withQueryParams(CloudidentityGroupsMembershipsLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsMembershipsLookupSecurity security;
    public CloudidentityGroupsMembershipsLookupRequest withSecurity(CloudidentityGroupsMembershipsLookupSecurity security) {
        this.security = security;
        return this;
    }
}