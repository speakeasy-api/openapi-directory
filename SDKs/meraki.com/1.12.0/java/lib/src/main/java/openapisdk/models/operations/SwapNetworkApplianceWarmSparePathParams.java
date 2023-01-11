package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SwapNetworkApplianceWarmSparePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public SwapNetworkApplianceWarmSparePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}