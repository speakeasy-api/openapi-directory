package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkFirmwareUpgradesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkFirmwareUpgradesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}