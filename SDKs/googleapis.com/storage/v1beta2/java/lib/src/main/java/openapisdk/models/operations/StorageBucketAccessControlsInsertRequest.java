package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsInsertRequest {
    public StorageBucketAccessControlsInsertPathParams pathParams;
    public StorageBucketAccessControlsInsertRequest withPathParams(StorageBucketAccessControlsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketAccessControlsInsertQueryParams queryParams;
    public StorageBucketAccessControlsInsertRequest withQueryParams(StorageBucketAccessControlsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BucketAccessControl request;
    public StorageBucketAccessControlsInsertRequest withRequest(openapisdk.models.shared.BucketAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageBucketAccessControlsInsertSecurity security;
    public StorageBucketAccessControlsInsertRequest withSecurity(StorageBucketAccessControlsInsertSecurity security) {
        this.security = security;
        return this;
    }
}