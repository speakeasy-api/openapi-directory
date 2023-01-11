package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkSwitchAccessPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}