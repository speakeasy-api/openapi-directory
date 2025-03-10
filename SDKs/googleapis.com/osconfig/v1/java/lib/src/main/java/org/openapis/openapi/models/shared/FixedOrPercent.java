/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FixedOrPercent - Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
 */
public class FixedOrPercent {
    /**
     * Specifies a fixed value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixed")
    public Integer fixed;

    public FixedOrPercent withFixed(Integer fixed) {
        this.fixed = fixed;
        return this;
    }
    
    /**
     * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percent")
    public Integer percent;

    public FixedOrPercent withPercent(Integer percent) {
        this.percent = percent;
        return this;
    }
    
    public FixedOrPercent(){}
}
