package openapisdk.models.operations;



public class DriveDrivesDeleteRequest {
    public DriveDrivesDeletePathParams pathParams;
    public DriveDrivesDeleteRequest withPathParams(DriveDrivesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveDrivesDeleteQueryParams queryParams;
    public DriveDrivesDeleteRequest withQueryParams(DriveDrivesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveDrivesDeleteSecurity security;
    public DriveDrivesDeleteRequest withSecurity(DriveDrivesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}