package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsUpdateRequest {
    public StorageBucketAccessControlsUpdatePathParams pathParams;
    public StorageBucketAccessControlsUpdateRequest withPathParams(StorageBucketAccessControlsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketAccessControlsUpdateQueryParams queryParams;
    public StorageBucketAccessControlsUpdateRequest withQueryParams(StorageBucketAccessControlsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BucketAccessControl request;
    public StorageBucketAccessControlsUpdateRequest withRequest(openapisdk.models.shared.BucketAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageBucketAccessControlsUpdateSecurity security;
    public StorageBucketAccessControlsUpdateRequest withSecurity(StorageBucketAccessControlsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}