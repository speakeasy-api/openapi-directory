package openapisdk.models.operations;



public class DriveFilesUntrashRequest {
    public DriveFilesUntrashPathParams pathParams;
    public DriveFilesUntrashRequest withPathParams(DriveFilesUntrashPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesUntrashQueryParams queryParams;
    public DriveFilesUntrashRequest withQueryParams(DriveFilesUntrashQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesUntrashSecurity security;
    public DriveFilesUntrashRequest withSecurity(DriveFilesUntrashSecurity security) {
        this.security = security;
        return this;
    }
}