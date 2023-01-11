package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerFoldersSearchRequest {
    public CloudresourcemanagerFoldersSearchQueryParams queryParams;
    public CloudresourcemanagerFoldersSearchRequest withQueryParams(CloudresourcemanagerFoldersSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchFoldersRequest request;
    public CloudresourcemanagerFoldersSearchRequest withRequest(openapisdk.models.shared.SearchFoldersRequest request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerFoldersSearchSecurity security;
    public CloudresourcemanagerFoldersSearchRequest withSecurity(CloudresourcemanagerFoldersSearchSecurity security) {
        this.security = security;
        return this;
    }
}