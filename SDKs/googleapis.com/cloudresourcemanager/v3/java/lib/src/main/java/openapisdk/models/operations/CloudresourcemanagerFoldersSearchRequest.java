package openapisdk.models.operations;



public class CloudresourcemanagerFoldersSearchRequest {
    public CloudresourcemanagerFoldersSearchQueryParams queryParams;
    public CloudresourcemanagerFoldersSearchRequest withQueryParams(CloudresourcemanagerFoldersSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerFoldersSearchSecurity security;
    public CloudresourcemanagerFoldersSearchRequest withSecurity(CloudresourcemanagerFoldersSearchSecurity security) {
        this.security = security;
        return this;
    }
}