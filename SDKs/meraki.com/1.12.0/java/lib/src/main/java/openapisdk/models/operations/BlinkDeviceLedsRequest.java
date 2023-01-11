package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BlinkDeviceLedsRequest {
    public BlinkDeviceLedsPathParams pathParams;
    public BlinkDeviceLedsRequest withPathParams(BlinkDeviceLedsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BlinkDeviceLedsRequestBody request;
    public BlinkDeviceLedsRequest withRequest(BlinkDeviceLedsRequestBody request) {
        this.request = request;
        return this;
    }
}