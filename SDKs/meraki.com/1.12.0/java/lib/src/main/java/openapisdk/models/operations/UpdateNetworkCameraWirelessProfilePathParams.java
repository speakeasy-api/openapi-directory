package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCameraWirelessProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkCameraWirelessProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=wirelessProfileId")
    public String wirelessProfileId;
    public UpdateNetworkCameraWirelessProfilePathParams withWirelessProfileId(String wirelessProfileId) {
        this.wirelessProfileId = wirelessProfileId;
        return this;
    }
}