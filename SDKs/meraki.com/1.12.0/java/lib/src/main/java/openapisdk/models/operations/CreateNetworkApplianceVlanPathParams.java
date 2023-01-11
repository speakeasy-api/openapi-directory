package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkApplianceVlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkApplianceVlanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}