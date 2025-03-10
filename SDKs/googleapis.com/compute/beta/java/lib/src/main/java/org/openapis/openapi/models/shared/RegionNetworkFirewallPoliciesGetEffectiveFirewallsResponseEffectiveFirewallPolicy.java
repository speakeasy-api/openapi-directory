/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy {
    /**
     * [Output Only] The display name of the firewall policy.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;

    public RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    
    /**
     * [Output Only] The name of the firewall policy.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The rules that apply to the network.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public FirewallPolicyRule[] rules;

    public RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy withRules(FirewallPolicyRule[] rules) {
        this.rules = rules;
        return this;
    }
    
    /**
     * [Output Only] The type of the firewall policy. Can be one of HIERARCHY, NETWORK, NETWORK_REGIONAL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicyTypeEnum type;

    public RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy withType(RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicyTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public RegionNetworkFirewallPoliciesGetEffectiveFirewallsResponseEffectiveFirewallPolicy(){}
}
