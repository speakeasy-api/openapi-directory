package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsListRequest {
    public CloudkmsProjectsLocationsKeyRingsListPathParams pathParams;
    public CloudkmsProjectsLocationsKeyRingsListRequest withPathParams(CloudkmsProjectsLocationsKeyRingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsListQueryParams queryParams;
    public CloudkmsProjectsLocationsKeyRingsListRequest withQueryParams(CloudkmsProjectsLocationsKeyRingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudkmsProjectsLocationsKeyRingsListSecurity security;
    public CloudkmsProjectsLocationsKeyRingsListRequest withSecurity(CloudkmsProjectsLocationsKeyRingsListSecurity security) {
        this.security = security;
        return this;
    }
}