package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkSwitchAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPolicyNumber")
    public String accessPolicyNumber;
    public DeleteNetworkSwitchAccessPolicyPathParams withAccessPolicyNumber(String accessPolicyNumber) {
        this.accessPolicyNumber = accessPolicyNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkSwitchAccessPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}