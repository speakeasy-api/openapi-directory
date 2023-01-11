package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkGroupPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupPolicyId")
    public String groupPolicyId;
    public GetNetworkGroupPolicyPathParams withGroupPolicyId(String groupPolicyId) {
        this.groupPolicyId = groupPolicyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkGroupPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}