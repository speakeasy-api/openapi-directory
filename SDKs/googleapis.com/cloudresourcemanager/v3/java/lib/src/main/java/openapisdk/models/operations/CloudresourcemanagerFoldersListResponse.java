package openapisdk.models.operations;



public class CloudresourcemanagerFoldersListResponse {
    public String contentType;
    public CloudresourcemanagerFoldersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFoldersResponse listFoldersResponse;
    public CloudresourcemanagerFoldersListResponse withListFoldersResponse(openapisdk.models.shared.ListFoldersResponse listFoldersResponse) {
        this.listFoldersResponse = listFoldersResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}