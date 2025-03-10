/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigManagementManaged - Configuration for Managed Config Sync.
 */
public class ConfigManagementManaged {
    /**
     * Set to true to enable Managed Config Sync. Defaults to false which disables Managed Config Sync.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public ConfigManagementManaged withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    public ConfigManagementManaged(){}
}
