package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchQosRulesOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchQosRulesOrderPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}