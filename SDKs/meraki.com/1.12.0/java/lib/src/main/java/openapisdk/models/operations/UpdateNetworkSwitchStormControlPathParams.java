package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStormControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchStormControlPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}