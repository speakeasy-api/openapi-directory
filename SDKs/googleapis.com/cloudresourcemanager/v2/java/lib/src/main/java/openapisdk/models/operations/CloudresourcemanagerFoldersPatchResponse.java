package openapisdk.models.operations;



public class CloudresourcemanagerFoldersPatchResponse {
    public String contentType;
    public CloudresourcemanagerFoldersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Folder folder;
    public CloudresourcemanagerFoldersPatchResponse withFolder(openapisdk.models.shared.Folder folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}