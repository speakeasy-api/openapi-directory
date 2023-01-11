package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDevicesIdAccumulatorsRequest {
    public PutDevicesIdAccumulatorsPathParams pathParams;
    public PutDevicesIdAccumulatorsRequest withPathParams(PutDevicesIdAccumulatorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeviceAccumulators request;
    public PutDevicesIdAccumulatorsRequest withRequest(openapisdk.models.shared.DeviceAccumulators request) {
        this.request = request;
        return this;
    }
}