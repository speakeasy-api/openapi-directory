package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkFirmwareUpgradesRollbackRequest {
    public CreateNetworkFirmwareUpgradesRollbackPathParams pathParams;
    public CreateNetworkFirmwareUpgradesRollbackRequest withPathParams(CreateNetworkFirmwareUpgradesRollbackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkFirmwareUpgradesRollbackRequestBody request;
    public CreateNetworkFirmwareUpgradesRollbackRequest withRequest(CreateNetworkFirmwareUpgradesRollbackRequestBody request) {
        this.request = request;
        return this;
    }
}