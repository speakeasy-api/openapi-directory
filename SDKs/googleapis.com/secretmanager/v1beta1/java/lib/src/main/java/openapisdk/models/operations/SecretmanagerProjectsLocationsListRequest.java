package openapisdk.models.operations;



public class SecretmanagerProjectsLocationsListRequest {
    public SecretmanagerProjectsLocationsListPathParams pathParams;
    public SecretmanagerProjectsLocationsListRequest withPathParams(SecretmanagerProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecretmanagerProjectsLocationsListQueryParams queryParams;
    public SecretmanagerProjectsLocationsListRequest withQueryParams(SecretmanagerProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecretmanagerProjectsLocationsListSecurity security;
    public SecretmanagerProjectsLocationsListRequest withSecurity(SecretmanagerProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}