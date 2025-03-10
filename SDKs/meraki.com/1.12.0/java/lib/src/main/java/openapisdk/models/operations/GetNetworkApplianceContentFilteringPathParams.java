package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceContentFilteringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceContentFilteringPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}