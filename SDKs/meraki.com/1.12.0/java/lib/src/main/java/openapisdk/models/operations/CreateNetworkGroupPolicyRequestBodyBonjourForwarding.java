package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyBonjourForwarding
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
public class CreateNetworkGroupPolicyRequestBodyBonjourForwarding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[] rules;
    public CreateNetworkGroupPolicyRequestBodyBonjourForwarding withRules(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum settings;
    public CreateNetworkGroupPolicyRequestBodyBonjourForwarding withSettings(CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum settings) {
        this.settings = settings;
        return this;
    }
}