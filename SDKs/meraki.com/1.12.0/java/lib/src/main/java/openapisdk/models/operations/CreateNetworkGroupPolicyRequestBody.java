package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkGroupPolicyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidth")
    public CreateNetworkGroupPolicyRequestBodyBandwidth bandwidth;
    public CreateNetworkGroupPolicyRequestBody withBandwidth(CreateNetworkGroupPolicyRequestBodyBandwidth bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bonjourForwarding")
    public CreateNetworkGroupPolicyRequestBodyBonjourForwarding bonjourForwarding;
    public CreateNetworkGroupPolicyRequestBody withBonjourForwarding(CreateNetworkGroupPolicyRequestBodyBonjourForwarding bonjourForwarding) {
        this.bonjourForwarding = bonjourForwarding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentFiltering")
    public CreateNetworkGroupPolicyRequestBodyContentFiltering contentFiltering;
    public CreateNetworkGroupPolicyRequestBody withContentFiltering(CreateNetworkGroupPolicyRequestBodyContentFiltering contentFiltering) {
        this.contentFiltering = contentFiltering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewallAndTrafficShaping")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping firewallAndTrafficShaping;
    public CreateNetworkGroupPolicyRequestBody withFirewallAndTrafficShaping(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping firewallAndTrafficShaping) {
        this.firewallAndTrafficShaping = firewallAndTrafficShaping;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkGroupPolicyRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduling")
    public CreateNetworkGroupPolicyRequestBodyScheduling scheduling;
    public CreateNetworkGroupPolicyRequestBody withScheduling(CreateNetworkGroupPolicyRequestBodyScheduling scheduling) {
        this.scheduling = scheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashAuthSettings")
    public CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum splashAuthSettings;
    public CreateNetworkGroupPolicyRequestBody withSplashAuthSettings(CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum splashAuthSettings) {
        this.splashAuthSettings = splashAuthSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanTagging")
    public CreateNetworkGroupPolicyRequestBodyVlanTagging vlanTagging;
    public CreateNetworkGroupPolicyRequestBody withVlanTagging(CreateNetworkGroupPolicyRequestBodyVlanTagging vlanTagging) {
        this.vlanTagging = vlanTagging;
        return this;
    }
}