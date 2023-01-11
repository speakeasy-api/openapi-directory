package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs {
    @JsonProperty("hubId")
    public String hubId;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs withHubId(String hubId) {
        this.hubId = hubId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefaultRoute")
    public Boolean useDefaultRoute;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs withUseDefaultRoute(Boolean useDefaultRoute) {
        this.useDefaultRoute = useDefaultRoute;
        return this;
    }
}