package openapisdk.models.operations;



public class IamRolesListRequest {
    public IamRolesListQueryParams queryParams;
    public IamRolesListRequest withQueryParams(IamRolesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamRolesListSecurity security;
    public IamRolesListRequest withSecurity(IamRolesListSecurity security) {
        this.security = security;
        return this;
    }
}