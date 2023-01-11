package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceVlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceVlanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vlanId")
    public String vlanId;
    public UpdateNetworkApplianceVlanPathParams withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}