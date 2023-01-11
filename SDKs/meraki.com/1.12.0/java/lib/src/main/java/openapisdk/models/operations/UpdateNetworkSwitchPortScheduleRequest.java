package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchPortScheduleRequest {
    public UpdateNetworkSwitchPortSchedulePathParams pathParams;
    public UpdateNetworkSwitchPortScheduleRequest withPathParams(UpdateNetworkSwitchPortSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchPortScheduleRequestBody request;
    public UpdateNetworkSwitchPortScheduleRequest withRequest(UpdateNetworkSwitchPortScheduleRequestBody request) {
        this.request = request;
        return this;
    }
}