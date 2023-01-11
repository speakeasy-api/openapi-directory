package openapisdk.models.operations;



public class DriveRevisionsListRequest {
    public DriveRevisionsListPathParams pathParams;
    public DriveRevisionsListRequest withPathParams(DriveRevisionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRevisionsListQueryParams queryParams;
    public DriveRevisionsListRequest withQueryParams(DriveRevisionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveRevisionsListSecurity security;
    public DriveRevisionsListRequest withSecurity(DriveRevisionsListSecurity security) {
        this.security = security;
        return this;
    }
}