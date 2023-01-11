package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchSettingsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}