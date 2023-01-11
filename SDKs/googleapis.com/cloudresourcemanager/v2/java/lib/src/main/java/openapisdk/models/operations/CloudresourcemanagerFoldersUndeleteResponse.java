package openapisdk.models.operations;



public class CloudresourcemanagerFoldersUndeleteResponse {
    public String contentType;
    public CloudresourcemanagerFoldersUndeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Folder folder;
    public CloudresourcemanagerFoldersUndeleteResponse withFolder(openapisdk.models.shared.Folder folder) {
        this.folder = folder;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersUndeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}