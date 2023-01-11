package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("services")
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[] services;
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules withServices(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("vlanId")
    public String vlanId;
    public UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}