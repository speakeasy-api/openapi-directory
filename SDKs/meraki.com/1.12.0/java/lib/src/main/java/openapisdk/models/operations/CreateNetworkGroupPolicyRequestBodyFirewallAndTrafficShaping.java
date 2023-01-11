package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
 *     The firewall and traffic shaping rules and settings for your policy.
 * 
**/
public class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("l3FirewallRules")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[] l3FirewallRules;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withL3FirewallRules(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[] l3FirewallRules) {
        this.l3FirewallRules = l3FirewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("l7FirewallRules")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[] l7FirewallRules;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withL7FirewallRules(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[] l7FirewallRules) {
        this.l7FirewallRules = l7FirewallRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withSettings(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficShapingRules")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[] trafficShapingRules;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping withTrafficShapingRules(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[] trafficShapingRules) {
        this.trafficShapingRules = trafficShapingRules;
        return this;
    }
}