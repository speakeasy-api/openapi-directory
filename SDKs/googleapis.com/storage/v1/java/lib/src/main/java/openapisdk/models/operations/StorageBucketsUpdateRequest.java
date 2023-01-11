package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsUpdateRequest {
    public StorageBucketsUpdatePathParams pathParams;
    public StorageBucketsUpdateRequest withPathParams(StorageBucketsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StorageBucketsUpdateQueryParams queryParams;
    public StorageBucketsUpdateRequest withQueryParams(StorageBucketsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Bucket request;
    public StorageBucketsUpdateRequest withRequest(openapisdk.models.shared.Bucket request) {
        this.request = request;
        return this;
    }
    public StorageBucketsUpdateSecurity security;
    public StorageBucketsUpdateRequest withSecurity(StorageBucketsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}