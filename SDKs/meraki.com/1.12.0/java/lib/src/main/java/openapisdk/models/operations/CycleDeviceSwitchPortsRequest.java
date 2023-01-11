package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CycleDeviceSwitchPortsRequest {
    public CycleDeviceSwitchPortsPathParams pathParams;
    public CycleDeviceSwitchPortsRequest withPathParams(CycleDeviceSwitchPortsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CycleDeviceSwitchPortsRequestBody request;
    public CycleDeviceSwitchPortsRequest withRequest(CycleDeviceSwitchPortsRequestBody request) {
        this.request = request;
        return this;
    }
}