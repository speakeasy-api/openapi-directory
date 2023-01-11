package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkFirmwareUpgradesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkFirmwareUpgradesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}