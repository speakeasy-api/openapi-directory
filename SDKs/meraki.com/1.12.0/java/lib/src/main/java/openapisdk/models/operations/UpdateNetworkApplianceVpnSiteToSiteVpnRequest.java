package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceVpnSiteToSiteVpnRequest {
    public UpdateNetworkApplianceVpnSiteToSiteVpnPathParams pathParams;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequest withPathParams(UpdateNetworkApplianceVpnSiteToSiteVpnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody request;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequest withRequest(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody request) {
        this.request = request;
        return this;
    }
}