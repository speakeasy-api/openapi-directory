package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hubs")
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[] hubs;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody withHubs(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[] hubs) {
        this.hubs = hubs;
        return this;
    }
    @JsonProperty("mode")
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum mode;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody withMode(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnets")
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[] subnets;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody withSubnets(UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[] subnets) {
        this.subnets = subnets;
        return this;
    }
}