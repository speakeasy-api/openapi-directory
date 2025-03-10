/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetOrganizationSaml200ApplicationJSON - Successful operation
 */
public class GetOrganizationSaml200ApplicationJSON {
    /**
     * Toggle depicting if SAML SSO settings are enabled
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GetOrganizationSaml200ApplicationJSON withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
}
