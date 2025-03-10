package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkCameraWirelessProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkCameraWirelessProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}