package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientConnectivityEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public GetNetworkWirelessClientConnectivityEventsPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessClientConnectivityEventsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}