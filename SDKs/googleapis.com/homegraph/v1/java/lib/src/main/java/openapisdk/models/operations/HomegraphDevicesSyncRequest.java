package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HomegraphDevicesSyncRequest {
    public HomegraphDevicesSyncQueryParams queryParams;
    public HomegraphDevicesSyncRequest withQueryParams(HomegraphDevicesSyncQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SyncRequest request;
    public HomegraphDevicesSyncRequest withRequest(openapisdk.models.shared.SyncRequest request) {
        this.request = request;
        return this;
    }
    public HomegraphDevicesSyncSecurity security;
    public HomegraphDevicesSyncRequest withSecurity(HomegraphDevicesSyncSecurity security) {
        this.security = security;
        return this;
    }
}