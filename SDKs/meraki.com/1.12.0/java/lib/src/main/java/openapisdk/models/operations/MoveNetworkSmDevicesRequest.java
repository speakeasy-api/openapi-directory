package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveNetworkSmDevicesRequest {
    public MoveNetworkSmDevicesPathParams pathParams;
    public MoveNetworkSmDevicesRequest withPathParams(MoveNetworkSmDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MoveNetworkSmDevicesRequestBody request;
    public MoveNetworkSmDevicesRequest withRequest(MoveNetworkSmDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}