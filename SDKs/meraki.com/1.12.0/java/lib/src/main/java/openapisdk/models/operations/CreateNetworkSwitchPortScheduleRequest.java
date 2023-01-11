package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchPortScheduleRequest {
    public CreateNetworkSwitchPortSchedulePathParams pathParams;
    public CreateNetworkSwitchPortScheduleRequest withPathParams(CreateNetworkSwitchPortSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchPortScheduleRequestBody request;
    public CreateNetworkSwitchPortScheduleRequest withRequest(CreateNetworkSwitchPortScheduleRequestBody request) {
        this.request = request;
        return this;
    }
}