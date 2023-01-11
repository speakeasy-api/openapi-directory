package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
**/
public class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedCidr")
    public String[] excludedCidr;
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks withExcludedCidr(String[] excludedCidr) {
        this.excludedCidr = excludedCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedCidr")
    public String[] includedCidr;
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks withIncludedCidr(String[] includedCidr) {
        this.includedCidr = includedCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefault")
    public Boolean useDefault;
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks withUseDefault(Boolean useDefault) {
        this.useDefault = useDefault;
        return this;
    }
}