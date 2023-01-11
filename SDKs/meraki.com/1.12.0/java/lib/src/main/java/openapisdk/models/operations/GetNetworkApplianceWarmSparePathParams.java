package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceWarmSparePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceWarmSparePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}