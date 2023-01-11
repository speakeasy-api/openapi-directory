package openapisdk.models.operations;



public class CloudresourcemanagerFoldersGetResponse {
    public String contentType;
    public CloudresourcemanagerFoldersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Folder folder;
    public CloudresourcemanagerFoldersGetResponse withFolder(openapisdk.models.shared.Folder folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}