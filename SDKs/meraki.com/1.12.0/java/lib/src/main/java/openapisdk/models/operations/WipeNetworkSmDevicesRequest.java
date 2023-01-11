package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WipeNetworkSmDevicesRequest {
    public WipeNetworkSmDevicesPathParams pathParams;
    public WipeNetworkSmDevicesRequest withPathParams(WipeNetworkSmDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WipeNetworkSmDevicesRequestBody request;
    public WipeNetworkSmDevicesRequest withRequest(WipeNetworkSmDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}