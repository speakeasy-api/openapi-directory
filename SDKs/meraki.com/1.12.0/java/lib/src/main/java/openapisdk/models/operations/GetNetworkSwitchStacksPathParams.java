package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchStacksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchStacksPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}