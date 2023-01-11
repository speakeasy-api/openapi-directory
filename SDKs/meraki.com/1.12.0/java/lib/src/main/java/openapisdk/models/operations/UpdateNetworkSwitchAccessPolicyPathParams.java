package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchAccessPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPolicyNumber")
    public String accessPolicyNumber;
    public UpdateNetworkSwitchAccessPolicyPathParams withAccessPolicyNumber(String accessPolicyNumber) {
        this.accessPolicyNumber = accessPolicyNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchAccessPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}