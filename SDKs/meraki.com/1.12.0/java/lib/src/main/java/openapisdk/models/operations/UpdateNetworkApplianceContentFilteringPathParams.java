package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceContentFilteringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceContentFilteringPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}