package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkAppliancePortsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkAppliancePortsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}