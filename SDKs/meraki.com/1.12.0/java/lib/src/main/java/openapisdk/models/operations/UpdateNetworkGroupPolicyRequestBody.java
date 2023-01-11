package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkGroupPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public UpdateNetworkGroupPolicyRequestBodyBandwidth bandwidth;
    public UpdateNetworkGroupPolicyRequestBody withBandwidth(UpdateNetworkGroupPolicyRequestBodyBandwidth bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bonjourForwarding")
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwarding bonjourForwarding;
    public UpdateNetworkGroupPolicyRequestBody withBonjourForwarding(UpdateNetworkGroupPolicyRequestBodyBonjourForwarding bonjourForwarding) {
        this.bonjourForwarding = bonjourForwarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentFiltering")
    public UpdateNetworkGroupPolicyRequestBodyContentFiltering contentFiltering;
    public UpdateNetworkGroupPolicyRequestBody withContentFiltering(UpdateNetworkGroupPolicyRequestBodyContentFiltering contentFiltering) {
        this.contentFiltering = contentFiltering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewallAndTrafficShaping")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping firewallAndTrafficShaping;
    public UpdateNetworkGroupPolicyRequestBody withFirewallAndTrafficShaping(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping firewallAndTrafficShaping) {
        this.firewallAndTrafficShaping = firewallAndTrafficShaping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkGroupPolicyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduling")
    public UpdateNetworkGroupPolicyRequestBodyScheduling scheduling;
    public UpdateNetworkGroupPolicyRequestBody withScheduling(UpdateNetworkGroupPolicyRequestBodyScheduling scheduling) {
        this.scheduling = scheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashAuthSettings")
    public UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum splashAuthSettings;
    public UpdateNetworkGroupPolicyRequestBody withSplashAuthSettings(UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum splashAuthSettings) {
        this.splashAuthSettings = splashAuthSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanTagging")
    public UpdateNetworkGroupPolicyRequestBodyVlanTagging vlanTagging;
    public UpdateNetworkGroupPolicyRequestBody withVlanTagging(UpdateNetworkGroupPolicyRequestBodyVlanTagging vlanTagging) {
        this.vlanTagging = vlanTagging;
        return this;
    }
}