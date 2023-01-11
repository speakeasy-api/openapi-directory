package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidHotspot20Request {
    public UpdateNetworkWirelessSsidHotspot20PathParams pathParams;
    public UpdateNetworkWirelessSsidHotspot20Request withPathParams(UpdateNetworkWirelessSsidHotspot20PathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidHotspot20RequestBody request;
    public UpdateNetworkWirelessSsidHotspot20Request withRequest(UpdateNetworkWirelessSsidHotspot20RequestBody request) {
        this.request = request;
        return this;
    }
}