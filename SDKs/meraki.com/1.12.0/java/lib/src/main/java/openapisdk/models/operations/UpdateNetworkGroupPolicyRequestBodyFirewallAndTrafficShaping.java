package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
 *     The firewall and traffic shaping rules and settings for your policy.
 * 
**/
public class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("l3FirewallRules")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[] l3FirewallRules;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withL3FirewallRules(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[] l3FirewallRules) {
        this.l3FirewallRules = l3FirewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("l7FirewallRules")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[] l7FirewallRules;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withL7FirewallRules(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[] l7FirewallRules) {
        this.l7FirewallRules = l7FirewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withSettings(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficShapingRules")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[] trafficShapingRules;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withTrafficShapingRules(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[] trafficShapingRules) {
        this.trafficShapingRules = trafficShapingRules;
        return this;
    }
}