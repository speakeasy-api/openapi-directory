package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidIdentityPskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=identityPskId")
    public String identityPskId;
    public UpdateNetworkWirelessSsidIdentityPskPathParams withIdentityPskId(String identityPskId) {
        this.identityPskId = identityPskId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessSsidIdentityPskPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public UpdateNetworkWirelessSsidIdentityPskPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}