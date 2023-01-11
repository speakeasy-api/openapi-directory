package openapisdk.models.operations;



public class DriveFilesTrashRequest {
    public DriveFilesTrashPathParams pathParams;
    public DriveFilesTrashRequest withPathParams(DriveFilesTrashPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesTrashQueryParams queryParams;
    public DriveFilesTrashRequest withQueryParams(DriveFilesTrashQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveFilesTrashSecurity security;
    public DriveFilesTrashRequest withSecurity(DriveFilesTrashSecurity security) {
        this.security = security;
        return this;
    }
}