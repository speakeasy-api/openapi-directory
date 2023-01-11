package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("services")
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[] services;
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules withServices(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[] services) {
        this.services = services;
        return this;
    }
    @JsonProperty("vlanId")
    public String vlanId;
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules withVlanId(String vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}