package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidEapOverridePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessSsidEapOverridePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public UpdateNetworkWirelessSsidEapOverridePathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}