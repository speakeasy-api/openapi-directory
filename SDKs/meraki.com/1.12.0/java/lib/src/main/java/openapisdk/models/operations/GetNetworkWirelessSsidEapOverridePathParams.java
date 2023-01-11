package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessSsidEapOverridePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessSsidEapOverridePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public GetNetworkWirelessSsidEapOverridePathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}