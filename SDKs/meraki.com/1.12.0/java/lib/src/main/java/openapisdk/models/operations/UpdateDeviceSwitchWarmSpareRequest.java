package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceSwitchWarmSpareRequest {
    public UpdateDeviceSwitchWarmSparePathParams pathParams;
    public UpdateDeviceSwitchWarmSpareRequest withPathParams(UpdateDeviceSwitchWarmSparePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceSwitchWarmSpareRequestBody request;
    public UpdateDeviceSwitchWarmSpareRequest withRequest(UpdateDeviceSwitchWarmSpareRequestBody request) {
        this.request = request;
        return this;
    }
}