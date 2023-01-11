package openapisdk.models.operations;



public class DriveFilesGenerateIdsRequest {
    public DriveFilesGenerateIdsQueryParams queryParams;
    public DriveFilesGenerateIdsRequest withQueryParams(DriveFilesGenerateIdsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesGenerateIdsSecurity security;
    public DriveFilesGenerateIdsRequest withSecurity(DriveFilesGenerateIdsSecurity security) {
        this.security = security;
        return this;
    }
}