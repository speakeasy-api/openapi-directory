package openapisdk.models.operations;



public class IamRolesGetRequest {
    public IamRolesGetPathParams pathParams;
    public IamRolesGetRequest withPathParams(IamRolesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamRolesGetQueryParams queryParams;
    public IamRolesGetRequest withQueryParams(IamRolesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamRolesGetSecurity security;
    public IamRolesGetRequest withSecurity(IamRolesGetSecurity security) {
        this.security = security;
        return this;
    }
}