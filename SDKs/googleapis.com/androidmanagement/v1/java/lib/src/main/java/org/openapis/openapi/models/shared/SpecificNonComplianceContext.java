/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SpecificNonComplianceContext - Additional context for SpecificNonComplianceReason.
 */
public class SpecificNonComplianceContext {
    /**
     * Additional context for non-compliance related to Wi-Fi configuration.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oncWifiContext")
    public OncWifiContext oncWifiContext;

    public SpecificNonComplianceContext withOncWifiContext(OncWifiContext oncWifiContext) {
        this.oncWifiContext = oncWifiContext;
        return this;
    }
    
    /**
     * Additional context for non-compliance related to password policies.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordPoliciesContext")
    public PasswordPoliciesContext passwordPoliciesContext;

    public SpecificNonComplianceContext withPasswordPoliciesContext(PasswordPoliciesContext passwordPoliciesContext) {
        this.passwordPoliciesContext = passwordPoliciesContext;
        return this;
    }
    
    public SpecificNonComplianceContext(){}
}
