package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LockNetworkSmDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public LockNetworkSmDevicesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}