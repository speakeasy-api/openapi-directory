package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchQosRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchQosRulePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=qosRuleId")
    public String qosRuleId;
    public UpdateNetworkSwitchQosRulePathParams withQosRuleId(String qosRuleId) {
        this.qosRuleId = qosRuleId;
        return this;
    }
}