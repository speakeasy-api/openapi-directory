package openapisdk.models.operations;



public class DriveRevisionsGetRequest {
    public DriveRevisionsGetPathParams pathParams;
    public DriveRevisionsGetRequest withPathParams(DriveRevisionsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRevisionsGetQueryParams queryParams;
    public DriveRevisionsGetRequest withQueryParams(DriveRevisionsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveRevisionsGetSecurity security;
    public DriveRevisionsGetRequest withSecurity(DriveRevisionsGetSecurity security) {
        this.security = security;
        return this;
    }
}