package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchPortSchedulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchPortSchedulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}