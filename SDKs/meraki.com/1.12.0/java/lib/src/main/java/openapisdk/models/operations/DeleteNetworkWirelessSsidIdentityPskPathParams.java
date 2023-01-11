package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkWirelessSsidIdentityPskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=identityPskId")
    public String identityPskId;
    public DeleteNetworkWirelessSsidIdentityPskPathParams withIdentityPskId(String identityPskId) {
        this.identityPskId = identityPskId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkWirelessSsidIdentityPskPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=number")
    public String number;
    public DeleteNetworkWirelessSsidIdentityPskPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}