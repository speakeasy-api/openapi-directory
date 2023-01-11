package openapisdk.models.operations;



public class IamProjectsRolesListRequest {
    public IamProjectsRolesListPathParams pathParams;
    public IamProjectsRolesListRequest withPathParams(IamProjectsRolesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsRolesListQueryParams queryParams;
    public IamProjectsRolesListRequest withQueryParams(IamProjectsRolesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamProjectsRolesListSecurity security;
    public IamProjectsRolesListRequest withSecurity(IamProjectsRolesListSecurity security) {
        this.security = security;
        return this;
    }
}