package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkGroupPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkGroupPolicyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}