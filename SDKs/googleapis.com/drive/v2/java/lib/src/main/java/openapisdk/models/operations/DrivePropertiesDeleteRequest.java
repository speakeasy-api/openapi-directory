package openapisdk.models.operations;



public class DrivePropertiesDeleteRequest {
    public DrivePropertiesDeletePathParams pathParams;
    public DrivePropertiesDeleteRequest withPathParams(DrivePropertiesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePropertiesDeleteQueryParams queryParams;
    public DrivePropertiesDeleteRequest withQueryParams(DrivePropertiesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DrivePropertiesDeleteSecurity security;
    public DrivePropertiesDeleteRequest withSecurity(DrivePropertiesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}