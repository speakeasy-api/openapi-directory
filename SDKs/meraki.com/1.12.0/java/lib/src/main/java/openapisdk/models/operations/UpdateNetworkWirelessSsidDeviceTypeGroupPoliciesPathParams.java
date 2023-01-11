package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}