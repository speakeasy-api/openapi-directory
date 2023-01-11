package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("services")
    public CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[] services;
    public CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules withServices(CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("vlanId")
    public String vlanId;
    public CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}