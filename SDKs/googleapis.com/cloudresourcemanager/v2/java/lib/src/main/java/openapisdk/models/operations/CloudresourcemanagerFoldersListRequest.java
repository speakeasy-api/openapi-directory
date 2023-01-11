package openapisdk.models.operations;



public class CloudresourcemanagerFoldersListRequest {
    public CloudresourcemanagerFoldersListQueryParams queryParams;
    public CloudresourcemanagerFoldersListRequest withQueryParams(CloudresourcemanagerFoldersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerFoldersListSecurity security;
    public CloudresourcemanagerFoldersListRequest withSecurity(CloudresourcemanagerFoldersListSecurity security) {
        this.security = security;
        return this;
    }
}