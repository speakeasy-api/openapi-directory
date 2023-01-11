package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkGroupPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupPolicyId")
    public String groupPolicyId;
    public UpdateNetworkGroupPolicyPathParams withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkGroupPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}