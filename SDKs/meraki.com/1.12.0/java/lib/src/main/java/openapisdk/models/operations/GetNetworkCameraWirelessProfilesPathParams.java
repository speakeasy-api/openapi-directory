package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkCameraWirelessProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkCameraWirelessProfilesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}