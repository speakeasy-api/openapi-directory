package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersMoveRequest {
    public CloudresourcemanagerFoldersMovePathParams pathParams;
    public CloudresourcemanagerFoldersMoveRequest withPathParams(CloudresourcemanagerFoldersMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerFoldersMoveQueryParams queryParams;
    public CloudresourcemanagerFoldersMoveRequest withQueryParams(CloudresourcemanagerFoldersMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MoveFolderRequest request;
    public CloudresourcemanagerFoldersMoveRequest withRequest(openapisdk.models.shared.MoveFolderRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersMoveSecurity security;
    public CloudresourcemanagerFoldersMoveRequest withSecurity(CloudresourcemanagerFoldersMoveSecurity security) {
        this.security = security;
        return this;
    }
}