package openapisdk.models.operations;



public class IamProjectsLocationsWorkloadIdentityPoolsListRequest {
    public IamProjectsLocationsWorkloadIdentityPoolsListPathParams pathParams;
    public IamProjectsLocationsWorkloadIdentityPoolsListRequest withPathParams(IamProjectsLocationsWorkloadIdentityPoolsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsLocationsWorkloadIdentityPoolsListQueryParams queryParams;
    public IamProjectsLocationsWorkloadIdentityPoolsListRequest withQueryParams(IamProjectsLocationsWorkloadIdentityPoolsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public IamProjectsLocationsWorkloadIdentityPoolsListSecurity security;
    public IamProjectsLocationsWorkloadIdentityPoolsListRequest withSecurity(IamProjectsLocationsWorkloadIdentityPoolsListSecurity security) {
        this.security = security;
        return this;
    }
}