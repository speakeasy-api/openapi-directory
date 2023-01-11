package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchStpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}