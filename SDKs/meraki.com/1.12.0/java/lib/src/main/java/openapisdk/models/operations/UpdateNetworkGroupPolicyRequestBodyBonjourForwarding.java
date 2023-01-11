package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyBonjourForwarding
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
public class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[] rules;
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwarding withRules(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum settings;
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwarding withSettings(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}