package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidBonjourForwardingRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[] rules;
    public UpdateNetworkWirelessSsidBonjourForwardingRequestBody withRules(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}