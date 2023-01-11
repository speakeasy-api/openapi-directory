package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveNetworkDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public RemoveNetworkDevicesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}