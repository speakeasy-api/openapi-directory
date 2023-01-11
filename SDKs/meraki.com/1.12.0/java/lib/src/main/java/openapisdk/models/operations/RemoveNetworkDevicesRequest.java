package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveNetworkDevicesRequest {
    public RemoveNetworkDevicesPathParams pathParams;
    public RemoveNetworkDevicesRequest withPathParams(RemoveNetworkDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveNetworkDevicesRequestBody request;
    public RemoveNetworkDevicesRequest withRequest(RemoveNetworkDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}