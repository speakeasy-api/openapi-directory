/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks - Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
 */
public class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks {
    /**
     * list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedCidr")
    public String[] excludedCidr;
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks withExcludedCidr(String[] excludedCidr) {
        this.excludedCidr = excludedCidr;
        return this;
    }
    
    /**
     * list of IP addresses or subnets being protected (required if 'useDefault' is false)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedCidr")
    public String[] includedCidr;
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks withIncludedCidr(String[] includedCidr) {
        this.includedCidr = includedCidr;
        return this;
    }
    
    /**
     * true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefault")
    public Boolean useDefault;
    public UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks withUseDefault(Boolean useDefault) {
        this.useDefault = useDefault;
        return this;
    }
    
}
