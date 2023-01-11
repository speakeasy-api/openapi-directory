package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallFirewalledServiceRequest {
    public UpdateNetworkApplianceFirewallFirewalledServicePathParams pathParams;
    public UpdateNetworkApplianceFirewallFirewalledServiceRequest withPathParams(UpdateNetworkApplianceFirewallFirewalledServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceFirewallFirewalledServiceRequestBody request;
    public UpdateNetworkApplianceFirewallFirewalledServiceRequest withRequest(UpdateNetworkApplianceFirewallFirewalledServiceRequestBody request) {
        this.request = request;
        return this;
    }
}