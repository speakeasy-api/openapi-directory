package openapisdk.models.operations;



public class DriveRevisionsDeleteRequest {
    public DriveRevisionsDeletePathParams pathParams;
    public DriveRevisionsDeleteRequest withPathParams(DriveRevisionsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRevisionsDeleteQueryParams queryParams;
    public DriveRevisionsDeleteRequest withQueryParams(DriveRevisionsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveRevisionsDeleteSecurity security;
    public DriveRevisionsDeleteRequest withSecurity(DriveRevisionsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}