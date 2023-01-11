package openapisdk.models.operations;



public class DriveFilesListLabelsRequest {
    public DriveFilesListLabelsPathParams pathParams;
    public DriveFilesListLabelsRequest withPathParams(DriveFilesListLabelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesListLabelsQueryParams queryParams;
    public DriveFilesListLabelsRequest withQueryParams(DriveFilesListLabelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesListLabelsSecurity security;
    public DriveFilesListLabelsRequest withSecurity(DriveFilesListLabelsSecurity security) {
        this.security = security;
        return this;
    }
}