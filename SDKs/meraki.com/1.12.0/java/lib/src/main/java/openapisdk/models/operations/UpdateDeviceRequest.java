package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceRequest {
    public UpdateDevicePathParams pathParams;
    public UpdateDeviceRequest withPathParams(UpdateDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceRequestBody request;
    public UpdateDeviceRequest withRequest(UpdateDeviceRequestBody request) {
        this.request = request;
        return this;
    }
}