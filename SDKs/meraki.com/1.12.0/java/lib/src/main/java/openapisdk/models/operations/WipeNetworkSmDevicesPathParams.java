package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WipeNetworkSmDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public WipeNetworkSmDevicesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}