/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedirectionSettings - The configuration for redirection per service
 */
public class RedirectionSettings {
    /**
     * The http redirect code
     */
    @JsonProperty("code")
    public Integer code;

    public RedirectionSettings withCode(Integer code) {
        this.code = code;
        return this;
    }
    
    /**
     * Whether or not redirection is enabled
     */
    @JsonProperty("enabled")
    public Boolean enabled;

    public RedirectionSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    /**
     * The location for redirection
     */
    @JsonProperty("to")
    public String to;

    public RedirectionSettings withTo(String to) {
        this.to = to;
        return this;
    }
    
    public RedirectionSettings(@JsonProperty("code") Integer code, @JsonProperty("enabled") Boolean enabled, @JsonProperty("to") String to) {
        this.code = code;
        this.enabled = enabled;
        this.to = to;
  }
}
