package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersPatchRequest {
    public CloudresourcemanagerFoldersPatchPathParams pathParams;
    public CloudresourcemanagerFoldersPatchRequest withPathParams(CloudresourcemanagerFoldersPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerFoldersPatchQueryParams queryParams;
    public CloudresourcemanagerFoldersPatchRequest withQueryParams(CloudresourcemanagerFoldersPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FolderInput request;
    public CloudresourcemanagerFoldersPatchRequest withRequest(openapisdk.models.shared.FolderInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersPatchSecurity security;
    public CloudresourcemanagerFoldersPatchRequest withSecurity(CloudresourcemanagerFoldersPatchSecurity security) {
        this.security = security;
        return this;
    }
}