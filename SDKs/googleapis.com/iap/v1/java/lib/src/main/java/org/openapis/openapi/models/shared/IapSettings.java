/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IapSettings - The IAP configurable settings.
 */
public class IapSettings {
    /**
     * Access related settings for IAP protected apps.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessSettings")
    public AccessSettings accessSettings;

    public IapSettings withAccessSettings(AccessSettings accessSettings) {
        this.accessSettings = accessSettings;
        return this;
    }
    
    /**
     * Wrapper over application specific settings for IAP.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationSettings")
    public ApplicationSettings applicationSettings;

    public IapSettings withApplicationSettings(ApplicationSettings applicationSettings) {
        this.applicationSettings = applicationSettings;
        return this;
    }
    
    /**
     * Required. The resource name of the IAP protected resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public IapSettings withName(String name) {
        this.name = name;
        return this;
    }
    
    public IapSettings(){}
}
