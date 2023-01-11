package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkApplianceVlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkApplianceVlanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vlanId")
    public String vlanId;
    public DeleteNetworkApplianceVlanPathParams withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}