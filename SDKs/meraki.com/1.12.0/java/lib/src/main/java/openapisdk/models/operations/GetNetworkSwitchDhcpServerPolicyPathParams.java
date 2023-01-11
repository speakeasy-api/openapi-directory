package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchDhcpServerPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchDhcpServerPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}