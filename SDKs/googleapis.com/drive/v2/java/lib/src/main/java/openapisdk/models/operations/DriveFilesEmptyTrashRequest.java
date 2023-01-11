package openapisdk.models.operations;



public class DriveFilesEmptyTrashRequest {
    public DriveFilesEmptyTrashQueryParams queryParams;
    public DriveFilesEmptyTrashRequest withQueryParams(DriveFilesEmptyTrashQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesEmptyTrashSecurity security;
    public DriveFilesEmptyTrashRequest withSecurity(DriveFilesEmptyTrashSecurity security) {
        this.security = security;
        return this;
    }
}