package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HomegraphDevicesRequestSyncRequest {
    public HomegraphDevicesRequestSyncQueryParams queryParams;
    public HomegraphDevicesRequestSyncRequest withQueryParams(HomegraphDevicesRequestSyncQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RequestSyncDevicesRequest request;
    public HomegraphDevicesRequestSyncRequest withRequest(openapisdk.models.shared.RequestSyncDevicesRequest request) {
        this.request = request;
        return this;
    }
    public HomegraphDevicesRequestSyncSecurity security;
    public HomegraphDevicesRequestSyncRequest withSecurity(HomegraphDevicesRequestSyncSecurity security) {
        this.security = security;
        return this;
    }
}