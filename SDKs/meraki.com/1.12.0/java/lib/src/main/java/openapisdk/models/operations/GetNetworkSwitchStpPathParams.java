package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchStpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchStpPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}