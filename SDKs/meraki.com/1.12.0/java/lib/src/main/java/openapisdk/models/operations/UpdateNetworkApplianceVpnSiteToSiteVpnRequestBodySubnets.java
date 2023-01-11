package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets {
    @JsonProperty("localSubnet")
    public String localSubnet;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets withLocalSubnet(String localSubnet) {
        this.localSubnet = localSubnet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useVpn")
    public Boolean useVpn;
    public UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets withUseVpn(Boolean useVpn) {
        this.useVpn = useVpn;
        return this;
    }
}