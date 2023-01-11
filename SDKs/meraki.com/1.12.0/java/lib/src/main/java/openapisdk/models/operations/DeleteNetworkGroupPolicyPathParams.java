package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkGroupPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupPolicyId")
    public String groupPolicyId;
    public DeleteNetworkGroupPolicyPathParams withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkGroupPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}