package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallFirewalledServicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceFirewallFirewalledServicePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=service")
    public String service;
    public UpdateNetworkApplianceFirewallFirewalledServicePathParams withService(String service) {
        this.service = service;
        return this;
    }
}