package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchAccessPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchAccessPoliciesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}