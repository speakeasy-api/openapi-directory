package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeActiveAutoVpnEnabled")
    public Boolean activeActiveAutoVpnEnabled;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody withActiveActiveAutoVpnEnabled(Boolean activeActiveAutoVpnEnabled) {
        this.activeActiveAutoVpnEnabled = activeActiveAutoVpnEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultUplink")
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum defaultUplink;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody withDefaultUplink(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum defaultUplink) {
        this.defaultUplink = defaultUplink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancingEnabled")
    public Boolean loadBalancingEnabled;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody withLoadBalancingEnabled(Boolean loadBalancingEnabled) {
        this.loadBalancingEnabled = loadBalancingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpnTrafficUplinkPreferences")
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[] vpnTrafficUplinkPreferences;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody withVpnTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[] vpnTrafficUplinkPreferences) {
        this.vpnTrafficUplinkPreferences = vpnTrafficUplinkPreferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wanTrafficUplinkPreferences")
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[] wanTrafficUplinkPreferences;
    public UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody withWanTrafficUplinkPreferences(UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[] wanTrafficUplinkPreferences) {
        this.wanTrafficUplinkPreferences = wanTrafficUplinkPreferences;
        return this;
    }
}