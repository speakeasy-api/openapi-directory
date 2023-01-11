package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessSsidSplashSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessSsidSplashSettingsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public GetNetworkWirelessSsidSplashSettingsPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}