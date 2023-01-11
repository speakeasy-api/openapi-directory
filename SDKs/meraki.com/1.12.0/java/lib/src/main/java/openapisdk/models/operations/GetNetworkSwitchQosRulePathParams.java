package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchQosRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchQosRulePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=qosRuleId")
    public String qosRuleId;
    public GetNetworkSwitchQosRulePathParams withQosRuleId(String qosRuleId) {
        this.qosRuleId = qosRuleId;
        return this;
    }
}