package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LockNetworkSmDevicesRequest {
    public LockNetworkSmDevicesPathParams pathParams;
    public LockNetworkSmDevicesRequest withPathParams(LockNetworkSmDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LockNetworkSmDevicesRequestBody request;
    public LockNetworkSmDevicesRequest withRequest(LockNetworkSmDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}