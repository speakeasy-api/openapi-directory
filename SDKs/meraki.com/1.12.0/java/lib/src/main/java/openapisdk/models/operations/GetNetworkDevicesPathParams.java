package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkDevicesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}