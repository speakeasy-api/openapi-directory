package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketAccessControlsPatchRequest {
    public StorageBucketAccessControlsPatchPathParams pathParams;
    public StorageBucketAccessControlsPatchRequest withPathParams(StorageBucketAccessControlsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketAccessControlsPatchQueryParams queryParams;
    public StorageBucketAccessControlsPatchRequest withQueryParams(StorageBucketAccessControlsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BucketAccessControl request;
    public StorageBucketAccessControlsPatchRequest withRequest(openapisdk.models.shared.BucketAccessControl request) {
        this.request = request;
        return this;
    }
    public StorageBucketAccessControlsPatchSecurity security;
    public StorageBucketAccessControlsPatchRequest withSecurity(StorageBucketAccessControlsPatchSecurity security) {
        this.security = security;
        return this;
    }
}