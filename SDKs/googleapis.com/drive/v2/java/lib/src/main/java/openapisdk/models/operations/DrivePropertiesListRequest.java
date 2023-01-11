package openapisdk.models.operations;



public class DrivePropertiesListRequest {
    public DrivePropertiesListPathParams pathParams;
    public DrivePropertiesListRequest withPathParams(DrivePropertiesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePropertiesListQueryParams queryParams;
    public DrivePropertiesListRequest withQueryParams(DrivePropertiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivePropertiesListSecurity security;
    public DrivePropertiesListRequest withSecurity(DrivePropertiesListSecurity security) {
        this.security = security;
        return this;
    }
}