package openapisdk.models.operations;



public class ApikeysProjectsLocationsKeysListRequest {
    public ApikeysProjectsLocationsKeysListPathParams pathParams;
    public ApikeysProjectsLocationsKeysListRequest withPathParams(ApikeysProjectsLocationsKeysListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApikeysProjectsLocationsKeysListQueryParams queryParams;
    public ApikeysProjectsLocationsKeysListRequest withQueryParams(ApikeysProjectsLocationsKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ApikeysProjectsLocationsKeysListSecurity security;
    public ApikeysProjectsLocationsKeysListRequest withSecurity(ApikeysProjectsLocationsKeysListSecurity security) {
        this.security = security;
        return this;
    }
}