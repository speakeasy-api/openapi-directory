package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkFirmwareUpgradesRollbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkFirmwareUpgradesRollbackPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}