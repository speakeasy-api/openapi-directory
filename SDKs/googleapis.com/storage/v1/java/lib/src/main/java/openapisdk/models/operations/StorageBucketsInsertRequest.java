package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageBucketsInsertRequest {
    public StorageBucketsInsertQueryParams queryParams;
    public StorageBucketsInsertRequest withQueryParams(StorageBucketsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Bucket request;
    public StorageBucketsInsertRequest withRequest(openapisdk.models.shared.Bucket request) {
        this.request = request;
        return this;
    }
    public StorageBucketsInsertSecurity security;
    public StorageBucketsInsertRequest withSecurity(StorageBucketsInsertSecurity security) {
        this.security = security;
        return this;
    }
}