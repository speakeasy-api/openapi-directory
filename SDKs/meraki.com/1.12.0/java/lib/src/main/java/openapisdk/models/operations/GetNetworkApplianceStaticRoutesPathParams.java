package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceStaticRoutesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceStaticRoutesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}