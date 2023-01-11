package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsPatchRequest {
    public StorageBucketsPatchPathParams pathParams;
    public StorageBucketsPatchRequest withPathParams(StorageBucketsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsPatchQueryParams queryParams;
    public StorageBucketsPatchRequest withQueryParams(StorageBucketsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Bucket request;
    public StorageBucketsPatchRequest withRequest(openapisdk.models.shared.Bucket request) {
        this.request = request;
        return this;
    }
    public StorageBucketsPatchSecurity security;
    public StorageBucketsPatchRequest withSecurity(StorageBucketsPatchSecurity security) {
        this.security = security;
        return this;
    }
}