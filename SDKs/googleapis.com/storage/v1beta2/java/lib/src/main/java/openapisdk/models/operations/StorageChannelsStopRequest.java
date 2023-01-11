package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageChannelsStopRequest {
    public StorageChannelsStopQueryParams queryParams;
    public StorageChannelsStopRequest withQueryParams(StorageChannelsStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public StorageChannelsStopRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public StorageChannelsStopSecurity security;
    public StorageChannelsStopRequest withSecurity(StorageChannelsStopSecurity security) {
        this.security = security;
        return this;
    }
}