package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessAirMarshalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessAirMarshalPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}