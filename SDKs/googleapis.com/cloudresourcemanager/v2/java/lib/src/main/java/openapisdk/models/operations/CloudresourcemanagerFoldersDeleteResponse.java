package openapisdk.models.operations;



public class CloudresourcemanagerFoldersDeleteResponse {
    public String contentType;
    public CloudresourcemanagerFoldersDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Folder folder;
    public CloudresourcemanagerFoldersDeleteResponse withFolder(openapisdk.models.shared.Folder folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}