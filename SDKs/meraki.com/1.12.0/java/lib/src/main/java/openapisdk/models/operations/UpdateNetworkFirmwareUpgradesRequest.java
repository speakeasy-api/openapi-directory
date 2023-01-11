package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkFirmwareUpgradesRequest {
    public UpdateNetworkFirmwareUpgradesPathParams pathParams;
    public UpdateNetworkFirmwareUpgradesRequest withPathParams(UpdateNetworkFirmwareUpgradesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkFirmwareUpgradesRequestBody request;
    public UpdateNetworkFirmwareUpgradesRequest withRequest(UpdateNetworkFirmwareUpgradesRequestBody request) {
        this.request = request;
        return this;
    }
}