package openapisdk.models.operations;



public class CloudidentityOrgUnitsMembershipsListRequest {
    public CloudidentityOrgUnitsMembershipsListPathParams pathParams;
    public CloudidentityOrgUnitsMembershipsListRequest withPathParams(CloudidentityOrgUnitsMembershipsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityOrgUnitsMembershipsListQueryParams queryParams;
    public CloudidentityOrgUnitsMembershipsListRequest withQueryParams(CloudidentityOrgUnitsMembershipsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityOrgUnitsMembershipsListSecurity security;
    public CloudidentityOrgUnitsMembershipsListRequest withSecurity(CloudidentityOrgUnitsMembershipsListSecurity security) {
        this.security = security;
        return this;
    }
}