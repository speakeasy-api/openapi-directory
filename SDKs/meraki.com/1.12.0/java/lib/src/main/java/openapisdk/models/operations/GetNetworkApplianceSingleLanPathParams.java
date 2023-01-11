package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceSingleLanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceSingleLanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}