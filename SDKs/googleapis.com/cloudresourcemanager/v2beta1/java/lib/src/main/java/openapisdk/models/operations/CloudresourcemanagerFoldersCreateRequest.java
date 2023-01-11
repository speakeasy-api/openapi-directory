package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersCreateRequest {
    public CloudresourcemanagerFoldersCreateQueryParams queryParams;
    public CloudresourcemanagerFoldersCreateRequest withQueryParams(CloudresourcemanagerFoldersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FolderInput request;
    public CloudresourcemanagerFoldersCreateRequest withRequest(openapisdk.models.shared.FolderInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersCreateSecurity security;
    public CloudresourcemanagerFoldersCreateRequest withSecurity(CloudresourcemanagerFoldersCreateSecurity security) {
        this.security = security;
        return this;
    }
}